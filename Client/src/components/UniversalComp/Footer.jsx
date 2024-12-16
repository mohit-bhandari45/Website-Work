import React, { useState } from 'react'

/* Images */
import FaceBook from "../../assets/Icon-Facebook.png"
import Group from "../../assets/Group.png"
import Instagram from "../../assets/icon-instagram.png"
import LinkedIn from "../../assets/Icon-Linkedin.png"
import PlayStore from "../../assets/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png"
import AppStore from "../../assets/download-appstore.png"
import QRCode from "../../assets/Qrcode 1.png"
import { sendEmail } from '../../apis/apis'
import { toast } from 'react-toastify'


const Footer = () => {
    const [email, setEmail] = useState("")
    const handleChange = async (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = async () => {
        const response = await fetch(sendEmail, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        })
        if (response.status === 200) {
            toast.success("Email sent successfully")
            setEmail("")
        }
        else {
            toast.error("Email not sent")
        }
    }

    return (
        <div className="footer 2xl:h-[60vh] py-10 md:py-16 2xl:py-5 px-4 md:px-8 2xl:px-16 flex flex-col md:flex-row flex-wrap 2xl:flex-nowrap justify-center 2xl:justify-center items-start 2xl:items-start 2xl:pt-20 gap-8 md:gap-16 2xl:gap-3 bg-black w-full font-[Helvetica] text-white">
            <div className="first w-full md:w-[30%] 2xl:w-[20%] flex flex-col justify-center items-start gap-4">
                <h1 className='font-bold text-3xl md:text-4xl 2xl:text-2xl'>Exclusive</h1>
                <div className='font-bold text-xl 2xl:text-lg'>Subscribe</div>
                <div className="buttons flex flex-col justify-center items-start gap-3 w-full">
                    <div className="off text-lg 2xl:text-base">Get 10% off your first order</div>
                    <div className="button w-full flex">
                        <input
                            onChange={handleChange}
                            type="email"
                            value={email}
                            placeholder="Enter your email"
                            className='bg-transparent px-2 py-2 flex-grow border-2 border-white rounded-l-md'
                        />
                        <button
                            onClick={handleSubmit}
                            className='bg-white text-black px-4 py-2 rounded-r-md'
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
            <div className="second w-full md:w-[25%] 2xl:w-[20%] flex flex-col justify-start items-start gap-6">
                <div className='font-bold text-xl 2xl:text-lg'>Support</div>
                <div className='w-full 2xl:w-40 text-lg 2xl:text-base'>Prem Nagar, Dehradun, Uttarakhand 248007</div>
                <div className="contact flex-col flex justify-center items-start gap-1 text-lg 2xl:text-base">
                    <div className="email">connectacrilic@gmail.com</div>
                    <div className="number">+1800-88888-9999</div>
                </div>
            </div>
            <div className="third w-full md:w-[25%] 2xl:w-[20%] gap-6 md:gap-5 md:pl-20 2xl:pl-0 flex flex-col justify-start items-start">
                <div className='font-bold text-xl 2xl:text-lg'>Account</div>
                <div className="accounts flex flex-col gap-5 md:gap-2 text-lg 2xl:text-base">
                    <div>My Account</div>
                    <div>Login / Register</div>
                    <div>Cart</div>
                    <div>Wishlist</div>
                    <div>Shop</div>
                </div>
            </div>
            <div className="fourth w-full md:w-[30%] 2xl:w-[20%] gap-6 flex-col flex justify-start items-start">
                <div className='font-bold text-xl 2xl:text-lg'>Quick Link</div>
                <div className="links flex flex-col gap-5 text-lg 2xl:text-base md:gap-2">
                    <div>Privacy Policy</div>
                    <div>Terms of use</div>
                    <div className='uppercase'>faq</div>
                    <div>Contact</div>
                </div>
            </div>
            <div className="fifth w-full md:w-[30%] 2xl:w-[20%] gap-6 flex-col flex justify-start items-start">
                <div className='font-bold text-xl 2xl:text-lg'>Download App</div>
                <div className="scan flex flex-col gap-5">
                    <div className="content flex flex-col gap-3">
                        <div className='text-lg 2xl:text-sm'>Save 30% with App New User Only</div>
                        <div className="images flex flex-wrap gap-4">
                            <div className="qr"><img className='w-24 h-24' src={QRCode} alt="" /></div>
                            <div className='flex flex-col justify-center items-center gap-4'>
                                <img className='h-9 w-28' src={PlayStore} alt="" />
                                <img className='h-9 w-28' src={AppStore} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="icons flex justify-start items-center gap-8">
                        <div className="facebook"><img src={FaceBook} alt="" /></div>
                        <div className="twitter"><img src={Group} alt="" /></div>
                        <div className="instagram"><img src={Instagram} alt="" /></div>
                        <div className="linkedin"><img src={LinkedIn} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer