import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

/* API */
import { getImage, getRecentProducts } from '../../../apis/apis'

const NewArrival = () => {
    const navigate = useNavigate()
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
        <div className='min-h-[125vh] w-full font-[Helvetica] flex flex-col justify-center items-center px-4 md:px-8 py-8'>
            <div className="head w-full max-w-[90vw]">
                <div className="head2 h-[10vh] flex justify-start items-center gap-4 w-full">
                    <div className="bar w-[1.5%] h-[70%] rounded-sm bg-[#ED8A73]"></div>
                    <div className="title text-[#ED8A73] font-medium">Featured</div>
                </div>
                <div className="cont w-full flex justify-between items-center h-[10vh] md:h-[15vh]">
                    <div className="first flex justify-center items-center gap-16 h-full">
                        <div className="title text-3xl md:text-4xl font-semibold">New Arrival</div>
                    </div>
                </div>
            </div>
            <div className='w-full max-w-[90vw] h-auto md:h-[90vh] flex flex-col md:flex-row justify-start items-center gap-8'>
                <div onClick={() => navigate(`/productdetails/${recentProducts[0]._id}`)} className="left cursor-pointer h-[400px] md:h-full w-full md:w-[45%] bg-black box-border px-5 py-5 rounded-lg text-white gap-2 flex flex-col relative justify-end items-start overflow-hidden">
                    <img onClick={() => navigate(`/productdetails/${recentProducts[0]._id}`)} src={`${getImage}/${recentProducts[0].imageUrl}`} className='w-[80%] h-[80%] object-contain absolute bottom-0 right-5' alt="" />
                    <h1 onClick={() => navigate(`/productdetails/${recentProducts[0]._id}`)} className='font-bold text-xl relative z-10 transition-all duration-500 hover:scale-105 ease-in-out cursor-pointer'>{recentProducts[0].title}</h1>
                    <p className='w-full md:w-[35%] text-sm relative z-10 opacity-80 font-thin'>{recentProducts[0].description}</p>
                    <div onClick={() => navigate(`/productdetails/${recentProducts[0]._id}`)} className=''><button className='outline-none border-b-2 border-white relative z-10'>Shop Now</button></div>
                </div>
                <div className="right h-auto md:h-full w-full md:w-[55%] box-border flex flex-col gap-8">
                    <div onClick={() => navigate(`/productdetails/${recentProducts[1]._id}`)} className="top h-[300px] md:h-[50%] cursor-pointer w-full bg-black rounded-md px-6 flex justify-between items-end">
                        <div className="content text-white flex flex-col gap-3 justify-end items-start py-8">
                            <h1 onClick={() => navigate(`/productdetails/${recentProducts[1]._id}`)} className='font-bold text-xl transition-all duration-500 hover:scale-105 ease-in-out cursor-pointer'>{recentProducts[1].title}</h1>
                            <p className='w-full md:w-[70%] text-sm opacity-80 font-thin'>{recentProducts[1].description}</p>
                            <div onClick={() => navigate(`/productdetails/${recentProducts[1]._id}`)} className=''><button className='outline-none border-b-2 border-white'>Shop Now</button></div>
                        </div>
                        <div onClick={() => navigate(`/productdetails/${recentProducts[1]._id}`)} className="image h-full flex items-end">
                            <img src={`${getImage}/${recentProducts[1].imageUrl}`} alt="" className="max-h-full object-contain" />
                        </div>
                    </div>
                    <div className='bottom h-auto md:h-[50%] w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10'>
                        <div onClick={() => navigate(`/productdetails/${recentProducts[2]._id}`)} className="first w-full md:w-1/2 h-[300px] md:h-full cursor-pointer bg-black rounded-md relative flex flex-col justify-end py-4 px-4 overflow-hidden">
                            <img onClick={() => navigate(`/productdetails/${recentProducts[2]._id}`)} className='absolute top-8 left-1/2 transform -translate-x-1/2 md:left-60 z-0 w-56 h-56 object-contain' src={`${getImage}/${recentProducts[2].imageUrl}`} alt="" />
                            <div className='content text-white flex gap-2 flex-col justify-center'>
                                <div onClick={() => navigate(`/productdetails/${recentProducts[2]._id}`)} className=''><button className='outline-none border-b-2 border-white'>Shop Now</button></div>
                                <h1 onClick={() => navigate(`/productdetails/${recentProducts[2]._id}`)} className='font-bold text-xl transition-all duration-500 hover:scale-105 ease-in-out cursor-pointer'>{recentProducts[2].title}</h1>
                                <p className='w-full md:w-[70%] text-sm opacity-80 font-thin'>{recentProducts[2].description}</p>
                            </div>
                        </div>
                        <div onClick={() => navigate(`/productdetails/${recentProducts[3]._id}`)} className="second w-full md:w-1/2 h-[300px] md:h-full cursor-pointer bg-black rounded-lg flex justify-center items-center">
                            <img className='w-60 h-72 object-contain' src={`${getImage}/${recentProducts[3].imageUrl}`} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewArrival