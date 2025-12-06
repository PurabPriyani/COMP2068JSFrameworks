const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// GET all
router.get('/', async (req, res) => {
  try {
    const tx = await Transaction.find();
    res.json(tx);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// POST new
router.post('/', async (req, res) => {
  try {
    const newTx = new Transaction(req.body);
    await newTx.save();
    res.json(newTx);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// UPDATE (PUT)
router.put('/:id', async (req, res) => {
  try {
    const updated = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
