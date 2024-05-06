import React from 'react'

const Card = ({name,para}) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-black mb-4 text-center">{name}</h2>
            <p className='text-balance text-center'>{para}</p>
        </div>
    )
}

export default Card
