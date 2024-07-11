import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

/* Firebase */
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore"
import { app } from '../../firebase'
import { ToastContainer, toast } from 'react-toastify'
const firestore = getFirestore(app)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
/* Firebase */

import { useBooleanContext } from '../../context/context'
import { getLogo } from '../../apis/apis'

const ArtistSignup = () => {
  const [validCheck, setValidCheck] = useState({
    bool1: false,
    bool2: false,
    bool3: false
  })
  const [counter, setcounter] = useState(0)
  const [checked, setchecked] = useState(true)
  const [height, setHeight] = useState(100)

  const navigate = useNavigate()
  const [artistDetails, setArtistDetails] = useState({
    name: "",
    email: "",
    password: ""
  })
  const { authBool, setAuthBool } = useBooleanContext()

  const handleChange = (e) => {
    setArtistDetails({ ...artistDetails, [e.target.name]: e.target.value })
    setcounter(counter + 1)
    if (counter >= 1) {
      if (e.target.name === "name") {
        if (artistDetails.email.length === 0) {
          if (artistDetails.name.length > 0) {
            setValidCheck((prevVal) => ({
              ...prevVal,
              bool1: false
            }));
          } else {
            setValidCheck((prevVal) => ({
              ...prevVal,
              bool1: true
            }));
          }
        } else {
          if (artistDetails.name.length >= 0) {
            setValidCheck((prevVal) => ({
              ...prevVal,
              bool1: false
            }));
          } else {
            setValidCheck((prevVal) => ({
              ...prevVal,
              bool1: true
            }));
          }
        }
      } else if (e.target.name === "password") {
        setValidCheck((prevVal) => ({
          ...prevVal,
          bool3: false
        }));
      }
      else {
        setValidCheck((prevVal) => ({
          ...prevVal,
          bool2: false
        }));
      }
    }
  }

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    closeOnClick: true,
  }

  /* onremovedfocus/onblur, these function will get executed. */
  const handleblur1 = (e) => {
    if (artistDetails.name.length < 2) {
      setValidCheck((prevVal) => ({
        ...prevVal,
        bool1: true
      }));
    } else {
      setValidCheck((prevVal) => ({
        ...prevVal,
        bool1: false
      }));
    }
  }
  const handleblur2 = (e) => {
    if (!artistDetails.email.includes("@") || !artistDetails.email.endsWith(".com")) {
      setValidCheck((prevVal) => ({
        ...prevVal,
        bool2: true
      }));
    } else {
      setValidCheck((prevVal) => ({
        ...prevVal,
        bool2: false
      }));
    }
  }
  const handleblur3 = (e) => {
    if (artistDetails.password.length < 8) {
      setValidCheck((prevVal) => ({
        ...prevVal,
        bool3: true
      }));
    } else {
      setValidCheck((prevVal) => ({
        ...prevVal,
        bool3: false
      }));
    }
  }

  const googleProviderFn = () => {
    signInWithPopup(auth, googleProvider).then(async (user) => {
      if (user) {
        const usersRef = collection(firestore, "artists");
        const q = query(usersRef, where("email", "==", user.user.email));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          toast.error("User already exist", toast)
        } else {
          const result = await addDoc(collection(firestore, "artists"), {
            name: user.user.displayName,
            email: user.user.email,
            userType: "artist"
          })
          setAuthBool(!authBool)
          navigate("/")
        }
      }
    })
  }

  useEffect(() => {
    if (artistDetails.name.length > 1 && artistDetails.password.length >= 8 && artistDetails.email.includes("@") && artistDetails.email.endsWith(".com")) {
      setchecked(false)
    } else {
      setchecked(true)
    }
  }, [artistDetails])

  const handleSubmit = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, artistDetails.email, artistDetails.password).then(async (credentials) => {
      const result = await addDoc(collection(firestore, "artists"), {
        name: artistDetails.name,
        email: artistDetails.email,
        password: artistDetails.password,
        userType: "artist"
      })
      setAuthBool(!authBool)
      navigate("/")
    }).catch((err) => {
      toast.error("User already exist", toastOptions)
      console.log(err)
    })
  }

  /* Height change on getting or removing errors */
  const handleheightChange = () => {
    setHeight((prevheight) => {
      return prevheight + 3
    })
  }

  return (
    <>
      <div className="design w-full h-[100vh] absolute z-10">
        <img src="src/assets/Rectangle 74.png" className='h-52 relative top-0 left-32' alt="" />
        <img src="src/assets/Rectangle 73.png" className='h-[95%] relative -top-52 left-0' alt="" />
        <img src="src/assets/Rectangle 75.png" className='h-[21.4%] relative -top-[46%] left-[28%]' alt="" />
        <img src="src/assets/Rectangle 73 (1).png" className='relative h-[84%] -top-[140%] left-[87.6%]' alt="" />
        <img src="src/assets/Rectangle 78.png" className='relative -top-[155.1%] left-[85.8%]' alt="" />
      </div>
      <div className='w-full cont h-[100vh] flex justify-center items-center font-[Helvetica] '>
        <div className="main w-[95%] gap-72 h-[100vh] bg-white flex justify-start items-center">
          <img className='w-80 h-40 relative z-20' src={getLogo} alt="" />
          <div className={`${validCheck.bool1 || validCheck.bool2 || validCheck.bool3 ? handleheightChange : height + "%"} relative z-20 w-[33%] flex justify-center items-center`}>
            <form onSubmit={handleSubmit} className='h-[80%] rounded-xl bg-[#8C2B2B] bg-opacity-20 w-full flex flex-col justify-center items-center px-8 py-2'>
              <h1 className='font-bold text-4xl py-3'>Signup</h1>
              <div className="icons flex justify-center items-center gap-5 py-2">
                <img className='cursor-pointer' onClick={googleProviderFn} src="src/assets/2702602 (1).png" alt="" />
                <img src="src/assets/Facebook-logo-blue-circle-large-transparent-png.png" alt="" />
              </div>
              <div className="elements flex justify-center items-center h-[10%] w-full">
                <div className="line1 h-[1%] bg-black w-[45%]"></div>
                <div className="or h-[1%] w-[10%] flex justify-center items-center font-bold">or</div>
                <div className="line2 h-[1%] w-[45%] bg-black"></div>
              </div>
              <div className="inputs w-full h-full flex flex-col gap-8 justify-center items-center">
                <div className='name rounded-lg w-full box-border flex flex-col justify-start items-start'>
                  <div className="name rounded-lg w-full box-border h-12 border-2 border-black flex justify-center items-center">
                    <div className="icon"><img src="src/assets/User_alt_fill.png" alt="" /></div>
                    <input onBlur={handleblur1} onChange={handleChange} className='w-[90%] bg-transparent placeholder:text-xl focus:outline-none font-bold pl-2 pt-1 flex justify-center items-center h-full placeholder:text-black' placeholder='Name' type="text" value={artistDetails.name} name="name" id="" />
                  </div>
                  {validCheck.bool1 && <div className="error text-red-500 text-sm">Please enter a valid name</div>}
                </div>
                <div className='name rounded-lg w-full box-border flex flex-col justify-start items-start'>
                  <div className="name rounded-lg w-full box-border h-12 border-2 border-black flex justify-center items-center">
                    <div className="icon"><img src="src/assets/Message_fill.png" alt="" /></div>
                    <input onBlur={handleblur2} onChange={handleChange} className='w-[90%] bg-transparent placeholder:text-xl focus:outline-none font-bold pl-2 pt-1 flex justify-center items-center h-full placeholder:text-black' placeholder='Email' type="email" value={artistDetails.email} name="email" id="" />
                  </div>
                  {validCheck.bool2 && <div className="error text-red-500 text-sm">Invalid Email Id</div>}
                </div>
                <div className='name rounded-lg w-full box-border flex flex-col justify-start items-start'>
                  <div className="name rounded-lg w-full box-border h-12 border-2 border-black flex justify-center items-center">
                    <div className="icon"><img src="src/assets/Lock_fill.png" alt="" /></div>
                    <input onBlur={handleblur3} onChange={handleChange} className='w-[90%] bg-transparent placeholder:text-xl focus:outline-none font-bold pl-2 pt-1 flex justify-center items-center h-full placeholder:text-black' placeholder='Password' type="password" value={artistDetails.password} name="password" id="" />
                  </div>
                  {validCheck.bool3 && <div className="error text-red-500 text-sm">Password must be upto 8-16 characters</div>}
                </div>

                <div className="name rounded-lg w-full box-border border-2 border-black flex justify-center items-center">
                  <div className="icon"><img src="src/assets/Subtract.png" alt="" /></div>
                  <input className='w-[90%] bg-transparent placeholder:text-xl focus:outline-none font-bold pl-2 pt-1 flex justify-center items-center h-12 placeholder:text-black' placeholder='Portfolio' type="" name="" id="" />
                </div>

                <div className="button"><button onClick={handleSubmit} disabled={checked} type='submit' className='bg-[#ED9999] hover:bg-[#ef6b6b] py-3 font-bold text-xl px-10 rounded-full transition-all duration-500 ease-in-out'>Submit</button></div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default ArtistSignup
