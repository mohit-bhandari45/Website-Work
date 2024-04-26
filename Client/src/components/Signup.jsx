import React from 'react'

const Signup = () => {
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
                            <div className="buttons w-full">
                                <button className='google flex justify-center items-center w-full gap-3 border-[2px] border-gray-300 rounded-md py-2 font-semibold'>
                                    <div className="svg">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 48 48">
                                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                        </svg>
                                    </div>
                                    <div className="text text-gray-700">Sign in with Google</div>
                                </button>
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
