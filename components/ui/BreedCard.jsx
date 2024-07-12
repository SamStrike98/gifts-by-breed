import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const BreedCard = ({ name, link, img }) => {
    return (
        <div className='h-[300px] w-[200px] p-3 my-4 rounded-lg bg-secondary border-4 border-transparent hover:border-primary shadow-md transition-all'>
            <Link href={link} className='w-full h-full'>
                <div className='h-full w-full overflow-hidden'>
                    <h4 className='font-bold text-lg text-white text-center'>{name}</h4>
                    <div className='bg-secondary w-full overflow-hidden h-[90%] pt-2'>
                        <Image alt={`Image of a ${name}`} className='object-cover' src={img} width={500} height={500} />
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default BreedCard