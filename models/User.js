var mongoose = require('mongoose');
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
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);

