import React from 'react'

const PotSec = () => {
  return (
    <div className='min-h-[100vh] w-full flex bg-black text-white justify-center items-center px-14 gap-32'>
      <div className="text1 h-3/4 text-7xl pt-10 flex flex-col gap-4">
        <div className='font-medium'>HAND</div>
        <div className='font-extralight'>PAINTED</div>
      </div>
      <div className="pot h-full">
        <img className='h-[100vh] w-[40vw]' src="src/assets/Frame 15.png" alt="" />
      </div>
      <div className="text2 h-3/4 items-end justify-end text-7xl pt-96 font-light">TERACOTTA</div>
    </div>
  )
}

export default PotSec
