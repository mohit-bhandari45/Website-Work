import React from 'react'
import Navbar from '../../components/UserPageComps/ShoppingCartComps/Navbar'
import Card from '../../components/UserPageComps/ShoppingCartComps/Card'
import Footer from '../../components/UserPageComps/ShoppingCartComps/Footer'

const ShoppingCart = () => {
    return (
        <>
            <div className="bg-[#393E46]">
                <div className="main py-8 rounded-b-3xl bg-white">
                    <Navbar />
                    <div className='w-full flex flex-col justify-center items-center py-20 gap-10'>
                        <Card image="src/assets/Rectangle 48.png" title="Laxmi Murti Handcraft" price="Rs 799" quantity="1" />
                        <Card image="src/assets/Rectangle 52.png" title="Hand Painted Pot" price="RS 499" quantity="1" />
                        <Card image="src/assets/Rectangle 53.png" title="Jamini Ray Art on Plate" price="Rs 660" quantity="2" />
                        <Card image="src/assets/Rectangle 54.png" title="Hand Painted Design on Kettle" price="RS 1699" quantity="1" />
                    </div>
                    <div className="cards w-full flex flex-col justify-center items-center font-[Helvetica] gap-10 pb-24 pt-10">
                        <div className="card1 w-[85%] py-5 flex justify-center items-center bg-[#2F4D7C] rounded-xl">
                            <div className='text-4xl text-white'>Add Delivery Address In Next Step</div>
                        </div>
                        <div className="card2 w-[85%] h-[15vh] text-white py-10 flex justify-between px-20 items-center bg-[#393E46] rounded-xl">
                            <div className="price text-3xl">Rs 4317</div>
                            <div className="elements flex justify-center items-center gap-6">
                                <div className="text text-3xl font-bold">Checkout</div>
                                <div className="right"><img src="src/assets/go back (1).png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ShoppingCart
