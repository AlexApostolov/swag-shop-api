var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var wishList = new Schema({
  // instead of using "required", save the wish list with a default name when none is given
  title: {type: String, default: 'Cool Wish List'},
  // make a relationship with the data in products instead of duplicating product data
  // use the mongo object "ObjectId" already in the database, and reference the "Product" schema
  products: [{type: ObjectId, ref: 'Product'}]
});

module.exports = mongoose.model('WishList', wishList);
