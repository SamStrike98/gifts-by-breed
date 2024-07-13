import Container from "@/components/Container"
import SectionTitle from "@/components/ui/SectionTitle"
import ProductCard from "@/components/ui/ProductCard"

const SimilarProducts = () => {
    return (
        <section className='bg-secondary w-full min-h-[500px]'>
            <Container>
                <div>
                    <SectionTitle text="Similar Products" color="white" />

                    <ProductCard id={1} name={"Dachshund Bookmark"} img={'/dachshund.png'} price={2.50} />
                </div>
            </Container>
        </section>
    )
}

export default SimilarProducts