var express = require('express'),
	router = express.Router(),
	Product = require('../models/products.js');

// Index
router.get('/', function(req, res) {
	Product.find().then(function(products) {
		console.log('==================');
		console.log(products);
		console.log('==================');

		var data = {
			layout: 'layout.ejs',
			products: products
		};

		res.render('index.ejs', data);
	});
});

module.exports = router;