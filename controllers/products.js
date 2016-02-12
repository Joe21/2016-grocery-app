var express = require('express'),
	router = express.Router(),
	products = require('../models/products.js');

// Index
router.get('/', function(req, res) {
	res.render('index.ejs');
});


module.exports = router;