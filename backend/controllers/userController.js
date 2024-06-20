// backend/controllers/userController.js

const asyncHandler = require('express-async-handler');
const User = require('../models/user');
const path = require('path');

// @desc    Get user profile
// @route   GET /api/user/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
});

// @desc    Get CV templates
// @route   GET /api/user/cv-templates
// @access  Private
const getCvTemplates = asyncHandler(async (req, res) => {
  const cvTemplates = [
    { name: 'Canva Template 1', description: 'Description for Canva Template 1', url: 'https://www.canva.com/templates/resumes/' },
    { name: 'Overleaf Template 1', description: 'Description for Overleaf Template 1', url: 'https://www.overleaf.com/gallery/tagged/cv' },
  ];
  res.json(cvTemplates);
});

// @desc    Upload CV
// @route   POST /api/user/upload-cv
// @access  Private
const uploadCv = asyncHandler(async (req, res) => {
  if (!req.file) {
    res.status(400);
    throw new Error('No file uploaded');
  }
  const filePath = path.join(__dirname, '..', 'uploads', req.file.filename);
  // Save file info in database if necessary
  res.json({ name: req.file.originalname, url: `/uploads/${req.file.filename}` });
});

// @desc    Get user CVs
// @route   GET /api/user/cvs
// @access  Private
const getUserCvs = asyncHandler(async (req, res) => {
  // This should fetch from your database; using static example for now
  const userCvs = [
    { name: 'Sample CV 1', url: '/uploads/sample-cv-1.pdf' },
    { name: 'Sample CV 2', url: '/uploads/sample-cv-2.pdf' },
  ];
  res.json(userCvs);
});

module.exports = {
  getUserProfile,
  getCvTemplates,
  uploadCv,
  getUserCvs,
};
