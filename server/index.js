const express = require("express")
const cors = require("cors")
const userRouter = require("./routes/user.js")
const artistRouter = require("./routes/artist.js")
const productRouter = require("./routes/product.js")
const cartRouter = require("./routes/cart.js")
const assetRouter=require("./routes/asset.js")
const videoRouter=require("./routes/video.js")
const wishlistRouter=require("./routes/wishlist.js")

/* Dotenv */
require("dotenv").config()

//Database connection
require("./connection.js").connectDB()

const app = express()
const PORT = process.env.PORT || 3000

//Middlewares
app.use(cors())
app.use(express.json())

//Routes
app.use("/api/users", userRouter)
app.use("/api/artist", artistRouter)
app.use("/api/products", productRouter)
app.use("/api/cart", cartRouter)
app.use("/api/assets",assetRouter)
app.use("/api/videos",videoRouter)
app.use("/api/wishlist",wishlistRouter)

app.listen(PORT, () => {
    console.log(`Server Started on Port: ${PORT}`)
})