import Container from "@/components/Container"
import ProductCard from "@/components/ui/ProductCard"
import SectionTitle from "@/components/ui/SectionTitle"

const FeaturedProducts = async () => {
    const res = await fetch(`${process.env.URL}/api/products/featured`, { cache: 'no-store' })
    const products = await res.json()
    console.log(products)

    return (
        <section className='bg-[#f2f2f2] min-h-[500px]'>
            <Container>
                <div className="flex flex-col items-center">
                    <SectionTitle text="Featured Products" color="secondary" />

                    {products &&
                        <ul className="flex flex-row flex-wrap justify-center gap-5">
                            {products.map(product => (
                                <ProductCard key={product._id} id={product._id} name={product.name} img={product.images[0]} price={product.price} />
                            ))}
                        </ul>
                    }

                </div>
            </Container>
        </section>
    )
}

export default FeaturedProducts