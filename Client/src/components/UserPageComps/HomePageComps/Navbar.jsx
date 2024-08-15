/* React Imports */
import React from 'react'
import { Link } from 'react-router-dom'
import Credentials from './Credentials'
import { getLogo } from '../../../apis/apis'

/* Context API */
import { useBooleanContext } from '../../../context/context'
import { app } from '../../../firebase'
import { deleteUser, getAuth, signOut } from 'firebase/auth'
const auth = getAuth(app)

const Navbar = ({ bool, setbool }) => {
  const { token, userType } = useBooleanContext()

  const deleteAccount  = async () => {
    try {
      const user = auth.currentUser;
      await deleteUser(user);
      console.log("User deleted successfully");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <>
      <div className="main flex justify-center gap-8 h-[18vh] w-full font-[Helvetica]">
        <div className="nav flex justify-between items-center w-[95%]">
          <div className="logo flex justify-center items-center gap-2">
            <a href="/"><img className='w-44 h-20' src={getLogo} alt="" /></a>
          </div>

          <div className="elements lg:flex gap-3 lg:gap-32 text-xl font-semibold lg:flex-row flex-col hidden">
            <div className="gallery cursor-pointer hover:scale-110 transition-all duration-100 ease-in-out">
              <Link to="/catalog">Catalog</Link>
            </div>
            <div className="about cursor-pointer hover:scale-110 transition-all duration-100 ease-in-out">
              <Link to="/about">About Us</Link>
            </div>
            <div className="contacts cursor-pointer hover:scale-110 transition-all duration-100 ease-in-out">
              <Link to="/contact">Contacts</Link>
            </div>
            <div className="contacts cursor-pointer hover:scale-110 transition-all duration-100 ease-in-out">
              <button onClick={deleteAccount }>Delete</button>
            </div>
          </div>

          <div className="info flex justify-center items-center gap-5">
            <div className="btn">
              {!token && <button onClick={() => setbool(true)} className='text-lg md:text-xl font-light flex justify-center items-center border-black border-[3px] text-black py-0 md:py-1 px-2 md:px-4 rounded-full'>Sign Up</button>}
            </div>
            <div className="cart flex justify-center items-center gap-6">
              {userType === "user" && <Link to="/cart">
                <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
                  <path d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <circle cx="10.5" cy="20.5" r="1.5" stroke="currentColor" stroke-width="1.5" />
                  <circle cx="17.5" cy="20.5" r="1.5" stroke="currentColor" stroke-width="1.5" />
                </svg>
              </Link>}

              {token && <Link to="/profile">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" color="#18122b" fill="none">
                  <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" stroke-width="2" />
                </svg></Link>}
            </div>
          </div>
        </div>
      </div>
      {bool ? <Credentials setbool={setbool} /> : ""}
    </>
  )
}

export default Navbar
