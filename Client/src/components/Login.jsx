import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Login = (props) => {
    const [bool, setbool] = useState(false)
    const [visible, setvisible] = useState(false)
    const [registerdetails, setregisterdetails] = useState({
        username: "",
        password: "",
        email: ""
    })


    const [logindetails, setlogindetails] = useState({
        username: "",
        password: ""
    })


    useEffect(() => {
        if (props.visible1 == true) {
            setbool(true)
            setvisible(true)
        } else if (props.visible2 == true) {
            setbool(false)
            setvisible(true)
        }
    }, [props])


    const handleChange = (e) => {
        if (bool) {
            setlogindetails({ ...logindetails, [e.target.name]: e.target.value })
        } else {
            setregisterdetails({ ...registerdetails, [e.target.name]: e.target.value })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (registerdetails.email.length > 0) {
            //register route
            handleregistervalidation()
        } else {
            //login route
        }

        setregisterdetails({
            username: "",
            password: "",
            email: ""
        })
        setlogindetails({
            username: "",
            password: ""
        })
    }

    const handleregistervalidation = () => {

    }


    const handleButton1 = (e) => {
        // toast('🦄 Wow so easy!', {
        //     position: "bottom-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        //     transition: "Bounce",
        // });
        setbool(true)
        setregisterdetails({
            username: "",
            password: "",
            email: ""
        })
    }

    const handleButton2 = (e) => {
        setbool(false)
        setlogindetails({
            username: "",
            password: ""
        })
    }


    return (
        <>
            <div className={visible ? "form opacity-100 absolute border rounded-3xl ml-24 form bg-[#e9d7b5] w-[480px] h-[520px]" : "form opacity-0 absolute border rounded-3xl ml-24 form bg-[#e9d7b5] w-[480px] h-[520px]"}>
                <div className='relative mt-6 flex flex-col justify-center items-center'>
                    <div className="relative content">
                        <h1 className='text-4xl text-center font-bold text-[#ec8a73]'>WELCOME</h1>
                        <p className=''>Begin Your Color Journey</p>
                    </div>
                    <div className="relative con w-[380px] h-[55px] border rounded-2xl  text-xl font-medium m-5 flex items-center bg-white ">
                        <div className={bool ? "left-[0px] toggle absolute bg-[#e9d7b5] w-[190px] rounded-2xl h-[53px] transition-all duration-150" : "left-[188px] toggle absolute bg-[#e9d7b5] w-[190px] rounded-2xl h-[53px] transition-all duration-150"} ></div>
                        <div className="relative z-10 w-[400px] btns flex justify-center items-center gap-36">
                            <button className={bool ? "cursor-pointer text-white" : "cursor-pointer text-black"} onClick={handleButton1}>Login</button>
                            <button className={bool ? "cursor-pointer text-black" : "cursor-pointer text-white"} onClick={handleButton2}>Signup</button>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className='relative flex flex-col h-[180px]' action="">
                        <input onChange={handleChange} className={bool ? "py-4 px-4 w-[380px] border rounded-2xl mt-6 text-xl transiton-all duration-150" : "py-3 px-4 w-[380px] border rounded-2xl mb-2 mt-2 text-xl transiton-all duration-150"} placeholder='Username' type="text" name="username" id="user" value={bool ? logindetails.username : registerdetails.username} />
                        <input onChange={handleChange} className={bool ? "py-4 px-4 w-[380px] border rounded-2xl mt-6 text-xl transiton-all duration-150" : "py-3 px-4 w-[380px] border rounded-2xl mb-2 mt-2 text-xl transiton-all duration-150"} placeholder='Password' type="password" name="password" id="pass" value={bool ? logindetails.password : registerdetails.password} />
                        <input onChange={handleChange} className={bool ? "py-3 px-4 hidden w-[380px] border rounded-2xl mb-4 mt-3 text-xl transiton-all duration-150" : "py-3 px-4 block w-[380px] border rounded-2xl mb-2 mt-2 text-xl transiton-all duration-150"} placeholder='Email' type="email" name="email" id="num" value={bool ? "" : registerdetails.email} />

                        <input className={bool ? "absolute cursor-pointer top-[175px] border-none opacity-0 bg-[#ec8a73] text-white w-[380px] flex justify-center items-center py-4 font-semibold text-2xl border rounded-2xl mb-10 mt-10 transiton-all duration-150" : "absolute cursor-pointer top-[175px] border-none opacity-100 bg-[#ec8a73] text-white w-[380px] flex justify-center items-center py-4 font-semibold text-2xl border rounded-2xl mb-10 mt-10 transiton-all duration-150"} type="submit" value="Signup" />

                        <input className={bool ? "absolute cursor-pointer top-[175px] border-none opacity-100 bg-[#ec8a73] text-white w-[380px] flex justify-center items-center py-4 font-semibold text-2xl border rounded-2xl mb-10 mt-10 transiton-all duration-150" : "absolute cursor-pointer top-[175px] border-none opacity-0 bg-[#ec8a73] text-white w-[380px] flex justify-center items-center py-4 font-semibold text-2xl border rounded-2xl mb-10 mt-10 transiton-all duration-150"} type="submit" value="Login" />
                    </form>
                </div>
                <p className={bool ? "opacity-100 pl-16 text-[blue] transiton-all duration-150" : "opacity-0 pl-16 text-[blue] transiton-all duration-150"}>Forget Password?</p>
                <div className={bool ? "flex justify-center items-center mt-20 opacity-100 transiton-all duration-150" : "flex justify-center items-center mt-20 opacity-0 transiton-all duration-150"}>
                    <span>Not a member? <span onClick={() => setbool(false)} className='text-[blue] cursor-pointer'>Signup now</span></span>
                </div>
            </div>
            {/* <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition="Bounce"
            />
            Same as */}
            {/* <ToastContainer /> */}
        </>
    )
}

export default Login
