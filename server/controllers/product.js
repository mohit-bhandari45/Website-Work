const Product = require("../models/product")
const path = require("path")

/* Get All Products */
async function getAllProducts(req, res) {
    const items = await Product.find({ releaseDate: { $lt: Date.now() } })
    return res.json(items)
}

/* Get All Products By Id*/
async function getAllProductsById(req, res) {
    const imageName = req.params.id;
    const currentDir = __dirname
    const parentDir = path.resolve(currentDir, "..")
    const imagePath = path.join(parentDir, "assets", "products", imageName)
    return res.sendFile(imagePath)
}

/* Get Product By Id */
async function getProductById(req, res) {
    return res.send("Got Item with id")
}

/* Get Product By Sales */
async function getProductBySales(req, res) {
    const items = await Product.find({ discount: { $gt: 0 } }).sort({ discount: -1 }).limit(5)
    return res.json(items)
}

/* Get Individual Product By Sales */
async function getProductBySalesById(req, res) {
    const imageName = req.params.id;
    const currentDir = __dirname
    const parentDir = path.resolve(currentDir, "..")
    const imagePath = path.join(parentDir, "assets", "products", imageName)
    return res.sendFile(imagePath)
}

/* Get Product By Soon Coming */
async function getComingSoonProducts(req, res) {
    const now = Date.now();
    const comingSoonItems = await Product.find({ releaseDate: { $gt: now } }).sort({ releaseDate: 1 }).limit(4)
    return res.json(comingSoonItems)
}

/* Get Individual Product By Soon Coming */
async function getComingSoonProductsById(req, res) {
    const imageName = req.params.id;
    const currentDir = __dirname
    const parentDir = path.resolve(currentDir, "..")
    const imagePath = path.join(parentDir, "assets", "products", imageName)
    return res.sendFile(imagePath)
}

/* Get Product By recently added */
async function getRecentProducts(req, res) {
    const now = Date.now();
    const items = await Product.find({ listedAt: { $lt: now } }).sort({ listedAt: -1 }).limit(4)
    return res.json(items)
}

/* Get Individual Product By recently added */
async function getRecentProductsById(req, res) {
    const imageName = req.params.id
    const currentDir = __dirname
    const parentDir = path.resolve(currentDir, "..")
    const imagePath = path.join(parentDir, "assets", "products", imageName)
    return res.sendFile(imagePath)
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
    addProducts,
    getRecentProductsById,
    getComingSoonProductsById,
    getProductBySalesById,
    getAllProductsById
}