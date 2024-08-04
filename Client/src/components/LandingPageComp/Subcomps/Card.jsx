import React from 'react'
import { getImage } from '../../../apis/apis'
import { Star, Bookmark } from 'lucide-react'

const Card = ({ image, price }) => {
    return (
        <div className="flex flex-col h-full overflow-hidden">
            <div className="relative w-full">
                <img 
                    className="w-full h-auto object-cover" 
                    src={`${getImage}/${image}`} 
                    alt="Product" 
                />
            </div>
            <div className="py-2 gap-1 flex flex-col justify-between bg-white space-y-0 font-[Helvetica]">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <span className="font-bold text-lg ">Painting</span>
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} className="text-yellow-400 cursor-pointer" />
                            ))}
                        </div>
                    </div>
                    <Bookmark size={18} className="cursor-pointer" />
                </div>
                <div className="font-bold text-lg">&#x20b9; {price}</div>
                <div className="flex justify-start">
                    <button className='bg-black text-white py-2 px-5 rounded-full text-sm'>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card