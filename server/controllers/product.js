const Product = require("../models/product")
const path = require("path")

/* Get All Products */
async function getAllProducts(req, res) {
    res.send("Got Every Item")
}

/* Get Product By Id */
async function getProductById(req, res) {
    res.send("Got Item with id")
}

/* Get Product By Sales */
async function getProductBySales(req, res) {
    res.send("Got Item with sales")
}

/* Get Product By Soon Coming */
async function getComingSoonProducts(req, res) {
    res.send("Got Item with coming soon")
}

/* Get Product By recently added */
async function getRecentProducts(req, res) {
    const items = await Product.find({}).sort({ uploadedAt: -1 }).limit(4)
    console.log(items)
    res.json(items)
}

/* Get Individual Product By recently added */
async function getRecentProductsById(req, res) {
    const imageName = req.params.id
    const currentDir = __dirname
    const parentDir = path.resolve(currentDir, "..")
    const imagePath = path.join(parentDir, "assets", "products", imageName)
    res.sendFile(imagePath)
}

/* Add Product */
async function addProducts(req, res) {
    const product = await Product.create(req.body)
    console.log(product)
    res.status(201).send("Product Added")
}

module.exports = {
    getAllProducts,
    getProductById,
    getProductBySales,
    getComingSoonProducts,
    getRecentProducts,
    addProducts,
    getRecentProductsById
}