import React from 'react'
import Card from './Subcomps/Card'

const Frames2 = () => {
    return (
        <div className='main h-[100vh] flex justify-center items-center gap-10 font-[Helvetica]'>
            <Card image="src/assets/Rectangle 7.png" price="1000"/>
            <Card image="src/assets/Rectangle 8.png" price="5000"/>
            <Card image="src/assets/Rectangle 9.png" price="10000"/>
            <Card image="src/assets/Rectangle 10.png" price="23000"/>
        </div>
    )
}

export default Frames2