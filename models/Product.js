var mongoose = require('mongoose');
var bids = require('./Bids');

var productSchema = new mongoose.Schema({
        title: String,
        category: String,
        time: String,
        description: String,
        price: Number,
        current_bid: {type:mongoose.Schema.Types.ObjectId,
                    ref: bids},
        time_remaining: String,
        quantity: Number,
        bids: Number,
});

module.exports = mongoose.model("Products", productSchema);