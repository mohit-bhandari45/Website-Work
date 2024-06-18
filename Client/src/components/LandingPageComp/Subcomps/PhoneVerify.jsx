import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Link } from 'react-router-dom';
import 'animate.css';

/* Context API */
import { useBooleanContext } from '../../../context/context';

/* Firebase */
import { app } from '../../../firebase';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, RecaptchaVerifier, signInWithPhoneNumber, signInWithPopup } from "firebase/auth"
import { getFirestore, collection, addDoc, where, query, getDocs, updateDoc } from "firebase/firestore"
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const firestore = getFirestore(app)

const PhoneVerify = ({ setboolpopphone }) => {
    const [value, setValue] = useState()
    const [bool, setBool] = useState(false)
    const [height, setHeight] = useState("60")
    const [user, setUser] = useState(null)
    const [otp, setOtp] = useState("")
    const navigate = useNavigate()
    // const { setBoolPopPhone,setPhoneToastBool } = useBooleanContext()
    const { setBoolPopPhone } = useBooleanContext()

    const handleChangenum = (value) => {
        setValue(value)
    }

    const toastOptions = {
        position: "bottom-right",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
    }

    const sendOtp = async () => {
        try {
            /* Height change */
            setHeight((prevheight) => {
                return prevheight + 3
            })
            const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
            const confirmation = await signInWithPhoneNumber(auth, value, recaptcha)
            setUser(confirmation)
        } catch (err) {
            console.log(err)
        }
    }

    const verifyOtp = async () => {
        try {
            // const data = await user.confirm(otp)
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    try {
                        // Query the users collection to find the document with the user's email
                        const q = query(collection(firestore, "users"), where("email", "==", user.email));
                        const querySnapshot = await getDocs(q);

                        // Check if we found any documents
                        if (!querySnapshot.empty) {
                            // Get the first matching document (assuming emails are unique)
                            const userDocRef = querySnapshot.docs[0].ref;

                            // Update the document with the new value
                            await updateDoc(userDocRef, {
                                value: value
                            });

                            console.log("User document updated successfully.");
                            // setPhoneToastBool(true)
                            setBoolPopPhone(false)
                        } else {
                            console.log("No matching documents found.");
                        }
                    } catch (error) {
                        console.error("Error updating document: ", error);
                    }
                } else {
                    console.log("User is signed out.");
                }
            });
        } catch (error) {
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
                            value={value}
                            onChange={handleChangenum} />
                    </div>
                    <div className="otp w-full flex flex-col gap-6">
                        <div className="button">
                            <button onClick={sendOtp} className="text text-center w-full bg-[#18122B] text-white rounded-md py-3 text-[19px] font-[Helvetica]">Send One Time Password</button>
                        </div>
                        <div id="recaptcha"></div>
                    </div>
                    <div className="verify flex justify-center items-center gap-5 w-full">
                        <div className="enter w-[60%]"><input onChange={(e) => { setOtp(e.target.value) }} value={otp} type="text" className='px-2 py-2 font-[Helvetica] border-2 w-full border-black rounded-md text-xl' placeholder='Enter OTP' /></div>
                        <div className="button w-[40%]"><button onClick={verifyOtp} className='bg-black text-white w-full px-8 py-3 rounded-md font-bold font-[Helvetica]'>Verify Otp</button></div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default PhoneVerify

