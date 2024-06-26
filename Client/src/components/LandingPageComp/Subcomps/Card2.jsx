import React from 'react'

const Card2 = ({ state, image }) => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center font-[Helvetica] h-[60vh]'>
      <div className="image hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
        <img className='w-60 h-60' src={image} alt="" />
      </div>
      <div className='flex flex-col gap-3 justify-center items-center'>
        <div className="head font-medium text-gray-400 text-lg">Explore</div>
        <div className="state font-bold text-xl">{state}</div>
      </div>
    </div>
  )
}

export default Card2