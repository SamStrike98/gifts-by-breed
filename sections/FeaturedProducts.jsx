import Container from "@/components/Container"
import SectionTitle from "@/components/ui/SectionTitle"

const FeaturedProducts = () => {
    return (
        <section className='bg-[#f2f2f2] min-h-[500px]'>
            <Container>
                <div>
                    <SectionTitle text="Featured Products" color="primary" />
                </div>
            </Container>
        </section>
    )
}

export default FeaturedProducts