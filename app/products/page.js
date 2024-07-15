import Container from '@/components/Container'
import ProductCard from '@/components/ui/ProductCard'


const page = async () => {
    const res = await fetch(`${process.env.URL}/api/products`, { next: { revalidate: 1800 } })
    const products = await res.json()
    console.log(products)

    return (
        <div className='min-h-[1000px]'>
            <Container>
                <div>
                    {
                        products &&

                        <ul>
                            {products.map(product => (
                                <ProductCard key={product._id} id={product._id} name={product.name} price={product.price} />
                            ))}
                        </ul>
                    }
                </div>
            </Container>
        </div>
    )
}

export default page