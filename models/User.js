var mongoose = require('mongoose');
var product = require('./Product');
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new mongoose.Schema({
        username: String,
        street: String,
        locality: String,
        city: String,
        state: String,
        pincode: String,
        landmark: {type: String, required: false},
        name: String,
        email: String,
        gender: String,
        dob: String,
        password: String,
        items_sold: [{type:mongoose.Schema.Types.ObjectId,
                ref: product
        }],        
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);

