import React, { useState } from 'react'

const HeroSec = () => {
    const [bool, setbool] = useState(true)

    return (
        <div className='herosec w-full h-[100vh] flex justify-end'>
            <div className="main h-full w-[95%]">
                <div className="nav2 main1 h-[25vh] flex justify-between items-center">
                    <div className="path">
                        <span className='font-[Helvetica] text-gray-400'>Account</span>
                        <span className='px-2 text-gray-400'> / </span>
                        <span className='font-[Helvetica] text-gray-400'>Gaming</span>
                        <span className='px-2 text-gray-400'> / </span>
                        <span className='font-semibold font-[Helvetica]'>Handcrafted Bird Brass Lamp with 5 diyas</span></div>
                </div>
                <div className="main2 h-[75vh] w-full flex justify-start items-start gap-8">
                    <div className="left w-[10%] h-full flex flex-col justify-start gap-4">
                        <div className="img1 p-3 rounded-md flex justify-center items-center bg-[#F5F5F5]"><img className='h-24 w-28' src="src/assets/image 57.png" alt="" /></div>
                        <div className="img2 p-3 rounded-md flex justify-center items-center bg-[#F5F5F5]"><img className='h-24 w-28' src="src/assets/image 58.png" alt="" /></div>
                        <div className="img3 p-3 rounded-md flex justify-center items-center bg-[#F5F5F5]"><img className='h-24 w-28' src="src/assets/image 59.png" alt="" /></div>
                        <div className="img4 p-3 rounded-md flex justify-center items-center bg-[#F5F5F5]"><img className='h-24 w-28' src="src/assets/image 61.png" alt="" /></div>
                    </div>
                    <div className="middle h-full w-[35%]">
                        <img className='h-full w-full rounded-md' src="src/assets/image 63.png" alt="" />
                    </div>
                    <div className="right w-[55%] px-8 h-[100%]">
                        <div className="head h-[10%] gap-1 flex flex-col justify-start">
                            <div className="title font-bold font-[Helvetica] text-3xl">
                                Handcrafted Bird Brass Lamp with 5 diyas
                            </div>
                            <div className="elements flex justify-start items-center">
                                <div className="stars flex justify-center items-center gap-4">
                                    <div className="star1 flex justify-center items-center">
                                        <img className='h-3' src="src/assets/Vector (2).png" alt="" />
                                        <img className='h-3' src="src/assets/Vector (2).png" alt="" />
                                        <img className='h-3' src="src/assets/Vector (2).png" alt="" />
                                        <img className='h-3' src="src/assets/Vector (2).png" alt="" />
                                        <img className='h-3' src="src/assets/Vector (2).png" alt="" />
                                    </div>
                                    <div className="reviews font-[Helvetica]">(150 Reviews)</div>
                                    <div className="line w-[2px] h-5 bg-gray-500"></div>
                                    <div className="stock font-[Helvetica]">In Stock</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-start items-center font-[Helvetica] price text-xl h-[15%]">
                            $192.00
                        </div>
                        <div className="descpro h-[20%] flex justify-start items-center gap-32">
                            <div className="description flex justify-center items-center gap-3">
                                <h1 className='text-xl font-[Helvetica] font-bold'>Description</h1>
                                <img src="src/assets/Vector (5).png" alt="" />
                            </div>
                            <div className="description flex justify-center items-center gap-3">
                                <h1 className='text-xl font-[Helvetica] font-bold'>Features</h1>
                                <img src="src/assets/Vector (5).png" alt="" />
                            </div>
                        </div>
                        <div className="fulldes h-[0%] overflow-hidden w-full text-balance">
                            This stunning lamp features intricate brasswork depicting a pair of birds perched gracefully amidst floral motifs, adding a touch of nature's beauty to your space.
                            Each diya holder is meticulously crafted to hold standard-sized diyas, creating a warm and inviting ambiance when lit. The brass material not only lends a timeless appeal but also ensures durability and longevity, making it a cherished piece for generations to come.
                            Whether adorning your living room, dining area, or worship space, this Handcrafted Bird Brass Lamp adds a touch of cultural richness and sophistication. It's not just a lamp; it's a symbol of artistic excellence and heritage, perfect for gifting or enhancing your own home decor.
                        </div>
                        <div className="fulldes h-[0%] overflow-hidden w-full text-balance">
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
                                <div className="minus flex cursor-pointer justify-center rounded-l-md items-center border-r-2 border-2 box-border border-gray-400 w-[25%] h-full"><button><img src="src/assets/Vector (6).png" alt="" /></button></div>
                                <div className="quantity w-[50%] border-t-2 border-b-2 border-gray-400 h-full flex justify-center items-center text-xl">4</div>
                                <div className="plus flex cursor-pointer justify-center items-center rounded-r-md bg-[#3D395E] w-[25%] h-full"><button><img src="src/assets/Vector (7).png" alt="" /></button></div>
                            </div>
                            <div className='btn1 w-[40%] flex justify-center rounded-md items-center h-[45%] text-xl text-white font-[Helvetica] bg-[#ED8A73]'>
                                Buy Now
                            </div>
                            <div className="heart flex justify-center w-[10%] rounded-md items-center h-[45%] border-2 border-gray-400">
                                <img src="src/assets/Vector (8).png" alt="" />
                            </div>
                        </div>
                        <div className="boxes box-border h-[35%] border-2 border-gray-400 rounded-md w-[65%]">
                            <div className="1 w-full h-1/2 border-b-2 gap-4 px-8 flex justify-start border-gray-400 items-center">
                                <div className="left">
                                    <img className='w-12 h-12 invert' src="src/assets/icon-delivery.png" alt="" />
                                </div>
                                <div className="right flex flex-col gap-1">
                                    <div className="top text-lg font-bold font-[Helvetica]">Free Delivery</div>
                                    <div className="bottom text-sm underline font-semibold font-[Helvetica] underline-offset-4">Enter your postal code for Delivery Availability</div>
                                </div>
                            </div>
                            <div className="1 w-full h-1/2 gap-4 px-8 flex justify-start items-center">
                                <div className="left">
                                    <img className='w-12 h-12' src="src/assets/Icon-return.png" alt="" />
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
