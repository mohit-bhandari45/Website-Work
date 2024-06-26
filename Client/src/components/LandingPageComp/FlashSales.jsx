import React, { useState } from 'react';
import Card3 from './Subcomps/Card3';

const FlashSales = () => {
    const [items] = useState([
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
        {
            img: "src/assets/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png",
            discount: "-25%",
            title: "Dokra on Brass",
            mainprice: "$375",
            prevprice: "$400",
            stars: "src/assets/Vector (2).png",
            amount: "(99)"
        }
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + items.length) % items.length);
    };

    return (
        <div className='h-screen py-16 w-full font-[Helvetica] flex flex-col justify-center items-center'>
            <div className="head h-1/3 w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12">
                <div className="head2 h-1/2 flex justify-start items-center gap-4 w-full">
                    <div className="bar w-1/12 h-3/4 rounded-sm bg-[#ED8A73]"></div>
                    <div className="title text-[#ED8A73] font-medium">Today's</div>
                </div>
                <div className="cont w-full flex justify-between items-center h-1/2">
                    <div className="first flex flex-col sm:flex-row justify-center items-center gap-4 h-full">
                        <div className="title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">Flash Sales</div>
                        <div className="time flex flex-wrap justify-center items-center gap-3 sm:gap-5">
                            <div className="time-part flex flex-col items-center gap-1">
                                <div className="d1 font-semibold">Days</div>
                                <div className="time text-4xl sm:text-5xl font-bold">03</div>
                            </div>
                            <div className="colon text-4xl sm:text-5xl rounded-full text-[#E07575]">:</div>
                            <div className="time-part flex flex-col items-center gap-1">
                                <div className="d1 font-semibold">Hours</div>
                                <div className="time text-4xl sm:text-5xl font-bold">23</div>
                            </div>
                            <div className="colon text-4xl sm:text-5xl rounded-full text-[#E07575]">:</div>
                            <div className="time-part flex flex-col items-center gap-1">
                                <div className="d1 font-semibold">Minutes</div>
                                <div className="time text-4xl sm:text-5xl font-bold">19</div>
                            </div>
                            <div className="colon text-4xl sm:text-5xl rounded-full text-[#E07575]">:</div>
                            <div className="time-part flex flex-col items-center gap-1">
                                <div className="d1 font-semibold">Seconds</div>
                                <div className="time text-4xl sm:text-5xl font-bold">56</div>
                            </div>
                        </div>
                    </div>
                    <div className="second flex justify-center items-center gap-2">
                        <div className="arrow1 bg-[#F5F5F5] rounded-full p-4" onClick={prevSlide}><img src="src/assets/icons_arrow-left.png" alt="Previous" /></div>
                        <div className="arrow2 bg-[#F5F5F5] rounded-full p-4" onClick={nextSlide}><img src="src/assets/icons_arrow-right.png" alt="Next" /></div>
                    </div>
                </div>
            </div>
            <div className="slider-container w-full md:w-11/12 lg:w-10/12 xl:w-9/12 h-[60vh] sm:h-[70vh] lg:h-[80vh] xl:h-[90vh] flex justify-center items-center overflow-hidden relative">
                <div className="slider w-full h-full flex" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {items.map((element, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            <Card3
                                img={element.img}
                                discount={element.discount}
                                title={element.title}
                                mainprice={element.mainprice}
                                prevprice={element.prevprice}
                                stars={element.stars}
                                amount={element.amount}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FlashSales;
