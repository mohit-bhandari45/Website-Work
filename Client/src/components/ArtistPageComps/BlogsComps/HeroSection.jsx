import React from 'react';
import Image from "./Tree.png"

const HeroSection = () => {
  return (
    <div className="w-full h-[160vh] lg:h-[90vh] flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 p-8 md:p-10 xl:p-16 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">EXPLORE THE WORLD OF HANDMADE ART</h1>
        
        <p className="text-lg mb-4">
          Discover the charm of handmade craftsmanship with our unique collection. 
          At Acrils, we take pride in offering meticulously crafted items that are as 
          unique as you are. Whether you're looking for a special gift or a treat for 
          yourself, our selection of handmade products is sure to inspire and delight.
        </p>
        
        <p className="text-lg mb-4">
          Thank you for choosing Acrils, where every piece tells a story.
        </p>
        
        <p className="text-lg font-semibold">
          Happy shopping!
        </p>
      </div>
      
      <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
        <img 
          src={Image}
          alt="Colorful tree of life painting"
          className="w-[1/4] h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;