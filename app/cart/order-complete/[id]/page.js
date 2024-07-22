import Container from '@/components/Container'
import React from 'react'

const page = ({ params }) => {
    const orderId = params.id.slice(13)
    return (
        <div className='md:pt-0 pt-[100px]'>
            <Container>
                <div>
                    Order Complete: {orderId}
                </div>
            </Container>
        </div>
    )
}

export default page