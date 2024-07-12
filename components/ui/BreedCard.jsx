import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const BreedCard = ({ name, link, img }) => {
    return (
        <div className='h-[300px] w-[200px] border-2 p-3 my-4 rounded-lg'>
            <Link href={link} className='w-full h-full'>
                <div>
                    <h4 className='font-bold text-lg'>{name}</h4>
                    <div>
                        <Image alt={`Image of a ${name}`} src={img} width={100} height={100} />
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default BreedCard