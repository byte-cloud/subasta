var express = require('express'),
router = express.Router();

router.get('/', function(req, res){
res.render("addproduct");
});

module.exports = router;