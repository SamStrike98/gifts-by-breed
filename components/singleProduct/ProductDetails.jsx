import React from 'react'

const ProductDetails = ({ name, price }) => {
    return (
        <div className='my-10'>
            <h2 className='text-3xl font-extrabold text-secondary'>{name}</h2>
            <div className='flex flex-row items-center gap-4 mt-3'>
                <p className='text-xl font-bold text-white bg-primary p-3 rounded-md'>£{(price * 0.01).toFixed(2)}</p>
                <p className='underline underline-offset-4 text-primary'>(£{((price * 0.01) * 0.3).toFixed(2)} goes to charity!!)</p>
            </div>

        </div>
    )
}

export default ProductDetails