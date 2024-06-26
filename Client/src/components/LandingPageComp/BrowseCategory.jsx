import React, { useState } from 'react';
import Browses from './Subcomps/Browses';

const BrowseCategory = () => {
    const [items, setItems] = useState([
        "Wall Paintings",
        "Wooden Crafts",
        "Jewellery",
        "Dokra art",
        "Khadi",
        "Sculptures"
    ]);

    const [right, setRight] = useState(0);

    const handleRightArrowClick = () => {
        setRight(prevRight => prevRight + 20);
    };

    const handleLeftArrowClick = () => {
        setRight(prevRight => prevRight - 20);
    };

    return (
        <div className='py-16 w-full font-[Helvetica]'>
            <div className="head h-[30vh] lg:h-[20vh] w-[90%] mx-auto">
                <div className="head2 h-[10vh] lg:h-[7vh] flex justify-start items-center gap-4 w-full">
                    <div className="bar w-[1.5%] lg:w-[0.8%] h-[70%] lg:h-[60%] rounded-sm bg-[#DB4444]"></div>
                    <div className="title text-[#DB4444] font-medium text-xl lg:text-2xl">Categories</div>
                </div>
                <div className="cont w-full flex justify-between items-center h-[15vh] lg:h-[10vh]">
                    <div className="first flex justify-center items-center gap-8 lg:gap-16 h-full">
                        <div className="title text-2xl lg:text-4xl font-semibold">Browse by Category</div>
                    </div>
                    <div className="second flex justify-center items-center gap-2">
                        <div className="arrow1 bg-[#F5F5F5] rounded-full p-3 lg:p-4" onClick={handleLeftArrowClick}><img src="src/assets/icons_arrow-left.png" alt="left arrow" /></div>
                        <div className="arrow2 bg-[#F5F5F5] rounded-full p-3 lg:p-4" onClick={handleRightArrowClick}><img src="src/assets/icons arrow-right.png" alt="right arrow" /></div>
                    </div>
                </div>
            </div>
            <div className='w-[90%] mx-auto mt-8 lg:mt-12'>
                <div className='flex justify-start items-center gap-4 lg:gap-8 overflow-x-auto'>
                    {items.map((item, index) => (
                        <Browses key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BrowseCategory;
