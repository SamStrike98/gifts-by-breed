import SectionTitle from '@/components/ui/SectionTitle'
import Container from '@/components/Container'
import { auth } from '@/auth'
import { headers } from "next/headers"


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
    return (
        <div className='bg-[#f2f2f2] md:pt-0 pt-[100px] min-h-[80vh]'>
            <Container>
                <div>
                    <SectionTitle text={`${session?.user.name}'s Account`} color="primary" />

                    <ul>
                        {data[0].orders.map(order => (
                            <div key={order.sessionId}>order: {order.id} - £{(order.amountTotal * 0.01).toFixed(2)}</div>
                        ))}
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default page