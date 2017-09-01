var express = require('express'),
    app     = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');
    
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

mongoose.connect("mongodb://localhost/subasta");

app.get('/', function(req, res){
    res.render("home");
});

app.listen(3000, function(){
    console.log("Subasta now listening on port 3000");
});