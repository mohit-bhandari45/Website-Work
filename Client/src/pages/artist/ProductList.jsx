import React, { useState } from 'react'
import Navbar from '../../components/ArtistPageComps/UniversalComps/Navbar'
import Body from '../../components/ArtistPageComps/ProductListComps/Body'

const ProductList = () => {
  return (
    <>
      <Navbar sign={false}/>
      <Body/>
    </>
  )
}

export default ProductList