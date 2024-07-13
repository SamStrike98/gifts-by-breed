import Container from "@/components/Container"
import ProductCard from "@/components/ui/ProductCard"
import SectionTitle from "@/components/ui/SectionTitle"

const FeaturedProducts = () => {
    return (
        <section className='bg-[#f2f2f2] min-h-[500px]'>
            <Container>
                <div>
                    <SectionTitle text="Featured Products" color="secondary" />

                    <ProductCard id={1} name={"Dachshund Bookmark"} img={'/dachshund.png'} price={2.50} />
                </div>
            </Container>
        </section>
    )
}

export default FeaturedProducts