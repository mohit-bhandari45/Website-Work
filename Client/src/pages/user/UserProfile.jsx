import React from 'react'
import Footer from '../../components/UniversalComp/Footer'

const UserProfile = () => {
  return (
    <>
      <div className="nav w-full h-[15vh] px-16 py-3 flex justify-between items-end border-b-2 border-opacity-20 border-black font-[Helvetica]">
        <div className="logo"><img className='w-32 h-16' src="src/assets/acrilc logo-09.png" alt="" /></div>
        <div className="elements flex justify-center items-center gap-4">
          <div className="input flex justify-center items-center bg-[#F5F5F5] rounded-sm px-2 w-72 h-10">
            <input type="text" className='w-full pl-1 bg-transparent h-full focus:border-none focus:outline-none' placeholder='What are you looking for?' name="" id="" />
            <img className='h-6' src="src/assets/Component 2.png" alt="" />
          </div>
          <div className="wish"><img src="src/assets/Wishlist.png" alt="" /></div>
          <div className="cart"><img src="src/assets/Cart1 with buy.png" alt="" /></div>
          <div className="account bg-black p-1 rounded-full"><img className='invert h-6' src="src/assets/User_alt_fill.png" alt="" /></div>
        </div>
      </div>
      <div className="body w-full h-[120vh] flex justify-center items-center mb-32">
        <div className="main w-[85vw] h-full">
          <div className="nav2 h-[25vh] flex justify-between items-center ">
            <div className="path"><span className='font-[Helvetica] text-gray-400'>Home</span><span className='px-2 text-gray-400'> / </span><span className='font-semibold font-[Helvetica]'>My Account</span></div>
            <div className="welcome"><span className='font-semibold font-[Helvetica]'>Welcome!</span> <span className='font-bold font-[Helvetica] text-[#ED8A73]'>Sambit</span></div>
          </div>
          <div className="content w-[85vw] h-[95vh] flex justify-start items-start">
            <div className="left w-[25%] h-full flex flex-col justify-start items-start gap-8">
              <div className="section1 w-full">
                <h1 className='font-bold font-[Helvetica] w-full pb-3'>Manage My Account</h1>
                <div className="subsection w-full pl-10 flex flex-col justify-center items-start gap-1">
                  <div className="one text-gray-500">My Profile</div>
                  <div className="two text-gray-500">Address Book</div>
                  <div className="three text-gray-500">My Payment Options</div>
                </div>
              </div>
              <div className="section2 w-full">
                <h1 className='font-bold font-[Helvetica] w-full pb-3'>My Orders</h1>
                <div className="subsection w-full pl-10 flex flex-col justify-center items-start gap-1">
                  <div className="one text-gray-500">My Returns</div>
                  <div className="two text-gray-500">My Cancellations</div>
                </div>
              </div>
              <div className="section2 w-full">
                <h1 className='font-bold font-[Helvetica] w-full pb-3'>My WishList</h1>
              </div>
            </div>
            <div className="right card w-[75%] px-16 py-8 h-full flex flex-col justify-center items-center shadow-md sha shadow-black rounded-md">
              <div className="details w-full h-[80%]">
                <h1 className='font-bold text-2xl font-[Helvetica] py-4'>Edit Your Profile</h1>
                <div className="first w-full flex justify-center items-center gap-8 py-3">
                  <div className="name w-1/2 flex flex-col justify-center gap-2">
                    <div className="head1 font-medium">First Name</div>
                    <div className="box h-12 rounded-sm bg-[#F5F5F5]"></div>
                  </div>
                  <div className="name w-1/2 flex flex-col justify-center gap-2">
                    <div className="head2 font-medium">Last Name</div>
                    <div className="box h-12 rounded-sm bg-[#F5F5F5]"></div>
                  </div>
                </div>
                <div className="first w-full flex justify-center items-center gap-8 py-3">
                  <div className="name w-1/2 flex flex-col justify-center gap-2">
                    <div className="head1 font-medium">Email</div>
                    <div className="box h-12 rounded-sm bg-[#F5F5F5]"></div>
                  </div>
                  <div className="name w-1/2 flex flex-col justify-center gap-2">
                    <div className="head2 font-medium">Address</div>
                    <div className="box h-12 rounded-sm bg-[#F5F5F5]"></div>
                  </div>
                </div>
                <div className="first w-full flex justify-center items-center gap-8 py-3">
                  <div className="name w-full flex flex-col justify-center gap-2">
                    <div className="head1 font-medium">Password Changes</div>
                    <div className="boxes flex flex-col justify-center gap-4">
                      <div className="box h-12 rounded-sm bg-[#F5F5F5]"></div>
                      <div className="box h-12 rounded-sm bg-[#F5F5F5]"></div>
                      <div className="box h-12 rounded-sm bg-[#F5F5F5]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="buttons w-full h-[20%] py-4 flex justify-end items-center">
                <div className="cancel px-8">Cancel</div>
                <div className="save"><button className='py-3 px-8 text-white bg-[#ED8A73] rounded-sm'>Save Changes</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default UserProfile
