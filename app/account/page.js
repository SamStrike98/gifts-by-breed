import SectionTitle from '@/components/ui/SectionTitle'
import Container from '@/components/Container'
import { auth } from '@/auth'
import { headers } from "next/headers"
import Link from 'next/link'
import { FaPlus } from "react-icons/fa";


const page = async () => {
    const session = await auth()
    const headersList = headers();
    const cookie = headersList.get('cookie');

    const res = await fetch(`${process.env.URL}/api/orders/${session?.user.id}`, {
        method: "GET",
        headers: {
            'Cookie': cookie
        }
    }, { cache: 'no-store' })
    const data = await res.json()

    console.log(data[0].orders[0], data[0].orders[0].products.data)
    return (
        <div className='bg-[#f2f2f2] md:pt-0 pt-[100px] min-h-[80vh]'>
            <Container>
                <div>
                    <SectionTitle text={`${session?.user.name}'s Account`} color="primary" />

                    <ul className='flex flex-col gap-4'>
                        {data[0].orders.reverse().map(order => (
                            <div key={order.sessionId} className='h-[35px] overflow-y-hidden border border-black px-2 py-1 rounded-md'>
                                <div className='flex flex-row justify-between'>
                                    <h4>Order: {order.id}</h4>
                                    <div>£{(order.amountTotal * 0.01).toFixed(2)}</div>
                                    <div>{order.createdAt}</div>
                                    <span><FaPlus className='' /></span>
                                </div>
                                {<div className=''>
                                    <ul>
                                        {order.products.data.map(product => (
                                            <li key={product.id} className='flex flex-row gap-4'>
                                                <h6>{product.description}</h6>
                                                <div>£{(product.amount_total * 0.01).toFixed(2)}</div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>}
                            </div>
                        ))}
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default page