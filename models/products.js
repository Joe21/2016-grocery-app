var mongoose = require('mongoose');

var ProductSchema = mongoose.Schema({
	name: String,
	description: String,
	active: Boolean
});

var Product = mongoose.model('Product', ProductSchema);
module.exports = Product;