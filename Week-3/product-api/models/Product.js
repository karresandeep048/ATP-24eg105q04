import mongoose from "mongoose";

// Create schema 
const productSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 10000,
    max: 50000
  },
  brand: {
    type: String,
    required: true
  }
}, { timestamps: true }); 

// Create model
const Product = mongoose.model("Product", productSchema);

export default Product;