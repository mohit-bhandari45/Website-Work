import React from 'react';

const Card = ({ image, price }) => {
    return (
        <div className="img4 min-h-[70%] flex flex-col justify-center items-stretch">
            <div className="imagemain h-[80%]">
                <img className="object-cover h-full" src={image} alt="" />
            </div>
            <div className="h-[20%]">
                <div className="text1 flex flex-col sm:flex-row justify-between py-1">
                    <div className="flex1 flex justify-center items-center gap-4 px-1">
                        <div className="painting font-bold text-lg sm:text-xl">Painting</div>
                        <div className="stars flex gap-1 justify-center items-center">
                        </div>
                    </div>
                    <div className="bookmark">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="#000000" fill="none">
                            <path d="M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className="price font-bold px-1 text-lg sm:text-xl">&#x20b9; {price}</div>
                <div className="btn">
                    <button className="bg-black text-white py-1 px-3 rounded-full text-sm sm:text-base my-1">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
