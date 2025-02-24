const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  score: { type: Number, required: true },
  date: { type: Date, required: true }
});

module.exports = mongoose.model('Event', eventSchema);
