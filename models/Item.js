const mongoose = require('mongoose');
const Model = mongoose.Schema;

// Create Schema
const ItemSchema = new Model({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});  

module.exports = Item = mongoose.model('item', ItemSchema);