import React from 'react';

const Section = () => {
  return (
    <>
      <div className='w-full h-[125vh] relative flex flex-col justify-center items-center sm:h-[100vh]'>
        <div className="img w-full h-[80%] flex justify-center items-center sm:h-[60%]">
          <img className='w-[95%]' src="src/assets/Rectangle 4162.png" alt="" />
        </div>
        <div className="profileimage absolute top-[48%] left-28 sm:top-[40%] sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2">
          <img src="src/assets/Ellipse 55.png" alt="" />
        </div>
        <div className="details w-[95%] flex justify-end items-center h-[20%] sm:flex-col sm:items-center sm:justify-center sm:text-center">
          <div className="main w-[60%] sm:w-full">
            <div className="name flex justify-start items-center py-6 gap-5 sm:flex-col sm:gap-2 sm:py-2">
              <h1 className='text-4xl font-bold font-[Helvetica] sm:text-2xl'>Vasundhara Devi</h1>
              <div className="rating flex justify-center items-center gap-1">
                <img className='h-4' src="src/assets/Star.png" alt="" />
                <img className='h-4' src="src/assets/Star.png" alt="" />
                <img className='h-4' src="src/assets/Star.png" alt="" />
                <img className='h-4' src="src/assets/Star.png" alt="" />
                <img className='h-4' src="src/assets/Star.png" alt="" />
              </div>
              <div className="total font-semibold">20k remaining</div>
            </div>
            <div className="para font-semibold text-gray-600 font-[Helvetica] w-[90%] sm:w-full sm:px-4">
              Vasundhara Devi, a revered pot artist hailing from the vibrant land of Bengal, has dedicated over 45 years to honing her craft. Her journey as an artist began as a young enthusiast, driven by a passion to breathe life into clay and transform it into exquisite pieces of art.
            </div>
            <div className="followers font-bold text-xl font-[Helvetica] py-4 sm:py-2">
              <span>500 followers . </span>
              <span>40 following</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
