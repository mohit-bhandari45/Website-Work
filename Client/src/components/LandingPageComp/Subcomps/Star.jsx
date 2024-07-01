import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ rating, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {
          rating >= index + 1 ? (
            <FaStar size={13} className="icon cursor-pointer text-yellow-400" />
          ) : rating >= number ? (
            <FaStarHalfAlt size={13} className="icon cursor-pointer text-yellow-400" />
          ) : (
            <AiOutlineStar size={13} className="icon cursor-pointer text-yellow-400" />
          )
        }
      </span>
    )
  })
  return (
      <div className="icon-style flex gap-1">
        {ratingStar}
      </div>
  )
}

export default Star
