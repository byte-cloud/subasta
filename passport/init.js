var login = require('./login'),
    signup  = require('./signup'),
    User    = require('../models/User.js');

module.exports = function(passport){
    passport.serializeUser(function(user, done){
        console.log("serializing user ..");
        done(null, user._id);
    });
    passport.deserializeUser(function(id, done){
        User.findById(id, function(err, user){
            console.log("deserializing user ..");
            done(err, user);
        })
    });     

    login(passport);
    signup(passport);
}