var express = require('express'),
router = express.Router();
var Product = require('../models/Product');
var fs = require('fs');
var path = require('path');
var AWS = require('aws-sdk');
AWS.config.loadFromPath('../config.json');

var s3 = new AWS.s3();
var uploadParams = {Bucket:'subasta', Key:'', Body:''};
var file = "filepath";
var fileStream = fs.createReadStream(file);
fileStream.on('error',function(err){
    console.log('File Error', err);
});
uploadParams.Body = fileStream;
uploadParams.Key = path.basename(file);

s3.upload(uploadParams, function(err, data){
    if(err)
        console.log('Error', err);
    else
        console.log('Success', data.location);
});

router.get('/', function(req, res){
res.render("addproduct");
});

router.post('/', function(req, res){
    var item = new Product({
        title: req.body.title,
        category: req.body.category,
        time: req.body.time,
        description: req.body.description,
        price: req.body.price,
        current_bid: req.body.current_bid,
        time_remaining: req.body.time_remaining,
        quantity: req.body.quantity,
        bids: req.body.bids,
        image_path: req.body.image_path,
    });

    console.log(item.category + " " + item.description);

    Product.create(item, function(err, data){
        if(err){
            console.log(err);
            return;
        }
        console.log("Product Added!!");
    });
});


router.post('/:user_id/', function(req, res){
});

module.exports = router;