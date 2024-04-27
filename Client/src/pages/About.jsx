import React from 'react'
import { useContext, useEffect, useState } from 'react'

const About = () => {
  const [details, setdetails] = useState({
    name: "",
    email: ""
  })

  useEffect(() => {
    setdetails({ ...details, ["name"]: JSON.parse(localStorage.getItem("details")).name, ["email"]: JSON.parse(localStorage.getItem("details")).email })
    // console.log(details)
  }, [])


  return (
    <>
      <div className="name text-white">{details.name}</div>
      <div className="name text-white">{details.email}</div>
      <div className='text-white'>mohit</div>
    </>
  )
}

export default About
