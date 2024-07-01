const Product = require("../models/product")
const path = require("path")

/* Get All Products */
async function getAllProducts(req, res) {
    const items = await Product.find({ releaseDate: { $lt: Date.now() } })
    return res.status(200).json(items)
}

/* Get Product By Id */
async function getProductById(req, res) {
    const product = await Product.findOne({ _id: req.params.id });
    if (!product) {
        return res.status(404).json({ Success: false })
    }
    return res.status(200).json(product)
}

/* Get Product By Sales */
async function getProductBySales(req, res) {
    const items = await Product.find({ listedAt: { $lte: Date.now() }, discount: { $gt: 0 } }).sort({ discount: -1 }).limit(5)
    return res.status(200).json(items)
}

/* Get Product By Soon Coming */
async function getComingSoonProducts(req, res) {
    const now = Date.now();
    const comingSoonItems = await Product.find({ releaseDate: { $gt: now } }).sort({ releaseDate: 1 }).limit(4)
    return res.status(200).json(comingSoonItems)
}

/* Get Product By recently added */
async function getRecentProducts(req, res) {
    const now = Date.now();
    const items = await Product.find({ listedAt: { $lt: now } }).sort({ listedAt: -1 }).limit(4)
    return res.status(200).json(items)
}

/* Get Products By Image Name*/
async function getProductsByImageName(req, res) {
    const imageName = req.params.id;
    const currentDir = __dirname
    const parentDir = path.resolve(currentDir, "..")
    const imagePath = path.join(parentDir, "assets", "products", imageName)
    return res.status(200).sendFile(imagePath)
}

/* Add Product */
async function addProducts(req, res) {
    const data = req.body
    if (data.releaseDate) {
        data.listedAt = data.releaseDate;
    }
    const product = await Product.create(data)
    return res.status(201).send(`Product Added with id ${product._id}`)
}

module.exports = {
    getAllProducts,
    getProductById,
    getProductBySales,
    getComingSoonProducts,
    getRecentProducts,
    getProductsByImageName,
    addProducts
}