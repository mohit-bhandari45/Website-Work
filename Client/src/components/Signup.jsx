import React, { useEffect, useState,useContext } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { DetailsContext } from '../context/context';

const Signup = () => {
    const value = useContext(DetailsContext)
    const navigate = useNavigate()
    const [userlogindet, setuserlogindet] = useState({
        name: "",
        email: ""
    })

    useEffect(() => {
        console.log(value.details)
        if (value.details.name.length > 0) {
            navigate("/about")
        }
    }, [value])


    return (
        <>
            <div className="absolute w-[100vw] h-[100vh] top-0 flex justify-center items-center text-black">
                <div className="cont relative h-[80%] w-[30%] bg-white z-50 rounded-md p-6 flex flex-col gap-10">
                    <div className="head flex justify-between items-center w-[100%]">
                        <div className="login text-3xl font-semibold text-gray-500">Sign Up</div>
                        <div className="cross"><svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 fJjczH"><title>cross</title><path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path></svg></div>
                    </div>
                    <div className="section flex flex-col gap-6">
                        <div className="input1 w-[100%]">
                            <input className='rounded-md border-[1px] h-12 w-[100%] pl-3 placeholder:text-[18px]' type="text" name="" id="" placeholder='Full Name' />
                        </div>
                        <div className="input1 w-[100%]">
                            <input className='rounded-md border-[1px] h-12 w-[100%] pl-3 placeholder:text-[18px]' type="text" name="" id="" placeholder='Email' />
                        </div>
                        <div className="check flex w-[100%] gap-2 pl-3">
                            <input type="checkbox" name="" id="" className='w-5 h-5 cursor-pointer' />
                            <div className="text text-sm">
                                I agree to Zomato's Terms of Service, Privacy Policy and Content Policies
                            </div>
                        </div>
                        <div className="section flex flex-col gap-3">
                            <div className="otp w-full">
                                <button className="text text-center w-full bg-[#18122B] text-white rounded-md py-3 text-[17px]">Create Account</button>
                            </div>
                            <div className="elements flex w-full justify-center items-center gap-1">
                                <div className="line text-center w-full border-gray-300 border-[1px] mt-1 opacity-30"></div>
                                <div className="or text-[20px]">or</div>
                                <div className="line text-center w-full border-gray-300 border-[1px] mt-1 opacity-30"></div>
                            </div>
                            <div className="text google text-gray-700 w-full flex justify-center items-center">
                                <GoogleLogin shape="pill" size="large" onSuccess={(credentialResponse) => {
                                        console.log(credentialResponse);
                                        let res = jwtDecode(credentialResponse.credential);
                                        value.setdetails({ ...value.details, ["name"]: res.name, ["email"]: res.email })
                                    }}
                                    onError={() => {
                                        console.log('Login Failed');
                                    }}/>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className="line text-center w-full border-gray-300 border-[1px] opacity-30"></div>
                        <div className="foot">
                            <span className='text-[17px] text-gray-600'>
                                Already have an account?</span> <button className='text-[#18122B] text-[17px]'>Log In</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
