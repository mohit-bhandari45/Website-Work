import React, { useEffect, useState, useContext, useRef } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate()
    const ref = useRef()
    const [bool1, setbool1] = useState(false)
    const [bool2, setbool2] = useState(false)
    const [counter, setcounter] = useState(0)
    const [googlesignupdetails, setgooglesignupdetails] = useState({
        name: "",
        email: ""
    })
    const [inputlogin, setinputlogin] = useState({
        name: "",
        email: ""
    })
    const [checked, setchecked] = useState(true)
    const [checkbox, setcheckbox] = useState(false)

    useEffect(() => {
        if (googlesignupdetails.name.length > 0) {
            navigate("/about")
            localStorage.setItem("details", JSON.stringify(googlesignupdetails))
        }
    }, [googlesignupdetails])


    useEffect(() => {
        if (inputlogin.name.length > 1 && inputlogin.email.includes("@") && inputlogin.email.endsWith(".com") && checkbox) {
            setchecked(false)
        } else {
            setchecked(true)
        }
    }, [inputlogin, checkbox])


    const handleChange = (e) => {
        setinputlogin({ ...inputlogin, [e.target.name]: e.target.value })
        console.log(inputlogin)
        console.log(counter)
        setcounter(counter + 1)
        if (counter >= 1) {
            if (e.target.name === "name") {
                if (inputlogin.name.length > 0) {
                    setbool1(false)
                } else {
                    setbool1(true)
                }
            }else {
                setbool2(false)
            }
        }

    }

    const handleChange2 = () => {
        setcheckbox(!checkbox)
    }

    const handleblur1 = (e) => {
        if (inputlogin.name.length < 2) {
            setbool1(true)
        } else {
            setbool1(false)
        }
    }

    const handleblur2 = (e) => {
        if (!inputlogin.email.includes("@") || !inputlogin.email.endsWith(".com")) {
            setbool2(true)
        } else {
            setbool2(false)
        }
    }



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
                            <input onBlur={handleblur1} ref={ref} onChange={handleChange} className='rounded-md border-[1px] h-12 w-[100%] pl-3 placeholder:text-[18px]' type="text" name="name" id="" placeholder='Full Name' value={inputlogin.name} />
                            {bool1 && <div className="error text-red-500 text-sm">Please enter a valid name</div>}
                        </div>
                        <div className="input1 w-[100%]">
                            <input onBlur={handleblur2} onChange={handleChange} className='rounded-md border-[1px] h-12 w-[100%] pl-3 placeholder:text-[18px]' type="text" name="email" id="" placeholder='Email' value={inputlogin.email} />
                            {bool2 && <div className="error text-red-500 text-sm">Invalid Email Id</div>}
                        </div>
                        <div className="check flex w-[100%] gap-2 pl-3">
                            <input onChange={handleChange2} checked={checkbox} type="checkbox" name="" id="" className='w-5 h-5 cursor-pointer' />
                            <div className="text text-sm">
                                I agree to Zomato's Terms of Service, Privacy Policy and Content Policies
                            </div>
                        </div>
                        <div className="section flex flex-col gap-3">
                            <div className="otp w-full">
                                <button disabled={checked} className={checked ? "text text-center w-full bg-gray-300 text-white rounded-md py-3 text-[17px]" : "text text-center w-full bg-[#18122B] text-white rounded-md py-3 text-[17px]"}>Create Account</button>
                            </div>
                            <div className="elements flex w-full justify-center items-center gap-1">
                                <div className="line text-center w-full border-gray-300 border-[1px] mt-1 opacity-30"></div>
                                <div className="or text-[20px]">or</div>
                                <div className="line text-center w-full border-gray-300 border-[1px] mt-1 opacity-30"></div>
                            </div>
                            <div className="text google text-gray-700 w-full flex justify-center items-center">
                                <GoogleLogin shape="pill" size="large" onSuccess={(credentialResponse) => {
                                    let res = jwtDecode(credentialResponse.credential);
                                    setuserlogindet({ ...googlesignupdetails, ["name"]: res.name, ["email"]: res.email })
                                }}
                                    onError={() => {
                                        console.log('Login Failed');
                                    }} />
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
