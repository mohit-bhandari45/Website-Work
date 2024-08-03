import React, { useEffect, useRef, useState } from 'react'
import { Card, Carousel } from "../../components/apple-cards-carousel"

/* API */
import { toast } from 'react-toastify'
import { addCart, addFavorites, getSalesProducts } from '../../apis/apis'
import { useBooleanContext } from '../../context/context'
import toastOptions from '../../utils/toastOptions'

const FlashSales = () => {
    const { token } = useBooleanContext()
    const [items, setItems] = useState([])
    const carouselRef = useRef(null);

    items.map((item) => {
        items.push(item)
    })
    items.map((item) => {
        items.push(item)
    })

    async function getProductBySalesFn() {
        /* API to fetch sales products */
        const req = await fetch(getSalesProducts)
        const result = await req.json()
        setItems(result)
    }

    async function handleFavourites(e) {
        e.stopPropagation();
        if (token) {
            const req = await fetch(addFavorites, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    itemId: itemId
                })
            })
            const res = await req.json()
            toast.success(res.msg, toastOptions)
            refreshData()
        } else {
            toast.error("You need to Sign In first", toastOptions)
        }
    }

    const cards = items.map((item, index) => (
        <Card key={item.imageUrl} handleFavourites={handleFavourites} card={item} index={index} />
    ))

    useEffect(() => {
        getProductBySalesFn()
    }, [])
    
    return (
        <div className='h-[110vh] sm:h-[120vh] md:h-[130vh] py-0 sm:py-0 md:py-16 w-full font-[Helvetica] flex flex-col justify-center items-center'>
            <div className="head h-[30vh] w-[90%]">
                <div className="head2 h-[10vh] sm:h-[15vh] md:h-[10vh] flex justify-start items-center gap-4 w-full">
                    <div className="bar w-[1.5%] h-[70%] sm:h-[50%] md:h-[70%] rounded-sm bg-[#ED8A73]"></div>
                    <div className="title text-[#ED8A73] font-medium">Today's</div>
                </div>
                <div className="cont w-full flex justify-between items-center h-[15vh]">
                    <div className="first flex flex-col md:flex-row justify-center items-start gap-2 md:items-center sm:gap-4 md:gap-6 lg:gap-16 h-full">
                        <div className="title text-2xl sm:text-4xl font-semibold">Flash Sales</div>
                        <div className="time flex justify-center items-center gap-1 sm:gap-2 md:gap-3">
                            <div className="days">
                                <div className="d1 font-semibold lg:text-base text-[9px] sm:text-[12px] md:text-[14px]">Days</div>
                                <div className="time lg:text-5xl md:text-4xl text-xl sm:text-3xl font-bold">03</div>
                            </div>
                            <div className="colon text-2xl sm:text-4xl rounded-full text-[#E07575]">:</div>
                            <div className="hours">
                                <div className="d1 font-semibold lg:text-base text-[9px] sm:text-[12px] md:text-[14px]">Hours</div>
                                <div className="time lg:text-5xl md:text-4xl text-xl sm:text-3xl font-bold">23</div>
                            </div>
                            <div className="colon text-2xl sm:text-4xl rounded-full text-[#E07575]">:</div>
                            <div className="minutes">
                                <div className="d1 font-semibold lg:text-base text-[9px] sm:text-[12px] md:text-[14px]">Minutes</div>
                                <div className="time lg:text-5xl md:text-4xl text-xl sm:text-3xl font-bold">19</div>
                            </div>
                            <div className="colon text-2xl sm:text-4xl rounded-full text-[#E07575]">:</div>
                            <div className="minutes">
                                <div className="d1 font-semibold lg:text-base text-[9px] sm:text-[12px] md:text-[14px]">Seconds</div>
                                <div className="time lg:text-5xl md:text-4xl text-xl sm:text-3xl font-bold">56</div>
                            </div>
                        </div>
                    </div>
                    <div className="second flex justify-center items-center gap-2">
                        <div onClick={() => carouselRef.current.scrollLeft()} className="arrow1 cursor-pointer bg-[#F5F5F5] rounded-full p-2 sm:p-4 lg:p-5">
                            <img src="src/assets/icons_arrow-left.png" alt="Arrow Left" />
                        </div>
                        <div onClick={() => carouselRef.current.scrollRight()} className="arrow2 cursor-pointer bg-[#F5F5F5] rounded-full p-2 sm:p-4 lg:p-5">
                            <img src="src/assets/icons arrow-right.png" alt="Arrow Right" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[90%] gap-5 h-[60vh] sm:h-[80vh] md:h-[90vh] justify-start items-center flex relative font-[Helvetica]">
                <Carousel ref={carouselRef} items={cards} />
            </div>
        </div>
    );
}

export default FlashSales


