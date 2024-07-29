import Container from "@/components/Container"
import ReviewCard from "@/components/ui/ReviewCard"
import SectionTitle from "@/components/ui/SectionTitle"

const reviewsArr = [
    {
        id: 1,
        rating: 5,
        text: "I absolutely love the selection of dog breed-specific gifts on this website! As a proud Labrador owner, I found the perfect mug and tote bag that capture my pup's personality. The quality is top-notch, and the delivery was super fast. Highly recommend to all dog lovers!",
        author: "Sarah J."
    },
    {
        id: 2,
        rating: 5,
        text: "This is the best site for dog enthusiasts! I bought a custom Corgi t-shirt and it's now my favourite piece of clothing. The design is adorable, and the fabric is so soft. Plus, the customer service is excellent. I'll definitely be back for more gifts!",
        author: "Mark L."
    },
    {
        id: 3,
        rating: 5,
        text: "I was searching for a unique gift for my friend's birthday, and I stumbled upon this gem of a website. The variety of breed-specific items is fantastic. I ordered a German Shepherd phone case, and my friend was thrilled! Wonderful experience from start to finish.",
        author: "Emily R."
    },
    // {
    //     id: 4,
    //     rating: 5,
    //     text: "Fantastic shopping experience! I bought a Dachshund-themed cushion and it’s even better than I expected. The print is vibrant and the material is high-quality. Shipping was quick, and everything arrived in perfect condition. Will definitely purchase again!",
    //     author: "James P."
    // },
    // {
    //     id: 5,
    //     rating: 5,
    //     text: "Absolutely in love with my new Golden Retriever notebook and keyring! This website has such a great selection for every dog breed lover. The products are unique and well-made. Excellent customer service and fast delivery. Five stars all the way!",
    //     author: "Lisa M."
    // }
]

const Reviews = () => {
    return (
        <section className='bg-secondary min-h-[500px]'>
            <Container>
                <div className="flex flex-col items-center">
                    <SectionTitle text="Reviews" color="white" />
                    <ul className="flex flex-row flex-wrap justify-evenly gap-5 my-10">
                        {reviewsArr.map(review => (
                            <ReviewCard key={review.id} rating={review.rating} text={review.text} author={review.author} />
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    )
}

export default Reviews