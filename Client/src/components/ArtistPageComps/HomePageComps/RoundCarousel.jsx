import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const RoundCarousel = ({ items }) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 768, min: 640 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1,
        },
    };

    return (
        <Carousel responsive={responsive} infinite={true} className="p-4">
            {items.map((item, index) => (
                <div key={index} className="p-4 flex h-[60vh] justify-center items-center">
                    <div className="rounded-full overflow-hidden">
                        <img
                            src={item.src}
                            alt={item.alt}
                            className="object-cover sm:w-[95%] w-full h-full sm:h-[95%]"
                        />
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default RoundCarousel