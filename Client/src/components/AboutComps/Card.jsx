import React, { useState } from 'react'

const Card = ({ icon, views, title }) => {
    const [bool, setbool] = useState(false)

    return (
        <div 
            onClick={() => { setbool(!bool) }} 
            className={`${bool ? "bg-[#ED8A73] text-white" : "text-black bg-white"} 
            cursor-pointer transition-all duration-300 ease-in-out 
            w-full md:w-[40%] lg:w-[30%] xl:w-[20%] flex-col border-2 border-gray-300 rounded-sm gap-3 
            h-[30%] md:h-[45%] lg:h-[55%] flex justify-center items-center p-4`}
        >
            <div className="logo p-2 bg-gray-300 rounded-full">
                <div className="circle p-2 bg-black rounded-full">
                    <img className='w-8 h-8' src={icon} alt="" />
                </div>
            </div>
            <div className="amount text-lg md:text-xl lg:text-2xl font-bold font-[Helvetica]">
                {views}
            </div>
            <div className="para font-[Helvetica] font-semibold text-sm md:text-base lg:text-lg">
                {title}
            </div>
        </div>
    )
}

export default Card
