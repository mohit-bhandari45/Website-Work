import React from 'react'

/* Image */
import Bin from "../../../assets/bin.png"
import Vector1 from "../../../assets/Vector.png"
import Vector2 from "../../../assets/Vector (1).png"

/* API */
import { getImage } from '../../../apis/apis'

/* Context API */
import { useBooleanContext } from '../../../context/context'
import { handleDeleteCart, handleDownCart, handleUpCart } from '../../../utils/products'

const Card = ({ itemId, image, title, quantity, price, refreshData }) => {
    const { token } = useBooleanContext()

    async function handleUp() {
        /* API Fetching */
        handleUpCart(itemId,token,refreshData)
    }

    async function handleDown() {
        /* API Fetching */
        handleDownCart(itemId,token,refreshData)
    }

    async function handleDelete() {
        /* API Fetching */
        handleDeleteCart(itemId,token,refreshData)
    }

    return (
        <div className='w-full sm:w-[85%] h-[30vh] flex justify-between items-center font-[Helvetica] bg-[#F5F5F5] py-5 rounded-xl px-4 sm:px-12'>
            <div className="imageselements flex justify-start items-center gap-4 sm:gap-8 flex-grow">
                <div className="img flex-shrink-0">
                    <img className='w-20 h-20 sm:w-28 sm:h-40 object-cover rounded' src={`${getImage}/${image}`} alt="" />
                </div>
                <div className='flex flex-col gap-2 sm:gap-3'>
                    <h1 className='text-base sm:text-2xl font-bold truncate max-w-[150px] sm:max-w-full'>{title}</h1>
                    <div className="elements flex justify-start items-center gap-2">
                        <div className="num text-sm sm:text-xl">{quantity}</div>
                        <div className='img1 flex flex-col gap-0.5 sm:gap-1'>
                            <img onClick={handleUp} className='w-2 sm:w-3 h-1.5 sm:h-2 cursor-pointer' src={Vector1} alt="" />
                            <img onClick={handleDown} className='w-2 sm:w-3 h-1.5 sm:h-2 cursor-pointer' src={Vector2} alt="" />
                        </div>
                    </div>
                    <div className="price text-sm sm:text-lg">${price}</div>
                </div>
            </div>
            <div className="delete ml-2 sm:ml-4">
                <img onClick={handleDelete} className='w-5 h-6 sm:w-6 sm:h-7 cursor-pointer' src={Bin} alt="" />
            </div>
        </div>
    )
}

export default Card