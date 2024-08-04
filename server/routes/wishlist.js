const express = require("express")
const {
    getFavorites,
    addUpdateFavorites,
    deleteFavourites
} = require("../controllers/wishlist")
const { auth } = require("../middlewares/middleware")

const router = express.Router()

/* Authentication Middleware */
router.use(auth())

router.get("/get", getFavorites)
router.post("/post", addUpdateFavorites)

module.exports = router