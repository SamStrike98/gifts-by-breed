import Container from '@/components/Container'
import LoginForm from '@/components/LoginForm'
import Link from 'next/link'
import React from 'react'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

const page = async () => {
    const session = await auth()

    if (session?.user) {
        return redirect('/')
    }

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