import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useBooleanContext } from '../../context/context'

const ShopSellSwitch = () => {
  const ref = useRef()
  const [pageToggle, setPageToggle] = useState()
  const navigate=useNavigate()
  const { setRemove } = useBooleanContext()

  const handleSwitch = () => {
    setPageToggle(!pageToggle)
    ref.current.id = ref.current.id === "shop" ? "sell" : "shop";
  }

  useEffect(() => {
    const toggle = setTimeout(() => {
      if (ref.current.id === "shop") {
        console.log("shop");
        // navigate("/home")
      } else {
        console.log("sell")
        setRemove(true)
        setTimeout(() => {
          navigate("/home")
        }, 200);
      }
    }, 5000);
    return () => clearTimeout(toggle);
  }, [pageToggle])

  return (
    <div
      onClick={handleSwitch}
      className="relative cursor-pointer switch 
                 w-24 sm:w-28 md:w-32 lg:w-36 
                 h-8 sm:h-9 md:h-10 lg:h-11 
                 rounded-full flex justify-between bg-green-500 items-center 
                 font-[Helvetica] text-xs sm:text-sm md:text-base"
    >
      <div
        ref={ref}
        id="shop"
        className={`absolute z-10 w-[55%] h-full bg-white rounded-full 
                    transition-all duration-700 ease-in-out 
                    ${pageToggle ? "left-[45%]" : "left-0"}`}
      ></div>
      <div
        className={`shop z-20 pl-2 sm:pl-3 md:pl-4 
                    transition-all duration-700 ease-in-out 
                    ${pageToggle ? "text-white" : "text-black"}`}
      >
        Shop
      </div>
      <div
        className={`sell z-20 pr-3 sm:pr-4 md:pr-5 
                    transition-all duration-700 ease-in-out 
                    ${pageToggle ? "text-black" : "text-white"}`}
      >
        Sell
      </div>
    </div>
  )
}

export default ShopSellSwitch