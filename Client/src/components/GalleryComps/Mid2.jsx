import React from 'react';

const Mid2 = () => {
  return (
    <div className='w-full h-[10vh] flex justify-center items-center px-4'>
      <div className="inner w-full lg:w-[90%] h-full flex flex-col lg:flex-row justify-between items-center font-[Helvetica] gap-4 lg:gap-80">
        <div className="main font-bold text-xl lg:text-3xl text-center lg:text-left">Based on your Preferences</div>
        <div className="button">
          <button className='border-2 font-bold border-gray-500 py-2 px-4 lg:px-10 rounded-sm'>See All</button>
        </div>
      </div>
    </div>
  );
}

export default Mid2;
