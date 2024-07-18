import Container from "@/components/Container"
import SectionTitle from "@/components/ui/SectionTitle"
import Link from "next/link"
import { auth } from "@/auth"


const productsArr = [
    {
        id: 1,
        name: "Dachshund Bookmark",
        quantity: "2"
    },
    {
        id: 2,
        name: "Beagle Bookmark",
        quantity: "1"
    },
    {
        id: 1,
        name: " Bookmark",
        quantity: "1"
    }
]

const page = async ({ }) => {
    const session = await auth()

    return (
        <div className='md:pt-0 pt-[100px]'>
            <Container>
                <SectionTitle text={`${session?.user.name}'s Cart`} color="primary" />
                <div>
                    <ul>
                        {productsArr.map(product => (
                            <li key={product.id}>
                                <Link href={`/products/${product.id}`}>

                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default page