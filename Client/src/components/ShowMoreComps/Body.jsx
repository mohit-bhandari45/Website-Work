import React from 'react'

const Body = () => {
  return (
    <div className='h-[75vh] font-[Helvetica]'>
      <div className="image flex w-full justify-center items-center">
        <img className='w-52 h-24' src="src/assets/acrilc logo-09.png" alt="" />
      </div>
      <div className="main w-full flex justify-start items-center pb-24">
        <div className="left text-4xl flex flex-col gap-5 px-20 transition-all duration-150 ease-in-out">

          <div className="1 h-10 overflow-hidden hover:h-56 cursor-pointer transition-all duration-1000 ease-in-out">
            <div className='hover:underline hover:underline-offset-8'>Refund Policy</div>
            <div className='h-96 py-3 text-lg w-96 px-2'>
              <div>- We offer a 7-day return policy for eligible products. Items must be unused and in their original packaging.</div>
              <div>- Refunds will be processed within 7-10 business days after receiving the returned product.</div>
            </div>
          </div>

          <div className="1 h-10 overflow-hidden hover:h-72 cursor-pointer transition-all duration-1000 ease-in-out">
            <div className='hover:underline hover:underline-offset-8'>Shipping Policy</div>
            <div className='h-96 py-3 text-lg w-96 px-2'>
              <div>- We provide standard and expedited shipping options.</div>
              <div>- Standard shipping typically takes 4-7 business days, while expedited shipping takes 2-3 business days.</div>
              <div>- Shipping costs are calculated at checkout based on the destination and selected shipping method</div>
            </div>
          </div>

          <div className="1 h-10 overflow-hidden hover:h-60 cursor-pointer transition-all duration-1000 ease-in-out">
            <div className='hover:underline hover:underline-offset-8'>Privacy Policy</div>
            <div className='h-96 py-3 text-lg w-96 px-2'>
              <div>- We prioritize the protection of your personal information and adhere to strict privacy practices.</div>
              <div>- We collect and use your data only for order processing and communication purposes.</div>
              <div>- Your information is not shared with third parties without your consent.</div>
            </div>
          </div>

          <div className="1 h-10 overflow-hidden hover:h-56 cursor-pointer transition-all duration-1000 ease-in-out">
            <div className='hover:underline hover:underline-offset-8'>Terms of Service</div>
            <div className='h-96 py-3 text-lg w-96 px-2'>
              <div>- By using our website, you agree to abide by our terms and conditions.</div>
              <div>- We reserve the right to modify or terminate services at any time without notice.</div>
              <div>- Users are responsible for maintaining the confidentiality of their account information.</div>
            </div>
          </div>

          <div className="1 h-10 overflow-hidden hover:h-56 cursor-pointer transition-all duration-1000 ease-in-out">
            <div className='hover:underline hover:underline-offset-8'>Contact Information</div>
            <div className='h-96 py-3 text-lg w-96 px-2'>
              <div>- For any inquiries or assistance, please contact us at connectacrilc@gmail.com or +91 89108 79169.</div>
              <div>- Our customer support team is available in all major Metro Cities to assist you with any questions or concerns</div>
            </div>
          </div>


        </div>
      </div>
      <div className="email w-full flex justify-center items-center">
        <button className='rounded-full px-8 py-2 bg-[#ec8a73] text-white flex justify-center items-center text-xl font-semibold'>Email Us</button>
      </div>
    </div>
  )
}

export default Body
