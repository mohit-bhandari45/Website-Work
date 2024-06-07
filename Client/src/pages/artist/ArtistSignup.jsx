import React from 'react'

const ArtistSignup = () => {
  return (
    <>
      <div className="design w-full h-[100vh] absolute z-10">
        <img src="src/assets/Rectangle 74.png" className='h-52 relative top-0 left-32' alt="" />
        <img src="src/assets/Rectangle 73.png" className='h-[95%] relative -top-52 left-0' alt="" />
        <img src="src/assets/Rectangle 75.png" className='h-[21.4%] relative -top-[46%] left-[28%]' alt="" />
        <img src="src/assets/Rectangle 73 (1).png" className='relative h-[84%] -top-[140%] left-[87.6%]' alt="" />
        <img src="src/assets/Rectangle 78.png" className='relative -top-[155.1%] left-[85.8%]' alt="" />
      </div>
      <div className='w-full cont h-[100vh] flex justify-center items-center font-[Helvetica] '>
        <div className="main w-[95%] gap-72 h-full bg-white flex justify-start items-center">
          <img className='w-80 h-40 relative z-20' src="src/assets/acrilc logo-09.png" alt="" />
          <div className="form h-full relative z-20 w-[33%] flex justify-center items-center">
            <form className='h-[80%] rounded-xl bg-[#8C2B2B] bg-opacity-20 w-full flex flex-col justify-center items-center px-8 py-2'>
              <h1 className='font-bold text-4xl py-3'>Signup</h1>
              <div className="icons flex justify-center items-center gap-5 py-2">
                <img src="src/assets/2702602 (1).png" alt="" />
                <img src="src/assets/Facebook-logo-blue-circle-large-transparent-png.png" alt="" />
              </div>
              <div className="elements flex justify-center items-center h-[10%] w-full">
                <div className="line1 h-[1%] bg-black w-[45%]"></div>
                <div className="or h-[1%] w-[10%] flex justify-center items-center uppercase font-medium">or</div>
                <div className="line2 h-[1%] w-[45%] bg-black"></div>
              </div>
              <div className="inputs w-full h-full flex flex-col gap-8 justify-center items-center">
                <div className="name w-full box-border h-[12%] border-2 border-black flex justify-center items-center">
                  <div className="icon"><img src="src/assets/User_alt_fill.png" alt="" /></div>
                  <input className='w-[90%] bg-transparent placeholder:text-xl font-bold pl-2 pt-1 flex justify-center items-center h-full placeholder:text-black' placeholder='Name' type="text" name="" id="" />
                </div>
                <div className="name w-full box-border h-[12%] border-2 border-black flex justify-center items-center">
                  <div className="icon"><img src="src/assets/Message_fill.png" alt="" /></div>
                  <input className='w-[90%] bg-transparent placeholder:text-xl font-bold pl-2 pt-1 flex justify-center items-center h-full placeholder:text-black' placeholder='Email' type="email" name="" id="" />
                </div>
                <div className="name w-full box-border h-[12%] border-2 border-black flex justify-center items-center">
                  <div className="icon"><img src="src/assets/Lock_fill.png" alt="" /></div>
                  <input className='w-[90%] bg-transparent placeholder:text-xl font-bold pl-2 pt-1 flex justify-center items-center h-full placeholder:text-black' placeholder='Password' type="password" name="" id="" />
                </div>
                <div className="name w-full box-border h-[12%] border-2 border-black flex justify-center items-center">
                  <div className="icon"><img src="src/assets/Subtract.png" alt="" /></div>
                  <input className='w-[90%] bg-transparent placeholder:text-xl font-bold pl-2 pt-1 flex justify-center items-center h-full placeholder:text-black' placeholder='Portfolio' type="" name="" id="" />
                </div>
                <div className="button"><button type='submit' className='bg-[#ED9999] py-3 px-10 rounded-full'>Submit</button></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArtistSignup
