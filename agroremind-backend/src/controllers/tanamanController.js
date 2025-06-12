const Tanaman = require('../models/Tanaman');
const { validationResult } = require('express-validator');
const multer = require('multer');
const path = require('path');
const fs = require('fs').promises;

// Setup multer untuk upload gambar
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/tanaman/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'tanaman-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('File harus berupa gambar'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  }
});

class TanamanController {
  // GET /api/tanaman - Ambil semua tanaman milik user
  static async getAllTanaman(req, res) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;
      const sortBy = req.query.sortBy || 'createdAt';
      const sortOrder = req.query.sortOrder === 'asc' ? 1 : -1;
      const jenis = req.query.jenis;

      // Build filter
      const filter = { user: req.user.id };
      if (jenis && jenis !== 'semua') {
        filter.jenis = jenis;
      }

      // Build sort object
      const sort = {};
      sort[sortBy] = sortOrder;

      const tanaman = await Tanaman.find(filter)
        .sort(sort)
        .skip(skip)
        .limit(limit)
        .select('-__v');

      const totalTanaman = await Tanaman.countDocuments(filter);
      const totalPages = Math.ceil(totalTanaman / limit);

      res.status(200).json({
        success: true,
        message: 'Data tanaman berhasil diambil',
        data: {
          tanaman,
          pagination: {
            currentPage: page,
            totalPages,
            totalItems: totalTanaman,
            itemsPerPage: limit,
            hasNextPage: page < totalPages,
            hasPrevPage: page > 1
          }
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Gagal mengambil data tanaman',
        error: error.message
      });
    }
  }

  // GET /api/tanaman/:id - Detail tanaman
  static async getTanamanById(req, res) {
    try {
      const tanaman = await Tanaman.findOne({
        _id: req.params.id,
        user: req.user.id
      }).select('-__v');

      if (!tanaman) {
        return res.status(404).json({
          success: false,
          message: 'Tanaman tidak ditemukan'
        });
      }

      res.status(200).json({
        success: true,
        message: 'Detail tanaman berhasil diambil',
        data: tanaman
      });
    } catch (error) {
      if (error.name === 'CastError') {
        return res.status(400).json({
          success: false,
          message: 'ID tanaman tidak valid'
        });
      }

      res.status(500).json({
        success: false,
        message: 'Gagal mengambil detail tanaman',
        error: error.message
      });
    }
  }

  // POST /api/tanaman - Tambah tanaman baru
  static async createTanaman(req, res) {
    try {
      // Check validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: 'Data tidak valid',
          errors: errors.array()
        });
      }

      const tanamanData = {
        ...req.body,
        user: req.user.id
      };

      // Handle foto upload
      if (req.file) {
        tanamanData.foto = `/uploads/tanaman/${req.file.filename}`;
      } else if (req.body.fotoBase64) {
        // Handle base64 image
        const base64Data = req.body.fotoBase64.replace(/^data:image\/\w+;base64,/, '');
        const filename = `tanaman-${Date.now()}-${Math.round(Math.random() * 1E9)}.jpg`;
        const filepath = path.join('uploads/tanaman', filename);
        
        await fs.writeFile(filepath, base64Data, 'base64');
        tanamanData.foto = `/uploads/tanaman/${filename}`;
      }

      const tanaman = new Tanaman(tanamanData);
      const savedTanaman = await tanaman.save();

      res.status(201).json({
        success: true,
        message: 'Tanaman berhasil ditambahkan',
        data: savedTanaman
      });
    } catch (error) {
      if (error.name === 'ValidationError') {
        const validationErrors = Object.values(error.errors).map(err => ({
          field: err.path,
          message: err.message
        }));

        return res.status(400).json({
          success: false,
          message: 'Data tidak valid',
          errors: validationErrors
        });
      }

      res.status(500).json({
        success: false,
        message: 'Gagal menambahkan tanaman',
        error: error.message
      });
    }
  }

  // PUT /api/tanaman/:id - Edit tanaman
  static async updateTanaman(req, res) {
    try {
      // Check validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: 'Data tidak valid',
          errors: errors.array()
        });
      }

      const tanaman = await Tanaman.findOne({
        _id: req.params.id,
        user: req.user.id
      });

      if (!tanaman) {
        return res.status(404).json({
          success: false,
          message: 'Tanaman tidak ditemukan'
        });
      }

      const updateData = { ...req.body };

      // Handle foto upload
      if (req.file) {
        // Delete old photo if exists
        if (tanaman.foto && tanaman.foto.startsWith('/uploads/')) {
          try {
            await fs.unlink(path.join('.', tanaman.foto));
          } catch (err) {
            console.log('Failed to delete old photo:', err.message);
          }
        }
        updateData.foto = `/uploads/tanaman/${req.file.filename}`;
      } else if (req.body.fotoBase64) {
        // Handle base64 image
        if (tanaman.foto && tanaman.foto.startsWith('/uploads/')) {
          try {
            await fs.unlink(path.join('.', tanaman.foto));
          } catch (err) {
            console.log('Failed to delete old photo:', err.message);
          }
        }

        const base64Data = req.body.fotoBase64.replace(/^data:image\/\w+;base64,/, '');
        const filename = `tanaman-${Date.now()}-${Math.round(Math.random() * 1E9)}.jpg`;
        const filepath = path.join('uploads/tanaman', filename);
        
        await fs.writeFile(filepath, base64Data, 'base64');
        updateData.foto = `/uploads/tanaman/${filename}`;
      }

      const updatedTanaman = await Tanaman.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true, runValidators: true }
      ).select('-__v');

      res.status(200).json({
        success: true,
        message: 'Tanaman berhasil diperbarui',
        data: updatedTanaman
      });
    } catch (error) {
      if (error.name === 'ValidationError') {
        const validationErrors = Object.values(error.errors).map(err => ({
          field: err.path,
          message: err.message
        }));

        return res.status(400).json({
          success: false,
          message: 'Data tidak valid',
          errors: validationErrors
        });
      }

      if (error.name === 'CastError') {
        return res.status(400).json({
          success: false,
          message: 'ID tanaman tidak valid'
        });
      }

      res.status(500).json({
        success: false,
        message: 'Gagal memperbarui tanaman',
        error: error.message
      });
    }
  }

  // DELETE /api/tanaman/:id - Hapus tanaman
  static async deleteTanaman(req, res) {
    try {
      const tanaman = await Tanaman.findOne({
        _id: req.params.id,
        user: req.user.id
      });

      if (!tanaman) {
        return res.status(404).json({
          success: false,
          message: 'Tanaman tidak ditemukan'
        });
      }

      // Delete photo file if exists
      if (tanaman.foto && tanaman.foto.startsWith('/uploads/')) {
        try {
          await fs.unlink(path.join('.', tanaman.foto));
        } catch (err) {
          console.log('Failed to delete photo:', err.message);
        }
      }

      await Tanaman.findByIdAndDelete(req.params.id);

      res.status(200).json({
        success: true,
        message: 'Tanaman berhasil dihapus'
      });
    } catch (error) {
      if (error.name === 'CastError') {
        return res.status(400).json({
          success: false,
          message: 'ID tanaman tidak valid'
        });
      }

      res.status(500).json({
        success: false,
        message: 'Gagal menghapus tanaman',
        error: error.message
      });
    }
  }

  // PUT /api/tanaman/:id/notifikasi - Toggle notifikasi
  static async toggleNotifikasi(req, res) {
    try {
      const tanaman = await Tanaman.findOne({
        _id: req.params.id,
        user: req.user.id
      });

      if (!tanaman) {
        return res.status(404).json({
          success: false,
          message: 'Tanaman tidak ditemukan'
        });
      }

      tanaman.notifikasiAktif = !tanaman.notifikasiAktif;
      await tanaman.save();

      res.status(200).json({
        success: true,
        message: `Notifikasi ${tanaman.notifikasiAktif ? 'diaktifkan' : 'dinonaktifkan'}`,
        data: {
          notifikasiAktif: tanaman.notifikasiAktif
        }
      });
    } catch (error) {
      if (error.name === 'CastError') {
        return res.status(400).json({
          success: false,
          message: 'ID tanaman tidak valid'
        });
      }

      res.status(500).json({
        success: false,
        message: 'Gagal mengubah status notifikasi',
        error: error.message
      });
    }
  }

  // GET /api/tanaman/stats - Statistik tanaman user
  static async getTanamanStats(req, res) {
    try {
      const stats = await Tanaman.aggregate([
        { $match: { user: req.user.id } },
        {
          $group: {
            _id: '$jenis',
            jumlah: { $sum: '$jumlah' },
            count: { $sum: 1 }
          }
        },
        {
          $project: {
            jenis: '$_id',
            jumlah: 1,
            count: 1,
            _id: 0
          }
        }
      ]);

      const totalTanaman = await Tanaman.countDocuments({ user: req.user.id });
      const totalJumlah = await Tanaman.aggregate([
        { $match: { user: req.user.id } },
        { $group: { _id: null, total: { $sum: '$jumlah' } } }
      ]);

      res.status(200).json({
        success: true,
        message: 'Statistik tanaman berhasil diambil',
        data: {
          totalTanaman,
          totalJumlah: totalJumlah[0]?.total || 0,
          byJenis: stats
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Gagal mengambil statistik tanaman',
        error: error.message
      });
    }
  }
}

TanamanController.upload = upload;

module.exports = TanamanController;