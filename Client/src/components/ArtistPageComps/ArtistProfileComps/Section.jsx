import React from 'react'
const Section = () => {
  return (
    <>
      <div className='w-full h-[125vh] relative flex flex-col justify-center items-center'>
        <div className="img w-full h-[80%] flex justify-center items-center"><img className='w-[95%]' src="src/assets/Rectangle 4162.png" alt="" /></div>
        <div className="profileimage absolute top-[48%] left-28">
          <img src="src/assets/Ellipse 55.png" alt="" />
        </div>
        <div className="details w-[95%] flex justify-end items-center h-[20%]">
          <div className="main w-[60%]">
            <div className="name flex justify-start items-center py-6 gap-5">
              <h1 className='text-4xl font-bold font-[Helvetica]'>Vasundhara Devi</h1>
              <div className="rating flex justify-center items-center gap-1">
                <img className='h-4' src="src/assets/Star.png" alt="" />
                <img className='h-4' src="src/assets/Star.png" alt="" />
                <img className='h-4' src="src/assets/Star.png" alt="" />
                <img className='h-4' src="src/assets/Star.png" alt="" />
                <img className='h-4' src="src/assets/Star.png" alt="" />
              </div>
              <div className="total font-semibold">20k remaining</div>
            </div>
            <div className="para font-semibold text-gray-600 font-[Helvetica] w-[90%]">
              Vasundhara Devi, a revered pot artist hailing from the vibrant land of Bengal, has dedicated over 45 years to honing her craft. Her journey as an artist began as a young enthusiast, driven by a passion to breathe life into clay and transform it into exquisite pieces of art.
            </div>
            <div className="followers font-bold text-xl font-[Helvetica] py-4">
              <span>500 followers . </span>
              <span>40 following</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section
