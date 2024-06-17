import React, { useEffect, useState } from 'react'
import Footer from '../../components/UniversalComp/Footer'
import Navbar from '../../components/UserPageComps/UniversalComps/Navbar'

//firebase
import { app } from '../../firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getFirestore, collection, where, query, getDocs } from "firebase/firestore"

const auth = getAuth(app)
const firestore = getFirestore(app)

const UserProfile = () => {
  const [userInfo, setuserInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
  })

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const usersRef = collection(firestore, "users");
        const q = query(usersRef, where("email", "==", user.email));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            let details = { ...doc.data() }
            setuserInfo({ ...details, firstname: details.name.split(" ")[0], lastname: details.name.split(" ")[1], email: details.email })
          });
        } else {
          console.log("No user found with this email.");
        }
      } else {
        console.log("User is signed out.");
      }
    });
  }, [])


  return (
    <>
      <Navbar />
      <div className="body w-full h-[120vh] flex justify-center items-center mb-32">
        <div className="main w-[85vw] h-full">
          <div className="nav2 h-[25vh] flex justify-between items-center">
            <div className="path"><span className='font-[Helvetica] text-gray-400'>Home</span><span className='px-2 text-gray-400'> / </span><span className='font-semibold font-[Helvetica]'>My Account</span></div>
            <div className="welcome"><span className='font-semibold font-[Helvetica]'>Welcome!</span> <span className='font-bold font-[Helvetica] text-[#ED8A73]'>Sambit</span></div>
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
                      <input className='w-full h-full px-3 bg-[#F5F5F5]' type="text" value={userInfo.firstname} />
                    </div>
                  </div>
                  <div className="name w-1/2 flex flex-col justify-center gap-2">
                    <div className="head2 font-medium">Last Name</div>
                    <div className="box h-12 rounded-sm">
                      <input className='w-full h-full px-3 bg-[#F5F5F5]' type="text" value={userInfo.lastname} />
                    </div>
                  </div>
                </div>
                <div className="first w-full flex justify-center items-center gap-8 py-3">
                  <div className="name w-1/2 flex flex-col justify-center gap-2">
                    <div className="head1 font-medium">Email</div>
                    <div className="box h-12 w-full rounded-sm">
                      <input className='w-full h-full px-3 bg-[#F5F5F5]' type="email" value={userInfo.email} />
                    </div>
                  </div>
                  <div className="name w-1/2 flex flex-col justify-center gap-2">
                    <div className="head2 font-medium">Address</div>
                    <div className="box h-12 rounded-sm">
                      <input className='w-full h-full px-3 bg-[#F5F5F5]' type="text" />
                    </div>
                  </div>
                </div>
                <div className="first w-full flex justify-center items-center gap-8 py-3">
                  <div className="name w-full flex flex-col justify-center gap-2">
                    <div className="head1 font-medium">Password Changes</div>
                    <div className="boxes flex flex-col justify-center gap-4">
                      <div className="box h-12 rounded-sm">
                        <input className='w-full h-full px-3 bg-[#F5F5F5]' type="text" />
                      </div>
                      <div className="box h-12 rounded-sm">
                        <input className='w-full h-full px-3 bg-[#F5F5F5]' type="text" />
                      </div>
                      <div className="box h-12 rounded-sm">
                        <input className='w-full h-full px-3 bg-[#F5F5F5]' type="text" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="buttons w-full h-[20%] py-4 flex justify-end items-center">
                <div className="cancel px-8">Cancel</div>
                <div className="save"><button className='py-3 px-8 text-white bg-[#ED8A73] rounded-sm'>Save Changes</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default UserProfile
