import 'animate.css';
import React, { useEffect, useRef, useState } from 'react';
import { CgSpinner } from "react-icons/cg";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

/* Toasts */
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastOptions from '../../../../helper/toastOptions';

/* Context API */
import { useBooleanContext } from '../../../../context/context';

/* Firebase */
import { getAuth, onAuthStateChanged, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { app } from '../../../../firebase';
import { handleNumberCheck, handleVerifyOtp } from '../../../../helper/auth';
const auth = getAuth(app)
const firestore = getFirestore(app)

const PhoneVerify = () => {

    /* Prev user email */
    const [email, setEmail] = useState("")

    /* Rest States */
    const [number, setNumber] = useState()
    const [bool, setBool] = useState(false)
    const [height, setHeight] = useState("60")
    const [user, setUser] = useState(null)
    const [otp, setOtp] = useState("")
    const { setBoolPopPhone, setPhoneToastBool, authBool, setAuthBool } = useBooleanContext()
    const [spinners, setSpinners] = useState({
        sendOtpSpinner: false,
        verifyOtpSpinner: false
    })
    const recaptchaRef = useRef(null)

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            try {
                if (user) {
                    setEmail(user.email)
                } else {
                    console.log("User is signed out.");
                }
            } catch (error) {
                console.log(error)
            }
        });
    }, [])

    const handleChangenum = (number) => {
        setNumber(number)
    }

    const sendOtp = async () => {
        setSpinners({ ...spinners, sendOtpSpinner: true })
        const check = await handleNumberCheck(number)
        if (check === false) {
            setNumber("")
        }
        console.log(check)
        if (check) {
            console.log("otp sending")
            if (recaptchaRef.current) {
                recaptchaRef.current.innerHTML = '<div id="recaptcha-container"></div>'
            }
            const verifier = new RecaptchaVerifier(auth, "recaptcha-container", {})

            const confirmation = await signInWithPhoneNumber(auth, number, verifier)
            console.log("joweng")
            toast.success("OTP sent successfully", toastOptions);
            setSpinners({ ...spinners, sendOtpSpinner: false })
            // setUser(confirmation)
        } else {
            setSpinners({ ...spinners, sendOtpSpinner: false })
        }
    }

    const verifyOtp = async () => {
        try {
            setSpinners({ ...spinners, verifyOtpSpinner: true })
            user.confirm(otp).then(async (result) => {
                setSpinners({ ...spinners, verifyOtpSpinner: false })
                if (handleVerifyOtp(email, number)) {
                    setPhoneToastBool(true)
                    setBoolPopPhone(false)
                    setAuthBool(!authBool)
                }
            })
        } catch (error) {
            setSpinners({ ...spinners, verifyOtpSpinner: false })
            toast.error("Invalid OTP", toastOptions);
            console.log(error)
        }
    }


    return (
        <>
            <div className="fixed w-[100vw] h-[100vh] top-0 flex justify-center items-center opacity-85 bg-black z-40">
            </div>
            <div className="fixed w-[100vw] h-[100vh] top-0 flex justify-center items-center text-black z-50">
                <div className={`${height + "%"} cont relative w-[30%] animate__animated animate__zoomIn bg-white z-50 rounded-md p-5 flex flex-col gap-9`}>
                    <div className="head flex justify-end items-center w-[100%]">
                        <div className="cross cursor-pointer"><svg onClick={() => { setBoolPopPhone(false) }} xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 fJjczH"><title>cross</title><path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path></svg></div>
                    </div>
                    <div className="login text-3xl font-semibold text-gray-500 text-center font-[Helvetica]">Verify Your Phone Number</div>
                    <div className={`${bool ? "border-black" : ""} w-[100%] rounded-md border-2`}>
                        <PhoneInput onFocus={() => {
                            setBool(true)
                        }
                        } onBlur={() => setBool(false)}
                            className='h-10 pl-4 gap-3 flex justify-center items-center text-xl border-none outline-none focus:ring-0 focus:outline-none focus:border-none'
                            defaultCountry="US"
                            placeholder=" | Phone"
                            value={number}
                            onChange={handleChangenum} />
                    </div>
                    <div className="otp w-full flex flex-col gap-6">
                        <div className="button">
                            <button
                                onClick={sendOtp}
                                className="text text-center w-full bg-[#18122B] flex justify-center items-center gap-3 text-white rounded-md py-3 text-[19px] font-[Helvetica]">
                                {spinners.sendOtpSpinner && <CgSpinner val={20} className='animate-spin' />}
                                Send One Time Password
                            </button>
                        </div>
                        <div ref={recaptchaRef}></div>
                    </div>
                    <div className="verify flex justify-center items-center gap-5 w-full">
                        <div className={`${spinners.verifyOtpSpinner ? "w-[50%]" : "w-[55%]"} enter`}>
                            <input onChange={(e) => { setOtp(e.target.value) }} value={otp} type="text" className='px-2 py-2 font-[Helvetica] border-2 w-full border-black rounded-md text-xl' placeholder='Enter OTP' /></div>
                        <div className={`${spinners.verifyOtpSpinner ? "w-[50%]" : "w-[45%]"} button`}>
                            <button
                                onClick={verifyOtp}
                                className='bg-black text-white w-full px-8 flex justify-center items-center gap-2 py-3 rounded-md font-bold font-[Helvetica]'>
                                {spinners.verifyOtpSpinner && <CgSpinner val={20} className='animate-spin' />}
                                {spinners.verifyOtpSpinner ? "Verifying" : "Verify"} Otp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PhoneVerify

