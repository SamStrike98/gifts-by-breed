import Container from '@/components/Container'
import BreedCard from '@/components/ui/BreedCard'
import SectionTitle from '@/components/ui/SectionTitle'
import Link from 'next/link'


const breedsArr = [
    {
        id: 1,
        name: "Labrador Retriever",
        link: '/products/categories/labrador_retriever',
        image: '/labrador_retriever.png'
    },
    {
        id: 2,
        name: "German Shepherd",
        link: '/products/categories/german_shepherd',
        image: '/german_shepherd.png'
    },
    {
        id: 3,
        name: "Golden Retriever",
        link: '/products/categories/golden_retriever',
        image: '/golden_retriever.png'
    },
    {
        id: 4,
        name: "French Bulldog",
        link: '/products/categories/french_bulldog',
        image: '/french_bulldog.png'
    },
    {
        id: 5,
        name: "Bulldog",
        link: '/products/categories/bulldog',
        image: '/bulldog.png'
    },
    {
        id: 6,
        name: "Beagle",
        link: '/products/categories/beagle',
        image: '/beagle.png'
    },
    // {
    //     id: 7,
    //     name: "Poodle",
    //     link: '/products/category/poodle',
    //     image: '/poodle.png'
    // },
    {
        id: 8,
        name: "Rottweiler",
        link: '/products/categories/rottweiler',
        image: '/rottweiler.png'
    },
    {
        id: 9,
        name: "German Shorthaired Pointer",
        link: '/products/categories/german_shorthaired_pointer',
        image: '/german_shorthaired_pointer.png'
    },
    {
        id: 10,
        name: "Yorkshire Terrier",
        link: '/products/categories/yorkshire_terrier',
        image: '/yorkshire_terrier.png'
    },
    {
        id: 11,
        name: "Dachshund",
        link: '/products/categories/dachshund',
        image: '/dachshund.png'
    }
]

const BreedList = () => {
    return (
        <section className='bg-[#f2f2f2] min-h-[500px]'>
            <Container>
                <div className='flex flex-col items-center'>
                    <SectionTitle text="List of Breeds" color="primary" />

                    <ul className='flex flex-row flex-wrap gap-1 w-full justify-center sm:justify-between items-center px-3'>
                        {breedsArr.map(breed => (
                            <BreedCard key={breed.id} name={breed.name} link={breed.link} img={breed.image} />
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    )
}

export default BreedList