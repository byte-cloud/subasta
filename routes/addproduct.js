var express = require('express'),
router = express.Router();

router.get('/', function(req, res){
res.render("addproduct");
});

router.post('/:user_id/', function(req, res){
});

module.exports = router;