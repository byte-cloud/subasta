var mongoose = require('mongoose');
var user = require('./User');

var bidSchema = new mongoose.Schema({
    user_id : { type : mongoose.Schema.Types.ObjectId,
            ref : user}
});

module.exports = mongoose.model("Bids", bidSchema);