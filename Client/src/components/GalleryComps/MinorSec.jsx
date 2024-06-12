import React, { useState } from 'react'

const MinorSec = () => {
    const [bool1, setbool1] = useState(false)
    const [bool2, setbool2] = useState(false)

    return (
        <>
            <div className='h-[15vh] w-full flex justify-center items-center'>
                <div className="content w-[90%] h-full flex justify-between px-36 items-center gap-60">
                    <div className="main flex justify-center items-center">
                        <div className="first font-[Helvetica] font-bold text-xl flex justify-center items-center gap-4">
                            <div className="title">Description</div>
                            <div onClick={() => { setbool1(!bool1) }} className="icon cursor-pointer">
                                <img className={`transition-all duration-700 ease-in-out w-4 py-4`} src="src/assets/Vector.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="third flex gap-48 justify-center items-center">
                        <div className="first font-[Helvetica] font-bold text-xl flex justify-center items-center gap-4">
                            <div className="title">Features</div>
                            <div onClick={() => { setbool2(!bool2) }} className="icon cursor-pointer">
                                <img className={`transition-all duration-700 ease-in-out w-4 py-4`} src="src/assets/Vector.png" alt="" />
                            </div>
                        </div>
                        <div className="second">
                            <div className="top font-[Helvetica] font-bold text-xl">
                                What's included?
                            </div>
                            <div className="include">
                                Toss Pillow
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${bool1 || bool2 ?"h-[50vh]":"h-0"} boolean flex w-full transition-all duration-700 ease-in-out justify-center items-center`}>
                <div className="content w-[72%] h-full flex justify-center items-center gap-5 font-semibold">
                    <div className={`${bool1 ? "h-[40vh] opacity-100" : "h-0 opacity-0 overflow-hidden"} transition-all duration-700 ease-in-out w-[100%] left`}>
                        Meticulously hand-moulded by skilled artisans, this Indian God Sculpture Figurine captures the essence of traditional craftsmanship and spiritual reverence.
                        Crafted with precision and attention to detail, each Laxmi Murti reflects the artistry and devotion of our artisans, making it a cherished addition to your home décor. The intricate detailing on the figurine, from the delicate features of Goddess Laxmi to the ornate motifs adorning her attire, showcases the craftsmanship steeped in centuries-old traditions.
                        This Handicraft Laxmi Murti is not just a piece of art but a symbol of auspiciousness and prosperity, ideal for adorning your puja room, living room, or office space. Whether as a centerpiece for your home altar or a thoughtful gift for loved ones, this divine sculpture brings blessings, positivity, and a touch of cultural richness to any environment.
                    </div>
                    <div className={`${bool2 ? "h-[40vh] opacity-100" : "h-0 opacity-0 overflow-hidden"} transition-all duration-700 ease-in-out w-[80%] right`}>
                        <div>Theme - Religious</div>
                        <div>Brand - Generic</div>
                        <div>Colour - clay</div>
                        <div>Style - Art Deco</div>
                        <div>Material - Clay</div>
                        <div>Occasion - Ganesha</div>
                        <div>Product Dimensions - 10L x 7W x 19H Centimeters</div>
                        <div>Specific Uses For Product - Clay</div>
                        <div>Special Feature - handmade</div>
                        <div>About this item</div>
                        <div>Eco-Friendly Laxmi Murti made by Kacchi Mitti without use of toxic colors</div>
                        <div>Handcrafted & Decorate by our Indian Potter</div>
                        <div>When immersed in water bucket for 3 hours, it will easily dissolves again in soil</div>
                        <div>Goddess Laxmi Statue Made from 100% Natural Pot Clay (kachi Mitti) Water Soluble</div>
                        <div>The water bodies can be protected from pollution with these Eco friendly idols</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MinorSec
