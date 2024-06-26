import React from 'react';

const Card = () => {
  return (
    <div className='w-full sm:w-[40vw] md:w-[30vw] lg:w-[20vw] h-[50vh] flex flex-col gap-2 justify-center items-center p-4'>
      <div className="image w-full h-[70%]">
        <img className='w-full h-full object-cover' src="src/assets/Rectangle 4163.png" alt="" />
      </div>
      <div className="firstelements w-full text-xs md:text-sm font-[Helvetica] flex justify-between items-center mt-2">
        <div className="one">4.3</div>
        <div className="two flex justify-center items-center gap-1">
          <div className="stars flex justify-center items-center gap-1">
            <img className='w-3 md:w-4' src="src/assets/Star.png" alt="" />
            <img className='w-3 md:w-4' src="src/assets/Star.png" alt="" />
            <img className='w-3 md:w-4' src="src/assets/Star.png" alt="" />
            <img className='w-3 md:w-4' src="src/assets/Star.png" alt="" />
            <img className='w-3 md:w-4' src="src/assets/Star.png" alt="" />
            <img className='w-3 md:w-4' src="src/assets/Star.png" alt="" />
          </div>
          <div className="text">14</div>
        </div>
      </div>
      <div className="secondelements font-[Helvetica] text-xs md:text-sm flex justify-between items-center w-full mt-2">
        <div className="first">$505</div>
        <div className="second flex items-center">
          <span className='px-1'>M.R.P:</span>
          <span>$499.00</span>
        </div>
      </div>
    </div>
  )
}

export default Card;
