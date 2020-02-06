const mongoose = require('mongoose');
const Model = mongoose.Schema

// create Schema
const ItemModel = new Model({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemModel);