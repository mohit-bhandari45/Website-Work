import React, { useEffect, useState } from 'react'
import Card3 from './Subcomps/Card3'
import { getSalesProducts } from '../../apis/apis'

const FlashSales = () => {
    const [items, setItems] = useState([])

    async function getProductBySalesFn() {
        const req = await fetch(getSalesProducts)
        const result = await req.json()
        setItems(result)
    }

    useEffect(() => {
        getProductBySalesFn()
    }, [])

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
                        <div className="arrow1 bg-[#F5F5F5] rounded-full p-4">
                            <img src="src/assets/icons_arrow-left.png" alt="" /></div>
                        <div onClick={() => { setright(prevright => prevright + 20) }} className="arrow2 bg-[#F5F5F5] rounded-full p-4">
                            <img src="src/assets/icons arrow-right.png" alt="" /></div>
                    </div>
                </div>
            </div>
            <div style={{ right: right + "vw" }} className={`w-[90%] gap-5 h-[90vh] justify-start items-center flex relative font-[Helvetica]`}>
                {items.map((element) => {
                    return <Card3 key={element._id} imageId={element._id} img={element.imageUrl} discount={element.discount} title={element.title} mainPrice={element.mainPrice} prevPrice={element.prevPrice} rating={element.rating} reviews={element.reviews} />
                })}
            </div>
        </div>
    )
}

export default FlashSales
