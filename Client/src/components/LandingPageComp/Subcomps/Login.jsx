import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


const Login = (props) => {
    const [value, setValue] = useState()
    const [logindetails, setlogindetails] = useState({
        username: "",
        password: ""
    })

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

    return (
        <>
            <div className="fixed w-[100vw] h-[100vh] top-0 flex justify-center items-center opacity-85 bg-black">
            </div>
            <div className="fixed w-[100vw] h-[100vh] top-0 flex justify-center items-center text-black">
                <div className="cont relative h-[70%] w-[30%] bg-white z-50 rounded-md p-6 flex flex-col gap-9">
                    <div className="head flex justify-between items-center w-[100%]">
                        <div className="login text-3xl font-semibold text-gray-500">Login</div>
                        <div className="cross cursor-pointer"><svg onClick={() => { props.setbool(false) }} xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 fJjczH"><title>cross</title><path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path></svg></div>
                    </div>
                    <div className="w-[100%] rounded-md border-[1px]">
                        <PhoneInput className='h-10 pl-4 gap-3 flex justify-center items-center text-xl border-none outline-none focus:placeholder-red-600'
                            defaultCountry="US"
                            placeholder=" | Phone"
                            value={value}
                            onChange={handleChangenum} />
                    </div>
                    <div className="section flex flex-col gap-8">
                        <div className="otp w-full">
                            <button className="text text-center w-full bg-[#18122B] text-white rounded-md py-3 text-[19px]">Send one time password</button>
                            <div className="elements flex w-full justify-center items-center gap-1">
                                <div className="line text-center w-full border-gray-300 border-[1px] mt-1"></div>
                                <div className="or text-[20px]">or</div>
                                <div className="line text-center w-full border-gray-300 border-[1px] mt-1"></div>
                            </div>
                        </div>
                        <div className="buttons w-full flex flex-col gap-6 justify-center items-center">
                            {/* <button className='email flex justify-center items-center w-full gap-3 border-[2px] border-gray-300 rounded-md py-2 font-semibold'>
                                <div className="svg"><svg xmlns="http://www.w3.org/2000/svg" fill="#EF4F5F" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 fLhyDr"><title>mail-fill</title><path d="M10 9.58c-1.62 0-10-4.76-10-4.76v-0.74c0-0.92 0.74-1.66 1.66-1.66h16.68c0.92 0 1.66 0.74 1.66 1.66l-0.020 0.84c0 0-8.28 4.66-9.98 4.66zM10 11.86c1.78 0 9.98-4.46 9.98-4.46l0.020 10c0 0.92-0.74 1.66-1.66 1.66h-16.68c-0.92 0-1.66-0.74-1.66-1.66l0.020-10c0 0 8.36 4.46 9.98 4.46z"></path></svg></div>
                                <div className="text text-gray-700">Continue with Email</div>
                            </button> */}
                            <GoogleLogin shape="pill" size="large" onSuccess={(credentialResponse) => {
                                let res = jwtDecode(credentialResponse.credential);
                                setgooglesignupdetails({ ...googlesignupdetails, ["name"]: res.name, ["email"]: res.email })
                            }}
                                onError={() => {
                                    console.log('Login Failed');
                                }} />
                            <div className=''>
                                <button className='text-center border-[1px] w-44 bg-[#18122B] text-white rounded-full py-2 font-semibold text-sm flex justify-center items-center'>Are you an artist?</button>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className="line text-center w-full border-gray-300 border-[1px]"></div>
                            <div className="foot">
                                <span className='text-[17px] text-gray-600'>New to acrilc?</span> <button onClick={() => props.setsignbool(true)} className='text-[#18122B] text-[17px]'>Create Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
