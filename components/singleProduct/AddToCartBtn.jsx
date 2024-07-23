'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


const AddToCartBtn = ({ product, session }) => {
    const [addedToCart, setAddedToCart] = useState(false)
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
            setAddedToCart(true)

            let x = 0;
            let myInterval = setInterval(function () {
                setAddedToCart(false)
                console.log('interval fired')
                if (x++ === 1) {
                    clearInterval(myInterval)
                }
            }
                , 1000)
            // clearInterval(interval)
            // alert('Added to Cart')
            router.refresh()
        } else {
            // alert('Not added to cart')
        }
    }
    return (
        <button onClick={handleClick} className={`${addedToCart ? 'bg-primary -translate-y-[5px] px-3 py-3' : 'bg-secondary translate-y-[0px] px-2 py-2'} rounded-md  font-bold hover:bg-opacity-85 text-white mb-5  transition-all`}>Add To Cart</button>

    )
}

export default AddToCartBtn