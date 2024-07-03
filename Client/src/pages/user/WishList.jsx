import React, { useEffect } from 'react'
import Footer from '../../components/UniversalComp/Footer'
import { useState } from 'react'
import Card1 from '../../components/UserPageComps/WishListComps/Card1'
import Navbar from '../../components/UserPageComps/UniversalComps/Navbar'

/* Firebase */
import { app } from '../../firebase'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { getFirestore, collection, where, query, getDocs } from "firebase/firestore"
import { getFavorites } from '../../apis/apis'
const auth = getAuth(app)
const firestore = getFirestore(app)

const WishList = () => {
    const [items, setitems] = useState([
        {
            img: "src/assets/g92-2-500x500 1.png",
            discount: "-40%",
            title: "Brass Murti",
            mainprice: "$120",
            prevprice: "$160",
            stars: "src/assets/Vector (2).png",
            amount: "(88)"
        },
        {
            img: "src/assets/ak-900-01-500x500 1.png",
            discount: "-35%",
            title: "Khadi Handloom Saree",
            mainprice: "$960",
            prevprice: "$1160",
            stars: "src/assets/Vector (2).png",
            amount: "(75)"
        },
        {
            img: "src/assets/g27cq4-500x500 1.png",
            discount: "-30%",
            title: "Brass Pncha Pradip",
            mainprice: "$370",
            prevprice: "$400",
            stars: "src/assets/Vector (2).png",
            amount: "(99)"
        },
        {
            img: "src/assets/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png",
            discount: "-25%",
            title: "Odisha Style Painting on Plate",
            mainprice: "$375",
            prevprice: "$400",
            stars: "src/assets/Vector (2).png",
            amount: "(99)"
        }
    ])

    const [user, setUser] = useState(undefined)
    const [favorites, setFavorites] = useState()

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

    async function getFavoriteFn() {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const querySnapshot = await getUser(user);
                if (!querySnapshot.empty) {
                    querySnapshot.forEach((doc) => {
                        let details = { ...doc.data() }
                        setUser(details)
                    });
                }

                /* API Fetching */
                const res = await fetch(getFavorites, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email: user.email })
                })
                if (res.status === 200) {
                    /* Status 200 means request is sucussfull */
                    const items = await res.json()
                    setFavorites(items)
                }
            }
        })
    }

    useEffect(() => {
        getFavoriteFn()
        console.log(favorites)
    }, [])

    if (!favorites) {
        return <div>
            ...loading
        </div>
    }

    return (
        <>
            <Navbar />
            <div className="wishlist w-full h-[100vh] flex flex-col justify-center items-center">
                <div className="head h-[10vh] w-[90%] flex justify-between items-center gap-4">
                    <div className="head1 h-full w-1/2 flex gap-4 justify-start items-center">
                        <div className="title text-[#000000] font-medium text-xl font-[Helvetica]">WishList ({favorites.length})</div>
                    </div>
                    <div className="head2 text-md font-semibold font-[Helvetica]">
                        <button className='bg-white px-12 py-2 rounded-md hover:bg-black border-2 border-gray-500 text-black hover:text-white transition-all duration-300 ease-in-out'>Move All To Bag</button>
                    </div>
                </div>
                <div className={`w-[90%] gap-5 h-[70vh] justify-between items-center flex relative font-[Helvetica]`}>
                    {favorites.map((element) => {
                        return <Card1 key={element._id} imageId={element._id} imageUrl={element.imageUrl} discount={element.discount} title={element.title} mainPrice={element.mainPrice} prevPrice={element.prevPrice} rating={element.rating} reviews={element.reviews} refreshData={getFavoriteFn} />
                    })}
                </div>
            </div>
            <div className="slider w-full h-[100vh] flex flex-col justify-center items-center">
                <div className="head h-[10vh] w-[90%] flex justify-between items-center gap-4">
                    <div className="head1 h-full w-1/2 flex gap-4 justify-start items-center">
                        <div className="bar w-[2%] h-[70%] rounded-sm bg-[#ED8A73]"></div>
                        <div className="title text-[#000000] font-medium text-xl font-[Helvetica]">Just for you</div>
                    </div>
                    <div className="head2 text-md font-semibold font-[Helvetica]">
                        <button className='bg-white px-12 py-2 rounded-md border-2 border-gray-500 hover:bg-black text-black hover:text-white transition-all duration-300 ease-in-out'>See All</button>
                    </div>
                </div>
                <div className={`w-[90%] gap-5 h-[90vh] justify-between items-center flex relative font-[Helvetica]`}>
                    {favorites.map((element) => {
                        return <Card1 key={element._id} imageId={element._id} imageUrl={element.imageUrl} discount={element.discount} title={element.title} mainPrice={element.mainPrice} prevPrice={element.prevPrice} rating={element.rating} reviews={element.reviews} refreshData={getFavoriteFn} />
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default WishList
