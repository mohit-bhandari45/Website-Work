// import React, { useEffect, useState } from 'react'
// import { GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";
// import { useNavigate } from 'react-router-dom';

// const Signup = ({ setsignbool, setbool }) => {
//     const navigate = useNavigate()
//     const [bool1, setbool1] = useState(false)
//     const [bool2, setbool2] = useState(false)
//     const [counter, setcounter] = useState(0)

//     //user signup through google
//     const [googlesignupdetails, setgooglesignupdetails] = useState({
//         name: "",
//         email: ""
//     })

//     useEffect(() => {
//         if (googlesignupdetails.name.length > 0) {
//             // navigate("/about")
//             localStorage.setItem("userdetails", JSON.stringify(googlesignupdetails))
//         }
//     }, [googlesignupdetails])


//     //user signup using input fields
//     const [inputlogindetails, setinputlogindetails] = useState({
//         name: "",
//         email: ""
//     })

//     const [checked, setchecked] = useState(true)
//     const [checkbox, setcheckbox] = useState(false)
//     useEffect(() => {
//         if (inputlogindetails.name.length > 1 && inputlogindetails.email.includes("@") && inputlogindetails.email.endsWith(".com") && checkbox) {
//             setchecked(false)
//         } else {
//             setchecked(true)
//         }
//     }, [inputlogindetails, checkbox])


//     const handleChange = (e) => {
//         setinputlogindetails({ ...inputlogindetails, [e.target.name]: e.target.value })
//         setcounter(counter + 1)
//         if (counter >= 1) {
//             if (e.target.name === "name") {
//                 if (inputlogindetails.email.length === 0) {
//                     if (inputlogindetails.name.length > 0) {
//                         setbool1(false)
//                     } else {
//                         setbool1(true)
//                     }
//                 } else {
//                     if (inputlogindetails.name.length >= 0) {
//                         setbool1(false)
//                     } else {
//                         setbool1(true)
//                     }
//                 }
//             } else {
//                 setbool2(false)
//             }
//         }
//     }

//     const handleChange2 = () => {
//         setcheckbox(!checkbox)
//     }

//     const handleblur1 = (e) => {
//         if (inputlogindetails.name.length < 2) {
//             setbool1(true)
//         } else {
//             setbool1(false)
//         }
//     }

//     const handleblur2 = (e) => {
//         if (!inputlogindetails.email.includes("@") || !inputlogindetails.email.endsWith(".com")) {
//             setbool2(true)
//         } else {
//             setbool2(false)
//         }
//     }

//     const handleSubmit = (e) => {
//         localStorage.setItem("userdetails", JSON.stringify(inputlogindetails))
//         // navigate("/about")
//     }
//     return (
//         <div>
//             <div className="fixed w-[100vw] h-[100vh] top-0 flex justify-center items-center opacity-85 bg-black z-30">
//             </div>
//             <div className="fixed w-[100vw] h-[100vh] top-0 flex justify-center items-center z-30 font-[Helvetica]">
//                 <div className="cont relative h-[80%] w-[30%] bg-white z-50 rounded-md p-6 flex flex-col gap-11">
//                     <div className="head flex justify-between items-center w-[100%]">
//                         <div className="login text-3xl font-semibold text-gray-500">Sign Up</div>
//                         <div className="cross cursor-pointer"><svg onClick={() => { setbool(false) }} xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 fJjczH"><title>cross</title><path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path></svg></div>
//                     </div>
//                     <div className="section flex flex-col gap-6">
//                         <div className="input1 w-[100%]">
//                             <input onBlur={handleblur1} onChange={handleChange} className='rounded-md border-[1px] h-12 w-[100%] pl-3 placeholder:text-[18px]' type="text" name="name" id="" placeholder='Full Name' value={inputlogindetails.name} />
//                             {bool1 && <div className="error text-red-500 text-sm">Please enter a valid name</div>}
//                         </div>
//                         <div className="input1 w-[100%]">
//                             <input onBlur={handleblur2} onChange={handleChange} className='rounded-md border-[1px] h-12 w-[100%] pl-3 placeholder:text-[18px]' type="text" name="email" id="" placeholder='Email' value={inputlogindetails.email} />
//                             {bool2 && <div className="error text-red-500 text-sm">Invalid Email Id</div>}
//                         </div>
//                         <div className="check flex w-[100%] gap-2 pl-3">
//                             <input onChange={handleChange2} checked={checkbox} type="checkbox" name="" id="" className='w-5 h-5 cursor-pointer' />
//                             <div className="text text-sm">
//                                 I agree to ours Terms of Service, Privacy Policy and Content Policies
//                             </div>
//                         </div>
//                         <div className="section flex flex-col gap-3">
//                             <div className="otp w-full">
//                                 <button onClick={handleSubmit} disabled={checked} className={checked ? "text text-center w-full bg-gray-300 text-white rounded-md py-3 text-[17px]" : "text text-center w-full bg-[#18122B] text-white rounded-md py-3 text-[17px]"}>Create Account</button>
//                             </div>
//                             <div className="elements flex w-full justify-center items-center gap-1">
//                                 <div className="line text-center w-full border-gray-300 border-[1px] mt-1 opacity-30"></div>
//                                 <div className="or text-[20px]">or</div>
//                                 <div className="line text-center w-full border-gray-300 border-[1px] mt-1 opacity-30"></div>
//                             </div>
//                             <div className="text google text-gray-700 w-full flex gap-2 justify-center items-center">
//                                 <GoogleLogin shape="pill" size="large" onSuccess={(credentialResponse) => {
//                                     let res = jwtDecode(credentialResponse.credential);
//                                     setgooglesignupdetails({ ...googlesignupdetails, ["name"]: res.name, ["email"]: res.email })
//                                 }}
//                                     onError={() => {
//                                         console.log('Login Failed');
//                                     }} />
//                                 <div className=''>
//                                     <button className='text-center border-[1px] w-44 bg-[#18122B] text-white rounded-full py-2 font-semibold text-sm'>Are you an artist?</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='flex flex-col gap-3'>
//                         <div className="line text-center w-full border-gray-300 border-[1px] opacity-30"></div>
//                         <div className="foot">
//                             <span className='text-[17px] text-gray-600'>
//                                 Already have an account?</span> <button onClick={() => { setsignbool(false) }} className='text-[#18122B] text-[17px]'>Log In</button>
//                         </div>
//                     </div>
//                 </div>
//             </div></div>
//     )
// }

// export default Signup

import React from 'react'

const Signup = () => {
  return (
    <div>
      
    </div>
  )
}

export default Signup

