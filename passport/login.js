var localStrategy   = require('passport-local').Strategy;
var User = require('../models/User.js');
var bCrypt  = require('bcrypt-nodejs');

module.exports = function(passport){
    passport.use('login', new localStrategy({
        passReqToCallback : true
    },
    function(req, username, password, done){
        // checking if a user with username exists or not
        User.findOne({'username': username}, function(err, user){
            if(err)
                return done(err);

            if(!user){
                console.log("User not found with username :" + username);
                return done(null, false);
            }
            
            if(!isValidPassword(user, password)){
                console.log("Invalid passsword");
                return done(null, false);
            }

            return done(null, user);
        });
    }
    ));

    var isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password);
    }
}