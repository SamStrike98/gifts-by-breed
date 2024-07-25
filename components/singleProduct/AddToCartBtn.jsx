'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


const AddToCartBtn = ({ product, session }) => {

    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const handleClick = async () => {
        setIsLoading(true)
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
            setIsLoading(false)

            router.refresh()
        } else {
            // alert('Not added to cart')
        }
    }
    return (
        <>
            {!isLoading ?
                <button onClick={handleClick} className={`p-2 bg-secondary rounded-md  font-bold hover:bg-opacity-85 text-white mb-5  transition-all`}>Add To Cart</button>
                :
                <button disabled className={`p-2 bg-secondary rounded-md  font-bold bg-opacity-50 text-white mb-5  transition-all`}>...</button>
            }
        </>


    )
}

export default AddToCartBtn