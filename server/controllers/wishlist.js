const Wishlist = require("../models/wishlist")
const Product = require("../models/product")

/* Get All Wishlist Items */
async function getFavorites(req, res) {
    try {
        const user_Id = req.user.uid
        const wishlist = await Wishlist.findOne({ user_Id });
        if (!wishlist) {
            // There's no wishlist for this user created yet
            // Create an empty wishlist in that case
            return res.status(200).json({ msg: 'Created New Cart', items: [] });
        }

        let items = await Promise.all(wishlist.items.map(async (item) => {
            const itemDetails = await Product.findById({ _id: item.itemId });
            return itemDetails;
        }))
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
        const wishlist = await Wishlist.findOne({ user_Id });
        if (!wishlist) {
            const newWishlist = await Wishlist.create({
                user_Id: user_Id,
                items: [{ itemId }]
            })
            return res.status(201).json({ msg: "Item added to favourites", wishlist: newWishlist });
        }

        const item = wishlist.items.find(item => item.itemId === itemId);
        if (item) {
            wishlist.items = wishlist.items.filter((e) => e.itemId !== itemId)
            wishlist.save();
            return res.status(200).json({ msg: "Item deleted from favourites" })
        } else {
            wishlist.items = [...wishlist.items, { itemId }]
            wishlist.save();
            return res.status(200).json({ msg: "Item added to favourites" })
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send('An error occurred while adding to wishlist');
    }
}

async function deleteFavourites(req, res) {
    try {
        const user_Id = req.user.uid
        const { itemId } = req.body;
        const wishlist = await Wishlist.findOne({ user_Id });
        if (wishlist) {
            wishlist.items = wishlist.items.filter(item => item.itemId !== itemId)
            wishlist.save();
            res.status(200).json({ msg: "Item Deleted Successfully" })
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getFavorites,
    addUpdateFavorites,
    deleteFavourites
}