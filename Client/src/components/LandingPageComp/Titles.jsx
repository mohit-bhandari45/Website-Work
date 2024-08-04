import React from 'react';

const Titles = ({ title, h }) => {
  return (
    <div
      style={{ height: h }}
      className={`flex justify-center items-center`}
    >
      <div className='
        font-bold
        text-4xl
        sm:text-4xl
        md:text-4xl
        lg:text-5xl
        xl:text-6xl
        hover:scale-110
        transition-all
        duration-300
        ease-in-out
        cursor-pointer
      '>
        {title}
      </div>
    </div>
  );
};

export default Titles;
