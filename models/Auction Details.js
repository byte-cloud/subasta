var mongoose = require('mongoose');
var bids = require('./Bids');
var product = require('./Product');
var user = require('./User');

var productSchema = new mongoose.Schema({
        product_id: {type:mongoose.Schema.Types.ObjectId,
                    ref: product},
        user_id: {type:mongoose.Schema.Types.ObjectId,
                    ref: user},
        participants: [{type:mongoose.Schema.Types.ObjectId,
                    ref: user}],
        interested_candidates: [{type:mongoose.Schema.Types.ObjectId,
                    ref: user}],
        current_bid: {type:mongoose.Schema.Types.ObjectId,
                    ref: bids},
        base_price: Number,
        opening_date: String,
        closing_date: Number,
        bids: [{type:mongoose.Schema.Types.ObjectId,
            ref: bids}],
});

module.exports = mongoose.model("Auction_Details", productSchema);