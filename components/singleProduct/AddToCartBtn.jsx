'use client'

import React from 'react'
import { useRouter } from 'next/navigation'


const AddToCartBtn = ({ product, session }) => {
    const router = useRouter()
    const handleClick = async () => {

        console.log(product)

        const response = await fetch(`/api/cart`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                product: product
            })
        });

        if (response.status === 201) {
            alert('Added to Cart')
            router.refresh()
        } else {
            alert('Not added to cart')
        }
    }
    return (
        <button onClick={handleClick} className='bg-secondary rounded-md px-2 py-2 font-bold hover:bg-opacity-85 text-white mb-5'>Add To Cart</button>

    )
}

export default AddToCartBtn