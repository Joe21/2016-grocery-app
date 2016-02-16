var mongoose = require('mongoose'),
	Product = require('./models/products.js');

var mongoUri =  process.env.MONGOLAB_URI || 'mongodb://localhost/grocery_app_dev';
mongoose.connect('mongoUri', function(err) {
	if(err) {
		console.log('Connection error: ', error);
	} else {
		console.log('Connection Successful');
	}
});

var product1 = new Product({
	name: 'Bread',
	description: 'Get a loaf of crusty bread to dip into soup',
	active: true
});

var product2 = new Product({
	name: 'Eggs',
	description: 'Jumbo cage free!',
	active: true
});

var product3 = new Product({
	name: 'Steak',
	description: 'Short ribs!',
	active: true
});

var product4 = new Product({
	name: 'Onions',
	description: 'Sweet white onions, not the big bag with the small ones that make eyes teary when chopping',
	active: true
}); 

product1.save(function(err) {
	if(err) return handleError(err);
	console.log('saved: ' + product1.name);
});

product2.save(function(err) {
	if(err) return handleError(err);
	console.log('saved: ' + product2.name);
});

product3.save(function(err) {
	if(err) return handleError(err);
	console.log('saved: ' + product3.name);
});

product4.save(function(err) {
	if(err) return handleError(err);
	console.log('saved: ' + product4.name);
});

console.log('==============================');
console.log('SEEDING COMPLETE');
console.log('==============================');



