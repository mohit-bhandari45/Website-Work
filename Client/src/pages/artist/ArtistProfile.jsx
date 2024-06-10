import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../../components/UniversalComp/Search'
import Section from '../../components/ArtistPageComps/ArtistProfileComps/Section'
import Mid from '../../components/LandingPageComp/Mid'
import Card from '../../components/ArtistPageComps/ArtistProfileComps/SectionComps/Card'
import Footer from '../../components/UniversalComp/Footer'

const ArtistProfile = () => {
  return (
    <>
      <div className="logo w-full h-[15vh] px-8 flex justify-start items-end">
        <Link to="/">
          <img className='h-16' src="src/assets/acrilc logo-09.png" alt="" />
        </Link>
      </div>
      <div className="profile flex justify-center items-start h-[15vh] text-6xl font-bold font-[Helvetica]">Profile</div>
      <Search />
      <Section />
      <Mid title="BESTSELLER" h="50vh" />
      <div className="cards flex flex-col gap-20 justify-center items-center pb-20">
        <Card img="src/assets/Rectangle 53.png" title="Painting" desc="One of the fathers of modern Indian art, a leading painter in India's nationalist art school in Calcutta."/>
        <Card img="src/assets/Rectangle 53.png" title="Painting" desc="One of the fathers of modern Indian art, a leading painter in India's nationalist art school in Calcutta."/>
        <Card img="src/assets/Rectangle 53.png" title="Painting" desc="One of the fathers of modern Indian art, a leading painter in India's nationalist art school in Calcutta."/>
        <Card img="src/assets/Rectangle 53.png" title="Painting" desc="One of the fathers of modern Indian art, a leading painter in India's nationalist art school in Calcutta."/>
        <Card img="src/assets/Rectangle 53.png" title="Painting" desc="One of the fathers of modern Indian art, a leading painter in India's nationalist art school in Calcutta."/>
        <Card img="src/assets/Rectangle 53.png" title="Painting" desc="One of the fathers of modern Indian art, a leading painter in India's nationalist art school in Calcutta."/>
        <Card img="src/assets/Rectangle 53.png" title="Painting" desc="One of the fathers of modern Indian art, a leading painter in India's nationalist art school in Calcutta."/>
        <Card img="src/assets/Rectangle 53.png" title="Painting" desc="One of the fathers of modern Indian art, a leading painter in India's nationalist art school in Calcutta."/>
      </div>
      <Footer/>
    </>
  )
}

export default ArtistProfile