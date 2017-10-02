var express = require('express'),
router = express.Router();
<<<<<<< HEAD
var Product = require('../models/Product');
var fs = require('fs');
var path = require('path');
var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');

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
=======
>>>>>>> 8e921b7aaa80b8ee9aedbb0b9a2c1dfa747b0fcb

router.get('/', function(req, res){
res.render("addproduct");
});

router.post('/:user_id/', function(req, res){
});

module.exports = router;