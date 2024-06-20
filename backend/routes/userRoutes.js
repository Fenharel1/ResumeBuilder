// backend/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const { getUserProfile, getCvTemplates, uploadCv, getUserCvs } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

router.route('/profile').get(protect, getUserProfile);
router.route('/cv-templates').get(protect, getCvTemplates);
router.route('/cvs').get(protect, getUserCvs);
router.route('/upload-cv').post(protect, upload.single('cv'), uploadCv);

module.exports = router;
