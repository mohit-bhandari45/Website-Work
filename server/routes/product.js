const express = require("express")
const { getAllProducts, getProductById, getProductBySales, getComingSoonProducts, getRecentProducts, addProducts,getRecentProductsById, getComingSoonProductsById, getAllProductsById, getProductBySalesById } = require("../controllers/product")

const router = express.Router()

router.get("/get-All", getAllProducts)
router.get("/get-All/:id", getAllProductsById)
router.get("/get/:id", getProductById)
router.get("/get-Sales", getProductBySales)
router.get("/get-Sales/:id", getProductBySalesById)
router.get("/get-Soon", getComingSoonProducts)
router.get("/get-Soon/:id", getComingSoonProductsById)
router.get("/get-Recent", getRecentProducts)
router.get("/get-Recent/:id", getRecentProductsById)
router.post("/add-Product", addProducts)

module.exports = router