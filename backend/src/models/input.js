const mongoose = require('mongoose');

const InputSchema = mongoose.Schema({
  data: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Input', InputSchema);
