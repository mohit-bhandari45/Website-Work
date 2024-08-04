import React from 'react';

const Card = ({ index, icon, views, title, handleClick, coloured }) => {
    return (
        <div
            onClick={(e) => handleClick(e, index)}
            className={`${
                coloured ? "bg-[#ED8A73] text-white" : "bg-white text-black"
            } cursor-pointer transition-all duration-300 ease-in-out
            flex flex-col justify-center items-center
            border-2 border-gray-300 rounded-lg
            p-4
            w-full sm:w-60 md:w-72 lg:w-72
            h-60`}
        >
            <div className="logo p-2 bg-gray-300 rounded-full mb-3 flex justify-center items-center">
                <div className="circle p-2 bg-black rounded-full flex justify-center items-center">
                    <img className='w-12 h-12' src={icon} alt="" />
                </div>
            </div>
            <div className="amount text-lg md:text-xl font-bold">
                {views}
            </div>
            <div className="para font-semibold text-sm md:text-base text-center">
                {title}
            </div>
        </div>
    );
};

export default Card;
