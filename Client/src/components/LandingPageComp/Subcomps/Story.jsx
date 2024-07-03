import React, { useEffect, useState } from 'react'
import { getVideoById } from '../../../apis/apis'
import { useNavigate } from 'react-router-dom'

const Story = ({ mainVideo }) => {
    const navigate=useNavigate()

    return (
        <div onClick={()=>navigate("/gallery/:id")} className="img1 h-[94vh] w-[23vw] relative py-20 top-0 hover:scale-105 transition-all duration-100 ease-in-out cursor-pointer">
            <video autoPlay muted loop className='absolute top-20 h-[75vh] w-full' width="600" src={`${getVideoById}/${mainVideo}`}></video>
            {/* <input onChange={handleChange} className='absolute z-20' type="file"/> */}
            <div className="flex justify-center items-end h-[75vh] bg-[#00000082] relative z-10">
                <div className='flex text-white px-5 gap-3 justify-center py-5'>
                    <div className="image">
                        <img className='h-12 w-36' src="src/assets/Ellipse 40.png" alt="" />
                    </div>
                    <div className="cont pt-1">
                        <div className="1 font-semibold">Tony</div>
                        <div className="para font-normal">
                            One of the fathers of modern Indian art, a leading painter in India's nationalist art school in Calcutta
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story
