import Container from "@/components/Container"
import SectionTitle from "@/components/ui/SectionTitle"
import Link from "next/link"
import { auth } from "@/auth"
import { headers } from "next/headers"


// const productsArr = [
//     {
//         id: 1,
//         name: "Dachshund Bookmark",
//         quantity: "2"
//     },
//     {
//         id: 2,
//         name: "Beagle Bookmark",
//         quantity: "1"
//     },
//     {
//         id: 1,
//         name: " Bookmark",
//         quantity: "1"
//     }
// ]

const page = async () => {
    const headersList = headers();
    const cookie = headersList.get('cookie');

    const session = await auth()

    const res = await fetch(`${process.env.URL}/api/cart/${session?.user.id}`, {
        method: "GET",
        headers: {
            'Cookie': cookie
        }
    }, { cache: 'no-store' })
    const data = await res.json()

    const totalPrice = data[0].cart.reduce((acc, curr) => acc + curr.price, 0)
    return (
        <div className='md:pt-0 pt-[100px]'>
            <Container>
                <SectionTitle text={`${session?.user.name}'s Cart`} color="primary" />
                <div className="w-full">
                    {data &&
                        <div className="w-full flex flex-row justify-center">
                            <ul className="flex flex-col  w-[250px]">
                                {data[0].cart.map(product => (
                                    <li key={product._id} className="flex flex-row justify-between">
                                        <Link href={`/products/${product._id}`}>
                                            {product.name}
                                        </Link>
                                        <div className="font-bold">
                                            ${product.price.toFixed(2)}
                                        </div>
                                    </li>
                                ))}
                                <div className="flex flex-row justify-between border-t border-black"><p>Total:</p> <p className="font-extrabold text-lg">£{totalPrice.toFixed(2)}</p></div>
                            </ul>

                        </div>
                    }
                </div>
            </Container>
        </div>
    )
}

export default page