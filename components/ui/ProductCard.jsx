import Link from "next/link"
import Image from "next/image"
import Button from "./Button"

const ProductCard = ({ id, name, price, img }) => {
    return (
        <div className='h-[300px] w-[200px] p-3 my-4 rounded-lg bg-secondary border-4 border-transparent hover:border-white shadow-md transition-all'>
            <Link href={`/products/${id}`} className='w-full h-full'>
                <div className='h-full w-full overflow-hidden flex flex-col justify-between'>
                    <div className='bg-white rounded-lg w-full overflow-hidden h-[60%%] pt-2'>
                        {img ? <Image alt={`Image of a ${name}`} className='object-cover' src={img} width={500} height={500} /> : ''}
                    </div>
                    <div className="flex flex-col items-center">
                        <h4 className='font-bold text-lg text-white text-center'>{name}</h4>
                        <p className="text-white font-bold p-2 bg-primary rounded-md">£{(price * 0.01).toFixed(2)}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard