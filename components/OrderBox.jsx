'use client'

import { FaPlus } from "react-icons/fa"
import { useState } from "react"
import Image from "next/image"

const OrderBox = ({ id, total, createdAt, products }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={`${isOpen ? 'min-h-[50px]' : 'min-h-[0px] h-[35px]'} overflow-y-hidden border border-black px-2 py-1 rounded-md transition-all`}>
            <div className='flex flex-row justify-between'>
                <h4>Order: {id}</h4>
                <div>£{(total * 0.01).toFixed(2)}</div>
                <div>{createdAt}</div>
                <span onClick={() => setIsOpen(!isOpen)} className={`cursor-pointer transition-all`}><FaPlus size={25} className={`${isOpen ? 'rotate-45 text-red-500' : 'rotate-0 text-green-500'} transition-all`} /></span>
            </div>
            {<div className=''>
                <ul>
                    {products.map((product) => (
                        <li key={product.id} className='flex flex-row gap-4'>
                            <h6>{product.description}</h6>
                            {/* <Image src={product.images[0]} alt={product.name} /> */}
                            <div>£{(product.amount_total * 0.01).toFixed(2)}</div>
                        </li>
                    ))}
                </ul>
            </div>}
        </div>
    )
}

export default OrderBox