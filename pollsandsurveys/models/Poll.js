const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  votes: [{ type: Number, default: 0 }],
});

module.exports = mongoose.model('Poll', pollSchema);