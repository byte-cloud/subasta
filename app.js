var express         = require('express'),
    app             = express(),
    mongoose        = require('mongoose'),
    bodyParser      = require('body-parser'),
    passport        = require('passport'),
    localStrategy   = require('passport-local'),
    methodOverride  = require('method-override');
    // http = require('http');
    
//mongoose connection
mongoose.connect("mongodb://localhost/subasta");
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(methodOverride('_method'));

//seeding the database
var seedDB = require('./seeds.js');
seedDB();

//requiring model
var Category = require('./models/Categories');
var User     = require('./models/User');

app.use(require('express-session')({
    secret:"Its a secret",
    resave: false,
    saveUninitialized: false
}));

// Passport configuration
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// var initpassport = require('./passport/init');
// initpassport(passport);

// Static data for all views
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});
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
var addProductRoutes = require('./routes/addproduct');

app.use('/',homeRoutes);
app.use('/auth',authRoutes);
app.use('/addproduct',addProductRoutes);

// http.createServer(app).listen(3000,'192.168.43.103',function(){
//     console.log("Subasta now listening on port 3000");
// });

app.listen(3000, function(){
    console.log("Subasta now listening on port 3000");
});
