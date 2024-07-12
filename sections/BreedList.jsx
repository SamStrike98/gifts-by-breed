import Container from '@/components/Container'
import BreedCard from '@/components/ui/BreedCard'
import SectionTitle from '@/components/ui/SectionTitle'
import Link from 'next/link'

const breedsArr = [
    {
        id: 1,
        name: "Labrador Retriever",
        link: '/products/category/labrador_retriever',
        image: ''
    },
    {
        id: 2,
        name: "German Shepherd",
        link: '/products/category/german_shepherd',
        image: ''
    },
    {
        id: 3,
        name: "Golden Retriever",
        link: '/products/category/golden_retriever',
        image: ''
    },
    {
        id: 4,
        name: "French Bulldog",
        link: '/products/category/french_bulldog',
        image: ''
    },
    {
        id: 5,
        name: "Bulldog",
        link: '/products/category/bulldog',
        image: ''
    },
    {
        id: 6,
        name: "Beagle",
        link: '/products/category/beagle',
        image: ''
    },
    {
        id: 7,
        name: "Poodle",
        link: '/products/category/poodle',
        image: ''
    },
    {
        id: 8,
        name: "Rottweiler",
        link: '/products/category/rottweiler',
        image: ''
    },
    {
        id: 9,
        name: "German Shorthaired Pointer",
        link: '/products/category/german_shorthaired_pointer',
        image: ''
    },
    {
        id: 10,
        name: "Yorkshire Terrier",
        link: '/products/category/yorkshire_terrier',
        image: ''
    },
    {
        id: 11,
        name: "Dachshund",
        link: '/products/category/dachshund',
        image: ''
    }
]

const BreedList = () => {
    return (
        <section className='bg-[#f2f2f2] min-h-[500px]'>
            <Container>
                <div className='flex flex-col items-center'>
                    <SectionTitle text="List of Breeds" color="primary" />

                    <ul className='flex flex-row flex-wrap w-full justify-center sm:justify-between items-center px-4'>
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