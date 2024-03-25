import React, { useEffect, useState } from 'react'
// import "./Login.css"

const Login = (props) => {
    const [visible, setvisible] = useState("form opacity-100 absolute border rounded-3xl ml-24 form bg-[#e9d7b5] w-[480px] h-[530px]")
    const [sliderstyle, setSliderStyle] = useState("left-[0px] toggle absolute bg-[#e9d7b5] w-[190px] rounded-2xl h-[53px] transition-all duration-150")
    const [btn1style, setbtn1style] = useState("cursor-pointer text-black")
    const [btn2style, setbtn2style] = useState("cursor-pointer text-black")
    const [userPass, setUserPass] = useState("py-3 px-4 w-[380px] border rounded-2xl mb-2 mt-2 text-xl transiton-all duration-150")
    const [mobile, setMobile] = useState("py-3 px-4 block w-[380px] border rounded-2xl mb-2 mt-2 text-xl transiton-all duration-150")
    const [bottomsign, setbottomsign] = useState("absolute top-[175px] border-none opacity-100 bg-[#ec8a73] text-white w-[380px] flex justify-center items-center py-4 font-semibold text-2xl border rounded-2xl mb-10 mt-10 transiton-all duration-150")
    const [bottomlogin, setbottomlogin] = useState("absolute top-[175px] border-none opacity-100 bg-[#ec8a73] text-white w-[380px] flex justify-center items-center py-4 font-semibold text-2xl border rounded-2xl mb-10 mt-10 transiton-all duration-150")
    const [forget, setforget] = useState("opacity-0 pl-16 text-[blue] transiton-all duration-150")
    const [foot, setfoot] = useState("flex justify-center items-center mt-20 opacity-100 transiton-all duration-150")

    if (props.visible == true) {
        setvisible("form opacity-100 absolute border rounded-3xl ml-24 form bg-[#e9d7b5] w-[480px] h-[530px]")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        console.log(e.target)
    }


    // useEffect(() => {
    const handleButton1 = (e) => {
        setSliderStyle("left-[0px] toggle absolute bg-[#e9d7b5] w-[190px] rounded-2xl h-[53px] transition-all duration-150")
        setbtn2style("cursor-pointer text-black")
        setbtn1style("cursor-pointer text-white")
        setUserPass("py-4 px-4 w-[380px] border rounded-2xl mt-6 text-xl transiton-all duration-150")
        setMobile("py-3 px-4 hidden w-[380px] border rounded-2xl mb-4 mt-3 text-xl transiton-all duration-150")
        setbottomsign("absolute top-[175px] border-none opacity-0 bg-[#ec8a73] text-white w-[380px] flex justify-center items-center py-4 font-semibold text-2xl border rounded-2xl mb-10 mt-10 transiton-all duration-150")
        setbottomlogin("absolute top-[175px] border-none opacity-100 bg-[#ec8a73] text-white w-[380px] flex justify-center items-center py-4 font-semibold text-2xl border rounded-2xl mb-10 mt-10 transiton-all duration-150")
        setforget("opacity-100 pl-16 text-[blue] transiton-all duration-150")
        setfoot("flex justify-center items-center mt-20 opacity-100 transiton-all duration-150")
    }

    const handleButton2 = (e) => {
        setSliderStyle("left-[188px] toggle absolute bg-[#e9d7b5] w-[190px] rounded-2xl h-[53px] transition-all duration-150")
        setbtn2style("cursor-pointer text-white")
        setbtn1style("cursor-pointer text-black")
        setUserPass("py-3 px-4 w-[380px] border rounded-2xl mb-2 mt-2 text-xl transiton-all duration-150")
        setMobile("py-3 px-4 block w-[380px] border rounded-2xl mb-2 mt-2 text-xl transiton-all duration-150")
        setbottomlogin("absolute top-[175px] border-none opacity-0 bg-[#ec8a73] text-white w-[380px] flex justify-center items-center py-4 font-semibold text-2xl border rounded-2xl mb-10 mt-10 transiton-all duration-150")
        setbottomsign("absolute top-[175px] border-none opacity-100 bg-[#ec8a73] text-white w-[380px] flex justify-center items-center py-4 font-semibold text-2xl border rounded-2xl mb-10 mt-10 transiton-all duration-150")
        setforget("opacity-0 pl-16 text-[blue] transiton-all duration-150")
        setfoot("flex justify-center items-center mt-20 opacity-0 transiton-all duration-150")
    }
    // }, [visible,sliderstyle,btn1style,btn2style,userPass,mobile,bottomsign,forget,bottomlogin,foot])



    return (
        <>
            <div className={visible}>
                <div className='relative mt-6 flex flex-col justify-center items-center'>
                    <div className="relative content">
                        <h1 className='text-4xl text-center font-bold text-[#ec8a73]'>WELCOME</h1>
                        <p className=''>Begin Your Color Journey</p>
                    </div>
                    <div className="relative con w-[380px] h-[55px] border rounded-2xl  text-xl font-medium m-5 flex items-center bg-white ">
                        <div className={sliderstyle} ></div>
                        <div className="relative z-10 w-[400px] btns flex justify-center items-center gap-36">
                            <button className={btn1style} onClick={handleButton1}>Login</button>
                            <button className={btn2style} onClick={handleButton2}>Signup</button>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className='relative flex flex-col h-[180px]' action="">
                        <input className={userPass} placeholder='Username' type="text" name="" id="user" />
                        <input className={userPass} placeholder='Password' type="password" name="" id="pass" />
                        <input className={mobile} placeholder='Mobile Number' type="number" name="" id="num" />
                        <input className={bottomsign} type="submit" value="Signup" />
                        <input className={bottomlogin} type="submit" value="Login" />
                        {/* <inp className={bottomsign}>Signup</button>
                        <button className={bottomlogin}>Login</button> */}
                    </form>
                </div>
                <p className={forget}>Forget Password?</p>
                <div className={foot}>
                    <span>Not a member? <span className='text-[blue]'>Signup now</span></span>
                </div>
            </div>
        </>
    )
}

export default Login
