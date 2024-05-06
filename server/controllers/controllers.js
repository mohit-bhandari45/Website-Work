const nodemailer=require("nodemailer")

const usersRegister =async (req, res) => {
    const email = req.body.email
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
        port: 587, // Port for SMTP (usually 465)
        secure: false, // Usually true if connecting to port 465
        auth: {
            user: "ecohaul8@gmail.com", // Your email address
            pass: "mbox dxgw rktw hyen", // Password (for gmail, your app password)
        },
    });
    
    const mailOptions = {
        from: {
            name: "Acrilic",
            address: "ecohaul8@gmail.com",
        },
        to: email,
        subject: "Artist of Acrilic",
        html: `
            <div class="container" style="width: 90vw; margin: auto; font-family: Arial, Helvetica, sans-serif;">
            <div class="from" >From : <span style="color: rgb(59, 148, 186); font-weight: 600;">Ecohaul</span></div>
            <div  class="content">
            <h1 style="text-align: center;">Thank You For your contribution</h1>
            <div class="overview">
                <div>Hey ${req.body.username}</div>
                <div>On behalf of the entire team at <span style="color: rgb(59, 148, 186); font-weight: 600;">Acrlic</span>, we want to extend a warm welcome to you! We're thrilled to have you as an new artist of our community.</div>
                <div>Thank you for choosing <span style="color: rgb(59, 148, 186); font-weight: 600;">Acrilc</span> for contributing to the great cause. We're committed to providing you with an exceptional experience.</div>
                <div>As an artist of Acrilc, you can now share you different varieties of arts</div>
            </div>
            <div>For more info <a href="https://www.youtube.com/">Click Here</a></div>
            <div class="foot" style="margin: 30px 0px;">
                <div>Best Regards</div>
                <div style="font-weight: 600"><span style="color: rgb(59, 148, 186); font-weight: 600;">Acrilc</span></div>
            </div>
        </div>
    </div>
            `
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
    res.json({ register: true })
}

const usersLogin = (req, res) => {
    console.log(req.body)
    res.json({ login: true })
}

module.exports = {
    usersRegister, usersLogin
}