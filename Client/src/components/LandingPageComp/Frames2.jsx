import React, { useEffect, useState } from 'react'
import Card from './Subcomps/Card'
import { getComingSoonProducts } from '../../apis/apis'

const Frames2 = () => {
    const [comingProducts, setComingProducts] = useState([])

    async function getComingSoonProductsFn() {
        const req = await fetch(getComingSoonProducts)
        const res = await req.json();
        setComingProducts(res)
    }

    useEffect(() => {
        getComingSoonProductsFn()
    }, [])


    return (
        <div className='main px-2 min-h-[100vh] py-10 overflow-hidden w-full flex justify-center items-center gap-10 font-[Helvetica]'>
            {comingProducts.map((product) => {
                return <Card image={product.imageUrl} price={product.mainPrice} />
            })}
        </div>
    )
}

export default Frames2