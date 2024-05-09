import React, { useEffect, useState } from 'react'
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
    ])
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            2000,
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className='w-full min-h-[70vh] md:min-h-[80vh]: xl:min-h-[100vh] flex justify-center items-center'>
            <div className="text text-5xl md:text-8xl font-serif font-semibold flex flex-col xl:flex-row md:flex-col w-full justify-center items-center gap-8">
                <div className="texts flex flex-col md:flex-row justify-center items-center gap-4">
                    <img className='w-[100%] md:w-1/2 h-28 md:h-48' src="src/assets/acrilc logo-09.png" alt="" />
                    <div className="text">is your</div>
                </div>
                <div className='text-[#75A47F] w-[30%] md:w-[40%] text-[45px] md:text-9xl xl:text-8xl flex flex-row justify-center items-center xl:justify-start'><TextTransition springConfig={presets.default}>{texts[index % texts.length]}</TextTransition></div>
            </div>
        </div>
    )
}

export default Herosec2