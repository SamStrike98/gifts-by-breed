'use client'

import { useState } from "react"
import Image from "next/image"

const ProductsImages = ({ images, alt }) => {
    const [largeImg, setLargeImg] = useState(0)
    const arr = [
        {
            id: 0,
            text: "0"
        },
        {
            id: 1,
            text: "1"
        },
        {
            id: 2,
            text: "2"
        },
        {
            id: 3,
            text: "3"
        },
    ]

    const sizes = {
        2: 'w-[120px] h-[120px]',
        3: 'w-[75px] h-[75px]',
        4: 'w-[60px] h-[60px]'
    }

    return (

        <div className='flex flex-row md:flex-col gap-2 my-10'>
            <div>
                <Image src={images[largeImg]} alt={alt} width={250} height={250} className="rounded-md object-cover" />
                {/* <div className='w-[250px] h-[250px] flex flex-row justify-center items-center rounded-md bg-blue-400 text-white text-4xl'>{arr[largeImg].text}</div> */}
            </div>
            <ul className='flex flex-col md:flex-row justify-between'>


                {images.length > 1 && images.map(item => (
                    <div key={item.id} className={`${sizes[images.length]} flex flex-row justify-center items-center rounded-md bg-blue-400 text-white text-2xl cursor-pointer`} onClick={() => setLargeImg(item.id)}>{item.text}</div>
                ))}
                {/* <div className='w-[75px] h-[75px] rounded-md bg-blue-400 text-white text-2xl cursor-pointer' onClick={() => setLargeImg(0)}>0</div>

                <div className='w-[75px] h-[75px] rounded-md bg-blue-400 text-white text-2xl cursor-pointer' onClick={() => setLargeImg(1)}>1</div>

                <div className='w-[75px] h-[75px] rounded-md bg-blue-400 text-white text-2xl cursor-pointer' onClick={() => setLargeImg(2)}>2</div> */}
            </ul>
        </div>
    )
}

export default ProductsImages