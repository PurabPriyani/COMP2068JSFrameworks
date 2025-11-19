const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

// Create product
router.post("/", async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

// Get all
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Delete
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

// Update Product
router.put("/:id", async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;