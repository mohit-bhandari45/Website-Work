import React from 'react'

/* Images */
import FaceBook from "../../assets/Icon-Facebook.png"
import Group from "../../assets/Group.png"
import Instagram from "../../assets/icon-instagram.png"
// import Group from "../../assets/Group.png"
import LinkedIn from "../../assets/Icon-Linkedin.png"
import PlayStore from "../../assets/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png"
import AppStore from "../../assets/download-appstore.png"
import QRCode from "../../assets/Qrcode 1.png"

const Footer = () => {
    return (
        <div className="footer h-[60vh] px-16 py-5 flex justify-center items-center gap-3 bg-black w-full font-[Helvetica] text-white">
            <div className="first w-[20%] h-[50%] flex flex-col justify-start items-start px-5 gap-4">
                <h1 className='font-bold text-2xl'>Exclusive</h1>
                <div className='font-bold text-lg'>Subscribe</div>
                <div className="buttons flex flex-col justify-center items-start gap-3">
                    <div className="off">Get 10% off your first order</div>
                    <div className="button">
                        <button className='bg-transparent px-2 py-2 flex justify-between items-center border-2 w-60 border-white rounded-md'>
                            <div>Enter your email</div>
                            <div className="logo"><img src="src/assets/icon-send.png" className='' alt="" /></div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="first w-[20%] h-[50%] flex flex-col justify-start items-start px-5 gap-6">
                <div className='font-bold text-lg'>Support</div>
                <div className='w-40'>Prem Nagar, Dehradun, Uttarakhand 248007
                </div>
                <div className="contact flex-col flex justify-center items-start gap-1">
                    <div className="email">connectacrilic@gmail.com</div>
                    <div className="number">+1800-88888-9999</div>
                </div>
            </div>
            <div className="first w-[20%] h-[50%] gap-6 flex flex-col justify-start items-start">
                <div className='font-bold text-lg'>Account</div>
                <div className="accounts flex flex-col gap-5">
                    <div>My Account</div>
                    <div>Login / Register</div>
                    <div>Cart</div>
                    <div>Wishlist</div>
                    <div>Shop</div>
                </div>
            </div>
            <div className="first w-[20%] h-[50%] gap-6 flex-col flex justify-start items-start">
                <div className='font-bold text-lg'>Quick Link</div>
                <div className="links flex flex-col gap-5">
                    <div>Privacy Policy</div>
                    <div>Terms of use</div>
                    <div className='uppercase'>faq</div>
                    <div>Contact</div>
                </div>
            </div>
            <div className="first w-[20%] h-[50%] gap-6 flex-col flex justify-start items-start">
                <div className='font-bold text-lg'>Download App</div>
                <div className="scan flex flex-col gap-5">
                    <div className="content flex flex-col gap-3">
                        <div className='text-sm'>Save 30% with App New User Only</div>
                        <div className="images flex gap-4">
                            <div className="qr"><img className='w-24 h-24' src={QRCode} alt="" /></div>
                            <div className='flex flex-col justify-center items-center gap-4'>
                                <img className='h-9 w-28' src={PlayStore} alt="" />
                                <img className='h-9 w-28' src={AppStore} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="icons flex justify-center items-center gap-8">
                        <div className="facebook"><img src={FaceBook} alt="" /></div>
                        <div className="twitter"><img src="src/assets/Group.png" alt="" /></div>
                        <div className="instagram"><img src={Instagram} alt="" /></div>
                        <div className="linkedin"><img src={LinkedIn} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
