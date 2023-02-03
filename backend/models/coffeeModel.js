const mongoose = require('mongoose');

const coffeeSchema = mongoose.Schema({
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