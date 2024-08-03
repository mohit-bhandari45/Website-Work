import React, { useEffect, useRef, useState } from 'react'
import { addCart, addFavorites, getAllProducts } from '../../apis/apis'
import { Card, Carousel } from '../apple-cards-carousel'
import { toast } from 'react-toastify'
import toastOptions from '../../utils/toastOptions'
import { useBooleanContext } from '../../context/context'

const Explore = () => {
    const [items1, setItems1] = useState([])
    const [items2, setItems2] = useState([])
    const carouselRef1 = useRef(null);
    const carouselRef2 = useRef(null);


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
            const array1 = shuffledItems.slice(0, 4); // Adjust according to how many you want to show
            const array2 = shuffledItems.slice(4, 8); // Adjust according to how many you want to show
            setItems1(array1);
            setItems2(array2);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    useEffect(() => {
        getAllProductsFn()
    }, [])

    const cards1 = items1.map((item, index) => (
        <Card key={item.imageUrl} card={item} index={index} />
    ))
    const cards2 = items2.map((item, index) => (
        <Card key={item.imageUrl} card={item} index={index} />
    ))

    return (
        <div className='h-[225vh] py-16 w-full font-[Helvetica] flex flex-col justify-center items-center'>
            <div className="head h-[35vh] w-[90%]">
                <div className="head2 h-[10vh] flex justify-start items-center gap-4 w-full">
                    <div className="bar w-[1.5%] h-[70%] rounded-sm bg-[#ED8A73]"></div>
                    <div className="title text-[#ED8A73] font-medium">Our Products</div>
                </div>
                <div className="cont w-full flex justify-between items-center h-[15vh]">
                    <div className="first flex justify-center items-center gap-16 h-full">
                        <div className="title text-4xl font-semibold">Explore Our Products</div>
                    </div>
                    <div className="second flex justify-center items-center gap-2">
                        <div onClick={() => {
                            carouselRef1.current.scrollLeft()
                            carouselRef2.current.scrollLeft()
                        }} className="arrow1 cursor-pointer bg-[#F5F5F5] rounded-full p-4">
                            <img src="src/assets/icons_arrow-left.png" alt="Arrow Left" />
                        </div>
                        <div onClick={() => {
                            carouselRef1.current.scrollRight()
                            carouselRef2.current.scrollRight()
                        }} className="arrow2 cursor-pointer bg-[#F5F5F5] rounded-full p-4">
                            <img src="src/assets/icons arrow-right.png" alt="Arrow Right" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`w-[90%] h-[190vh] justify-center items-center flex flex-col relative font-[Helvetica]`}>
                <div className="one flex gap-7 w-full h-[90%]">
                    <Carousel ref={carouselRef1} items={cards1} scrolls={1200} />
                </div>
                <div className="two flex gap-7 w-full h-[90%]">
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