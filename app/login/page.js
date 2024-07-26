import Container from '@/components/Container'
import LoginForm from '@/components/LoginForm'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='md:pt-0 pt-[100px] min-h-[calc(80vh)]'>
            <Container>
                <div>
                    <LoginForm />
                    <p>No Account?</p>
                    <Link href={'/register'}>Register</Link>
                </div>
            </Container>
        </div>
    )
}

export default page