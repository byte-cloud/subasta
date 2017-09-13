var express = require('express'),
router = express.Router();
var Product = require('../models/Product');

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
    })
});

module.exports = router;