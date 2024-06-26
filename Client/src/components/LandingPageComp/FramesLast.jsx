import React from 'react';

const FramesLast = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-[90%] sm:w-10/12 md:w-8/12 lg:w-7/12 xl:w-6/12 h-[98vh] flex flex-col sm:flex-row justify-center items-center gap-5'>
        <div className="left w-full sm:w-[30%] h-[40vh] sm:h-full">
          <img className='h-full w-full object-cover' src="src/assets/Rectangle 30.png" alt="" />
        </div>
        <div className="right w-full sm:w-[70%] h-[58vh] sm:h-full flex flex-col justify-center items-center gap-5 overflow-hidden">
          <div className="top w-full flex justify-center items-center gap-5 h-1/2">
            <img className='h-full w-[43%] sm:w-[33%]' src="src/assets/Rectangle 31 (1).png" alt="" />
            <img className='h-full w-[43%] sm:w-[33%]' src="src/assets/Rectangle 33.png" alt="" />
            <img className='h-full w-[43%] sm:w-[33%]' src="src/assets/Rectangle 32.png" alt="" />
          </div>
          <div className="bottom h-1/2 flex justify-center items-center gap-5 w-full">
            <img className='w-[41%] sm:w-[31%] h-full' src="src/assets/Rectangle 35.png" alt="" />
            <img className='w-[41%] sm:w-[31%] h-full' src="src/assets/Rectangle 36.png" alt="" />
            <img className='w-[47%] sm:w-[37%] h-full' src="src/assets/Rectangle 34.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FramesLast;
