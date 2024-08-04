import React from 'react'
import { getVideoById } from '../../../apis/apis'
import { useNavigate } from 'react-router-dom'

const Story = ({ mainVideo }) => {
    const navigate = useNavigate()

    return (
        <div 
            onClick={() => navigate("/gallery/:id")} 
            className="relative h-[80vh] w-full overflow-hidden rounded-sm cursor-pointer"
        >
            <video 
                autoPlay 
                muted 
                loop 
                className='absolute inset-0 w-full h-full object-cover'
                src={`${getVideoById}/${mainVideo}`}
            ></video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end pb-7">
                <div className='flex items-center text-white gap-3 px-4'>
                    <div className="flex-shrink-0">
                        <img className='h-12 w-12 rounded-full object-cover' src="src/assets/Ellipse 40.png" alt="User avatar" />
                    </div>
                    <div className="flex-grow">
                        <div className="font-semibold text-lg">Tony</div>
                        <div className="text-sm line-clamp-2">
                            One of the fathers of modern Indian art, a leading painter in India's nationalist art school in Calcutta
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story