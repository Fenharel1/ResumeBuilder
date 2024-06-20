// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  googleId: String,
  githubId: String,
  linkedinId: String,
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
