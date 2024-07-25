import Container from '@/components/Container'
import ProductCard from '@/components/ui/ProductCard'


const page = async () => {
    const res = await fetch(`${process.env.URL}/api/products`, { cache: 'no-store' })
    const products = await res.json()
    console.log(products)

    return (
        <div className='md:pt-0 pt-[100px]'>
            <Container>
                <div className='w-full'>
                    {
                        products &&

                        <ul className='flex flex-row flex-wrap gap-1 w-full justify-center sm:justify-between items-center px-3'>
                            {products.map(product => (
                                <ProductCard key={product._id} id={product._id} name={product.name} price={product.price} img={product.images[0]} />
                            ))}
                        </ul>
                    }
                </div>
                <p>Pagination</p>
            </Container>
        </div>
    )
}

export default page