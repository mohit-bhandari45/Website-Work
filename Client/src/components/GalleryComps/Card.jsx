import React from 'react'

const Card = ({image}) => {
  return (
    <div className='w-[18vw] h-[40vh] flex flex-col gap-2 justify-center items-center'>
      <div className="image w-[75%] h-[70%]">
        <img className='w-full h-full' src={image} alt="" />
      </div>
      <div className="firstelements w-[75%] text-sm font-[Helvetica] flex justify-between items-center">
        <div className="one">4.3</div>
        <div className="two flex justify-center items-center gap-1">
            <div className="stars flex justify-center items-center gap-1">
                <img className='w-3' src="src/assets/Star.png" alt="" />
                <img className='w-3' src="src/assets/Star.png" alt="" />
                <img className='w-3' src="src/assets/Star.png" alt="" />
                <img className='w-3' src="src/assets/Star.png" alt="" />
                <img className='w-3' src="src/assets/Star.png" alt="" />
                <img className='w-3' src="src/assets/Star.png" alt="" />
            </div>
            <div className="text">14</div>
        </div>
      </div>
      <div className="secondelements font-[Helvetica] text-sm flex justify-between items-center w-[75%]">
        <div className="first">$505</div>
        <div className="second">
            <span className='px-1'>M.R.P:</span>
            <span>$499.00</span>
        </div>
      </div>
    </div>
  )
}

export default Card
