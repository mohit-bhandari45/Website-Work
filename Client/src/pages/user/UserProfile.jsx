import React, { useEffect, useState } from 'react'
import Footer from '../../components/UniversalComp/Footer'
import Navbar from '../../components/UserPageComps/UniversalComps/Navbar'

//firebase
import { app } from '../../firebase'
import { getAuth, onAuthStateChanged, sendEmailVerification, updateEmail, verifyBeforeUpdateEmail } from "firebase/auth"
import { getFirestore, collection, where, query, getDocs, updateDoc } from "firebase/firestore"
import { useBooleanContext } from '../../context/context'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const auth = getAuth(app)
const firestore = getFirestore(app)

const UserProfile = () => {
  const [show, setShow] = useState({
    show1: false,
    show2: false,
  })
  const [focus, setFocus] = useState({
    focus1: false,
    focus2: false
  })
  const { user } = useBooleanContext()
  const [userInfo, setuserInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    newpassword: "",
    confirmnewpassword: ""
  })

  useEffect(() => {
    if (user.phoneNumber) {
      setuserInfo((prevInfo) => ({
        ...prevInfo, firstname: user.name.split(" ")[0], lastname: user.name.split(" ")[1], email: user.email
      }))
    } else {
      setuserInfo((prevInfo) => ({
        ...prevInfo, firstname: user.name.split(" ")[0], lastname: user.name.split(" ")[1], email: user.email
      }))
    }
  }, [])

  const handleChange = (e) => {
    setuserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }

  const handleUpdate = async () => {
    if (handleValidation()) {
      console.log(userInfo.email)
      sendEmailVerification(user.email)
          .then(() => {
            toast.success("Email Sent", toastOptions);
            console.log("Email Sent");
          })
          .catch((error) => {
            toast.error("Error sending email", toastOptions);
            console.error("Error sending email: ", error);
          });
      // const q = query(collection(firestore, "users"), where("email", "==", user.email));
      // const querySnapshot = await getDocs(q);
      // if (!querySnapshot.empty) {
      //   const userDocRef = querySnapshot.docs[0].ref;
      //   await updateDoc(userDocRef, {
      //     name: userInfo.firstname + " " + userInfo.lastname,
      //     email: userInfo.email,
      //     address: userInfo.address,
      //     password: userInfo.newpassword
      //   }).then(async (res) => {
      //     toast.success("Changes Saved successfully", toastOptions)
      //     console.log("User document updated successfully.");
      //   })
      // } else {
      //   console.log("No matching documents found.");
      // }
    }
  }

  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  }

  const handleValidation = () => {
    if (userInfo.firstname.length <= 1) {
      toast.error("First Name or Last Name Should be greater than 1 letter", toastOptions)
      return false;
    }
    if (userInfo.lastname.length <= 1) {
      toast.error("First Name or Last Name Should be greater than 1 letter", toastOptions)
      return false;
    }
    if (userInfo.newpassword !== userInfo.confirmnewpassword) {
      toast.error("Password and Confirm Password should be same", toastOptions)
      return false;
    }
    if (userInfo.newpassword.length > 0) {
      if (userInfo.newpassword.length < 8) {
        toast.error("Password should be greater than 8 characters", toastOptions)
        return false;
      }
    }
    if (!userInfo.email.includes("@") || !userInfo.email.endsWith(".com")) {
      toast.error("Enter a Valid Email", toastOptions)
      return false;
    }
    return true;
  }

  return (
    <>
      <Navbar />
      <div className="body w-full h-[120vh] flex justify-center items-center mb-32">
        <div className="main w-[85vw] h-full">
          <div className="nav2 h-[25vh] flex justify-between items-center">
            <div className="path"><span className='font-[Helvetica] text-gray-400'>Home</span><span className='px-2 text-gray-400'> / </span><span className='font-semibold font-[Helvetica]'>My Account</span></div>
            <div className="welcome"><span className='font-semibold font-[Helvetica]'>Welcome!</span> <span className='font-bold font-[Helvetica] text-[#ED8A73]'>{userInfo.firstname}</span></div>
          </div>
          <div className="content w-[85vw] h-[95vh] flex justify-start items-start">
            <div className="left w-[25%] h-full flex flex-col justify-start items-start gap-8">
              <div className="section1 w-full">
                <h1 className='font-bold font-[Helvetica] w-full pb-3'>Manage My Account</h1>
                <div className="subsection w-full pl-10 flex flex-col justify-center items-start gap-1">
                  <div className="one text-gray-500">My Profile</div>
                  <div className="two text-gray-500">Address Book</div>
                  <div className="three text-gray-500">My Payment Options</div>
                </div>
              </div>
              <div className="section2 w-full">
                <h1 className='font-bold font-[Helvetica] w-full pb-3'>My Orders</h1>
                <div className="subsection w-full pl-10 flex flex-col justify-center items-start gap-1">
                  <div className="one text-gray-500">My Returns</div>
                  <div className="two text-gray-500">My Cancellations</div>
                </div>
              </div>
              <div className="section2 w-full">
                <h1 className='font-bold font-[Helvetica] w-full pb-3'>My WishList</h1>
              </div>
            </div>
            <div className="right card w-[75%] px-16 py-8 h-full flex flex-col justify-center items-center shadow-md sha shadow-black rounded-md">
              <div className="details w-full h-[80%] font-[Helvetica]">
                <h1 className='font-bold text-2xl font-[Helvetica] py-4'>Edit Your Profile</h1>
                <div className="first w-full flex justify-center items-center gap-8 py-3">
                  <div className="name w-1/2 flex flex-col justify-center gap-2">
                    <div className="head1 font-medium">First Name</div>
                    <div className="box h-12 rounded-sm">
                      <input onChange={handleChange} className='w-full h-full px-3 bg-[#F5F5F5]' name="firstname" type="text" value={userInfo.firstname} />
                    </div>
                  </div>
                  <div className="name w-1/2 flex flex-col justify-center gap-2">
                    <div className="head2 font-medium">Last Name</div>
                    <div className="box h-12 rounded-sm">
                      <input onChange={handleChange} className='w-full h-full px-3 bg-[#F5F5F5]' name="lastname" type="text" value={userInfo.lastname} />
                    </div>
                  </div>
                </div>
                <div className="first w-full flex justify-center items-center gap-8 py-3">
                  <div className="name w-1/2 flex flex-col justify-center gap-2">
                    <div className="head1 font-medium">Email</div>
                    <div className="box h-12 w-full rounded-sm">
                      <input onChange={handleChange} className='w-full h-full px-3 bg-[#F5F5F5]' type="email" name="email" value={userInfo.email} />
                    </div>
                  </div>
                  <div className="name w-1/2 flex flex-col justify-center gap-2">
                    <div className="head2 font-medium">Address</div>
                    <div className="box h-12 rounded-sm">
                      <input onChange={handleChange} name='address' className='w-full h-full px-3 bg-[#F5F5F5]' type="text" />
                    </div>
                  </div>
                </div>
                <div className="first w-full flex justify-center items-center gap-8 py-3">
                  <div className="name w-full flex flex-col justify-center gap-4">
                    <div className="head1 font-medium">Password Changes</div>
                    <div className="boxes flex flex-col justify-center gap-4">
                      <div className={`${focus.focus1 ? "border-2 border-black" : ""} box box-border h-12 rounded-sm bg-[#F5F5F5] flex justify-between items-center px-3`}>
                        <input onFocus={() => {
                          setFocus((prevFocus) => ({
                            ...prevFocus,
                            focus1: true
                          }))
                        }} onBlur={() => {
                          setFocus((prevFocus) => ({
                            ...prevFocus,
                            focus1: false
                          }))
                        }} onChange={handleChange} name='newpassword' className=' w-full focus:outline-none h-full bg-[#F5F5F5]' placeholder='New Password' type={show.show1 ? "password" : "text"} />
                        <div className='cursor-pointer' onClick={() => {
                          setShow((prevShow) => ({
                            ...prevShow,
                            show1: !prevShow.show1
                          }));
                        }}>{show.show1 ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" color="#000000" fill="none">
                          <path d="M19.439 15.439C20.3636 14.5212 21.0775 13.6091 21.544 12.955C21.848 12.5287 22 12.3155 22 12C22 11.6845 21.848 11.4713 21.544 11.045C20.1779 9.12944 16.6892 5 12 5C11.0922 5 10.2294 5.15476 9.41827 5.41827M6.74742 6.74742C4.73118 8.1072 3.24215 9.94266 2.45604 11.045C2.15201 11.4713 2 11.6845 2 12C2 12.3155 2.15201 12.5287 2.45604 12.955C3.8221 14.8706 7.31078 19 12 19C13.9908 19 15.7651 18.2557 17.2526 17.2526" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M9.85786 10C9.32783 10.53 9 11.2623 9 12.0711C9 13.6887 10.3113 15 11.9289 15C12.7377 15 13.47 14.6722 14 14.1421" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                          <path d="M3 3L21 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" color="#000000" fill="none">
                          <path d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z" stroke="currentColor" stroke-width="1.5" />
                          <path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke="currentColor" stroke-width="1.5" />
                        </svg>}</div>
                      </div>
                      <div className={`${focus.focus2 ? "border-2 border-black" : ""} box-border box h-12 rounded-sm flex bg-[#F5F5F5] justify-between items-center px-3`}>
                        <input onFocus={() => {
                          setFocus((prevFocus) => ({
                            ...prevFocus,
                            focus2: true
                          }))
                        }} onBlur={() => {
                          setFocus((prevFocus) => ({
                            ...prevFocus,
                            focus2: false
                          }))
                        }} onChange={handleChange} name='confirmnewpassword' className='w-full h-full bg-[#F5F5F5] focus:outline-none' placeholder='Confirm New Password' type={show.show2 ? "password" : "text"} />
                        <div className='cursor-pointer' onClick={() => {
                          setShow((prevShow) => ({
                            ...prevShow,
                            show2: !prevShow.show2
                          }))
                        }}>{show.show2 ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" color="#000000" fill="none">
                          <path d="M19.439 15.439C20.3636 14.5212 21.0775 13.6091 21.544 12.955C21.848 12.5287 22 12.3155 22 12C22 11.6845 21.848 11.4713 21.544 11.045C20.1779 9.12944 16.6892 5 12 5C11.0922 5 10.2294 5.15476 9.41827 5.41827M6.74742 6.74742C4.73118 8.1072 3.24215 9.94266 2.45604 11.045C2.15201 11.4713 2 11.6845 2 12C2 12.3155 2.15201 12.5287 2.45604 12.955C3.8221 14.8706 7.31078 19 12 19C13.9908 19 15.7651 18.2557 17.2526 17.2526" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M9.85786 10C9.32783 10.53 9 11.2623 9 12.0711C9 13.6887 10.3113 15 11.9289 15C12.7377 15 13.47 14.6722 14 14.1421" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                          <path d="M3 3L21 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" color="#000000" fill="none">
                          <path d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z" stroke="currentColor" stroke-width="1.5" />
                          <path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke="currentColor" stroke-width="1.5" />
                        </svg>}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="buttons w-full h-[20%] py-4 flex justify-end items-center">
                <div className="cancel px-8">Cancel</div>
                <div className="save"><button onClick={handleUpdate} className='py-3 px-8 text-white bg-[#ED8A73] rounded-sm font-bold font-[Helvetica]'>Save Changes</button></div>
              </div>
            </div>
          </div>
        </div>
      </div >
      <Footer />
    </>
  )
}

export default UserProfile
