import SectionTitle from '@/components/ui/SectionTitle'
import Container from '@/components/Container'
import { auth } from '@/auth'
import { headers } from "next/headers"
import Link from 'next/link'
import { FaPlus } from "react-icons/fa";
import OrderBox from '@/components/OrderBox'
import { redirect } from 'next/navigation'


const page = async () => {
    const session = await auth()

    if (!session?.user) {
        return redirect("/")
    }

    const headersList = headers();
    const cookie = headersList.get('cookie');

    const res = await fetch(`${process.env.URL}/api/orders/${session?.user.id}`, {
        method: "GET",
        headers: {
            'Cookie': cookie
        }
    }, { cache: 'no-store' })
    const data = await res.json()

    // console.log(data[0].orders[1]?.products.data)
    console.log(data)
    return (
        <div className='bg-[#f2f2f2] md:pt-0 pt-[100px] min-h-[80vh]'>
            <Container>
                <div>
                    <SectionTitle text={`${session?.user.name}'s Account`} color="primary" />

                    {data[0].orders.length > 0 ? <ul className='flex flex-col gap-4'>
                        {data[0].orders.reverse().map(order => (
                            <OrderBox key={session.id} id={order.id} total={order.amountTotal} createdAt={order.createdAt} products={order.products.data} />

                        ))}
                    </ul> :
                        <div className='flex flex-row'>No orders...</div>
                    }
                </div>
            </Container>
        </div>
    )
}

export default page