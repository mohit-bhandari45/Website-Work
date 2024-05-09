import React from 'react'
import Card from './Subcomps/Card'

const Frames6 = () => {
    return (
        <div className='main h-[100%] xl:h-1/2 w-full flex justify-center items-center gap-10 font-[Helvetica] flex-wrap overflow-hidden'>
            <Card image="src/assets/Rectangle 23.png" price="1000" />
            <Card image="src/assets/Rectangle 24.png" price="5000" />
            <Card image="src/assets/Rectangle 25.png" price="10000" />
            <Card image="src/assets/Rectangle 26.png" price="23000" />
        </div>
    )
}

export default Frames6
