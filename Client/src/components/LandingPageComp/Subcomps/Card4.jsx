import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Star from './Star'

/* Images */
import heartImage from "../../../assets/heart small.png"
import quickView from "../../../assets/Quick View.png"

/* Toast */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* APIs */
import { getImage, addCart } from '../../../apis/apis'

/* Firebase */
import { app } from "../../../firebase"
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { getFirestore, collection, where, query, getDocs } from "firebase/firestore"
const auth = getAuth(app)
const firestore = getFirestore(app)

const Card4 = ({ itemId, img, discount, title, mainPrice, prevPrice, rating, reviews }) => {
    const navigate = useNavigate()
    const [visible, setvisible] = useState(false)
    const [user, setUser] = useState()

    const toastOptions = {
        position: "bottom-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        closeOnClick: true,
    }

    const getUser = async (user) => {
        if (!user.phoneNumber) {
            const usersRef1 = collection(firestore, "users");
            const q1 = query(usersRef1, where("email", "==", user.email));
            let querySnapshot = await getDocs(q1);
            if (querySnapshot.empty) {
                const usersRef2 = collection(firestore, "artists");
                const q2 = query(usersRef2, where("email", "==", user.email));
                querySnapshot = await getDocs(q2);
            }
            return querySnapshot;
        } else {
            const usersRef3 = collection(firestore, "users");
            const q3 = query(usersRef3, where("number", "==", user.phoneNumber));
            const querySnapshot = await getDocs(q3);
            return querySnapshot;
        }
    }

    async function setUserFn() {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const querySnapshot = await getUser(user);
                if (!querySnapshot.empty) {
                    querySnapshot.forEach((doc) => {
                        let details = { ...doc.data() }
                        setUser(details)
                    });
                }
            }
        })
    }

    useEffect(() => {
        setUserFn()
    }, [])

    async function addToCart(e) {
        try {
            e.stopPropagation();

            /* API Fetching */
            const res = await fetch(addCart, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: user.email,
                    itemId: itemId,
                    count: 1
                })
            })
            if (res.status === 201 || res.status === 200) {
                const status = await res.json()
                toast.success(status.msg, toastOptions)
            }else {
                console.error('Failed to add item to cart');
            }
        } catch (error) {
            console.log("Error while adding item to cart:",error)
        }
    }

    return (
        <div className='h-full w-[21vw] rounded-lg relative flex flex-col justify-center items-center font-[Helvetica]'>
            <div onClick={() => navigate(`/productdetails/${itemId}`)} onMouseOver={() => { setvisible(true) }} onMouseLeave={() => { setvisible(false) }} className="card h-[50vh] w-full bg-[#F5F5F5] relative flex justify-center items-center cursor-pointer hover:scale-95 transition-all ease-in-out duration-500">
                <div onClick={() => navigate(`/productdetails/${itemId}`)} className="image absolute w-28 h-28"><img src={`${getImage}/${img}`} alt="" /></div>
                <div className="icons w-full flex justify-between items-start h-full p-3">
                    <div className="off bg-[#ED8A73] px-4 py-1 rounded-md text-white">{discount}%</div>
                    <div className="mainicons flex flex-col gap-2 justify-center items-center">
                        <div className="love p-2 bg-white rounded-full"><img src={heartImage} alt="" /></div>
                        <div className="love p-2 bg-white rounded-full"><img src={quickView} alt="" /></div>
                    </div>
                </div>
                <div onClick={addToCart} className={visible ? "transition-all z-20 duration-700 ease-in-out opacity-100 add absolute bottom-0 bg-black text-white w-full justify-center flex py-4 rounded-b-md text-xl" : "transition-all z-20 duration-700 ease-in-out  add absolute bottom-[-60px] bg-black text-white w-full justify-center flex py-4 rounded-b-md text-xl opacity-0"}>Add to Cart</div>
            </div>
            <div className="tags w-full flex flex-col justify-center items-start gap-1 py-2 relative z-30 bg-white">
                <div onClick={() => navigate(`/productdetails/${itemId}`)} className="title text-lg font-semibold transition-all duration-500 hover:scale-105 ease-in-out cursor-pointer">{title}</div>
                <div className="price flex justify-center items-center gap-2 font-medium">
                    <div className="main text-[#DB4444]">{mainPrice}</div>
                    <div className="prev line-through text-gray-600">{prevPrice}</div>
                </div>
                <div className="rating flex justify-center items-center gap-3">
                    <div className="rates flex justify-center items-center gap-1">
                        <Star rating={rating} reviews={reviews} />
                    </div>
                    <div className="title text-gray-600">({reviews} reviews)</div>
                </div>
            </div>
        </div>
    )
}

export default Card4
