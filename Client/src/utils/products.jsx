import { toast } from "react-toastify";
import { addCart, addFavorites } from "../apis/apis";
import toastOptions from "./toastOptions";

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

async function handleFavourites(e, itemId,token) {
    e.stopPropagation();
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