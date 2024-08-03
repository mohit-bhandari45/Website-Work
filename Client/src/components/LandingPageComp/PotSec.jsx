import React from 'react'

const PotSec = () => {
  return (

    <div className='2xl:h-[110vh] xl:h-[100vh] lg:h-[85vh] md:h-[70vh] sm:h-[120vh] h-[105vh] relative font-[Helvetica] w-full bg-black text-white'>
      <div className="head xl:h-[8vh] 2xl:h-[20vh] h-0"></div>
      <div className="absolute w-1/2 bg-white rounded-full right-44 top-0 h-full blur-[600px] opacity-40"></div>
      <div className="main lg:h-[90vh] h-full flex md:flex-row flex-col-reverse md:justify-between justify-end items-center 2xl:px-32 xl:px-28 lg:p-24 md:p-12 relative w-full">
        <div className="image absolute right-80 top-[-120px] h-full w-[37%] z-10">
          <img className='w-[100%] h-full opacity-20 ' src="src/assets/png-clipart-noise-cancelling-headphones-jbl-everest-elite-700-active-noise-control-headphones-electronics-bluetooth 1.png" alt="" />
        </div>
        <div className="left flex flex-col xl:gap-10 lg:gap-8 md:gap-6 gap-6 md:w-1/2 w-full items-center md:items-start relative z-20">
          <div className='flex flex-col lg:gap-2 xl:gap-4 md:gap-2'>
            <h2 className='xl:text-xl lg:text-lg md:text-lg font-semibold text-center md:text-start text-2xl'>Tin Tea Pot</h2>
            <h1 className='xl:text-6xl lg:text-5xl md:text-3xl font-bold sm:text-6xl text-5xl'>Pattachitra Art</h1>
          </div>
          <div className="para 2xl:w-[43%] lg:w-[80%] md:w-[90%] w-[70%] text-center md:text-start md:text-sm lg:text-base sm:text-lg text-base text-[#959292]">A Series of Bengal Pattachitra Art to
            empower artists, makers, and culture
            to empower local art form.
          </div>
          <div className="elements flex justify-center md:justify-start items-center gap-5 w-full">
            <div className="stars flex justify-center items-center gap-2">
              <img className='lg:h-6 md:h-4 lg:w-6 md:w-4 w-6 h-6' src="src/assets/Star 1.png" alt="" />
              <img className='lg:h-6 md:h-4 lg:w-6 md:w-4 w-6 h-6' src="src/assets/Star 1.png" alt="" />
              <img className='lg:h-6 md:h-4 lg:w-6 md:w-4 w-6 h-6' src="src/assets/Star 1.png" alt="" />
              <img className='lg:h-6 md:h-4 lg:w-6 md:w-4 w-6 h-6' src="src/assets/Star 1.png" alt="" />
              <img className='lg:h-6 md:h-4 lg:w-6 md:w-4 w-6 h-6' src="src/assets/Star 5.png" alt="" />
            </div>
            <div className="rate">100+ Reviews</div>
          </div>
          <div className="buttons flex justify-center md:pt-0 pt-5 md:justify-start lg:gap-8 gap-4 items-center xl:w-[67%] lg:w-[80%] md:[80%] w-full">
            <button className='border-white border-2 rounded-2xl font-semibold lg:py-2 py-1.5 px-5'>Buy Now</button>
            <button className='bg-[#EE440F] 2xl:px-16 xl:px-12 lg:px-8 md:px-6 px-10 font-semibold 2xl:py-3 lg:py-2.5 md:py-2 py-2 rounded-full'>Add to cart</button>
          </div>

        </div>

        <div className="right image md:w-1/2 w-full flex md:justify-end justify-center relative">
          <img className='2xl:w-[100%] xl:w-[97%] lg:w-[100%] md:w-[97%] w-[60%] h-full relative z-20' src="src\assets\1 1.png" alt="" />
        </div>

      </div>
    </div>
  )
}

export default PotSec
