import React, { useEffect, useRef, useState } from 'react';
import { Card, Carousel } from "../../components/apple-cards-carousel";
import { toast } from 'react-toastify';
import { addCart, addFavorites, getSalesProducts, updateCart } from '../../apis/apis';
import { useBooleanContext } from '../../context/context';
import toastOptions from '../../utils/toastOptions';
import { getFavoriteItems } from '../../utils/products';

const FlashSales = () => {
    const { token, wishList, setWishList } = useBooleanContext();
    const [items, setItems] = useState([]);
    const carouselRef = useRef(null);

    async function getProductBySalesFn() {
        try {
            const req = await fetch(getSalesProducts);
            const result = await req.json();
            setItems(result);
        } catch (error) {
            console.error("Error fetching sales products:", error);
        }
    }

    useEffect(() => {
        getProductBySalesFn()
        getFavoriteItems(token).then((items) => {
            setWishList(items)
        })
    }, [])

    const updateWishList = () => {
        getFavoriteItems(token).then((items) => {
            setWishList(items)
        })
        const updatedItems = items.map((item) => {
            let mappedItem = wishList.items.find((wishItem) => wishItem.itemId._id === item._id);
            return mappedItem ? { ...item, "favourite": true } : { ...item, "favourite": false };
        })
        setItems(updatedItems)
    }

    useEffect(() => {
        if (items) {
            if (wishList) {
                updateWishList()
            }
        }
    }, [wishList])

    const cards = items.map((item, index) => (
        <Card key={item.imageUrl} card={item} index={index} updateWishList={updateWishList}/>
    ))

    return (
        <div className="h-[110vh] sm:h-[120vh] md:h-[130vh] py-0 sm:py-0 md:py-16 w-full font-[Helvetica] flex flex-col justify-center items-center">
            <div className="head h-[30vh] w-[90%]">
                <div className="head2 h-[10vh] sm:h-[15vh] md:h-[10vh] flex justify-start items-center gap-4 w-full">
                    <div className="bar w-[1.5%] h-[70%] sm:h-[50%] md:h-[70%] rounded-sm bg-[#ED8A73]"></div>
                    <div className="title text-[#ED8A73] font-medium">Today's</div>
                </div>
                <div className="cont w-full flex justify-between items-center h-[15vh]">
                    <div className="first flex flex-col md:flex-row justify-center items-start gap-2 md:items-center sm:gap-4 md:gap-6 lg:gap-16 h-full">
                        <div className="title text-2xl sm:text-4xl font-semibold">Flash Sales</div>
                        <div className="time flex justify-center items-center gap-1 sm:gap-2 md:gap-3">
                            {['Days', 'Hours', 'Minutes', 'Seconds'].map((unit, idx) => (
                                <React.Fragment key={unit}>
                                    <div className="flex flex-col items-center">
                                        <div className="d1 font-semibold lg:text-base text-[9px] sm:text-[12px] md:text-[14px]">{unit}</div>
                                        <div className="time lg:text-5xl md:text-4xl text-xl sm:text-3xl font-bold">03</div>
                                    </div>
                                    {idx < 3 && <div className="colon text-2xl sm:text-4xl rounded-full text-[#E07575]">:</div>}
                                </React.Fragment>
                            ))}
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
};

export default FlashSales;
