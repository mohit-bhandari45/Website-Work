import React, { useEffect, useState } from 'react'
import Navbar from '../../components/UserPageComps/ShoppingCartComps/Navbar'
import Card from '../../components/UserPageComps/ShoppingCartComps/Card'
import Footer from '../../components/UserPageComps/ShoppingCartComps/Footer'

/* APIs */
import { getCart } from "../../apis/apis"

/* Context API */
import { useBooleanContext } from '../../context/context'

const ShoppingCart = () => {
    const { user } = useBooleanContext()
    const [cartItems, setCartItems] = useState([])

    async function getCartFn() {
        /* API Fetching */
        const res = await fetch(getCart, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: user.email })
        })
        if (res.status === 200) {
            /* Status 200 means request is sucussfull */
            const carts = await res.json()
            setCartItems(carts)
        }

    }

    useEffect(() => {
        getCartFn()
    }, [])

    return (
        <>
            <div className="bg-[#393E46]">
                <div className="main py-8 rounded-b-3xl bg-white">
                    <Navbar />
                    <div className='w-full flex flex-col justify-center items-center py-20 gap-10'>
                        {cartItems.map((cartItem) => {
                            return <Card key={cartItem.itemDetails._id} itemId={cartItem.itemDetails._id} image={cartItem.itemDetails.imageUrl} title={cartItem.itemDetails.title} price={cartItem.itemDetails.mainPrice} quantity={cartItem.count} refreshData={getCartFn} />
                        })}
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
            <Footer />
        </>
    )
}

export default ShoppingCart
