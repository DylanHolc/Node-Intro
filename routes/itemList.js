const express = require('express');
const router = new express.Router();
const Item = require('../item');

router.get('/', function (req, res, next) {
    try {
        return res.json({ items: Item.findAll() });
    } catch (error) {
        return next(error);
    }
});

router.post('/', function (req, res, next) {
    try {
        let newItem = new Item(req.body.name, req.body.price);
        return res.status(201).json({ item: newItem });
    } catch (error) {
        return next(error);
    }
});

router.get('/:name', function (req, res, next) {
    try {
        let item = Item.find(req.params.name);
        return res.json({ item: item });
    } catch (error) {
        return next(error);
    }
});

router.patch('/:name', function (req, res, next) {
    try {
        let item = Item.update(req.params.name);
        return res.json({ item: item });
    } catch (error) {
        return next(error);
    }
});

router.delete('/:name', function (req, res, next) {
    try {
        Item.remove(req.params.name);
        return res.json({ msg: 'Item Deleted' })
    } catch (error) {
        return next(error);
    }
});

module.exports = router;