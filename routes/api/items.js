const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/item');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});

// @route   POST api/items
// @desc    Create A Item
// @access  Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        link: req.body.link,
        caption: req.body.caption
    });

    newItem.save()
        .then(item => res.json(item));
});

// @router  DELETE api/item/:id
// @desc    Delete A Item
// @access  Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

// @router  UPDATE api/item/:id
// @desc    Update A Item
// @access  Public
router.put('/:id', (req, res) => {
    const newItem = new Item({
        _id: req.params.id,
        name: req.body.name,
        link: req.body.link,
        caption: req.body.caption
    });

    Item.updateOne({_id: req.params.id}, newItem)
        .then(newItem => res.redirect('/'))
        .catch(err => console.log(err));
    });

module.exports = router;