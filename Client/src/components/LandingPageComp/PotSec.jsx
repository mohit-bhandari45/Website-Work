import React from 'react'

const PotSec = () => {
  return (
    <div className='h-[90vh] w-full flex bg-black text-white justify-center items-center px-14'>
      <div className="text1 h-3/4 text-6xl pt-10 flex flex-col gap-4">
        <div className='font-medium'>HAND</div>
        <div className='font-extralight'>PAINTED</div>
      </div>
      <div className="pot h-full">
        <img className='h-full' src="/icons/image-removebg-preview (1).png" alt="" />
      </div>
      <div className="text2 h-3/4 items-end justify-end text-6xl pt-96 font-light">TERACOTTA</div>
    </div>
  )
}

export default PotSec
