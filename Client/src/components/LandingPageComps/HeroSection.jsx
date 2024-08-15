import React from 'react';
import Hero from "./Vector 344.png"

const HeroSection = () => {
    return (
        <div className='relative w-full h-[85vh] md:h-[85%] flex justify-center items-center overflow-hidden'>
            <img 
                className='w-full h-auto max-w-[90%] md:max-w-[70%] lg:max-w-[50%] 
                           object-contain z-10 transition-all duration-300'
                src={Hero} 
                alt="Hero"
            />
        </div>
    )
}

export default HeroSection