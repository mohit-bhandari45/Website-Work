import React from 'react'

const PotSec = () => {
  return (
    <div className='min-h-[110vh] xl:min-h-[100vh] w-full flex flex-col py-10 xl:py-0 xl:flex-row bg-black text-white justify-center items-center px-14 gap-0 xl:gap-32'>
      <div className="text1 h-3/4 xl:text-7xl md:text-6xl text-5xl pt-10 flex xl:flex-col gap-4">
        <div className='font-medium'>HAND</div>
        <div className='font-extralight'>PAINTED</div>
      </div>
      <div className="pot h-full">
        <img className='xl:h-[100vh] xl:w-[40vw] md:h-[80vh] md:w-[40vw]' src="src/assets/Frame 15.png" alt="" />
      </div>
      <div className="text2 h-3/4 items-end justify-end pt-0 xl:pt-96 font-light xl:text-7xl md:text-6xl text-6xl">TERACOTTA</div>
    </div>
  )
}

export default PotSec
