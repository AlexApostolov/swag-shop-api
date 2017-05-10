var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var product = new Schema({
  title: String,
  price: Number,
  likes: {type: Number, default: 0}
});

// store as "Product" model name in the database, and pass in the schema "product"
// when querying use model name in all lowercase and plural "products"
// Unlike the mongo shell, mongoose only allows the properties defined in the Schema
module.exports = mongoose.model('Product', product);
