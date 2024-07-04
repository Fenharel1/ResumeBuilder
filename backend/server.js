// server.js
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables first

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middleware/errorHandler');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const passport = require('passport');
const PDFDocument = require('pdfkit');
const { analyzeJob } = require('./services/aiService'); // Import the analyzeJob function
require('./config/passport'); // Initialize passport strategies

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors()); // Use cors middleware
app.use(passport.initialize());

// Routes
app.use('/api', userRoutes);
app.use('/api/auth', authRoutes);

// AI Analysis Route
app.post('/api/analyze-job', async (req, res) => {
  const { jobTitle, industry, jobDescription } = req.body;
  try {
    const analysis = await analyzeJob(jobTitle, industry, jobDescription);
    res.json({ analysis });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during AI analysis' });
  }
});

// PDF Generation Route
app.post('/api/generate-pdf', (req, res) => {
  const { personal, education, experience, contact } = req.body;

  const doc = new PDFDocument();
  let buffers = [];
  doc.on('data', buffers.push.bind(buffers));
  doc.on('end', () => {
    let pdfData = Buffer.concat(buffers);
    res
      .writeHead(200, {
        'Content-Length': Buffer.byteLength(pdfData),
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment;filename=resume.pdf',
      })
      .end(pdfData);
  });

  // Add personal information
  doc.fontSize(25).text('Resume', { align: 'center' });
  doc.moveDown();
  doc.fontSize(20).text(`Name: ${personal.firstname} ${personal.lastname}`);
  doc.fontSize(20).text(`Profession: ${personal.profession}`);
  doc.fontSize(15).text(`Address: ${personal.address}, ${personal.city}, ${personal.state}, ${personal.zipcode}`);
  doc.fontSize(15).text(`Email: ${contact.email}`);
  doc.fontSize(15).text(`Phone: ${contact.phone}`);
  if (contact.linkedIn) {
    doc.fontSize(15).text(`LinkedIn: ${contact.linkedIn}`);
  }

  // Add education
  doc.fontSize(18).text('Education', { underline: true });
  education.forEach(edu => {
    doc.moveDown();
    doc.fontSize(15).text(`${edu.degree} in ${edu.fieldOfStudy}`);
    doc.fontSize(12).text(`School: ${edu.school}`);
    doc.fontSize(12).text(`Graduation Year: ${edu.graduationYear}`);
  });

  // Add work experience
  doc.fontSize(18).text('Work Experience', { underline: true });
  experience.forEach(exp => {
    doc.moveDown();
    doc.fontSize(15).text(`${exp.position} at ${exp.company}`);
    doc.fontSize(12).text(`Start Date: ${exp.startDate}`);
    doc.fontSize(12).text(`End Date: ${exp.endDate}`);
    doc.fontSize(12).text(exp.description);
  });

  doc.end();
});

// Error handler
app.use(errorHandler);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
