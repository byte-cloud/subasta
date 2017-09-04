var express = require('express'),
    app     = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');
    
//mongoose connection
mongoose.connect("mongodb://localhost/subasta");

//requiring model
var Category = require('./models/Categories');

//serving categories to all views
Category.find({}, function(err, categories){
    if(err){
        console.log(err);
    }
    else{
    app.locals.categories = categories;
    }
}).sort({name:1});

//including routes
var homeRoutes = require('./routes/home');
    
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


app.get('/', function(req, res){
    res.render("home");
});

app.listen(3000, function(){
    console.log("Subasta now listening on port 3000");
});