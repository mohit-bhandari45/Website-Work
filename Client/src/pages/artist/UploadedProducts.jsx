import React from 'react'
import Header from '../../components/ArtistPageComps/UploadedProductsComps/Header'
import ProductGrid from '../../components/ArtistPageComps/UploadedProductsComps/ProductGrid'
import Navbar from '../../components/ArtistPageComps/UniversalComps/Navbar'
import ContactInfo from '../../components/ArtistPageComps/UniversalComps/ContactInfo'

const UploadedProducts = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <ProductGrid />
      </main>
      <ContactInfo />
    </div>
    </>
  )
}

export default UploadedProducts