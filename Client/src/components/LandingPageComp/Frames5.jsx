import React from 'react'
import Card from './Subcomps/Card'

const Frames5 = () => {
    return (
        <>
            <div className="main1 h-[150vh] flex flex-col w-full">
                <div className='main h-1/2 w-full flex justify-center items-center gap-10 font-[Helvetica]'>
                    <Card image="src/assets/Rectangle 15.png" price="1000" />
                    <Card image="src/assets/Rectangle 16.png" price="5000" />
                    <Card image="src/assets/Rectangle 17.png" price="10000" />
                    <Card image="src/assets/Rectangle 18.png" price="23000" />
                </div>
                <div className='main h-1/2 w-full flex justify-center items-center gap-10 font-[Helvetica]'>
                    <Card image="src/assets/Rectangle 23.png" price="1000" />
                    <Card image="src/assets/Rectangle 24.png" price="5000" />
                    <Card image="src/assets/Rectangle 25.png" price="10000" />
                    <Card image="src/assets/Rectangle 26.png" price="23000" />
                </div>
            </div>
        </>
    )
}

export default Frames5