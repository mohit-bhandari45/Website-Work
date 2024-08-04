const { default: mongoose } = require("mongoose");
const Cart = require("../models/cart")
const Product = require("../models/product")

/* Get All Cart Items */
async function getCart(req, res) {
    try {
        const user_Id = req.user.uid;
        const cart = await Cart.findOne({ user_Id });
        if (!cart) {
            // There's no cart for this user created yet
            return res.status(200).json({ msg: 'No Cart Exists' });
        }

        const items = await Cart.findOne({ user_Id }).populate("items.itemId")
        return res.status(200).json(items);
    } catch (error) {
        console.error(error);
        return res.status(500).send('An error occurred while fetching the cart');
    }
}

/* Add Items to Cart */
async function addCart(req, res) {
    const user_Id = req.user.uid
    const { itemId, count } = req.body
    try {
        if (mongoose.Types.ObjectId.isValid(itemId)) {
            const cart = await Cart.findOne({ user_Id })
            if (!cart) {
                // There's no cart for this user created yet
                await Cart.create({
                    user_Id: user_Id,
                    items: [{ itemId, count }]
                })
                return res.status(201).json({ msg: "Item added to Cart" });
            }

            /* There is cart for user */
            /* Check if item already exist in the cart */
            const itemIdObject = new mongoose.Types.ObjectId(itemId);
            const item = cart.items.find(item => item.itemId.equals(itemIdObject))
            if (item) {
                /* If it does simply add the count */
                cart.items = cart.items.map((item) => {
                    if (item.itemId.equals(itemIdObject)) {
                        item.count += count;
                        console.log("Count increased!")
                    }
                    return item;
                })
                console.log("Item Prexists, increment quantity")
            } else {
                cart.items = [...cart.items, { itemId, count }]
            }
            await cart.save()
            return res.status(200).json({ msg: "Item added to Cart" })
        } else {
            return res.status(404).json({ msg: "Invalid Item Id" })
        }
    } catch (error) {
        console.log(error)
    }
}

/* Update Items in Cart */
async function updateCart(req, res) {
    const user_Id = req.user.uid
    const { itemId, count } = req.body
    try {
        if (mongoose.Types.ObjectId.isValid(itemId)) {
            const cart = await Cart.findOne({ user_Id })

            /* Find the item in the Cart */
            const itemIdObject = new mongoose.Types.ObjectId(itemId);
            const item = cart.items.find(item => item.itemId.equals(itemIdObject))
            console.log(item)
            if (item) {
                /* If it does simply add the count */
                cart.items = cart.items.map((item) => {
                    if (item.itemId.equals(itemIdObject)) {
                        item.count += count;
                        if (item.count < 0) {
                            item.count = 0;
                        }
                        console.log("Count Updated!")
                    }
                    return item;
                })
            }
            // console.log(item)
            await cart.save()
            return res.status(200).send({ msg: "Item Updated in Cart" })
        } else {
            return res.status(404).json({ msg: "Invalid Item Id" })
        }
    } catch (error) {
        console.log(error)
    }
}

/* Delete Items in Cart */
async function deleteCart(req, res) {
    const user_Id = req.user.uid
    const { itemId } = req.body
    try {
        if (mongoose.Types.ObjectId.isValid(itemId)) {
            const cart = await Cart.findOne({ user_Id })

            /* Find the item in the Cart */
            const itemIdObject = new mongoose.Types.ObjectId(itemId);
            const item = cart.items.find(item => item.itemId.equals(itemIdObject))
            if (item) {
                /* If it does simply add the count */
                cart.items = cart.items.filter((item) => !item.itemId.equals(itemIdObject))
            }
            await cart.save()
            return res.status(200).send({ msg: "Item Deleted From Cart" })
        }else{
            return res.status(404).json({ msg: "Invalid Item Id" })
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getCart,
    addCart,
    updateCart,
    deleteCart
}