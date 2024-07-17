import Container from "@/components/Container"
import Link from "next/link"


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

const page = ({ }) => {
    return (
        <div className='md:pt-0 pt-[100px]'>
            <Container>
                <h2>Cart</h2>
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