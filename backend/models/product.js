const mongoose= require("mongoose")

const productSchema = new mongoose.Schema({
    productname: String,
    productcategory: String,
    productprice: Number,
    productweight: Number,
    productdescription: String,
    productimage: String,
})

const Product = mongoose.model("Product", productSchema)
module.exports = Product;
