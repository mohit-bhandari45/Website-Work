import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Star from '../UserPageComps/HomePageComps/Subcomps/Star';

/* APIs */
import { getProductById, getImage } from '../../apis/apis';

const HeroSec = ({item}) => {
    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <div className='w-full h-[80vh] flex justify-center items-center'>
            <div className="content w-[90%] h-full flex">
                <div className="left w-1/2 h-full flex justify-center items-center">
                    <img className='w-[60%] h-[100%]' src={`${getImage}/${item.imageUrl}`} alt="" />
                </div>
                <div className="right w-1/2 h-full px-10 flex flex-col justify-center gap-2">
                    <h1 className='font-bold w-[80%] text-3xl font-[Helvetica]'>{item.title}</h1>
                    <div className="elements py-2 flex justify-start items-center gap-3">
                        <div className="stars flex justify-start items-center gap-1">
                            <Star rating={item.rating} />
                        </div>
                        <div className="rating font-semibold font-[Helvetica]">
                            {item.rating}
                        </div>
                    </div>
                    <div className="price flex justify-start items-end py-5 gap-3">
                        <div className="main text-xl font-bold">
                            ${item.mainPrice}
                        </div>
                        <div className="submain1 text-xs line-through">
                            ${item.prevPrice}
                        </div>
                        <div className="off text-xs">
                            {item.discount}% off
                        </div>
                    </div>
                    <div className="color flex flex-col gap-2">
                        <h1 className='font-[Helvetica]'>Colors</h1>
                        <div className="colors flex justify-start items-center gap-4">
                            <div className="rounded-lg one w-10 h-10 bg-[#9E6925]"></div>
                            <div className="rounded-lg one w-10 h-10 bg-[#E9C791]"></div>
                            <div className="heart h-14 flex justify-center items-center rounded-lg w-20 border-2 border-[#69306D]">
                                <img src="src/assets/Vector (10).png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="buttons h-[25%] my-4 w-[60%] gap-5 flex flex-col">
                        <div className="btn1 h-full w-full">
                            <button className='bg-[#EED9AE] rounded-lg text-xl font-bold font-[Helvetica] h-full w-full text-[#3D395E]'>Add to Cart</button>
                        </div>
                        <div className="btn1 h-full w-full">
                            <button className='bg-[#3D395E] rounded-lg text-xl font-bold font-[Helvetica] h-full w-full text-[#EED9AE]'>
                                <Link to="/checkout">Buy Now</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSec
