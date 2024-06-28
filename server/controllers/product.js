/* Get All Products */
async function getAllProducts(req,res){
    res.send("Got Every Item")
}


async function getProductById(req,res){
    res.send("Got Item with id")
}

async function getProductBySales(req,res){
    res.send("Got Item with sales")
}

async function getComingSoonProducts(req,res){
    res.send("Got Item with coming soon")
}

async function getRecentProducts(req,res){
    res.send("Got Recent Item")
}

module.exports={
    getAllProducts,
    getProductById,
    getProductBySales,
    getComingSoonProducts,
    getRecentProducts
}