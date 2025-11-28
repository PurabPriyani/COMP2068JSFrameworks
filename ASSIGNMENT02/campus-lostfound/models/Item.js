const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    itemName: String,
    description: String,
    location: String,
    date: Date,
    image: String,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Item', ItemSchema);
