import React, { useState } from 'react'

const Card = ({icon,views,title}) => {
    const [bool, setbool] = useState(false)

    return (
        <div onClick={()=>{setbool(!bool)}} className={`${bool?"bg-[#ED8A73] text-white":"text-black bg-white"} cursor-pointer transition-all duration-300 ease-in-out w-[15%] flex-col border-2 border-gray-300 rounded-sm gap-3 h-[55%] flex justify-center items-center`}>
            <div className="logo p-2 bg-gray-300 rounded-full">
                <div className="circle p-2 bg-black rounded-full">
                    <img className='w-8 h-8' src={icon} alt="" />
                </div>
            </div>
            <div className="amount text-2xl font-bold font-[Helvetica]">
                {views}
            </div>
            <div className="para font-[Helvetica] font-semibold">
                {title}
            </div>
        </div>
    )
}

export default Card
