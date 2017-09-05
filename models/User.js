var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
        name: String,
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
        password: String,
        items_sold: [Product],
        
});
