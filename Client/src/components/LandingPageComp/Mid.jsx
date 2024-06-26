import React from 'react';

const Mid = ({ title, h }) => {
    return (
        <div style={{ height: h }} className="flex justify-center items-center">
            <div className="font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                {title}
            </div>
        </div>
    );
}

export default Mid;
