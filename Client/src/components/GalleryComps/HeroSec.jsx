import React, { useState } from 'react';
import MinorSec from './MinorSec'; 
const HeroSec = () => {
    const [bool1, setBool1] = useState(false);
    const [bool2, setBool2] = useState(false);

    return (
        <div className='w-full h-[80vh] flex flex-col justify-center items-center px-4 md:px-10'>
            <div className="content w-full lg:w-[90%] h-full flex flex-col lg:flex-row justify-between lg:px-36 items-center gap-4 lg:gap-60">
                {/* Image Section */}
                <div className="left flex justify-center items-center w-full lg:w-1/2 mb-6 lg:mb-0">
                    <img className='w-full sm:w-[80%] md:w-[60%] lg:w-auto h-auto object-contain' src="src/assets/product-img.png" alt="Product Image" />
                </div>
                
                {/* Content Section */}
                <div className="right w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start gap-4">
                    <h1 className='font-bold text-xl md:text-3xl font-[Helvetica] text-center lg:text-left mb-4'>Handicraft Laxmi Murti: Indian God Sculpture Figurine Home Decor</h1>
                    <div className="elements py-2 flex justify-center lg:justify-start items-center gap-3">
                        <div className="stars flex justify-start items-center gap-1">
                            <img className='w-4' src="src/assets/020---Star.png" alt="Star Icon" />
                            <img className='w-4' src="src/assets/020---Star.png" alt="Star Icon" />
                            <img className='w-4' src="src/assets/020---Star.png" alt="Star Icon" />
                            <img className='w-4' src="src/assets/020---Star.png" alt="Star Icon" />
                            <img className='w-4' src="src/assets/020---Star.png" alt="Star Icon" />
                        </div>
                        <div className="rating font-semibold font-[Helvetica]">
                            3,345
                        </div>
                    </div>
                    <div className="price flex justify-center lg:justify-start items-end py-5 gap-3">
                        <div className="main text-xl font-bold">
                            $669
                        </div>
                        <div className="submain1 text-xs">
                            1,599
                        </div>
                        <div className="off text-xs">
                            58% off
                        </div>
                    </div>
                    <div className="color flex flex-col gap-2 items-center lg:items-start">
                        <h1 className='font-[Helvetica]'>Colors</h1>
                        <div className="colors flex justify-center lg:justify-start items-center gap-4">
                            <div className="rounded-lg one w-10 h-10 bg-[#9E6925]"></div>
                            <div className="rounded-lg one w-10 h-10 bg-[#E9C791]"></div>
                            <div className="heart h-14 flex justify-center items-center rounded-lg w-20 border-2 border-[#69306D]">
                                <img src="src/assets/Vector (10).png" alt="Heart Icon" />
                            </div>
                        </div>
                    </div>
                    <div className="buttons h-auto my-4 w-full lg:w-[60%] gap-5 flex flex-col items-center lg:items-start">
                        <div className="btn1 w-full">
                            <button className='bg-[#EED9AE] rounded-lg text-lg md:text-xl font-bold font-[Helvetica] h-full w-full text-[#3D395E]'>Add to Cart</button>
                        </div>
                        <div className="btn1 w-full">
                            <button className='bg-[#3D395E] rounded-lg text-lg md:text-xl font-bold font-[Helvetica] h-full w-full text-[#EED9AE]'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

           

        </div>
    );
}

export default HeroSec;
