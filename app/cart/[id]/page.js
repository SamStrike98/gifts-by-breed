import Container from "@/components/Container"
import SectionTitle from "@/components/ui/SectionTitle"
import Link from "next/link"
import { auth } from "@/auth"
import { headers } from "next/headers"
import RemoveFromCartBtn from "@/components/singleProduct/RemoveFromCartBtn"
import Image from "next/image"
import CheckoutBtn from "@/components/CheckoutBtn"
import { redirect } from "next/navigation"


const page = async () => {
    const headersList = headers();
    const cookie = headersList.get('cookie');

    const session = await auth()

    if (!session?.user) {
        return redirect('/')
    }
    const res = await fetch(`${process.env.URL}/api/cart/${session?.user.id}`, {
        method: "GET",
        headers: {
            'Cookie': cookie
        }
    }, { cache: 'no-store' })
    const data = await res.json()

    const totalPrice = data[0].cart.reduce((acc, curr) => acc + curr.price, 0)


    return (
        <div className='md:pt-0 pt-[100px] min-h-[calc(80vh)]'>
            <Container>
                <SectionTitle text={`${session?.user.name}'s Cart`} color="primary" />
                <div className="w-full mt-[20px]">
                    {data && data[0].cart.length > 0 ?
                        <div>
                            <div className="w-full flex flex-row justify-center">
                                <ul className="flex flex-col gap-4  w-[250px] sm:w-[80%] ">
                                    {data[0].cart.map(product => (
                                        <li key={product.id} className="flex flex-row justify-between items-end">
                                            <RemoveFromCartBtn product={product} session={session} />
                                            <Link href={`/products/${product._id}`}>
                                                {product.name}
                                            </Link>
                                            <Image src={product.images[0]} alt={product.name} width={100} height={100} />
                                            <div>{product.count}</div>
                                            <div className="font-bold">
                                                £{(product.price * 0.01).toFixed(2)}
                                            </div>

                                        </li>
                                    ))}
                                    <div className="flex flex-row justify-between border-t border-black"><p>Total:</p> <p className="font-extrabold text-lg">£{(totalPrice * 0.01).toFixed(2)}</p></div>
                                    <div>£{(totalPrice * 0.01 * 0.3).toFixed(2)} going to charity</div>
                                </ul>

                            </div>
                            {<div className="flex flex-row justify-center mt-5"><CheckoutBtn products={data[0].cart} /></div>}
                        </div> :

                        <div className="flex flex-row justify-center">No Products in your cart...</div>
                    }
                </div>
            </Container>
        </div>
    )
}

export default page