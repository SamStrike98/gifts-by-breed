'use client'



const CheckoutBtn = ({ products }) => {

    const handleCheckout = async (e) => {
        e.preventDefault()
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
    }

    return (
        <button className='p-3 font-bold text-lg bg-primary' onClick={handleCheckout}>Checkout</button>
    )
}

export default CheckoutBtn