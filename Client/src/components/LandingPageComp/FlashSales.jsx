import React, { useState } from 'react'
import Card3 from './Subcomps/Card3'

const FlashSales = () => {
    const [items, setitems] = useState([
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
    ])

    const [right, setright] = useState(0)
    return (
        <div className='h-[120vh] py-16 w-full font-[Helvetica] flex flex-col justify-center items-center'>
            <div className="head h-[30vh] w-[90%]">
                <div className="head2 h-[10vh] flex justify-start items-center gap-4 w-full">
                    <div className="bar w-[1.5%] h-[70%] rounded-sm bg-[#ED8A73]"></div>
                    <div className="title text-[#ED8A73] font-medium">Today's</div>
                </div>
                <div className="cont w-full flex justify-between items-center h-[15vh]">
                    <div className="first flex justify-center items-center gap-16 h-full">
                        <div className="title text-4xl font-semibold">Flash Sales</div>
                        <div className="time flex justify-center items-center gap-5">
                            <div className="days">
                                <div className="d1 font-semibold">Days</div>
                                <div className="time text-5xl font-bold">03</div>
                            </div>
                            <div className="colon text-4xl rounded-full text-[#E07575]">:</div>
                            <div className="hours">
                                <div className="d1 font-semibold">Hours</div>
                                <div className="time text-5xl font-bold">23</div>
                            </div>
                            <div className="colon text-4xl rounded-full text-[#E07575]">:</div>
                            <div className="minutes">
                                <div className="d1 font-semibold">Minutes</div>
                                <div className="time text-5xl font-bold">19</div>
                            </div>
                            <div className="colon text-4xl rounded-full text-[#E07575]">:</div>
                            <div className="minutes">
                                <div className="d1 font-semibold">Seconds</div>
                                <div className="time text-5xl font-bold">56</div>
                            </div>
                        </div>
                    </div>
                    <div className="second flex justify-center items-center gap-2">
                        <div className="arrow1 bg-[#F5F5F5] rounded-full p-4"><img src="src/assets/icons_arrow-left.png" alt="" /></div>
                        <div onClick={() => { setright(prevright => prevright + 20) }} className="arrow2 bg-[#F5F5F5] rounded-full p-4"><img src="src/assets/icons arrow-right.png" alt="" /></div>
                    </div>
                </div>
            </div>
            <div style={{ right: right + "vw" }} className={`w-[90%] gap-5 h-[90vh] justify-start items-center flex relative font-[Helvetica]`}>
                {items.map((element) => {
                    return <Card3 img={element.img} discount={element.discount} title={element.title} mainprice={element.mainprice} prevprice={element.prevprice} stars={element.stars} amount={element.amount} />
                })}
            </div>
        </div>
    )
}

export default FlashSales
