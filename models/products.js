var mongoose = require('mongoose');

var ProductSchema = mongoose.Schema({
	name: String,
	description: String
});

var Product = mongoose.model('Product', ProductSchema);
module.exports = Product;