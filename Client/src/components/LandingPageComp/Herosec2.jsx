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
        <div className='w-full h-[100vh] flex justify-center items-center'>
            <div className="text text-8xl font-serif font-semibold flex xl:flex-row md:flex-col w-full justify-center items-center gap-14">
                <div className="texts flex justify-center items-center gap-7">
                    <img className='w-[3/4] h-48' src="src/assets/acrilc logo-09.png" alt="" />
                    <div className="text">is your</div>
                </div>
                <div className='text-[#75A47F] w-[40%] text-8xl flex flex-row md:justify-center md:items-center xl:justify-start'><TextTransition springConfig={presets.default}>{texts[index % texts.length]}</TextTransition></div>
            </div>
        </div>
    )
}

export default Herosec2