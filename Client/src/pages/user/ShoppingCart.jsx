import React, { useEffect, useState } from 'react'
import Navbar from '../../components/UserPageComps/ShoppingCartComps/Navbar'
import Card from '../../components/UserPageComps/ShoppingCartComps/Card'
import Footer from '../../components/UserPageComps/ShoppingCartComps/Footer'

/* APIs */
import { getCart } from "../../apis/apis"

/* Context API */
import { useBooleanContext } from '../../context/context'
import { Loader } from 'rsuite'
import { getCartItems } from '../../helper/products'

const ShoppingCart = () => {
    const { token } = useBooleanContext()
    const [cartItems, setCartItems] = useState(null)

    const getCartFn = async () => {
        if (token) {
            let items = await getCartItems(token)
            setCartItems(items)
        }

    }

    useEffect(() => {
        getCartFn()
    }, [])

    return (
        <>
            <div className="bg-[#393E46] min-h-screen">
                <div className="main py-8 rounded-b-3xl bg-white">
                    <Navbar />
                    <div className='w-full flex flex-col justify-center items-center py-10 sm:py-20 px-4 sm:px-8 gap-6 sm:gap-10'>
                        {cartItems && cartItems.length>0 && cartItems.map((cartItem) => {
                            return <Card key={cartItem.itemId._id} itemId={cartItem.itemId._id} image={cartItem.itemId.imageUrl} title={cartItem.itemId.title} price={cartItem.itemId.mainPrice} quantity={cartItem.count} refreshData={getCartFn} />
                        })}
                    </div>
                    <div className="cards w-full flex flex-col justify-center items-center font-[Helvetica] gap-6 sm:gap-10 pb-12 sm:pb-24 pt-5 sm:pt-10 px-4 sm:px-8">
                        <div className="card1 w-full max-w-[90%] sm:max-w-[85%] py-4 sm:py-5 flex justify-center items-center bg-[#2F4D7C] rounded-xl">
                            <div className='text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white text-center px-2'>Add Delivery Address In Next Step</div>
                        </div>
                        <div className="card2 w-full max-w-[90%] sm:max-w-[85%] text-white py-6 sm:py-8 flex flex-row justify-between px-6 sm:px-10 md:px-10 items-center bg-[#393E46] rounded-xl">
                            <div className="price text-lg sm:text-2xl md:text-3xl mb-4 sm:mb-0">Rs 4317</div>
                            <div className="elements flex justify-center items-center gap-4 sm:gap-6">
                                <div className="text text-lg sm:text-2xl md:text-3xl font-bold">Checkout</div>
                                <div className="right"><img className="w-8 h-2 sm:w-9 sm:h-2 md:w-12 md:h-2" src="src/assets/go back (1).png" alt="" /></div>
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