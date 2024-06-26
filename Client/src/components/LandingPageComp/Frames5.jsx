import React, { useState } from 'react';
import Card3 from './Subcomps/Card3';

const Frames5 = () => {
    const [items1] = useState([
        {
            img: "src/assets/g92-2-500x500 1.png",
            discount: "-40%",
            title: "Brass Murti",
            mainprice: "$120",
            prevprice: "$160",
            stars: "src/assets/Vector (2).png",
            amount: "(88)"
        },
        {
            img: "src/assets/ak-900-01-500x500 1.png",
            discount: "-35%",
            title: "Khadi Handloom Saree",
            mainprice: "$960",
            prevprice: "$1160",
            stars: "src/assets/Vector (2).png",
            amount: "(75)"
        },
        {
            img: "src/assets/g27cq4-500x500 1.png",
            discount: "-30%",
            title: "Brass Pncha Pradip",
            mainprice: "$370",
            prevprice: "$400",
            stars: "src/assets/Vector (2).png",
            amount: "(99)"
        },
        {
            img: "src/assets/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png",
            discount: "-25%",
            title: "Odisha Style Painting on Plate",
            mainprice: "$375",
            prevprice: "$400",
            stars: "src/assets/Vector (2).png",
            amount: "(99)"
        },
    ]);

    const [items2] = useState([
        {
            img: "src/assets/g92-2-500x500 1.png",
            discount: "-40%",
            title: "Brass Murti",
            mainprice: "$120",
            prevprice: "$160",
            stars: "src/assets/Vector (2).png",
            amount: "(88)"
        },
        {
            img: "src/assets/ak-900-01-500x500 1.png",
            discount: "-35%",
            title: "Khadi Handloom Saree",
            mainprice: "$960",
            prevprice: "$1160",
            stars: "src/assets/Vector (2).png",
            amount: "(75)"
        },
        {
            img: "src/assets/g27cq4-500x500 1.png",
            discount: "-30%",
            title: "Brass Pncha Pradip",
            mainprice: "$370",
            prevprice: "$400",
            stars: "src/assets/Vector (2).png",
            amount: "(99)"
        },
        {
            img: "src/assets/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png",
            discount: "-25%",
            title: "Odisha Style Painting on Plate",
            mainprice: "$375",
            prevprice: "$400",
            stars: "src/assets/Vector (2).png",
            amount: "(99)"
        },
    ]);
    const [right, setRight] = useState(0);

    const handleRightArrowClick = () => {
        setRight(prevRight => Math.min(prevRight + 20, 60));
    };

    const handleLeftArrowClick = () => {
        setRight(prevRight => Math.max(prevRight - 20, 0));
    };

    return (
        <div className='py-16 w-full font-[Helvetica] flex flex-col justify-center items-center'>
            <div className="w-[90%]">
                <div className="flex justify-start items-center gap-4 w-full">
                    <div className="w-[1.5%] h-[70%] rounded-sm bg-[#ED8A73]"></div>
                    <div className="text-[#ED8A73] font-medium">Our Products</div>
                </div>
                <div className="flex justify-between items-center flex-col md:flex-row">
                    <div className="flex justify-center items-center gap-16">
                        <div className="text-4xl font-semibold">Explore Our Products</div>
                    </div>
                    <div className="flex justify-center items-center gap-2 mt-4 md:mt-0">
                        <div className="bg-[#F5F5F5] rounded-full p-4 cursor-pointer" onClick={handleLeftArrowClick}><img src="src/assets/icons_arrow-left.png" alt="Left" /></div>
                        <div className="bg-[#F5F5F5] rounded-full p-4 cursor-pointer" onClick={handleRightArrowClick}><img src="src/assets/icons_arrow-right.png" alt="Right" /></div>
                    </div>
                </div>
            </div>
            <div className='w-[90%] gap-7 justify-center items-center flex flex-col relative mt-10'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7" style={{ transform: `translateX(-${right}%)` }}>
                    {items1.map((element, index) => (
                        <Card3 key={index} img={element.img} discount={element.discount} title={element.title} mainprice={element.mainprice} prevprice={element.prevprice} stars={element.stars} amount={element.amount} />
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7" style={{ transform: `translateX(-${right}%)` }}>
                    {items2.map((element, index) => (
                        <Card3 key={index} img={element.img} discount={element.discount} title={element.title} mainprice={element.mainprice} prevprice={element.prevprice} stars={element.stars} amount={element.amount} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Frames5;
