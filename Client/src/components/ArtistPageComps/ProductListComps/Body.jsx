import React from 'react';
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { Card, CardContent } from "../../ui/card"
import First from "./Vibrant Wall Art_ Celebrating the Beauty of Indian Girl Culture in Dance 1.png"
import Second from "./da7ce452-5527-4181-bc1d-119a4ee3590c 1.png"
import Third from './Tree of life 1.png'
import { Link } from 'react-router-dom';

const products = [
    { id: 1, name: 'Hand Painting', price: 300, quantity: 1, image: First },
    { id: 2, name: 'Hand Crafted', price: 400, quantity: 1, image: Second },
    { id: 3, name: 'Hand Mat', price: 200, quantity: 1, image: Third },
];

const Body = () => {
    const total = products.reduce((sum, product) => sum + product.price, 0);

    return (
        <div className="max-w-7xl mx-auto p-4 font-[Helvetica]">
            <h1 className="text-3xl font-bold mb-6 py-8">Product Listing</h1>
            <div className="space-y-6">
                {products.map((product) => (
                    <Card key={product.id} className={`${product.id === 1 ? "" : ""} bg-[#D9D9D9] px-5`}>
                        <CardContent className="flex flex-col sm:flex-row items-center justify-between p-6">
                            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                                <img src={product.image} alt={product.name} className="w-32 h-40 object-cover rounded" />
                                <div className="text-center sm:text-left">
                                    <h3 className="text-xl font-semibold">{product.name}</h3>
                                    <p className="text-lg text-gray-600">Price ${product.price}</p>
                                    <p className="text-lg text-gray-600">Quantity: {product.quantity}</p>
                                </div>
                            </div>
                            <Button size="lg" className="mt-4 bg-[#8D493A] px-14 rounded-xl sm:mt-0 font-bold text-lg">Remove</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="mt-8 flex flex-col items-end">
                <div className="flex space-x-2 mb-4 space-y-2 sm:space-y-0 flex-col sm:flex-row">
                    <Input placeholder="Enter discount code" className="w-64 placeholder:font-bold py-5" />
                    <Button className="font-bold px-9 bg-[#D0B8A8] text-black">Confirm</Button>
                </div>
                <div className="text-right">
                    <p className="text-2xl font-semibold">Total: ${total}</p>
                    <Button size="lg" className="mt-4 bg-[#8D493A] px-14 rounded-xl sm:mt-4 font-bold text-lg">
                        <Link to="/pick-up">Proceed</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Body;