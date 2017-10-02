var express     = require('express'),
    router      = express.Router(),
    mongoose    = require('mongoose'),
    passport    = require('passport'),
    middleware  = require('../middleware')
    User        = require('../models/User.js');

// middleware for checking is authenticated
// var isAuthenticated = function(req, res, next){
//     if(req.isAuthenticated())
//         return next();
//     res.redirect('/');
// };

//redirect to login page
router.get('/login', function(req, res){
    res.render('login');
});

//redirect to signup page
router.get('/register', function(req, res){
    res.render('signup');
});

// logic for register
router.post('/register', function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.redirect('/auth/register');
        }
        passport.authenticate('local')(req, res, function(){
            User.findOneAndUpdate({mobileNo:req.body.mobileNo},req.body.user, function(err, updatedUser)
            {
                if(err)
                {
                    console.log(err);
                    return;
                }
                res.redirect('/');
            });
        });
    });
});

// logic for login
router.post('/login',passport.authenticate('local',{
    successRedirect : "/",
    failureRedirect: "/auth/login"
}), function(req, res) {   
});

// logic for logout
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

module.exports = router;