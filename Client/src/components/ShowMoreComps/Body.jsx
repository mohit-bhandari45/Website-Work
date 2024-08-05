import React from 'react'
import { Link } from 'react-router-dom'
import { getLogo } from '../../apis/apis'

const Body = () => {
  return (
    <div className='font-[Helvetica] relative pb-5'>
      <div className="image flex w-full justify-center items-center p-4">
        <Link to="/"><img className='w-36 h-auto sm:w-52 sm:h-24' src={getLogo} alt="" /></Link>
      </div>

      <div className="main w-full flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start pb-12 lg:pb-24 px-4 lg:px-20 relative">
        <div className="left text-2xl sm:text-3xl lg:text-4xl flex flex-col pt-8 lg:pt-32 gap-5 px-4 2xl:px-20 transition-all duration-150 ease-in-out relative top-0 w-full lg:w-auto">
          {[
            { title: "Refund Policy", content: "- We offer a 7-day return policy for eligible products. Items must be unused and in their original packaging.\n- Refunds will be processed within 7-10 business days after receiving the returned product." },
            { title: "Shipping Policy", content: "- We provide standard and expedited shipping options.\n- Standard shipping typically takes 4-7 business days, while expedited shipping takes 2-3 business days.\n- Shipping costs are calculated at checkout based on the destination and selected shipping method" },
            { title: "Privacy Policy", content: "- We prioritize the protection of your personal information and adhere to strict privacy practices.\n- We collect and use your data only for order processing and communication purposes.\n- Your information is not shared with third parties without your consent." },
            { title: "Terms of Service", content: "- By using our website, you agree to abide by our terms and conditions.\n- We reserve the right to modify or terminate services at any time without notice.\n- Users are responsible for maintaining the confidentiality of their account information." },
            { title: "Contact Information", content: "- For any inquiries or assistance, please contact us at connectacrilc@gmail.com or +91 89108 79169.\n- Our customer support team is available in all major Metro Cities to assist you with any questions or concerns" }
          ].map((item, index) => (
            <div key={index} className="group">
              <div className='cursor-pointer hover:underline hover:underline-offset-8 pb-2 lg:text-start text-center'>{item.title}</div>
              <div className='max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-1000 ease-in-out'>
                <div className='py-3 text-base sm:text-lg w-full sm:w-96 px-2 whitespace-pre-line'>
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="image right-0 mt-8 lg:mt-0">
          <img className='w-full max-w-[80vw] h-auto lg:w-[40vw] lg:h-[80vh] object-contain' src="src/assets/Refund.png" alt="" />
        </div>
      </div>

      <div className="email w-full flex justify-center items-center mt-8 lg:mt-0">
        <button className='rounded-full px-6 sm:px-8 py-2 bg-[#ec8a73] text-white flex justify-center items-center text-lg sm:text-xl font-semibold'>Email Us</button>
      </div>
    </div>
  )
}

export default Body