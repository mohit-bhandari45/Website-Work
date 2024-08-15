import { toast } from "react-toastify";
import { addCart, addFavorites, deleteCart, deleteFavourites, getCart, getFavorites, updateCart } from "../apis/apis";
import toastOptions from "./toastOptions";


/* Favourite Functions */
export async function handleFavourites(e, itemId, token) {
    e.stopPropagation()
    if (token) {
        const req = await fetch(addFavorites, {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                itemId: itemId
            })
        })
        const res = await req.json()
        toast.success(res.msg, toastOptions)
    } else {
        toast.error("You need to Sign In first", toastOptions)
    }
}


export async function getFavoriteItems(token) {
    /* API Fetching */
    const res = await fetch(getFavorites, {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        },
    })
    if (res.status === 200) {
        /* Status 200 means request is sucussfull */
        const wishlist = await res.json()
        return wishlist.items
    } else if (res.status === 404) {
        return null
    }
}


export async function getCartItems(token) {
    /* API Fetching */
    const res = await fetch(getCart, {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        },
    })
    if (res.status === 200) {
        /* Status 200 means request is successful */
        const carts = await res.json()
        return carts.items
    }else if(res.status===404){
        return null
    }
}

/* Cart Functions */
export const addToCart = async (e, itemId, token) => {
    try {
        e.stopPropagation();
        if (token) {
            const res = await fetch(addCart, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    itemId: itemId,
                    count: 1
                })
            })
            if (res.status === 201 || res.status === 200) {
                const status = await res.json()
                toast.success(status.msg, toastOptions)
            } else {
                console.error(await res.json().message);
            }
        } else {
            toast.error("You need to Sign In first", toastOptions)
        }
    } catch (error) {
        console.log("Error while adding item to cart:", error)
    }
}

export async function handleUpCart(itemId, token, refreshData) {
    /* API Fetching */
    const res = await fetch(updateCart, {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            itemId: itemId,
            count: 1
        })
    })
    if (res.status === 200) {
        /* Status 200 means request is succuccfull */
        refreshData()
    }
}

export async function handleDownCart(itemId, token, refreshData) {
    /* API Fetching */
    const res = await fetch(updateCart, {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            itemId: itemId,
            count: -1
        })
    })
    if (res.status === 200) {
        /* Status 200 means request is succuccfull */
        refreshData()
    }
}

export async function handleDeleteCart(itemId, token, refreshData) {
    /* API Fetching */
    const res = await fetch(deleteCart, {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            itemId: itemId,
        })
    })
    if (res.status === 200) {
        /* Status 200 means request is succuccfull */
        refreshData()
    }
}