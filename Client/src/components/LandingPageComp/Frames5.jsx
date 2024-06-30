import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../apis/apis'
import Card4 from './Subcomps/Card4'

const Frames5 = () => {
    const [right, setright] = useState(0)
    const [items1, setItems1] = useState([])
    const [items2, setItems2] = useState([])

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
            const array1 = shuffledItems.slice(0, shuffleItems.length % 2);
            const array2 = shuffledItems.slice(shuffleItems.length % 2, 8);
            setItems1(array1);
            setItems2(array2);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    useEffect(() => {
        getAllProductsFn()
        console.log(items1)
        console.log(items2)
    }, [])

    return (
        <div className='h-[190vh] py-16 w-full font-[Helvetica] flex flex-col justify-center items-center'>
            <div className="head h-[30vh] w-[90%]">
                <div className="head2 h-[10vh] flex justify-start items-center gap-4 w-full">
                    <div className="bar w-[1.5%] h-[70%] rounded-sm bg-[#ED8A73]"></div>
                    <div className="title text-[#ED8A73] font-medium">Our Products</div>
                </div>
                <div className="cont w-full flex justify-between items-center h-[15vh]">
                    <div className="first flex justify-center items-center gap-16 h-full">
                        <div className="title text-4xl font-semibold">Explore Our Products</div>
                    </div>
                    <div className="second flex justify-center items-center gap-2">
                        <div className="arrow1 bg-[#F5F5F5] rounded-full p-4"><img src="src/assets/icons_arrow-left.png" alt="" /></div>
                        <div onClick={() => { setright(prevright => prevright + 20) }} className="arrow2 bg-[#F5F5F5] rounded-full p-4"><img src="src/assets/icons arrow-right.png" alt="" /></div>
                    </div>
                </div>
            </div>
            <div className={`w-[90%] gap-7 h-[150vh] justify-center items-center flex flex-col relative font-[Helvetica]`}>
                <div className="one flex gap-7">
                    {items1.map((element) => {
                        return <Card4 img={element.imageUrl} discount={element.discount} title={element.title} mainPrice={element.mainPrice} prevPrice={element.prevPrice} stars={element.stars} amount={element.amount} />
                    })}
                </div>
                <div className="two flex gap-7">
                    {items2.map((element) => {
                        return <Card4 img={element.imageUrl} discount={element.discount} title={element.title} mainPrice={element.mainPrice} prevPrice={element.prevPrice} stars={element.stars} amount={element.amount} />
                    })}
                </div>
                <div className="button"><button className='bg-[#ED8A73] py-4 px-12 text-white rounded-md text-xl'>View All Products</button></div>
            </div>
        </div>
    )
}

export default Frames5