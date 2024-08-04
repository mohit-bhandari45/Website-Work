const fs = require("fs")
const admin = require("../config/firebase-config")

function auth() {
    return async (req, res, next) => {
        try {
            const token = req.headers.authorization.split(" ")[1];
            admin.auth().verifyIdToken(token).then((decodeValue) => {
                if (decodeValue) {
                    req.user = decodeValue;
                    return next()
                }
            }).catch((error) => {
                console.log(error)
                return res.status(401).json({ message: "Un-Authorized" })
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "Server Error" })
        }
    }
}

module.exports = {
    auth
}