/* React App */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/* Toast */
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* Context API */
import { useBooleanContext } from '../../../../context/context';

/* Auth Functions */
import { handleGoogleAuth, handleSignUp } from '../../../../helper/auth';
import toastOptions from '../../../../helper/toastOptions';

const Signup = ({ setsignbool, setbool }) => {
    const [counter, setcounter] = useState(0)
    const [height, setHeight] = useState(85)
    const { setToastBool, setBoolPop, authBool, setAuthBool } = useBooleanContext()

    /* User Signup using input fields */
    const [inputDetails, setInputDetails] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        password: false
    })

    const [checked, setChecked] = useState(true)
    const [checkbox, setCheckbox] = useState(false)
    useEffect(() => {
        if (inputDetails.name.length > 1 && inputDetails.password.length >= 8 && inputDetails.email.includes("@") && inputDetails.email.endsWith(".com") && checkbox) {
            setChecked(false)
        } else {
            setChecked(true)
        }
    }, [inputDetails, checkbox])


    /* HandleChange for input fields */
    const handleInputChange = (e) => {
        setInputDetails({ ...inputDetails, [e.target.name]: e.target.value })
        setcounter(counter + 1)
        if (counter >= 1) {
            if (e.target.name === "name") {
                if (inputDetails.email.length === 0) {
                    if (inputDetails.name.length > 0) {
                        setErrors({ ...errors, name: false })
                    } else {
                        setErrors({ ...errors, name: true })
                    }
                } else {
                    if (inputDetails.name.length >= 0) {
                        setErrors({ ...errors, name: false })
                    } else {
                        setErrors({ ...errors, name: true })
                    }
                }
            } else if (e.target.name === "password") {
                setErrors({ ...errors, password: false })
            }
            else {
                setErrors({ ...errors, email: false })
            }
        }
    }

    /* HandleChange for checkbox fields */
    const handleCheckboxChange = () => {
        setCheckbox(!checkbox)
    }

    /* onremovedfocus/onblur, these function will get executed. */
    const handleblur1 = (e) => {
        if (inputDetails.name.length < 2) {
            setErrors({ ...errors, name: true })
        } else {
            setErrors({ ...errors, name: false })
        }
    }
    const handleblur2 = (e) => {
        if (!inputDetails.email.includes("@") || !inputDetails.email.endsWith(".com")) {
            setErrors({ ...errors, email: true })
        } else {
            setErrors({ ...errors, email: false })
        }
    }
    const handleblur3 = (e) => {
        if (inputDetails.password.length < 8) {
            setErrors({ ...errors, password: true })
        } else {
            setErrors({ ...errors, password: false })
        }
    }


    /* Height change on getting or removing errors */
    const handleheightChange = () => {
        setHeight((prevheight) => {
            return prevheight + 3
        })
    }


    /* Email and Password Auth */
    const handleSubmit = async (e) => {
        const result =await handleSignUp(inputDetails)
        console.log(result)
        if (result) {
            setAuthBool(!authBool)
            setbool(false)
            setBoolPop(false)
            setToastBool(true)
        }else{
            toast.error("User already exist", toastOptions)
        }
    }

    /* Google Auth */
    const googleProviderFn = async () => {
        const status = await handleGoogleAuth()
        if (status) {
            setAuthBool(!authBool)
            setbool(false)
            setBoolPop(false)
            setToastBool(true)
        }else{
            toast.error("Error Login",toastOptions)
        }
    }


    return (
        <div>
            <div className="fixed w-[100vw] h-[100vh] top-0 flex justify-center items-center opacity-85 bg-black z-30">
            </div>
            <div className="fixed w-[100vw] h-[100vh] top-0 flex justify-center items-center z-30 font-[Helvetica]">
                <div className={`${errors.name || errors.email || errors.password ? handleheightChange : height + "%"} cont relative w-[30%] bg-white z-50 rounded-md px-6 py-4 flex flex-col gap-11`}>
                    <div className="head flex justify-between items-center w-[100%]">
                        <div className="login text-3xl font-semibold text-gray-500">Sign Up</div>
                        <div className="cross cursor-pointer">
                            <svg onClick={() => {
                                setbool(false)
                            }} xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 fJjczH"><title>cross</title><path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path></svg>
                        </div>
                    </div>
                    <div className="section flex flex-col gap-4">
                        <div className="input1 w-[100%]">
                            <input onBlur={handleblur1} onChange={handleInputChange} className='rounded-md border-[1px] h-12 w-[100%] pl-3 placeholder:text-[18px]' type="text" name="name" id="" placeholder='Full Name' value={inputDetails.name} />
                            {errors.name && <div className="error text-red-500 text-sm">Please enter a valid name</div>}
                        </div>
                        <div className="input1 w-[100%]">
                            <input onBlur={handleblur2} onChange={handleInputChange} className='rounded-md border-[1px] h-12 w-[100%] pl-3 placeholder:text-[18px]' type="text" name="email" id="" placeholder='Email' value={inputDetails.email} />
                            {errors.email && <div className="error text-red-500 text-sm">Invalid Email Id</div>}
                        </div>
                        <div className="input1 w-[100%]">
                            <input onBlur={handleblur3} onChange={handleInputChange} className='rounded-md border-[1px] h-12 w-[100%] pl-3 placeholder:text-[18px]' type="password" name="password" id="" placeholder='Password' value={inputDetails.password} />
                            {errors.password && <div className="error text-red-500 text-sm">Password must be upto 8-16 characters</div>}
                        </div>
                        <div className="check flex w-[100%] gap-2 pl-3">
                            <input onChange={handleCheckboxChange} checked={checkbox} type="checkbox" name="" id="" className='w-5 h-5 cursor-pointer' />
                            <div className="text text-sm">
                                I agree to ours Terms of Service, Privacy Policy and Content Policies
                            </div>
                        </div>
                        <div className="section flex flex-col gap-3">
                            <div className="otp w-full">
                                <button onClick={handleSubmit} disabled={checked} className={checked ? "text text-center w-full bg-gray-300 text-white rounded-md py-3 text-[17px]" : "text text-center w-full bg-[#18122B] text-white rounded-md py-3 text-[17px]"}>Create Account</button>
                            </div>
                            <div className="elements flex w-full justify-center items-center gap-1">
                                <div className="line text-center w-full border-gray-300 border-[1px] mt-1 opacity-30"></div>
                                <div className="or text-[20px]">or</div>
                                <div className="line text-center w-full border-gray-300 border-[1px] mt-1 opacity-30"></div>
                            </div>
                            <div className="text google text-gray-700 w-full flex gap-2 justify-center items-center">
                                <div className="google">
                                    <button onClick={googleProviderFn} className='text-center border-[1px] w-48 rounded-full py-2 font-semibold text-sm flex justify-center gap-3 items-center'>
                                        <div className="img"><img className='w-5 h-5' src="src/assets/icons8-google-48.png" alt="" /></div>
                                        <div className="text">Sign up with Google</div>
                                    </button>
                                </div>
                                <div className=''>
                                    <Link to="/artistsignup">
                                        <button className='text-center border-[1px] w-44 bg-[#18122B] text-white rounded-full py-2 font-semibold text-sm'>Are you an artist?</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className="line text-center w-full border-gray-300 border-[1px] opacity-30"></div>
                        <div className="foot">
                            <span className='text-[17px] text-gray-600'>
                                Already have an account?</span> <button onClick={() => { setsignbool(false) }} className='text-[#18122B] text-[17px]'>Log In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
