import React from 'react'

const Testimonials = () => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center p-4'>
      <div className='w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        <div className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 aspect-[3/4] md:aspect-[2/4.1]">
          <img className='w-full h-full object-cover' src="src/assets/Rectangle 30.png" alt="" />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="aspect-square">
            <img className='w-full h-full object-cover' src="src/assets/Rectangle 31 (1).png" alt="" />
          </div>
          <div className="aspect-square">
            <img className='w-full h-full object-cover' src="src/assets/Rectangle 33.png" alt="" />
          </div>
          <div className="aspect-square hidden lg:block">
            <img className='w-full h-full object-cover' src="src/assets/Rectangle 32.png" alt="" />
          </div>
          <div className="aspect-square">
            <img className='w-full h-full object-cover' src="src/assets/Rectangle 35.png" alt="" />
          </div>
          <div className="aspect-square">
            <img className='w-full h-full object-cover' src="src/assets/Rectangle 36.png" alt="" />
          </div>
          <div className="aspect-square hidden lg:block">
            <img className='w-full h-full object-cover' src="src/assets/Rectangle 34.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials