import React from 'react'

const SubState = ({ state, image }) => {
    return (
        <div className='flex flex-col gap-4 justify-center items-center font-[Helvetica] h-[45vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]'>
            <div className="image hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                <img className='w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60' src={image} alt="" />
            </div>
            <div className='flex flex-col gap-1 sm:gap-2 md:gap-3 justify-center items-center'>
                <div className="head font-medium text-gray-400 text-sm sm:text-base md:text-lg">Explore</div>
                <div className="state font-bold text-lg sm:text-xl md:text-2xl">{state}</div>
            </div>
        </div>
    )
}

export default SubState