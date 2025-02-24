const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile_img: { type: String } // Stores file path
});

module.exports = mongoose.model('Student', studentSchema);
