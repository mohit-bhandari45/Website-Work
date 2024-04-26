import React from 'react'
import { useContext,useEffect } from 'react'
import { DetailsContext } from '../context/context'

const About = () => {
  const value = useContext(DetailsContext)
  useEffect(() => {
    console.log(value)
  }, [])
  

  return (
    <>
      {/* <div className="name">{value.details.name}</div>
      <div className="name">{value.details.email}</div> */}
      <div className='text-white'>mohit</div>
    </>
  )
}

export default About
