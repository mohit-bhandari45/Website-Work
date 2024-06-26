import React from 'react';

const PotSec = () => {
  return (
    <div className='h-[110vh] relative font-[Helvetica] w-full bg-black text-white'>
      <div className="head h-[20vh]"></div>
      <div className="absolute w-1/2 bg-white rounded-full right-44 top-0 h-full blur-[600px] opacity-40"></div>

      <div className="main h-[90vh] flex flex-col md:flex-row justify-between items-center px-8 md:px-32 relative w-full">
        <div className="image absolute md:relative right-0 top-[-120px] md:top-0 h-[50vh] md:h-full w-full md:w-[37%] z-10">
          <img className='w-full h-full object-cover opacity-20' src="src/assets/png-clipart-noise-cancelling-headphones-jbl-everest-elite-700-active-noise-control-headphones-electronics-bluetooth 1.png" alt="" />
        </div>
        <div className="left flex flex-col gap-6 md:w-[50%] md:pl-20 relative z-20">
          <div className='flex flex-col gap-2'>
            <h2 className='text-lg md:text-xl font-semibold'>Tin Tea Pot</h2>
            <h1 className='text-4xl md:text-6xl font-bold'>Pattachitra Art</h1>
          </div>
          <div className="para w-full md:w-[43%] text-[#959292]">A Series of Bengal Pattachitra Art to
            empower artists, makers, and culture
            to empower local art form.
          </div>
          <div className="elements flex justify-start items-center gap-2 md:gap-5 w-full">
            <div className="stars flex justify-center items-center gap-2">
              <img className='h-4 w-4 md:h-6 md:w-6' src="src/assets/Star 1.png" alt="" />
              <img className='h-4 w-4 md:h-6 md:w-6' src="src/assets/Star 1.png" alt="" />
              <img className='h-4 w-4 md:h-6 md:w-6' src="src/assets/Star 1.png" alt="" />
              <img className='h-4 w-4 md:h-6 md:w-6' src="src/assets/Star 1.png" alt="" />
              <img className='h-4 w-4 md:h-6 md:w-6' src="src/assets/Star 5.png" alt="" />
            </div>
            <div className="rate text-sm md:text-base">100+ Reviews</div>
          </div>
          <div className="buttons flex flex-col md:flex-row justify-start md:justify-between items-center w-full md:w-[67%] gap-4 md:gap-0">
            <button className='border-white border-2 rounded-2xl font-semibold py-2 px-4 md:py-3 md:px-6'>Buy Now</button>
            <button className='bg-[#EE440F] px-8 md:px-16 font-semibold py-3 rounded-full'>Add to Cart</button>
          </div>
        </div>

        <div className="right image md:w-[50%] flex justify-end relative">
          <img className='w-full h-full object-cover' src="src/assets/1 1.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default PotSec;
