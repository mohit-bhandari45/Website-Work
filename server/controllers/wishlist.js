const Wishlist = require("../models/wishlist")
const Product = require("../models/product");
const { default: mongoose } = require("mongoose");

/* Get All Wishlist Items */
async function getFavorites(req, res) {
    try {
        const user_Id = req.user.uid
        const wishlist = await Wishlist.findOne({ user_Id });
        if (!wishlist) {
            // There's no wishlist for this user created yet
            return res.status(200).json({ msg: 'No Items is favorites yet' });
        }

        const items = await Wishlist.findOne({ user_Id }).populate('items.itemId');
        // console.log(items.user_Id)
        return res.status(200).json(items);
    } catch (error) {
        console.error(error);
        return res.status(500).send('An error occurred while fetching the cart');
    }
}

/* Add and updating to favourites */
async function addUpdateFavorites(req, res) {
    try {
        const user_Id = req.user.uid
        const { itemId } = req.body;

        if (mongoose.Types.ObjectId.isValid(itemId)) {
            const wishlist = await Wishlist.findOne({ user_Id });
            if (!wishlist) {
                await Wishlist.create({
                    user_Id: user_Id,
                    items: [{ itemId }]
                })
                return res.status(201).json({ msg: "Item added to favourites" });
            }

            const itemIdObject = new mongoose.Types.ObjectId(itemId);
            const item = wishlist.items.find(item => item.itemId.equals(itemIdObject));

            if (item) {
                wishlist.items = wishlist.items.filter((item) => !item.itemId.equals(itemIdObject))
                await wishlist.save();
                return res.status(200).json({ msg: "Item deleted from favourites" })
            } else {
                wishlist.items = [...wishlist.items, { itemId }]
                await wishlist.save();
                return res.status(200).json({ msg: "Item added to favourites" })
            }
        }else{
            return res.status(404).json({msg:"Not a Valid id"})
        }

    } catch (error) {
        console.error(error);
        return res.status(500).send('An error occurred while adding to wishlist');
    }
}

module.exports = {
    getFavorites,
    addUpdateFavorites,
}