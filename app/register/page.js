import Container from '@/components/Container'
import RegisterForm from '@/components/RegisterForm'
import Link from 'next/link'

const page = () => {
    return (
        <div className='md:pt-0 pt-[100px] min-h-[calc(80vh)]'>
            <Container>
                <div>
                    <RegisterForm />
                    <p>Have an account?</p>
                    <Link href="/login">Login</Link>
                </div>
            </Container>
        </div>
    )
}

export default page