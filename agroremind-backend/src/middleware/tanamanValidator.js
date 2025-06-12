const { body } = require('express-validator');

const createTanamanValidator = [
  body('nama')
    .notEmpty()
    .withMessage('Nama tanaman harus diisi')
    .isLength({ min: 2, max: 100 })
    .withMessage('Nama tanaman harus antara 2-100 karakter')
    .trim(),

  body('jenis')
    .notEmpty()
    .withMessage('Jenis tanaman harus dipilih')
    .isIn(['sayuran', 'buah', 'padi', 'jagung', 'kacang-kacangan', 'rempah', 'lain-lain'])
    .withMessage('Jenis tanaman tidak valid'),

  body('tanggalTanam')
    .notEmpty()
    .withMessage('Tanggal tanam harus diisi')
    .isISO8601()
    .withMessage('Format tanggal tidak valid')
    .custom((value) => {
      if (new Date(value) > new Date()) {
        throw new Error('Tanggal tanam tidak boleh di masa depan');
      }
      return true;
    }),

  body('jumlah')
    .notEmpty()
    .withMessage('Jumlah tanaman harus diisi')
    .isInt({ min: 1, max: 999999 })
    .withMessage('Jumlah tanaman harus berupa angka antara 1-999999'),

  body('lokasi')
    .notEmpty()
    .withMessage('Lokasi tanaman harus diisi')
    .isLength({ min: 2, max: 200 })
    .withMessage('Lokasi harus antara 2-200 karakter')
    .trim(),

  body('deskripsi')
    .optional()
    .isLength({ max: 1000 })
    .withMessage('Deskripsi maksimal 1000 karakter')
    .trim(),

  body('notifikasiAktif')
    .optional()
    .isBoolean()
    .withMessage('Status notifikasi harus berupa boolean')
];

const updateTanamanValidator = [
  body('nama')
    .optional()
    .isLength({ min: 2, max: 100 })
    .withMessage('Nama tanaman harus antara 2-100 karakter')
    .trim(),

  body('jenis')
    .optional()
    .isIn(['sayuran', 'buah', 'padi', 'jagung', 'kacang-kacangan', 'rempah', 'lain-lain'])
    .withMessage('Jenis tanaman tidak valid'),

  body('tanggalTanam')
    .optional()
    .isISO8601()
    .withMessage('Format tanggal tidak valid')
    .custom((value) => {
      if (new Date(value) > new Date()) {
        throw new Error('Tanggal tanam tidak boleh di masa depan');
      }
      return true;
    }),

  body('jumlah')
    .optional()
    .isInt({ min: 1, max: 999999 })
    .withMessage('Jumlah tanaman harus berupa angka antara 1-999999'),

  body('lokasi')
    .optional()
    .isLength({ min: 2, max: 200 })
    .withMessage('Lokasi harus antara 2-200 karakter')
    .trim(),

  body('deskripsi')
    .optional()
    .isLength({ max: 1000 })
    .withMessage('Deskripsi maksimal 1000 karakter')
    .trim(),

  body('notifikasiAktif')
    .optional()
    .isBoolean()
    .withMessage('Status notifikasi harus berupa boolean')
];

module.exports = {
  createTanamanValidator,
  updateTanamanValidator
};