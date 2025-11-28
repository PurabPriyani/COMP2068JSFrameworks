const express = require('express');
const router = express.Router();
const Item = require('../models/Item');
const upload = require('../config/multer');
const auth = require('../middleware/auth');

// User's items
router.get('/my', auth, async (req, res) => {
    const items = await Item.find({ owner: req.user._id }).lean();
    res.render('items/my', { items });
});

// Add item (form)
router.get('/add', auth, (req, res) => {
    res.render('items/add');
});

// Add item (POST)
router.post('/add', auth, upload.single('image'), async (req, res) => {
    await Item.create({
        itemName: req.body.itemName,
        description: req.body.description,
        location: req.body.location,
        date: req.body.date,
        image: req.file?.filename,
        owner: req.user._id
    });

    res.redirect('/items/my');
});

// Edit item (form)
router.get('/edit/:id', auth, async (req, res) => {
    const item = await Item.findById(req.params.id).lean();
    res.render('items/edit', { item });
});

// Edit item (POST)
router.post('/edit/:id', auth, upload.single('image'), async (req, res) => {
    const update = {
        itemName: req.body.itemName,
        description: req.body.description,
        location: req.body.location,
        date: req.body.date
    };

    if (req.file) update.image = req.file.filename;

    await Item.findByIdAndUpdate(req.params.id, update);
    res.redirect('/items/my');
});

// Delete confirm
router.get('/delete/:id', auth, async (req, res) => {
    const item = await Item.findById(req.params.id).lean();
    res.render('items/delete', { item });
});

// Delete POST
router.post('/delete/:id', auth, async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.redirect('/items/my');
});

module.exports = router;
