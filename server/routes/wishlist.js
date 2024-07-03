const express = require("express")
const { getFavorites,addUpdateFavorites } = require("../controllers/wishlist")

const router = express.Router()

router.post("/get", getFavorites)
router.post("/post", addUpdateFavorites)

module.exports = router