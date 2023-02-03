const mongoose = require('mongoose');

const coffeeSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  name: {
    type: String,
    required: [true, 'Please add a coffee name']
  },
  roaster: {
    type: String,
    required: [true, 'Please add a roaster name']
  },
}, {
  timestamps: true,
})

module.exports = mongoose.model('Coffee', coffeeSchema);