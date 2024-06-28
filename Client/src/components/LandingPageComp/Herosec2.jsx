import React, { useEffect, useState } from 'react'
import TextTransition, { presets } from 'react-text-transition';
import { getLogo } from '../../apis/apis';

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
        <div className='w-full h-[100vh] flex justify-center items-center py-10'>
            
            <div className="text text-8xl font-serif font-semibold flex w-full justify-center items-center gap-8">
                <div className="texts flex justify-center items-center gap-4">
                    <img className='w-96 h-48' src={getLogo} alt="" />
                    <div className="text">is your</div>
                </div>
                <div className='text-[#75A47F] w-[40%] text-8xl flex items-center justify-start'><TextTransition springConfig={presets.default}>{texts[index % texts.length]}</TextTransition></div>
            </div>

        </div>
    )
}

export default Herosec2