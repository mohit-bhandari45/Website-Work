import React from 'react';

const Card2 = ({ state, image }) => {
  return (
    <div className="flex flex-col items-center gap-4 text-center font-[Helvetica]">
      <div className="w-60 h-60 md:w-72 md:h-72 overflow-hidden rounded-lg shadow-lg">
        <img className="object-cover w-full h-full transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer" src={image} alt={state} />
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="text-gray-400 text-lg font-medium">Explore</div>
        <div className="text-xl font-bold">{state}</div>
      </div>
    </div>
  );
}

export default Card2;
