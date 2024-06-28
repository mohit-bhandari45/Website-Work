import React from 'react'

const FramesLast = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-[90%] h-[98vh] flex flex-col md:flex-row justify-center items-center gap-5'>
        <div className="left h-full w-full md:w-[30%]">
          <img className='h-full w-full' src="src/assets/Rectangle 30.png" alt="" />
        </div>
        <div className="right w-full md:w-[70%] h-full flex flex-col justify-center items-center gap-5 overflow-hidden">
          <div className="top w-full flex flex-col md:flex-row justify-center items-center gap-5 h-1/2">
            <img className='h-full w-full md:w-[43%]' src="src/assets/Rectangle 31 (1).png" alt="" />
            <img className='h-full w-full md:w-[43%]' src="src/assets/Rectangle 33.png" alt="" />
            <img className='h-full w-full md:w-[43%]' src="src/assets/Rectangle 32.png" alt="" />
          </div>
          <div className="bottom h-1/2 flex flex-col md:flex-row justify-center items-center gap-5 w-full">
            <img className='w-full md:w-[41%] h-full' src="src/assets/Rectangle 35.png" alt="" />
            <img className='w-full md:w-[41%] h-full' src="src/assets/Rectangle 36.png" alt="" />
            <img className='w-full md:w-[47%] h-full' src="src/assets/Rectangle 34.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FramesLast
