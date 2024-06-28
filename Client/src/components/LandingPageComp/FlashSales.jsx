import React, { useState, useEffect } from 'react';
import Card3 from './Subcomps/Card3';

const FlashSales = () => {
    const [items, setItems] = useState([
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

    const [index, setIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(4); // Default to 4 cards for large devices

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setCardsToShow(3); // Show 1 card for small devices
            } else {
                setCardsToShow(4); // Show 4 cards for medium and large devices
            }
        };

        // Initial check on component mount
        handleResize();

        // Listen to window resize events
        window.addEventListener('resize', handleResize);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleNext = () => {
        setIndex(prevIndex => (prevIndex + 1) % items.length);
    };

    const handlePrev = () => {
        setIndex(prevIndex => (prevIndex - 1 + items.length) % items.length);
    };

    const displayedItems = items.slice(index, index + cardsToShow);

    return (
        <div className='h-auto md:h-[120vh] py-16 w-full font-[Helvetica] flex flex-col justify-center items-center'>
            <div className="head h-[30vh] w-[90%] mb-16 md:mb-0">
                <div className="head2 h-[10vh] flex justify-start items-center gap-4 w-full">
                    <div className="bar w-[1.5%] h-[70%] rounded-sm bg-[#ED8A73]"></div>
                    <div className="title text-[#ED8A73] font-medium">Today's</div>
                </div>
                <div className="cont w-full flex flex-col md:flex-row justify-between items-center h-[15vh]">
                    <div className="first flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16 h-full">
                        <div className="title text-2xl md:text-4xl font-semibold">Flash Sales</div>
                        <div className="time flex justify-center items-center gap-2 md:gap-5">
                            <div className="days">
                                <div className="d1 font-semibold">Days</div>
                                <div className="time text-3xl md:text-5xl font-bold">03</div>
                            </div>
                            <div className="colon text-2xl md:text-4xl rounded-full text-[#E07575]">:</div>
                            <div className="hours">
                                <div className="d1 font-semibold">Hours</div>
                                <div className="time text-3xl md:text-5xl font-bold">23</div>
                            </div>
                            <div className="colon text-2xl md:text-4xl rounded-full text-[#E07575]">:</div>
                            <div className="minutes">
                                <div className="d1 font-semibold">Minutes</div>
                                <div className="time text-3xl md:text-5xl font-bold">19</div>
                            </div>
                            <div className="colon text-2xl md:text-4xl rounded-full text-[#E07575]">:</div>
                            <div className="seconds">
                                <div className="d1 font-semibold">Seconds</div>
                                <div className="time text-3xl md:text-5xl font-bold">56</div>
                            </div>
                        </div>
                    </div>
                    <div className="second flex justify-center items-center gap-2 mt-4 md:mt-0">
                        <div onClick={handlePrev} className="arrow1 bg-[#F5F5F5] rounded-full p-4 cursor-pointer"><img src="src/assets/icons_arrow-left.png" alt="Previous" /></div>
                        <div onClick={handleNext} className="arrow2 bg-[#F5F5F5] rounded-full p-4 cursor-pointer"><img src="src/assets/icons arrow-right.png" alt="Next" /></div>
                    </div>
                </div>
            </div>
            <div className='w-[90%] gap-5 h-auto md:h-[90vh] justify-start items-center flex relative font-[Helvetica] flex-wrap'>
                {displayedItems.map((element, idx) => (
                    <Card3 key={idx} img={element.img} discount={element.discount} title={element.title} mainprice={element.mainprice} prevprice={element.prevprice} stars={element.stars} amount={element.amount} />
                ))}
            </div>
        </div>
    );
}

export default FlashSales;
