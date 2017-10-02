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

// module.exports = function(passport){
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
                res.redirect('/');
            });
        });
    });


    // router.post('/register', passport.authenticate('signup',{
    //     successRedirect: '/',
    //     failureRedirect: '/auth/register'
    // }));

    // logic for login
    router.post('/login',passport.authenticate('local',{
        successRedirect : "/",
        failureRedirect: "/auth/login"
    }), function(req, res) {   
    });
    // router.post('/login', passport.authenticate('login',{
    //     successRedirect: "/",
    //     failureRedirect: '/auth/login'
    // }));

    router.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });

    module.exports = router;
    // return router;
// }


// router.post('/register', function(req, res){
//     User.register(req.body.user, req.body.password, function(err, user){
//         if(err){
//             console.log(err);
//             res.redirect('/auth/register');
//         }
//         console.log("Done with signup")
//         passport.authenticate('local')(req, res, function(){
//             res.redirect('/');
//             console.log("Now its fine!");
//         });
//     });
// });

