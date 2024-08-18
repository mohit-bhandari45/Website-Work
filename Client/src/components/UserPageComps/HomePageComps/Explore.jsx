import React, { useEffect, useRef, useState } from 'react'
import { getAllProducts } from "../../../apis/apis"
import { getFavoriteItems } from "../../../helper/products"
import { Card, Carousel } from "../../apple-cards-carousel"
import { useBooleanContext } from "../../../context/context"

const Explore = () => {
    const [items1, setItems1] = useState([])
    const [items2, setItems2] = useState([])
    const carouselRef1 = useRef(null);
    const carouselRef2 = useRef(null);
    const { token, wishList, setWishList } = useBooleanContext()


    function shuffleItems(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    async function getAllProductsFn() {
        try {
            const req = await fetch(getAllProducts);
            const result = await req.json();
            const shuffledItems = shuffleItems([...result]);
            const extendedItems = [...shuffledItems, ...shuffledItems, ...shuffledItems];
            setItems1(extendedItems.slice(0, 6))
            setItems2(extendedItems.slice(6, 12))
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    useEffect(() => {
        getAllProductsFn();
        if (token) {
            getFavoriteItems(token).then((items) => {
                setWishList(items);
            });
        }
    }, [token, setWishList]);

    useEffect(() => {
        if (wishList && items1.length > 0 && items2.length > 0) {
            const updatedItems1 = items1.map((item) => {
                let mappedItem = wishList.find((wishItem) => wishItem.itemId._id === item._id);
                return mappedItem ? { ...item, "favourite": true } : { ...item, "favourite": false };
            })
            setItems1(updatedItems1)
            const updatedItems2 = items2.map((item) => {
                let mappedItem = wishList.find((wishItem) => wishItem.itemId._id === item._id);
                return mappedItem ? { ...item, "favourite": true } : { ...item, "favourite": false };
            })
            setItems2(updatedItems2)
        }
    }, [wishList]);

    const updateWishList = () => {
        if (token) {
            getFavoriteItems(token).then((items) => {
                setWishList(items);
            });
        }
    }

    const cards1 = items1.map((item, index) => (
        <Card key={item.imageUrl} card={item} index={index} updateWishList={updateWishList} />
    ))
    const cards2 = items2.map((item, index) => (
        <Card key={item.imageUrl} card={item} index={index} updateWishList={updateWishList} />
    ))

    return (
        <div className='h-[200vh] md:h-[225vh] py-16 w-full font-[Helvetica] flex flex-col justify-center items-center'>
            <div className="head h-[25vh] md:h-[35vh] w-[90%]">
                <div className="head2 h-[10vh] flex justify-start items-center gap-4 w-full">
                    <div className="bar w-[1.5%] h-[70%] rounded-sm bg-[#ED8A73]"></div>
                    <div className="title text-[#ED8A73] font-medium">Our Products</div>
                </div>
                <div className="cont w-full flex justify-between items-center h-[15vh]">
                    <div className="first flex justify-center items-center gap-16 h-full">
                        <div className="title text-2xl sm:text-3xl md:text-4xl font-semibold">Explore Our Products</div>
                    </div>
                    <div className="second flex justify-center items-center gap-2">
                        <div onClick={() => {
                            carouselRef1.current.scrollLeft()
                            carouselRef2.current.scrollLeft()
                        }} className="arrow1 cursor-pointer bg-[#F5F5F5] rounded-full p-3 md:p-4">
                            <img className='w-6' src="src/assets/icons_arrow-left.png" alt="Arrow Left" />
                        </div>
                        <div onClick={() => {
                            carouselRef1.current.scrollRight()
                            carouselRef2.current.scrollRight()
                        }} className="arrow2 cursor-pointer bg-[#F5F5F5] rounded-full p-3 md:p-4">
                            <img className='w-6' src="src/assets/icons arrow-right.png" alt="Arrow Right" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`w-[90%] h-[150vh] md:h-[190vh] justify-center items-center flex flex-col relative font-[Helvetica]`}>
                <div className="one flex gap-7 w-full h-[50%] md:h-[90%]">
                    <Carousel ref={carouselRef1} items={cards1} scrolls={1200} />
                </div>
                <div className="two flex gap-7 w-full h-[50%] md:h-[90%]">
                    <Carousel ref={carouselRef2} items={cards2} scrolls={1200} />
                </div>
            </div>
            <div className="button">
                <button className='bg-[#ED8A73] py-4 px-12 text-white rounded-md text-xl'>View All Products</button>
            </div>
        </div>
    )
}

export default Explore