import React from 'react'

const Mid = ({title}) => {
    return (
        <div className='h-[20vh] flex justify-center items-center py-3'>
            <div className='font-bold text-4xl md:text-4xl xl:text-6xl hover:scale-110 transition-all duration-100 ease-in-out cursor-pointer'>{title}</div>
        </div>
    )
}

export default Mid
