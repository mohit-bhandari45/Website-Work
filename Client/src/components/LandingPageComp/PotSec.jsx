import React from 'react';

const PotSec = () => {
  return (
    <div className='relative font-[Helvetica] w-full bg-black text-white'>
      <div className="head h-[10vh] md:h-[20vh]"></div>
      <div className="absolute w-full md:w-1/2 bg-white rounded-full right-0 md:right-44 top-0 h-full blur-[200px] md:blur-[600px] opacity-40"></div>

      <div className="main flex flex-col md:flex-row justify-between items-center px-4 md:px-32 relative w-full h-[90vh]">
        
        {/* Image section */}
        <div className="image absolute right-10 md:right-80 top-[-60px] md:top-[-120px] h-full w-full md:w-[37%] z-10">
          <img className='w-full h-full opacity-20' src="src/assets/png-clipart-noise-cancelling-headphones-jbl-everest-elite-700-active-noise-control-headphones-electronics-bluetooth 1.png" alt="" />
        </div>
        
        {/* Left content section */}
        <div className="left flex flex-col gap-5 md:gap-10 w-full md:w-1/2 relative z-20 mt-20 md:mt-0">
          <div className='flex flex-col gap-2 md:gap-4'>
            <h2 className='text-lg md:text-xl font-semibold'>Tin Tea Pot</h2>
            <h1 className='text-4xl md:text-6xl font-bold'>Pattachitra Art</h1>
          </div>
          <div className="para w-full md:w-[43%] text-[#959292]">A Series of Bengal Pattachitra Art to
            empower artists, makers, and culture
            to empower local art form.
          </div>
          <div className="elements flex flex-col sm:flex-row justify-start items-start sm:items-center gap-3 sm:gap-5 w-full">
            <div className="stars flex justify-center items-center gap-1 sm:gap-2">
              <img className='h-4 w-4 sm:h-6 sm:w-6' src="src/assets/Star 1.png" alt="" />
              <img className='h-4 w-4 sm:h-6 sm:w-6' src="src/assets/Star 1.png" alt="" />
              <img className='h-4 w-4 sm:h-6 sm:w-6' src="src/assets/Star 1.png" alt="" />
              <img className='h-4 w-4 sm:h-6 sm:w-6' src="src/assets/Star 1.png" alt="" />
              <img className='h-4 w-4 sm:h-6 sm:w-6' src="src/assets/Star 5.png" alt="" />
            </div>
            <div className="rate text-sm sm:text-base">100+ Reviews</div>
          </div>
          
          {/* Buttons section */}
          <div className="buttons flex flex-col sm:flex-row justify-between items-center w-full md:w-[67%] gap-2 sm:gap-4 mt-10 sm:mt-0">
            {/* Customize button positions on small devices */}
            <button className='border-white border-2 rounded-2xl font-semibold py-2 px-4 sm:order-1 mt-24 mr-52 md:mt-0 md:ml-5 sm:ml-0 sm:mt-0 sm:mr-0 md:py-2 md:px-12'>Buy Now</button>
              <button className='bg-[#EE440F] px-6 sm:px-16 font-semibold py-2 rounded-full mt-2 sm:mt-0 sm:order-2 mr-48 sm:mr-0 md:px-12 md:py-2 lg:px-16'>
  Add to cart
</button>

            <img 
  className='w-[60%] h-auto md:w-full md:h-full relative z-20 ml-36 bottom-80 md:ml-80 md:bottom-40 sm:order-3' 
  src="src/assets/1 1.png" 
  alt="" 
/>

          </div>
        </div>
        
      </div>
    </div>
  );
};

export default PotSec;
