import React, { useEffect, useState } from 'react';
import Story from './Subcomps/Story';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { getStories } from '../../../apis/apis';

const Stories = () => {
    const [storyDetails, setStoryDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function getVideos() {
        try {
            setIsLoading(true);
            const req = await fetch(getStories);
            const res = await req.json();
            setStoryDetails(res);
        } catch (error) {
            console.error("Error fetching stories:", error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getVideos();
    }, []);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1500 },
            items: 4
        },
        minDesktop: {
            breakpoint: { max: 1500, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    if (isLoading) {
        return <div className="flex justify-center items-center h-64">Loading stories...</div>;
    }

    return (
        <div className="w-full py-8 relative">
            <Carousel 
                responsive={responsive}
                autoPlay={false}
                slidesToSlide={1}
                keyBoardControl={true}
                draggable={true}
                infinite
                showDots={true}
                shouldResetAutoplay={true}
                focusOnSelect={true}
                autoPlaySpeed={1500}
                className="pb-12" // Increased bottom padding for dots
                itemClass="px-2" // Added horizontal padding for items
                dotListClass="bottom-0" // Positioned dots at the bottom
            >
                {storyDetails.map((storyDetail, index) => (
                    <div key={index} className="flex justify-center">
                        <Story mainVideo={storyDetail} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Stories;
