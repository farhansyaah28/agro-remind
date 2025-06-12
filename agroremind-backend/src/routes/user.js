const express = require('express');
const User = require('../models/User');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// @desc    Update farm information
// @route   PUT /api/user/farm-info
// @access  Private
router.put('/farm-info', protect, async (req, res, next) => {
  try {
    const { farmName, location, size, crops } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user.id,
      {
        'farmInfo.farmName': farmName,
        'farmInfo.location': location,
        'farmInfo.size': size,
        'farmInfo.crops': crops
      },
      {
        new: true,
        runValidators: true
      }
    );

    res.status(200).json({
      status: 'success',
      message: 'Farm information updated successfully',
      farmInfo: user.farmInfo
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Get user profile
// @route   GET /api/user/profile
// @access  Private
router.get('/profile', protect, async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);

    res.status(200).json({
      status: 'success',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        isEmailVerified: user.isEmailVerified,
        farmInfo: user.farmInfo,
        profilePicture: user.profilePicture,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Get all users (Admin only)
// @route   GET /api/user/all
// @access  Private/Admin
router.get('/all', protect, authorize('admin'), async (req, res, next) => {
  try {
    const users = await User.find({}).select('-password');

    res.status(200).json({
      status: 'success',
      count: users.length,
      users
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

// utils/database.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;