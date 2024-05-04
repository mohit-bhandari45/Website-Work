import React from 'react'

const Card2 = ({state,image}) => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center font-[Helvetica]'>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className='flex flex-col gap-3 justify-center items-center'>
      <div className="head font-medium text-gray-400 text-lg">Explore</div>
      <div className="state font-bold text-xl">{state}</div>
      </div>
    </div>
  )
}

export default Card2
