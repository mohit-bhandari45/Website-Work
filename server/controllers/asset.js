const fs = require("fs")
const path = require("path")

async function assetController(req, res) {
    const currentDir = __dirname
    const parentDir = path.resolve(currentDir, '..');
    const imagesDirectory = path.join(parentDir, 'assets', "heroSec");
    fs.readdir(imagesDirectory, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to list images' });
        } else {
            let mainFiles = files.map((file) => { return file })
            return res.json(mainFiles) // Adjust filter as needed
        }
    });
}

async function heroAssetById(req, res) {
    const imageName = req.params.id;
    const currentDir = __dirname
    const parentDir = path.resolve(currentDir, '..');
    const imagePath = path.join(parentDir, 'assets', "heroSec", imageName);
    return res.sendFile(imagePath);
}

async function getLogo(req, res) {
    const currentDir = __dirname
    const parentDir = path.resolve(currentDir, '..');
    const imageDirPath = path.join(parentDir, 'assets', "logo");
    fs.readdir(imageDirPath, (err, file) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to list images' });
        } else {
            const imagePath = path.join(imageDirPath, file[0])
            return res.sendFile(imagePath)
        }
    })
}

async function getFavIcon(req, res) {
    const currentDir = __dirname
    const parentDir = path.resolve(currentDir, '..');
    const imageDirPath = path.join(parentDir, 'assets', "favicon"); // Adjust path and extension as needed
    fs.readdir(imageDirPath, (err, file) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to list images' });
        } else {
            const imagePath = path.join(imageDirPath, file[0])
            return res.sendFile(imagePath)
        }
    })
}

module.exports = {
    assetController,
    heroAssetById,
    getLogo,
    getFavIcon
}