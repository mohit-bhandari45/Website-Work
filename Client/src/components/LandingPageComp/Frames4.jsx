import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"

/* API */
import { getImage, getRecentProducts } from '../../apis/apis'

const Frames4 = () => {
    const navigate=useNavigate()
    const [recentProducts, setRecentProducts] = useState([])

    const getProducts = async () => {
        const req = await fetch(getRecentProducts)
        const res = await req.json();
        setRecentProducts(res)
    }

    useEffect(() => {
        getProducts()
    }, [])

    if (recentProducts.length === 0) {
        return <div>...Loading</div>
    }

    return (
        <div className='h-[130vh] w-full font-[Helvetica] flex flex-col justify-center items-center'>
            <div className="head h-[30vh] w-[90%]">
                <div className="head2 h-[10vh] flex justify-start items-center gap-4 w-full">
                    <div className="bar w-[1.5%] h-[70%] rounded-sm bg-[#DB4444]"></div>
                    <div className="title text-[#DB4444] font-medium">Featured</div>
                </div>
                <div className="cont w-full flex justify-between items-center h-[15vh]">
                    <div className="first flex justify-center items-center gap-16 h-full">
                        <div className="title text-4xl font-semibold">New Arrival</div>
                    </div>
                </div>
            </div>
            <div className='w-[90%] h-[90vh] flex justify-start items-center gap-8'>
                <div onClick={()=>navigate(`/gallery/${recentProducts[0]._id}`)} className="left cursor-pointer h-full w-[45%] bg-black box-border px-5 py-5 rounded-lg text-white gap-2 object-cover flex flex-col relative justify-end items-start">
                    <img onClick={()=>navigate(`/gallery/${recentProducts[0]._id}`)} src={`${getImage}/${recentProducts[0].imageUrl}`} className='w-[80%] h-[80%] cursor-pointer absolute bottom-0 right-5' alt="" />
                    <h1 onClick={()=>navigate(`/gallery/${recentProducts[0]._id}`)} className='font-bold text-xl relative z-10 transition-all duration-500 hover:scale-105 ease-in-out cursor-pointer'>{recentProducts[0].title}</h1>
                    <p className='w-[35%] text-sm relative z-10 opacity-80 font-thin'>{recentProducts[0].description}</p>
                    <div onClick={()=>navigate(`/gallery/${recentProducts[0]._id}`)} className=''><button className='outline-none border-b-2 border-white relative z-10'>Shop Now</button></div>
                </div>
                <div className="right h-full w-[55%] box-border flex flex-col gap-8">
                    <div onClick={()=>navigate(`/gallery/${recentProducts[1]._id}`)} className="top h-[50%] cursor-pointer w-full bg-black rounded-md px-6 justify-between flex items-end">
                        <div className="content text-white flex flex-col gap-3 justify-end items-start py-8">
                            <h1 onClick={()=>navigate(`/gallery/${recentProducts[1]._id}`)} className='font-bold text-xl transition-all duration-500 hover:scale-105 ease-in-out cursor-pointer'>{recentProducts[1].title}</h1>
                            <p className='w-[70%] text-sm opacity-80 font-thin'>{recentProducts[1].description}</p>
                            <div onClick={()=>navigate(`/gallery/${recentProducts[1]._id}`)} className=''><button className='outline-none border-b-2 border-white'>Shop Now</button></div>
                        </div>
                        <div onClick={()=>navigate(`/gallery/${recentProducts[1]._id}`)} className="image">
                            <img src={`${getImage}/${recentProducts[1].imageUrl}`} alt="" />
                        </div>
                    </div>
                    <div className='bottom h-[50%] w-full flex justify-center items-center gap-10'>
                        <div onClick={()=>navigate(`/gallery/${recentProducts[2]._id}`)} className="first w-1/2 cursor-pointer bg-black h-full rounded-md relative flex flex-col justify-end py-4 px-4">
                            <img onClick={()=>navigate(`/gallery/${recentProducts[2]._id}`)} className='absolute top-8 left-28 z-10 w-56 h-56' src={`${getImage}/${recentProducts[2].imageUrl}`} alt="" />
                            <div className='content text-white flex gap-2 flex-col justify-center '>
                                <div onClick={()=>navigate(`/gallery/${recentProducts[2]._id}`)} className=''><button className='outline-none border-b-2 border-white'>Shop Now</button></div>
                                <h1 onClick={()=>navigate(`/gallery/${recentProducts[2]._id}`)} className='font-bold text-xl transition-all duration-500 hover:scale-105 ease-in-out cursor-pointer'>{recentProducts[2].title}</h1>
                                <p className='w-[70%] text-sm opacity-80 font-thin'>{recentProducts[2].description}</p>
                            </div>
                        </div>
                        <div onClick={()=>navigate(`/gallery/${recentProducts[3]._id}`)} className="second w-1/2 cursor-pointer bg-black h-full rounded-lg flex justify-center items-center">
                            <img className='w-60 h-72' src={`${getImage}/${recentProducts[3].imageUrl}`} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frames4