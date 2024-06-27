const express = require("express")
const { ReqRes } = require("./middlewares/ReqRes.js")
const cors=require("cors")
const userRouter = require("./routes/user.js")
const cartRouter=require("./routes/cart.js")
require("dotenv").config()

//Database connection
require("./connection.js").connectDB()

const app = express()

//Middlewares
app.use(ReqRes("./log.txt"))
app.use(cors())
app.use(express.json())

//Routes
app.use("/api/users", userRouter)
app.use("/api/cart",cartRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server Started on Port: ${process.env.PORT}`)
})
