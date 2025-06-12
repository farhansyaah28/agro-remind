const mongoose = require('mongoose');

const tanamanSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: [true, 'Nama tanaman harus diisi'],
    trim: true,
    maxlength: [100, 'Nama tanaman maksimal 100 karakter']
  },
  jenis: {
    type: String,
    required: [true, 'Jenis tanaman harus dipilih'],
    enum: {
      values: ['sayuran', 'buah', 'padi', 'jagung', 'kacang-kacangan', 'rempah', 'lain-lain'],
      message: 'Jenis tanaman tidak valid'
    }
  },
  tanggalTanam: {
    type: Date,
    required: [true, 'Tanggal tanam harus diisi'],
    validate: {
      validator: function(value) {
        return value <= new Date();
      },
      message: 'Tanggal tanam tidak boleh di masa depan'
    }
  },
  jumlah: {
    type: Number,
    required: [true, 'Jumlah tanaman harus diisi'],
    min: [1, 'Jumlah tanaman minimal 1'],
    max: [999999, 'Jumlah tanaman terlalu besar']
  },
  lokasi: {
    type: String,
    required: [true, 'Lokasi tanaman harus diisi'],
    trim: true,
    maxlength: [200, 'Lokasi maksimal 200 karakter']
  },
  deskripsi: {
    type: String,
    trim: true,
    maxlength: [1000, 'Deskripsi maksimal 1000 karakter']
  },
  foto: {
    type: String, // URL atau base64
    default: null
  },
  notifikasiAktif: {
    type: Boolean,
    default: false
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

// Index untuk optimasi query
tanamanSchema.index({ user: 1, createdAt: -1 });
tanamanSchema.index({ user: 1, jenis: 1 });

module.exports = mongoose.model('Tanaman', tanamanSchema);