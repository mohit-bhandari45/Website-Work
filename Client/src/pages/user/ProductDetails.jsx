import React from 'react'
import { useState } from 'react'
import Navbar from '../../components/UserPageComps/UniversalComps/Navbar'
import Footer from '../../components/UniversalComp/Footer'
import RelatedItems from '../../components/UserPageComps/ProductDetailsComps/RelatedItems'
import HeroSec from '../../components/UserPageComps/ProductDetailsComps/HeroSec'

const ProductDetails = () => {
    const [items, setitems] = useState([
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
    return (
        <>
            <Navbar />
            <HeroSec/>
            <div className='h-[100vh] py-16 w-full font-[Helvetica] flex flex-col justify-center items-center'>
                <div className="head h-[10vh] w-[90%] flex justify-center items-center">
                    <div className="head2 h-[10vh] flex justify-start items-center gap-4 w-full">
                        <div className="bar w-[1.5%] h-[70%] rounded-sm bg-[#ED8A73]"></div>
                        <div className="title text-[#ED8A73] font-medium">Related items</div>
                    </div>
                    <div className="second flex justify-center items-center gap-2">
                        <div className="arrow1 bg-[#F5F5F5] rounded-full p-4"><img src="src/assets/icons_arrow-left.png" alt="" /></div>
                        <div onClick={() => { setright(prevright => prevright + 20) }} className="arrow2 bg-[#F5F5F5] rounded-full p-4"><img src="src/assets/icons arrow-right.png" alt="" /></div>
                    </div>
                </div>
                <div className={`w-[90%] gap-6 h-[90vh] justify-start items-center flex relative font-[Helvetica]`}>
                    {items.map((element) => {
                        return <RelatedItems img={element.img} discount={element.discount} title={element.title} mainprice={element.mainprice} prevprice={element.prevprice} stars={element.stars} amount={element.amount} />
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductDetails
