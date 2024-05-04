import React from 'react'
import Card2 from './Subcomps/Card2'

const Frames3 = () => {
  return (
    <div className='flex gap-28 justify-center items-center h-[70vh]'>
      <Card2 state="Delhi" image="/icons/Ellipse 54.png"/>
      <Card2 state="Uttarakhand" image="/icons/Ellipse 54 (3).png"/>
      <Card2 state="Bihar" image="/icons/Ellipse 54 (2).png"/>
      <Card2 state="Punjab" image="/icons/Ellipse 54 (1).png"/>
    </div>
  )
}

export default Frames3
