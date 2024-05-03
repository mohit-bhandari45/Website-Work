import React, { useEffect, useState } from 'react'

const Herosec2 = () => {
    const [texts, settexts] = useState([
        "Idealogy",
        "Feeling",
        "Vision",
        "Love",
        "Inspiration",
        "Expression",
        "Emotion"
    ])

    const [counter, setcounter] = useState(0)
    useEffect(() => {
        setInterval(() => {
            setcounter((prevIndex) => (prevIndex + 1) % texts.length)
        }, 1000);
    }, [texts])

    return (
        <div className='w-full h-[40vh] flex justify-center items-center'>
            <div className="text text-8xl font-serif font-semibold">
                Your Art Is Your <span className='text-[#75A47F]'>{texts[counter]}</span>
            </div>
        </div>
    )
}

export default Herosec2