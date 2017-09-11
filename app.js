var express = require('express'),
    app     = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');
    // http = require('http');
    
//mongoose connection
mongoose.connect("mongodb://localhost/subasta");

//seeding the database
var seedDB = require('./seeds.js');
seedDB();

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
var authRoutes = require('./routes/auth');
var addProductRoutes = require('./routes/add_product');
    
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


app.use('/',homeRoutes);
app.use('/auth',authRoutes);
app.use('/add_product',addProductRoutes);

// http.createServer(app).listen(3000,'192.168.43.103',function(){
//     console.log("Subasta now listening on port 3000");
// });

app.listen(3000, function(){
    console.log("Subasta now listening on port 3000");
});
