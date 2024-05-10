import React from 'react'

const PotSec = () => {
  return (

    <div className='h-[110vh] relative font-[Helvetica] w-full bg-black text-white '>
      <div className="head h-[20vh] border-b-2 border-dashed box-border"></div>
      <div className="absolute w-1/2 bg-white rounded-full right-44 top-0 h-full blur-[600px] opacity-40"></div>

      <div className="main h-[90vh] flex justify-between items-center px-32 relative w-full">
        <div className="image absolute right-80 top-[-120px] h-full w-[37%] z-10">
          <img className='w-[100%] h-full opacity-20 ' src="src/assets/png-clipart-noise-cancelling-headphones-jbl-everest-elite-700-active-noise-control-headphones-electronics-bluetooth 1.png" alt="" />
        </div>
        <div className="left flex flex-col gap-10 w-1/2 relative z-20">
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-semibold'>Tin Tea Pot</h2>
            <h1 className='text-6xl font-bold'>Pattachitra Art</h1>
          </div>
          <div className="para w-[300px]">A Series of Bengal Pattachitra Art to
            empower artists, makers, and culture
            to empower local art form.
          </div>
          <div className="elements flex justify-start items-center gap-5 w-full">
            <div className="stars flex justify-center items-center gap-2">
              <img className='h-6 w-6' src="src/assets/Star 1.png" alt="" />
              <img className='h-6 w-6' src="src/assets/Star 1.png" alt="" />
              <img className='h-6 w-6' src="src/assets/Star 1.png" alt="" />
              <img className='h-6 w-6' src="src/assets/Star 1.png" alt="" />
              <img className='h-6 w-6' src="src/assets/Star 5.png" alt="" />
            </div>
            <div className="rate">100+ Reviews</div>
          </div>
          <div className="buttons flex justify-between items-center w-[67%]">
            <button className='border-white border-2 rounded-2xl font-semibold py-2 px-5'>Buy Now</button>
            <button className='bg-[#EE440F] px-16 font-semibold py-3 rounded-full'>Add to cart</button>
          </div>

        </div>

        <div className="right image w-1/2 flex justify-end relative">
          <img className='w-[100%] h-full relative z-20' src="src\assets\1 1.png" alt="" />
        </div>

      </div>
    </div>
  )
}

export default PotSec
