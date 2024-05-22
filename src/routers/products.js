const express = require('express');
const router = express.Router();
const ProductManager = require('../controllers/productManager');
const productManager = new ProductManager();

// GET /products
router.get('/', async (req, res) => {
    try {
        const products = await productManager.getProducts();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET /products/:pid
router.get('/:pid', async (req, res) => {
    try {
        const product = await productManager.getProductById(req.params.pid);
        res.json(product);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
});

// POST /products
router.post('/', async (req, res) => {
    try {
        const product = await productManager.addProduct(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT /products/:pid
router.put('/:pid', async (req, res) => {
    try {
        const product = await productManager.updateProduct(req.params.pid, req.body);
        res.json(product);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
});

// DELETE /products/:pid
router.delete('/:pid', async (req, res) => {
    try {
        await productManager.deleteProduct(req.params.pid);
        res.status(204).end();
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
});

module.exports = router;
