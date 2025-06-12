// ===== ROUTES/TANAMAN.JS =====
const express = require('express');
const router = express.Router();
const TanamanController = require('../controllers/tanamanController');
const { createTanamanValidator, updateTanamanValidator } = require('../middleware/tanamanValidator');
const {protect} = require('../middleware/auth'); // Middleware autentikasi JWT

// Middleware untuk semua routes tanaman
router.use(protect);

// Routes
router.get('/stats', TanamanController.getTanamanStats);
router.get('/', TanamanController.getAllTanaman);
router.get('/:id', TanamanController.getTanamanById);
router.post('/', TanamanController.upload.single('foto'), createTanamanValidator, TanamanController.createTanaman);
router.put('/:id', TanamanController.upload.single('foto'), updateTanamanValidator, TanamanController.updateTanaman);
router.put('/:id/notifikasi', TanamanController.toggleNotifikasi);
router.delete('/:id', TanamanController.deleteTanaman);

module.exports = router;