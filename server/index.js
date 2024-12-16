const express = require("express")
const cors = require("cors")
const userRouter = require("./routes/user.js")
const artistRouter = require("./routes/artist.js")
const productRouter = require("./routes/product.js")
const cartRouter = require("./routes/cart.js")
const assetRouter = require("./routes/asset.js")
const videoRouter = require("./routes/video.js")
const wishlistRouter = require("./routes/wishlist.js")
const nodemailer=require("nodemailer")

/* Dotenv */
require("dotenv").config()

//Database connection
require("./connection.js").connectDB()

const app = express()
const PORT = process.env.PORT || 3000

//Middlewares
app.use(cors())
app.use(express.json())

app.post("/api/email",async (req, res) => {
    const { email } = req.body
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
        port: 587, // Port for SMTP (usually 465)
        secure: false, // Usually true if connecting to port 465
        auth: {
            user: process.env.EMAIL, // Your email address
            pass: process.env.PASS, // Password (for gmail, your app password)
        },
    });
    const mailOptions = {
        from: {
            name: "Acrilc",
            address: process.env.EMAIL,
        },
        to: email,
        subject: "Member of Acrilc",
        html: `
        <div class="container" style="width: 90vw; margin: auto; font-family: Arial, Helvetica, sans-serif;">
        <div class="from" >From : <span style="color: rgb(59, 148, 186); font-weight: 600;">Acrilc</span></div>
        <div  class="content">
        <h1 style="text-align: center;">Thank You For your contribution</h1>
        <div class="overview">
            <div>Hey</div>
            <div>On behalf of the entire team at <span style="color: rgb(59, 148, 186); font-weight: 600;">Acrilc</span>, I want to extend a warm welcome to you! We're thrilled to have you as a new contributor of our community.</div>
            <div>Thank you for choosing <span style="color: rgb(59, 148, 186); font-weight: 600;">Acrilc</span> for contributing to the great cause. We're committed to providing you with an exceptional experience.</div>
            <div>As a member of Acrilc, you now contribute by showcasing you best products</div>
        </div>
        <div style="margin-top: 30px; margin-bottom: 3px;">Reach out to....</div>
        <div>For more info <a href="https://www.youtube.com/">Click Here</a></div>
        <div class="foot" style="margin: 30px 0px;">
            <div>Best Regards</div>
            <div style="font-weight: 600"><span style="color: rgb(59, 148, 186); font-weight: 600;">Acrilc</span></div>
        </div>
    </div>
</div>
        `,
        // attachments: [
        //     {
        //         filename: "Mohit Bhandari (1).pdf",
        //         path: path.join("E:/IT-Uttsav-Hackathon/server", "Mohit Bhandari (1).pdf"),
        //         contentType: "application/pdf"
        //     },
        //     {
        //         filename: "card.png",
        //         path: path.join("E:/IT-Uttsav-Hackathon/server", "card.png"),
        //         contentType: "application/pdf"
        //     }
        // ]
    }
    const sendMail = async (transporter, mailOptions) => {
        try {
            await transporter.sendMail(mailOptions);
            console.log("Email is sent")
        } catch (error) {
            console.log(error)
        }
    }
    await sendMail(transporter, mailOptions)
    res.status(200).json({ message: "Email sent successfully" })
})

//Routes
app.use("/api/users", userRouter)
app.use("/api/artist", artistRouter)
app.use("/api/products", productRouter)
app.use("/api/cart", cartRouter)
app.use("/api/assets", assetRouter)
app.use("/api/videos", videoRouter)
app.use("/api/wishlist", wishlistRouter)

app.listen(PORT, () => {
    console.log(`Server Started on Port: ${PORT}`)
})