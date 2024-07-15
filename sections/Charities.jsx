import Container from "@/components/Container"
import SectionTitle from "@/components/ui/SectionTitle"
import Link from "next/link"
import Image from "next/image"
import Button from "@/components/ui/Button"

const charitiesArr = [
    {
        id: 1,
        title: 'Beagle Welfare',
        img: '/beagle_welfare.png',
        link: '/'
    },
    {
        id: 2,
        title: 'Dachshund Rescue UK',
        img: '/dachshund_rescue.png',
        link: '/'
    },
    {
        id: 3,
        title: 'German Shepherd Dog Rescue',
        img: '/german_shepherd_dog_rescue.png',
        link: '/'
    },
    {
        id: 4,
        title: 'Labradors in Need',
        img: '/labradors_in_need.png',
        link: '/'
    },
]

const Charities = () => {
    return (
        <section className='bg-primary min-h-[500px]'>
            <Container>
                <div className="flex flex-col items-center justify-center">
                    <SectionTitle text="Charities" color="white" />
                    <p className="text-white text-2xl">These are some of the charities you support when you buy from us!</p>
                    <ul className="flex flex-row">
                        {charitiesArr.map(item => (
                            <li key={item.id}>
                                <Link href={item.link}>
                                    <Image src={item.img} alt={item.title} width={100} height={100} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Button text="All Charities" color="secondary" textColor="white" />
                </div>
            </Container>
        </section>
    )
}

export default Charities