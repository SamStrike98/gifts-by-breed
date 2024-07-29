import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";


const ReviewCard = ({ author, text, rating }) => {
    return (
        <div className='bg-white p-5 rounded-md shadow-xl w-[250px] flex flex-col justify-between'>
            <ul className='flex flex-row justify-center'>
                {Array.from(Array(rating), (e, i) => (
                    <li key={i}><FaStar color='#FF7043' /></li>
                ))}
            </ul>

            <p className='italic'><RiDoubleQuotesL />{text}<RiDoubleQuotesR /></p>

            <h5 className='text-lg font-bold'>{author}</h5>
        </div>
    )
}

export default ReviewCard