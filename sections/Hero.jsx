import Container from "@/components/Container"

const Hero = () => {
    return (
        <section className='bg-secondary h-[400px] md:h-[300px] pt-[100px] md:pt-0'>
            <Container>
                <div className="h-[300px] flex flex-col justify-center items-center">
                    <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold text-center w-[60%] mx-auto leading-relaxed"><span className="text-primary">30%</span> of the <span className="text-primary">SALE Price</span> goes a to a <span className="text-primary">DOG Charity</span></h1>
                </div>
            </Container>
        </section>
    )
}

export default Hero