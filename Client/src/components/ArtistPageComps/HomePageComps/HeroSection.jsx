import React, { useRef, useState } from 'react'

const SectionCard = ({ title, description }) => {
    return (
        <div className="p-6 rounded-md flex flex-col items-start cursor-pointer justify-between h-full font-[Helvetica] transition-opacity duration-300 opacity-25 hover:opacity-100">
            <div>
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
            </div>
            <button className="mt-auto px-4 py-2 bg-gray-200 rounded-md self-start">See More</button>
        </div>
    )
}

const HeroSection = () => {
    return (
        <div className="flex justify-center p-4 h-[90vh] md:h-[70vh] lg:h-[50vh] items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
                <SectionCard
                    title="Dashboard"
                    description="Effortlessly manage your art portfolio, track sales, and connect with buyers through our intuitive Artist Dashboard. Empowering artists with tools to grow and succeed."
                />
                <SectionCard
                    title="Product Listing"
                    description="Explore our unique collection of handcrafted art, each piece a testament to unparalleled creativity and passion."
                />
                <SectionCard
                    title="Blogs"
                    description="Dive into our Artist Blogs, a vibrant space where artists share insights, stories, and tutorials on various art forms, fostering a community of creativity and inspiration."
                />
            </div>
        </div>
    )
}

export default HeroSection
