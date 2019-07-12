var mongoose = require("mongoose")

var productSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    price: Number
})
module.exports = mongoose.model('product', productSchema);