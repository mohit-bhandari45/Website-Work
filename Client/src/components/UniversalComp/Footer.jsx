import React from 'react';

const Footer = () => {
  return (
    <div className="footer h-auto md:h-[60vh] px-4 md:px-16 py-5 flex flex-wrap justify-center items-start gap-3 bg-black w-full font-[Helvetica] text-white">
      <div className="first w-full md:w-[20%] flex flex-col justify-start items-start px-5 gap-4">
        <h1 className='font-bold text-2xl'>Exclusive</h1>
        <div className='font-bold text-lg'>Subscribe</div>
        <div className="buttons flex flex-col justify-center items-start gap-3">
          <div className="off">Get 10% off your first order</div>
          <div className="button">
            <button className='bg-transparent px-2 py-2 flex justify-between items-center border-2 w-full md:w-60 border-white rounded-md'>
              <div>Enter your email</div>
              <div className="logo"><img src="src/assets/icon-send.png" className='' alt="" /></div>
            </button>
          </div>
        </div>
      </div>
      <div className="first w-full md:w-[20%] flex flex-col justify-start items-start px-5 gap-6">
        <div className='font-bold text-lg'>Support</div>
        <div className='w-full md:w-40'>Prem Nagar, Dehradun, Uttarakhand 248007</div>
        <div className="contact flex flex-col gap-1">
          <div className="email">connectacrilic@gmail.com</div>
          <div className="number">+1800-88888-9999</div>
        </div>
      </div>
      <div className="first w-full md:w-[20%] flex flex-col justify-start items-start gap-6">
        <div className='font-bold text-lg'>Account</div>
        <div className="accounts flex flex-col gap-5">
          <div>My Account</div>
          <div>Login / Register</div>
          <div>Cart</div>
          <div>Wishlist</div>
          <div>Shop</div>
        </div>
      </div>
      <div className="first w-full md:w-[20%] flex flex-col justify-start items-start gap-6">
        <div className='font-bold text-lg'>Quick Links</div>
        <div className="links flex flex-col gap-5">
          <div>Privacy Policy</div>
          <div>Terms of Use</div>
          <div className='uppercase'>FAQ</div>
          <div>Contact</div>
        </div>
      </div>
      <div className="first w-full md:w-[20%] flex flex-col justify-start items-start gap-6">
        <div className='font-bold text-lg'>Download App</div>
        <div className="scan flex flex-col gap-5">
          <div className="content flex flex-col gap-3">
            <div className='text-sm'>Save 30% with App New Users Only</div>
            <div className="images flex gap-4">
              <div className="qr"><img className='w-24 h-24' src="src/assets/Qrcode 1.png" alt="" /></div>
              <div className='flex flex-col justify-center items-center gap-4'>
                <img className='h-9 w-28' src="src/assets/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png" alt="" />
                <img className='h-9 w-28' src="src/assets/download-appstore.png" alt="" />
              </div>
            </div>
          </div>
          <div className="icons flex justify-center items-center gap-8">
            <div className="facebook"><img src="src/assets/Icon-Facebook.png" alt="" /></div>
            <div className="twitter"><img src="src/assets/Group.png" alt="" /></div>
            <div className="instagram"><img src="src/assets/icon-instagram.png" alt="" /></div>
            <div className="linkedin"><img src="src/assets/Icon-Linkedin.png" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
