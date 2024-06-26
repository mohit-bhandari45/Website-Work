import React from 'react';

const Card = ({ img, title, desc }) => {
  return (
    <div className='w-full flex justify-center items-center flex-col sm:flex-row sm:justify-start sm:items-start p-4'>
      <div className="image w-full sm:w-[20%] flex justify-center sm:justify-start">
        <img className='w-full sm:w-auto' src={img} alt="" />
      </div>
      <div className="details flex justify-center items-center w-full sm:w-[50%] sm:pl-8 mt-4 sm:mt-0">
        <div className="main w-full">
          <div className="name flex flex-col sm:flex-row justify-start items-start sm:items-center py-4 sm:py-6 gap-3 sm:gap-5">
            <h1 className='text-2xl sm:text-4xl font-bold font-[Helvetica]'>{title}</h1>
            <div className="rating flex justify-start sm:justify-center items-center gap-1">
              <img className='h-4' src="src/assets/Star.png" alt="" />
              <img className='h-4' src="src/assets/Star.png" alt="" />
              <img className='h-4' src="src/assets/Star.png" alt="" />
              <img className='h-4' src="src/assets/Star.png" alt="" />
              <img className='h-4' src="src/assets/Star.png" alt="" />
            </div>
            <div className="total font-semibold text-sm sm:text-base">12k remaining</div>
          </div>
          <div className="para font-semibold text-gray-600 font-[Helvetica] w-full sm:w-[70%] text-sm sm:text-base">
            {desc}
          </div>
          <div className="button font-bold text-xl font-[Helvetica] py-4 w-full sm:w-[70%] flex justify-between items-center mt-4">
            <button className='bg-black text-white py-2 px-5 rounded-full text-sm sm:text-base'>Add to Cart</button>
            <img className='h-6' src="src/assets/Bookmark.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
