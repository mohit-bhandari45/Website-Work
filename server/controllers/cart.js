const Cart = require("../models/cart")
const Product = require("../models/product")

/* Get All Cart Items */
async function getCart(req, res) {
    try {
        const user_Id = req.user.uid;
        const cart = await Cart.findOne({ user_Id });
        if (!cart) {
            // There's no cart for this user created yet
            // Create an empty cart in that case
            return res.status(200).json({ msg: 'Created New Cart', items: [] });
        }

        // let items = await Promise.all(cart.items.map(async (item) => {
        //     const itemDetails = await Product.findById({ _id: item.itemId });
        //     return { count: item.count, itemDetails };
        // }))

        const itemIds = cart.items.map(item => item.itemId);
        const products = await Product.find({ _id: { $in: itemIds } });
        const items = cart.items.map(item => {
            const itemDetails = products.find(product => product._id.toString() === item.itemId.toString());
            return { count: item.count, itemDetails };
        })

        return res.status(200).json(items);
    } catch (error) {
        console.error(error);
        return res.status(500).send('An error occurred while fetching the cart');
    }
}

/* Add Items to Cart */
async function addCart(req, res) {
    try {
        const user_Id = req.user.uid
        const { itemId, count } = req.body
        const cart = await Cart.findOne({ user_Id })
        if (!cart) {
            // There's no cart for this user created yet
            const newCart = await Cart.create({
                user_Id: user_Id,
                items: [{ itemId, count }]
            })
            console.log(newCart)
            return res.status(201).json({ msg: "Item added to Cart", newCart });
        }

        /* There is cart for user */
        /* Check if item already exist in the cart */
        const item = cart.items.find(item => item.itemId === itemId)
        if (item) {
            /* If it does simply add the count */
            cart.items = cart.items.map((item) => {
                if (item.itemId === itemId) {
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
        return res.status(200).json({ msg: "Item added to Cart", cart })
    } catch (error) {
        console.log(error)
    }
}

/* Update Items in Cart */
async function updateCart(req, res) {
    try {
        const user_Id = req.user.uid
        const { itemId, count } = req.body
        const cart = await Cart.findOne({ user_Id })

        /* Find the item in the Cart */
        const item = cart.items.find(item => item.itemId === itemId)
        if (item) {
            /* If it does simply add the count */
            cart.items = cart.items.map((item) => {
                if (item.itemId === itemId) {
                    item.count += count;
                    if (item.count < 0) {
                        item.count = 0;
                    }
                    console.log("Count Updated!")
                }
                return item;
            })
        }
        await cart.save()
        return res.status(200).send({ msg: "Item Updated in Cart", cart })
    } catch (error) {
        console.log(error)
    }
}

/* Delete Items in Cart */
async function deleteCart(req, res) {
    try {
        const user_Id = req.user.uid
        const { itemId } = req.body
        const cart = await Cart.findOne({ user_Id })

        /* Find the item in the Cart */
        const item = cart.items.find(item => item.itemId === itemId)
        if (item) {
            /* If it does simply add the count */
            cart.items = cart.items.filter((e) => e.itemId !== itemId)
        }
        await cart.save()
        return res.status(200).send({ msg: "Item Deleted From Cart", cart })
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