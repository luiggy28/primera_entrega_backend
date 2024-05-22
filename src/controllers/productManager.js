const Product = require('../models/product');

class ProductManager {
    async addProduct(productData) {
        const product = new Product(productData);
        await product.save();
        return product;
    }

    async getProducts() {
        return await Product.find();
    }

    async getProductById(id) {
        const product = await Product.findById(id);
        if (!product) {
            throw new Error('Not found');
        }
        return product;
    }

    async updateProduct(id, updateData) {
        const product = await Product.findByIdAndUpdate(id, updateData, { new: true });
        if (!product) {
            throw new Error('Not found');
        }
        return product;
    }

    async deleteProduct(id) {
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            throw new Error('Not found');
        }
        return product;
    }
}

module.exports = ProductManager;
