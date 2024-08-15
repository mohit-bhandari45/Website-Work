import React from 'react';
import FeatureCard from './SubComps/FeatureCard';
import FirstCard from "./Rectangle 72 (1).png"
import SecondCard from "./Rectangle 78.png"
import ThirdCard from "./Rectangle 79.png"
import FourthCard from "./Rectangle 80.png"
import FifthCard from "./Rectangle 81.png"
import SixthCard from "./Rectangle 82.png"

const features = [
    { title: 'Dashboard', image: FirstCard, isLocked: true, id: true, path:"/dashboard" },
    { title: 'Product Listing', image: SecondCard, isLocked: false, id: false, path:"/product-list" },
    { title: 'Verified Products', image: ThirdCard, isLocked: true, id: false, path:"/verifiedproducts" },
    { title: 'Delivered Products', image: FourthCard, isLocked: true, id: false, path:"/deliveredproducts" },
    { title: 'Blogs & Posts', image: FifthCard, isLocked: false, id: false, path:"/blogs-posts" },
    { title: 'Customer Feedback', image: SixthCard, isLocked: true, id: false, path:"/customer-feedback" },
];

const FeatureGrid = () => {
    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-16 justify-center items-center w-[90vw] mx-auto">
            {features.map(({ id, title, image, isLocked,path }, index) => (
                <div key={index}>
                    <FeatureCard
                        id={id}
                        title={title}
                        image={image}
                        isLocked={isLocked}
                        path={path}
                    />
                    <h3 className="mt-2 font-[Helvetica] text-lg font-semibold text-start">{title}</h3>
                </div>
            ))}
        </div>
    );
};

export default FeatureGrid;
