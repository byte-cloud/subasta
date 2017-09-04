var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose');

//redirect to signup page
router.get('/register', function(req, res){
    res.render('signup');
});

//redirect to login page
router.get('/login', function(req, res){
    res.render('login');
});

module.exports = router;