var mongoose = require('mongoose');
<<<<<<< HEAD
var product = require('./Product');
=======
var passportLocalMongoose = require('passport-local-mongoose');
>>>>>>> b6d521be0a09faf0c3f95865247778b07760791c

var userSchema = new mongoose.Schema({
        username: String,
        street: String,
        locality: String,
        city: String,
        state: String,
        pincode: String,
        landmark: {type: String, required: false},
        mobileNo: String,
        email: String,
        gender: String,
        dob: String,
<<<<<<< HEAD
        password: String,
        items_sold: [{type:mongoose.Schema.Types.ObjectId,
                ref: product
        }],        
=======
        password: String,        
>>>>>>> b6d521be0a09faf0c3f95865247778b07760791c
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);
