import React, { useEffect, useState } from 'react'
import Card from './Subcomps/Card'
import { getComingSoonProducts } from '../../../apis/apis'

const ComingSoon = () => {
    const [comingProducts, setComingProducts] = useState([])

    async function getComingSoonProductsFn() {
        try {
            const req = await fetch(getComingSoonProducts)
            const res = await req.json();
            setComingProducts(res)
        } catch (error) {
            console.error("Error fetching coming soon products:", error)
        }
    }

    useEffect(() => {
        getComingSoonProductsFn()
    }, [])

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {comingProducts.map((product) => (
                    <Card key={product._id} image={product.imageUrl} price={product.mainPrice} />
                ))}
            </div>
        </div>
    )
}

export default ComingSoon