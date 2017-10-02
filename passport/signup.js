var LocalStrategy   = require('passport-local').Strategy;
var User = require('../models/User.js');
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport){

    passport.use('signup', new LocalStrategy({
        passReqToCallback : true 
    },
    function(req, username, password, done){
        findOrCreateUser = function(){
            User.findOne({'username': username}, function(err, user){
                
                if(err){
                    console.log('Error inn sign up:' + err);
                    return done(err);
                }
                if(user){
                    console.log('User already exists with username: ' + username);
                    return done(null, false);
                }else{
                    var newUser =new User();
                    newUser = req.body;
                    newUser.password = createHash(password);

                    newUser.save(function(err){
                        if(err){
                            console.log("Error in saving the user: " + err);
                            throw err;
                        }
                        console.log('User registraction successfull');
                        return done(null, newUser);
                    });
                }
            });
        }
        process.nextTick(findOrCreateUser);
    }
    ));

    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10),null);
    }
}