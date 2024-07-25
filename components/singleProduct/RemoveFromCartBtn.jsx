'use client'

import { BsTrash } from "react-icons/bs";
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
            // alert('Removed from Cart')
            router.refresh()
        } else {
            alert('Not removed from cart')
        }
    }
    return (
        <button onClick={handleClick} className='rounded-md font-bold hover:bg-opacity-85 text-white'>
            <BsTrash size={25} className="text-red-500" />
        </button>

    )
}

export default RemoveFromCartBtn