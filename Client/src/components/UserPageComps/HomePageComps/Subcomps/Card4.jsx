import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Star from './Star'

/* Images */
import heartImage from "../../../assets/heart small.png"
import QuickView from "../../../assets/Quick View.png"

/* Toast */
import {  toast } from 'react-toastify';
import toastOptions from '../../../utils/toastOptions'
import 'react-toastify/dist/ReactToastify.css';

/* APIs */
import { getImage, addCart, addFavorites } from '../../../apis/apis'

/* Context-API */
import { useBooleanContext } from '../../../context/context'

const Card4 = ({ itemId, image, discount, title, mainPrice, prevPrice, rating, reviews, wishlist, refreshData }) => {
    const navigate = useNavigate()
    const [visible, setvisible] = useState(false)
    const { token } = useBooleanContext()

    async function addToCart(e) {
        try {
            e.stopPropagation();

            if (token) {
                /* API Fetching */
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

    async function handleFavourites(e) {
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
            if (req.status === 201 || req.status === 200) {
                const res = await req.json()
                toast.success(res.msg, toastOptions)
                refreshData()
            }
        } else {
            toast.error("You need to Sign In first", toastOptions)
        }
    }

    return (
        <div className='h-full w-[21vw] rounded-lg relative flex flex-col justify-center items-center font-[Helvetica]'>
            <div onClick={() => navigate(`/productdetails/${itemId}`)} onMouseOver={() => { setvisible(true) }} onMouseLeave={() => { setvisible(false) }} className="card h-[50vh] w-full bg-[#F5F5F5] relative flex justify-center items-center cursor-pointer hover:scale-95 transition-all ease-in-out duration-500">
                <div onClick={() => navigate(`/productdetails/${itemId}`)} className="image absolute w-28 h-28"><img src={`${getImage}/${image}`} alt="" /></div>
                <div className="icons w-full flex justify-between items-start h-full p-3">
                    <div className="off bg-[#ED8A73] px-4 py-1 rounded-md text-white">{discount}%</div>
                    <div className="mainicons flex flex-col gap-2 justify-center items-center">
                        <div className="love p-2 bg-white rounded-full">
                            {!wishlist || wishlist === null ? <svg onClick={handleFavourites} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            </svg> : <svg onClick={handleFavourites} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="black">
                                <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                            }
                        </div>
                        <div className="love p-2 bg-white rounded-full"><img src={QuickView} alt="" /></div>
                    </div>
                </div>
                <div onClick={addToCart} className={visible ? "transition-all z-20 duration-700 ease-in-out opacity-100 add absolute bottom-0 bg-black text-white w-full justify-center flex py-4 rounded-b-md text-xl" : "transition-all z-20 duration-700 ease-in-out  add absolute bottom-[-60px] bg-black text-white w-full justify-center flex py-4 rounded-b-md text-xl opacity-0"}>Add to Cart</div>
            </div>
            <div className="tags w-full flex flex-col justify-center items-start gap-1 py-2 relative z-30 bg-white">
                <div onClick={() => navigate(`/productdetails/${itemId}`)} className="title text-lg font-semibold transition-all duration-500 hover:scale-105 ease-in-out cursor-pointer">{title}</div>
                <div className="price flex justify-center items-center gap-2 font-medium">
                    <div className="main text-[#DB4444]">{mainPrice}</div>
                    <div className="prev line-through text-gray-600">{prevPrice}</div>
                </div>
                <div className="rating flex justify-center items-center gap-3">
                    <div className="rates flex justify-center items-center gap-1">
                        <Star rating={rating} reviews={reviews} />
                    </div>
                    <div className="title text-gray-600">({reviews} reviews)</div>
                </div>
            </div>
        </div>
    )
}

export default Card4
