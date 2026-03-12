import express from "express";
import Product from "../models/Product.js";

const router = express.Router();


// CREATE PRODUCT
router.post("/products", async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// READ ALL PRODUCTS
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// READ PRODUCT BY productId
router.get("/products/:productId", async (req, res) => {
  try {
    const product = await Product.findOne({
      productId: req.params.productId
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// UPDATE PRODUCT BY productId
router.put("/products/:productId", async (req, res) => {
  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { productId: req.params.productId },
      req.body,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// DELETE PRODUCT BY productId
router.delete("/products/:productId", async (req, res) => {
  try {
    const deletedProduct = await Product.findOneAndDelete({
      productId: req.params.productId
    });

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


export default router;