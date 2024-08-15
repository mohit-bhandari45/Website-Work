import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Section from '../../components/ArtistPageComps/ArtistProfileComps/Section'
import Card from '../../components/ArtistPageComps/ArtistProfileComps/SectionComps/Card'
import Footer from '../../components/UniversalComp/Footer'
import Search from '../../components/UniversalComp/Search'

/* Firebase */
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import Titles from '../../components/UserPageComps/HomePageComps/Titles'
import { app } from '../../firebase'
const auth = getAuth(app)
const firestore = getFirestore(app)

const ArtistProfile = () => {
  const [artistDetails, setArtistDetails] = useState({
    name: ""
  })

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const usersRef2 = collection(firestore, "artists");
        const q2 = query(usersRef2, where("email", "==", user.email));
        let querySnapshot = await getDocs(q2);
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            let details = { ...doc.data() }
            setArtistDetails({ ...artistDetails, name: details.name })
          });
        }
      }
    })
  }, [])

  return (
    <>
      <div className="logo w-full h-[15vh] px-8 flex justify-start items-end">
        <Link to="/">
          <img className='h-16' src="src/assets/acrilc logo-09.png" alt="" />
        </Link>
      </div>
      <div className="profile flex justify-center items-start h-[15vh] text-6xl font-bold font-[Helvetica]">Profile</div>
      <Search />
      <Section name={artistDetails.name}/>
      <Titles title="BESTSELLER" h="50vh" />
      <div className="cards flex flex-col gap-20 justify-center items-center pb-20">
        <Card img="src/assets/Rectangle 53.png" title="Painting" desc="One of the fathers of modern Indian art, a leading painter in India's nationalist art school in Calcutta." />
        <Card img="src/assets/Rectangle 53.png" title="Painting" desc="One of the fathers of modern Indian art, a leading painter in India's nationalist art school in Calcutta." />
        <Card img="src/assets/Rectangle 53.png" title="Painting" desc="One of the fathers of modern Indian art, a leading painter in India's nationalist art school in Calcutta." />
        <Card img="src/assets/Rectangle 53.png" title="Painting" desc="One of the fathers of modern Indian art, a leading painter in India's nationalist art school in Calcutta." />
        <Card img="src/assets/Rectangle 53.png" title="Painting" desc="One of the fathers of modern Indian art, a leading painter in India's nationalist art school in Calcutta." />
        <Card img="src/assets/Rectangle 53.png" title="Painting" desc="One of the fathers of modern Indian art, a leading painter in India's nationalist art school in Calcutta." />
        <Card img="src/assets/Rectangle 53.png" title="Painting" desc="One of the fathers of modern Indian art, a leading painter in India's nationalist art school in Calcutta." />
        <Card img="src/assets/Rectangle 53.png" title="Painting" desc="One of the fathers of modern Indian art, a leading painter in India's nationalist art school in Calcutta." />
      </div>
      <Footer />
    </>
  )
}

export default ArtistProfile