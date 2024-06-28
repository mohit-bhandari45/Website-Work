import React from 'react';

const Footer = () => {
    return (
        <div className="footer px-4 py-5 flex flex-col md:flex-row justify-center items-center gap-3 bg-black text-white">
            {/* Column 1 */}
            <div className="first w-full md:w-1/5 flex flex-col justify-start items-start px-4 gap-4">
                <h1 className='font-bold text-2xl'>Exclusive</h1>
                <div className='font-bold text-lg'>Subscribe</div>
                <div className="buttons flex flex-col justify-center items-start gap-3">
                    <div className="off">Get 10% off your first order</div>
                    <div className="button">
                        <button className='bg-transparent px-2 py-2 flex justify-between items-center border-2 w-full md:w-60 border-white rounded-md'>
                            <div>Enter your email</div>
                            <div className="logo"><img src="src/assets/icon-send.png" className='' alt="Send Icon" /></div>
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Column 2 */}
            <div className="first w-full md:w-1/5 flex flex-col justify-start items-start px-4 gap-6">
                <div className='font-bold text-lg'>Support</div>
                <div className='w-full'>Prem Nagar, Dehradun, Uttarakhand 248007</div>
                <div className="contact flex flex-col gap-1">
                    <div className="email">connectacrilic@gmail.com</div>
                    <div className="number">+1800-88888-9999</div>
                </div>
            </div>
            
            {/* Column 3 */}
            <div className="first w-full md:w-1/5 gap-6 flex flex-col justify-start items-start">
                <div className='font-bold text-lg'>Account</div>
                <div className="accounts flex flex-col gap-3">
                    <div>My Account</div>
                    <div>Login / Register</div>
                    <div>Cart</div>
                    <div>Wishlist</div>
                    <div>Shop</div>
                </div>
            </div>
            
            {/* Column 4 */}
            <div className="first w-full md:w-1/5 gap-6 flex-col flex justify-start items-start">
                <div className='font-bold text-lg'>Quick Links</div>
                <div className="links flex flex-col gap-3">
                    <div>Privacy Policy</div>
                    <div>Terms of Use</div>
                    <div className='uppercase'>FAQ</div>
                    <div>Contact</div>
                </div>
            </div>
            
            {/* Column 5 */}
            <div className="first w-full md:w-1/5 gap-6 flex-col flex justify-start items-start">
                <div className='font-bold text-lg'>Download App</div>
                <div className="scan flex flex-col gap-3">
                    <div className="content flex flex-col gap-2">
                        <div className='text-xs md:text-sm'>Save 30% with App New User Only</div>
                        <div className="images flex gap-2">
                            <div className="qr"><img className='w-16 h-16 md:w-24 md:h-24' src="src/assets/Qrcode 1.png" alt="QR Code" /></div>
                            <div className='flex flex-col justify-center items-center gap-2'>
                                <img className='h-7 w-24 md:w-28' src="src/assets/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png" alt="Google Play Store" />
                                <img className='h-7 w-24 md:w-28' src="src/assets/download-appstore.png" alt="App Store" />
                            </div>
                        </div>
                    </div>
                    <div className="icons flex justify-center items-center gap-4">
                        <div className="facebook"><img src="src/assets/Icon-Facebook.png" alt="Facebook" /></div>
                        <div className="twitter"><img src="src/assets/Group.png" alt="Twitter" /></div>
                        <div className="instagram"><img src="src/assets/icon-instagram.png" alt="Instagram" /></div>
                        <div className="linkedin"><img src="src/assets/Icon-Linkedin.png" alt="LinkedIn" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
