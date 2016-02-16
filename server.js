// REQUIREMENTS
// --------------------------------------------
var express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	expressLayouts = require('express-ejs-layouts'),
	port = process.env.PORT || 3000;


// MIDDLEWARE
// --------------------------------------------
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));
app.set('view engine', 'ejs');
app.set('layout', 'layout.ejs');

app.use(expressLayouts);

// DB
// --------------------------------------------
mongoose.connect('mongodb://localhost/grocery_app_dev');


// MODELS
// --------------------------------------------
var Product = require('./models/products.js');


// CONTROLLERS
// --------------------------------------------
var productsController = require('./controllers/products.js');
app.use('/products', productsController);


// LISTEN
// --------------------------------------------
app.listen(port);
console.log('---------------------------------');
console.log('Server running on port: ' + port);
console.log('---------------------------------');
