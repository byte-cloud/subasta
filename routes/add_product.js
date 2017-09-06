var express = require('express'),
router = express.Router();

router.get('/', function(req, res){
res.render("add_product");
});

module.exports = router;