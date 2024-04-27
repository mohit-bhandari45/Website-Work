import React from 'react'
import { useContext, useEffect, useState } from 'react'

const About = () => {
  const [details, setdetails] = useState({
    name: "",
    email: ""
  })

  useEffect(() => {
    setdetails({ ...details, ["name"]: JSON.parse(localStorage.getItem("userdetails")).name, ["email"]: JSON.parse(localStorage.getItem("userdetails")).email })
  }, [])


  return (
    <>
      <div className="name text-white">{details.name}</div>
      <div className="name text-white">{details.email}</div>
    </>
  )
}

export default About
