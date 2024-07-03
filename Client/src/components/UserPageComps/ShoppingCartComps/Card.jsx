import React, { useEffect, useState } from 'react'

/* Image */
import Bin from "../../../assets/bin.png"
import Vector1 from "../../../assets/Vector.png"
import Vector2 from "../../../assets/Vector (1).png"

/* API */
import { getImage, updateCart, deleteCart } from '../../../apis/apis'

/* Firebase */
import { app } from "../../../firebase"
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { getFirestore, collection, where, query, getDocs } from "firebase/firestore"
const auth = getAuth(app)
const firestore = getFirestore(app)

const Card = ({ itemId, image, title, quantity, price,refreshData }) => {
    const [user, setUser] = useState()

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

    async function getUserFn() {
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
        getUserFn()
    }, [])

    async function handleUp() {
        /* API Fetching */
        const res = await fetch(updateCart, {
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
        if (res.status === 200) {
            /* Status 200 means request is succuccfull */
            refreshData()
        }
    }

    async function handleDown() {
        /* API Fetching */
        const res = await fetch(updateCart, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: user.email,
                itemId: itemId,
                count: -1
            })
        })
        if (res.status === 200) {
            /* Status 200 means request is succuccfull */
            refreshData()
        }
    }

    async function handleDelete() {
        /* API Fetching */
        const res = await fetch(deleteCart, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: user.email,
                itemId: itemId,
            })
        })
        if (res.status === 200) {
            /* Status 200 means request is succuccfull */
            refreshData()
        }
    }

    return (
        <div className='w-[85%] flex justify-between items-center font-[Helvetica] bg-[#F5F5F5] py-5 rounded-xl px-20'>
            <div className="imageselements flex justify-center items-center gap-14">
                <div className="img">
                    <img className='w-[9vw] h-[28vh]' src={`${getImage}/${image}`} alt="" />
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-3xl font-bold'>{title}</h1>
                    <div className="elements flex justify-start items-center gap-2">
                        <div className="num text-2xl">{quantity}</div>
                        <div className='img1 flex flex-col gap-1'>
                            <img onClick={handleUp} className='w-3 h-2 cursor-pointer' src={Vector1} alt="" />
                            <img onClick={handleDown} className='w-3 h-2 cursor-pointer' src={Vector2} alt="" />
                        </div>
                    </div>
                    <div className="price text-xl">${price}</div>
                </div>
            </div>
            <div className="delete">
                <img onClick={handleDelete} className='w-[1.5vw] h-[4vh] cursor-pointer' src={Bin} alt="" />
            </div>
        </div>
    )
}

export default Card
