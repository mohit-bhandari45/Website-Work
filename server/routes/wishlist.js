const express = require("express")
const {
    getFavorites,
    addUpdateFavorites,
    deleteFavourites
} = require("../controllers/wishlist")

const router = express.Router()

router.post("/get", getFavorites)
router.post("/post", addUpdateFavorites)
router.post("/delete", deleteFavourites)

module.exports = router