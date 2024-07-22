import Container from "@/components/Container"
import SectionTitle from "@/components/ui/SectionTitle"
import Link from "next/link"
import { auth } from "@/auth"
import { headers } from "next/headers"
import RemoveFromCartBtn from "@/components/singleProduct/RemoveFromCartBtn"
import Image from "next/image"
import CheckoutBtn from "@/components/CheckoutBtn"


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

    const convert = (cart) => {
        const result = {};
        cart.forEach((obj) => {
            const key = obj._id;
            if (!result[key]) {
                result[key] = { ...obj, count: 0 }
            };
            result[key].count += 1
        });
        return Object.values(result)
    }


    const totalPrice = data[0].cart.reduce((acc, curr) => acc + curr.price, 0)
    return (
        <div className='md:pt-0 pt-[100px] min-h-[calc(80vh)]'>
            <Container>
                <SectionTitle text={`${session?.user.name}'s Cart`} color="primary" />
                <div className="w-full mt-[20px]">
                    {data &&
                        <div className="w-full flex flex-row justify-center">
                            <ul className="flex flex-col gap-4  w-[250px]">
                                {data[0].cart.map(product => (
                                    <li key={product.id} className="flex flex-row justify-between items-center">
                                        <Link href={`/products/${product._id}`}>
                                            {product.name}
                                        </Link>
                                        <Image src={product.img} alt={product.name} width={100} height={100} />
                                        <div>{product.count}</div>
                                        <div className="font-bold">
                                            ${(product.price * 0.01).toFixed(2)}
                                        </div>
                                        <RemoveFromCartBtn product={product} session={session} />
                                    </li>
                                ))}
                                <div className="flex flex-row justify-between border-t border-black"><p>Total:</p> <p className="font-extrabold text-lg">£{(totalPrice * 0.01).toFixed(2)}</p></div>
                                <div>£{(totalPrice * 0.01 * 0.3).toFixed(2)} going to charity</div>
                            </ul>
                            <CheckoutBtn products={data[0].cart} />
                        </div>
                    }
                </div>
            </Container>
        </div>
    )
}

export default page