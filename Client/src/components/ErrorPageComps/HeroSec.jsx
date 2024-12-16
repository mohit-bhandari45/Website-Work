import React, { useState } from 'react'
import { Link } from "react-router-dom"

const HeroSec = () => {
    return (
        <div className='herosec w-full h-[100vh] flex justify-end'>
            <div className="main h-full w-[95%]">
                <div className="nav2 main1 h-[25vh] flex justify-between items-center">
                    <div className="path">
                        <span className='font-[Helvetica] text-gray-400'>Home</span>
                        <span className='px-2 text-gray-400'> / </span>
                        <span className='font-semibold font-[Helvetica]'>404 Error</span>
                    </div>
                </div>
                <div className="main2 h-[75vh] w-full flex font-[Helvetica] flex-col justify-center items-center gap-8">
                    <div className="title font-bold text-9xl">404 Not Found</div>
                    <div className='font-semibold'>Your visited page not found. You may go home page.</div>
                    <div>
                        <button className='bg-[#ED8A73] text-white font-bold px-10 py-3 rounded-sm'>
                            <Link to="/home">Back To Home Page</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSec

