const path = require("path")
const fs = require("fs")


/* Getting All Videos */
async function videoController(req, res) {
    const currentPath = __dirname;
    const parentPath = path.resolve(currentPath, "..")
    const filePath = path.join(parentPath, "assets", "videos")
    fs.readdir(filePath, (err, data) => {
        let allFiles = data.map((data) => { return data })
        return res.json(allFiles)
    })
}

/* Getting Videos via Image Name */
async function videoById(req, res) {
    const videoName=req.params.id
    const currentPath = __dirname;
    const parentPath = path.resolve(currentPath, "..")
    const filePath = path.join(parentPath, "assets", "videos",videoName)
    return res.sendFile(filePath);
}

module.exports = {
    videoController,
    videoById
}