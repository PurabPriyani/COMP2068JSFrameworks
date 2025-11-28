var express = require('express');
var router = express.Router();
const Item = require('../models/Item');

// Home
router.get('/', (req, res) => {
    res.render('index', { title: "Lost & Found Portal" });
});

// Public list
router.get('/items', async (req, res) => {
    let items = await Item.find().lean();
    res.render('items/list', { title: "All Items", items });
});

// Search
router.get('/search', async (req, res) => {
    const q = req.query.q;
    const items = await Item.find({
        itemName: { $regex: q, $options: "i" }
    }).lean();

    res.render('items/list', { title: "Search Results", items });
});

module.exports = router;
