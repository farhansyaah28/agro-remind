// src/routes/index.js
import express from 'express'
import authRoutes from './auth.js'
import { protect } from '../middleware/auth.js'
import User from '../models/User.js'

const router = express.Router()

// Health check
router.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    service: 'AgroRemind Backend API',
    version: '1.0.0',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  })
})

// Auth routes
router.use('/auth', authRoutes)

// Protected dashboard route
router.get('/dashboard', protect, async (req, res) => {
  try {
    res.json({
      success: true,
      message: '🎉 Selamat datang di AgroRemind Dashboard!',
      user: req.user.toJSON(),
      features: [
        'Pengingat Otomatis untuk Pertanian',
        'Pantau Pertanian Anda dengan Catatan', 
        'Tambah Wawasan Anda dengan Analisis Tanah'
      ]
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan server'
    })
  }
})

// Protected stats route
router.get('/stats', protect, async (req, res) => {
  try {
    const totalUsers = await User.countDocuments()
    const activeUsers = await User.countDocuments({ isActive: true })

    res.json({
      success: true,
      data: {
        totalUsers,
        activeUsers,
        currentUser: req.user.toJSON()
      }
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan server'
    })
  }
})

export default router