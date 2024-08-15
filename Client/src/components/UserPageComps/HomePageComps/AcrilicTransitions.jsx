import React, { useEffect, useState } from 'react'
import TextTransition, { presets } from 'react-text-transition';
import { getLogo } from '../../../apis/apis';

const AcrilicTransition = () => {
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
        <div className='w-full h-[100vh] flex justify-center items-center py-10'>
            <div className="text text-8xl font-serif font-semibold w-full flex xl:flex-row flex-col justify-center items-center xl:gap-8 gap-20">
                <div className="texts flex justify-center items-center gap-8 md:gap-4 w-full xl:w-[50%] flex-col md:flex-row">
                    <img className='w-[50%] md:w-[35%] xl:w-[50%] h-[10%]' src={getLogo} alt="" />
                    <div className="text">is your</div>
                </div>
                <div className='text-[#75A47F] w-[40%] text-8xl flex items-center justify-center xl:justify-start'>
                    <TextTransition className='text-7xl md:text-8xl' springConfig={presets.default}>{texts[index % texts.length]}</TextTransition>
                </div>
            </div>
        </div>
    )
}

export default AcrilicTransition