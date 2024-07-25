'use client'

import { useState } from "react"

const CheckoutBtn = ({ products }) => {
    const [isLoading, setIsLoading] = useState(false)

    const handleCheckout = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        console.log(products)
        const response = await fetch(`/api/checkout`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                products: products
            })
        });

        const data = await response.json()
        // console.log(data)

        window.location.assign(data.url)
        // setIsLoading(false)
    }

    return (
        <>
            {!isLoading ?
                <button className='p-3 font-bold text-lg bg-secondary text-white rounded-md hover:bg-opacity-85' onClick={handleCheckout}>Checkout</button>
                :
                <button className='p-3 font-bold text-lg bg-secondary text-white rounded-md bg-opacity-50' disabled >...</button>
            }
        </>

    )
}

export default CheckoutBtn