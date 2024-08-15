import React, { useRef, useState } from 'react'
import { Card, Carousel } from '../../BrowsesCarousel';

const BrowseCategory = () => {
    const carouselRef = useRef(null);
    const [items, setItems] = useState([
        "Wall Paintings",
        "Wooden Crafts",
        "Jewellery",
        "Dokra art",
        "Khadi",
        "Sculptures",
        "Sculptures",
        "Sculptures",
        "Sculptures"
    ]);

    const cards = items.map((item, index) => (
        <Card key={index} card={item} index={index} />
    ));

    return (
        <div className='py-5 sm:py-10 md:py-14 w-full font-[Helvetica] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8'>
            <div className="head w-[93.5%]">
                <div className="head2 flex items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
                    <div className="bar w-1 sm:w-1.5 md:w-2 h-6 sm:h-8 md:h-10 rounded-sm bg-[#DB4444]"></div>
                    <div className="title text-[#DB4444] font-medium text-base sm:text-lg md:text-xl lg:text-2xl">Categories</div>
                </div>
                <div className="cont flex flex-row justify-between items-start sm:items-center mb-6 sm:mb-8">
                    <div className="first mb-4 sm:mb-0">
                        <div className="title text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Browse by Category</div>
                    </div>
                    <div className="second flex gap-2 sm:gap-3">
                        <div onClick={() => carouselRef.current.scrollLeft()} className="arrow bg-[#F5F5F5] rounded-full p-2 sm:p-3 md:p-4 cursor-pointer">
                            <img src="src/assets/icons_arrow-left.png" alt="Left Arrow" className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8' />
                        </div>
                        <div onClick={() => carouselRef.current.scrollRight()} className="arrow bg-[#F5F5F5] rounded-full p-2 sm:p-3 md:p-4 cursor-pointer">
                            <img src="src/assets/icons arrow-right.png" alt="Right Arrow" className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[93.5%] h-[25vh] sm:h-[30vh] md:h-[35vh] flex justify-start items-center overflow-x-hidden'>
                <Carousel ref={carouselRef} items={cards} />
            </div>
        </div>
    )
}

export default BrowseCategory