'use client'

import React from 'react'
import { useRouter } from 'next/navigation'


const RemoveFromCartBtn = ({ product, session }) => {
    const router = useRouter()
    const handleClick = async () => {

        //remove count property from product object
        // delete product.count
        console.log(product)

        const response = await fetch(`/api/cart/${session?.user.id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                product: product
            })
        });

        if (response.status === 201) {
            alert('Removed from Cart')
            router.refresh()
        } else {
            alert('Not removed from cart')
        }
    }
    return (
        <button onClick={handleClick} className='bg-primary rounded-md px-2 py-2 font-bold hover:bg-opacity-85 text-white mb-5'>Remove</button>

    )
}

export default RemoveFromCartBtn