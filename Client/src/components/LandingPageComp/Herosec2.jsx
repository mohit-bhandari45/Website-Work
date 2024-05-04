import React, { useEffect, useState } from 'react'

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

    const [counter, setcounter] = useState(0)
    useEffect(() => {
        setInterval(() => {
            setcounter((prevIndex) => (prevIndex + 1) % texts.length)
        }, 1000);
    }, [texts])

    return (
        <div className='w-full h-[40vh] flex justify-center items-center'>
            <div className="text text-8xl font-serif font-semibold flex w-full justify-center items-center gap-10">
                <div className="texts">Acrilic Is Your</div>
                <span className='text-[#75A47F] w-[40%]'>{texts[counter]}</span>
            </div>
        </div>
    )
}

export default Herosec2