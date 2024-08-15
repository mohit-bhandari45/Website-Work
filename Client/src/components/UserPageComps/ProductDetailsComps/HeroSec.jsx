import React, { useEffect, useState } from 'react'
import { getImage, getProductById, addFavorites } from '../../../apis/apis';
// import Star from '../../LandingPageComp/Subcomps/Star';
import { Loader } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css'
import { useNavigate } from 'react-router-dom';

/* Images */
import Vector from "../../../assets/Vector (5).png"
import Minus from "../../../assets/Vector (6).png"
import Plus from "../../../assets/Vector (7).png"
import Delivery from "../../../assets/icon-delivery.png"
import Heart from "../../../assets/Vector (8).png"
import Return from "../../../assets/Icon-return.png"
import { useBooleanContext } from '../../../context/context';

/* Toasts */
import toastOptions from '../../../helper/toastOptions';
import { toast } from 'react-toastify';
import { Star } from 'lucide-react';

const HeroSec = ({ id }) => {
    const [bool, setbool] = useState(true)
    const [item, setItem] = useState()
    const [count, setCount] = useState(0)
    const { token } = useBooleanContext();
    const [height, setHeight] = useState(75)
    const navigate = useNavigate()

    async function getProductByIdFn() {
        const req = await fetch(`${getProductById}/${id}`);
        if (req.status == 404) {
            navigate("/404")
            return;
        }
        const result = await req.json();
        setItem(result)
    }

    useEffect(() => {
        getProductByIdFn()
        window.scrollTo(0, 0);
    }, [id])

    async function handleFavourites(e) {
        e.stopPropagation();
        if (token) {
            const req = await fetch(addFavorites, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    itemId: id
                })
            })
            const res = await req.json()
            toast.success(res.msg, toastOptions)
            getProductByIdFn()
        } else {
            toast.error("You need to Sign In first", toastOptions)
        }
    }

    if (!item) {
        return <div>
            <Loader center size='lg' speed='slow' />
        </div>
    }

    return (
        <div className='herosec w-full h-[100vh] flex justify-end'>
            <div className="main h-full w-[95%]">
                <div className="nav2 main1 h-[25vh] flex justify-between items-center">
                    <div className="path">
                        <span className='font-[Helvetica] text-gray-400'>Account</span>
                        <span className='px-2 text-gray-400'> / </span>
                        <span className='font-[Helvetica] text-gray-400'>Gaming</span>
                        <span className='px-2 text-gray-400'> / </span>
                        <span className='font-semibold font-[Helvetica]'>{item.title}</span></div>
                </div>
                <div className={`h-[75vh] main2 w-full flex justify-start items-start gap-8`}>
                    <div className="left w-[10%] h-full flex flex-col justify-start gap-4">
                        <div className="img1 p-3 rounded-md flex justify-center items-center bg-[#F5F5F5]"><img className='h-24 w-28' src={`${getImage}/${item.imageUrl}`} alt="" /></div>
                        <div className="img2 p-3 rounded-md flex justify-center items-center bg-[#F5F5F5]"><img className='h-24 w-28' src={`${getImage}/${item.imageUrl}`} alt="" /></div>
                        <div className="img3 p-3 rounded-md flex justify-center items-center bg-[#F5F5F5]"><img className='h-24 w-28' src={`${getImage}/${item.imageUrl}`} alt="" /></div>
                        <div className="img4 p-3 rounded-md flex justify-center items-center bg-[#F5F5F5]"><img className='h-24 w-28' src={`${getImage}/${item.imageUrl}`} alt="" /></div>
                    </div>
                    <div className="middle h-full w-[35%] flex justify-center items-center">
                        <img className='rounded-md' src={`${getImage}/${item.imageUrl}`} alt="" />
                    </div>
                    <div className="right w-[55%] px-8 h-[100%]">
                        <div className="head h-[10%] gap-1 flex flex-col justify-start">
                            <div className="title font-bold font-[Helvetica] text-3xl">
                                {item.title}
                            </div>
                            <div className="elements flex justify-start items-center">
                                <div className="stars flex justify-center items-center gap-4">
                                    <div className="star1 flex justify-center items-center">
                                        <Star rating={item.rating} reviews={item.reviews} />
                                    </div>
                                    <div className="reviews font-[Helvetica]">({item.reviews} Reviews)</div>
                                    <div className="line w-[2px] h-5 bg-gray-500"></div>
                                    <div className="stock font-[Helvetica]">In Stock</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-start items-center font-[Helvetica] price text-xl h-[15%]">
                            ${item.mainPrice}
                        </div>
                        <div className="descpro h-[20%] flex justify-start items-center gap-32">
                            <div className="description flex justify-center items-center gap-3">
                                <h1 className='text-xl font-[Helvetica] font-bold'>Description</h1>
                                <img src={Vector} alt="" />
                            </div>
                            <div className="description flex justify-center items-center gap-3">
                                <h1 className='text-xl font-[Helvetica] font-bold'>Features</h1>
                                <img src={Vector} alt="" />
                            </div>
                        </div>
                        <div className="fulldes h-[0%] overflow-hidden w-full text-balance">
                            {item.description}
                        </div>
                        <div className="features h-[0%] overflow-hidden w-full text-balance">
                            <div className="1">1.Artistic Design: This lamp boasts a stunning design featuring intricate brasswork depicting birds and floral motifs, adding a touch of nature-inspired beauty to any room.</div>
                            <div className="2">
                                2.High-Quality Material: Made from premium brass, this lamp is not only visually appealing but also durable and long-lasting, ensuring years of enjoyment.
                            </div>
                            <div className="3"> 3.Versatile Lighting: With five diya holders, this lamp provides versatile lighting options, allowing you to create a warm and inviting ambiance in your home, office, or worship space.</div>
                            <div className="4">4.Cultural Richness: Embrace the cultural richness of traditional craftsmanship with this handcrafted lamp, perfect for adding a touch of heritage to your decor.</div>
                            <div className="5">5.Ideal for Gifting: Whether for a housewarming, festive occasion, or as a token of appreciation, this lamp makes a thoughtful and memorable gift.</div>
                            <div className="6">6.Enhanced Decor: Elevate your interior decor with the timeless elegance of brass and the intricate detailing of this beautiful lamp, making it a focal point in any setting.</div>
                            <div className="7">Illuminate your surroundings with grace and style using the Handcrafted Bird Brass Lamp with 5 diyas from Acrilc.</div>
                        </div>
                        <div className="line w-[65%] h-[2px] rounded-full bg-gray-400">

                        </div>
                        <div className="buttons w-[65%] h-[20%] flex justify-start gap-8 items-center">
                            <div className="btn1 w-[40%] flex justify-center rounded-md items-center h-[45%]">
                                <div onClick={() => setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0)} className="minus flex cursor-pointer justify-center rounded-l-md items-center border-r-2 border-2 box-border border-gray-400 w-[25%] h-full"><button><img src={Minus} alt="" /></button></div>
                                <div className="quantity w-[50%] border-t-2 border-b-2 border-gray-400 h-full flex justify-center items-center text-xl">{count}</div>
                                <div onClick={() => setCount(prevCount => prevCount + 1)} className="plus flex cursor-pointer justify-center items-center rounded-r-md bg-[#3D395E] w-[25%] h-full"><button><img src={Plus} alt="" /></button></div>
                            </div>
                            <button className='btn1 w-[40%] flex justify-center rounded-md items-center h-[45%] text-xl text-white font-[Helvetica] bg-[#ED8A73]'>
                                Buy Now
                            </button>
                            <div className="heart flex justify-center w-[10%] rounded-md items-center h-[45%] border-2 border-gray-400">
                                {!item.wishlist || item.wishlist === null ? <svg className='cursor-pointer' onClick={handleFavourites} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                    <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                </svg> : <svg className='cursor-pointer' onClick={handleFavourites} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="red">
                                    <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                                }
                            </div>
                        </div>
                        <div className="boxes box-border h-[35%] border-2 border-gray-400 rounded-md w-[65%]">
                            <div className="1 w-full h-1/2 border-b-2 gap-4 px-8 flex justify-start border-gray-400 items-center">
                                <div className="left">
                                    <img className='w-12 h-12 invert' src={Delivery} alt="" />
                                </div>
                                <div className="right flex flex-col gap-1">
                                    <div className="top text-lg font-bold font-[Helvetica]">Free Delivery</div>
                                    <div className="bottom text-sm underline font-semibold font-[Helvetica] underline-offset-4">Enter your postal code for Delivery Availability</div>
                                </div>
                            </div>
                            <div className="1 w-full h-1/2 gap-4 px-8 flex justify-start items-center">
                                <div className="left">
                                    <img className='w-12 h-12' src={Return} alt="" />
                                </div>
                                <div className="right flex flex-col gap-1">
                                    <div className="top text-lg font-bold font-[Helvetica]">Free Delivery</div>
                                    <div className="bottom text-sm underline font-semibold font-[Helvetica] underline-offset-4">Enter your postal code for Delivery Availability</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSec
