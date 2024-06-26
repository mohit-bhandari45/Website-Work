import React, { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';

const Herosec2 = () => {
    const [texts, settexts] = useState([
        "Canvas",
        "Inspiration",
        "Decoration",
        "Creation",
        "Imagination",
        "Presents",
        "Celebration",
        "Journey",
        "Passion",
        "Expression"
    ]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((index) => index + 1);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='w-full h-screen flex justify-center items-center py-10'>
            <div className="text text-4xl lg:text-8xl font-serif font-semibold flex flex-col lg:flex-row w-full justify-center items-center gap-8">
                <div className="texts flex justify-center items-center gap-4">
                    <img className='w-48 h-auto' src="src/assets/acrilc logo-09.png" alt="" />
                    <div className="text">is your</div>
                </div>
                <div className='text-[#75A47F] w-full lg:w-[40%] text-4xl lg:text-8xl flex items-center justify-center lg:justify-start'>
                    <TextTransition springConfig={presets.default}>{texts[index % texts.length]}</TextTransition>
                </div>
            </div>
        </div>
    );
}

export default Herosec2;
