import React, { useState } from 'react';

const Story = ({ mainimage, image, name, para }) => {
    const [changeimage, setchangeimage] = useState("");

    const handleChange = (e) => {
        setchangeimage(URL.createObjectURL(e.target.files[0]));
        console.log(changeimage);
    };

    return (
        <div className="img1 h-[94vh] w-full relative py-20 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
            <img className="absolute top-20 h-[75vh] w-full object-cover" src={changeimage.length > 1 ? changeimage : mainimage} alt="" />
            <input
                onChange={handleChange}
                className="absolute top-4 right-4 z-20 cursor-pointer"
                type="file"
                accept="image/*"
            />
            <div className="flex justify-center items-end h-[75vh] bg-[#00000082] relative z-10">
                <div className="flex text-white px-5 gap-3 justify-center py-5">
                    <div className="image">
                        <img className="h-12 w-12 rounded-full" src={image} alt="" />
                    </div>
                    <div className="cont pt-1">
                        <div className="font-semibold">{name}</div>
                        <div className="para font-normal">
                            {para}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Story;
