const Wishlist = require("../models/wishlist")
const Product = require("../models/product")

/* Get All Wishlist Items */
async function getFavorites(req, res) {
    try {
        const email = req.body.email;
        const wishlist = await Wishlist.findOne({ email });
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
        const { email, itemId } = req.body;
        const wishlist = await Wishlist.findOne({ email });
        if (!wishlist) {
            const wishlistItem = await Wishlist.create({
                email: email,
                items: [{ itemId }]
            })
            const product = await Product.findByIdAndUpdate(itemId, { wishlist: true })
            console.log(product)
            res.status(201).json({ msg: "Item added to favourites", wishlist: product.wishlist });
        }

        const item = wishlist.items.find(item => item.itemId === itemId);
        if (item) {
            wishlist.items = wishlist.items.filter((e) => e.itemId !== itemId)
            const product = await Product.findByIdAndUpdate(itemId, { wishlist: false })
            console.log(product)
            wishlist.save();
            return res.status(200).json({ msg: "Item deleted from favourites", wishlist: product.wishlist })
        } else {
            wishlist.items = [...wishlist.items, { itemId }]
            const product = await Product.findByIdAndUpdate(itemId, { wishlist: true })
            console.log(product)
            wishlist.save();
            return res.status(200).json({ msg: "Item added to favourites", wishlist: product.wishlist })
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send('An error occurred while adding to wishlist');
    }
}

module.exports = {
    getFavorites,
    addUpdateFavorites
}