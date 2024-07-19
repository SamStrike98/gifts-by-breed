import SectionTitle from '@/components/ui/SectionTitle'
import Container from '@/components/Container'
import { auth } from '@/auth'


const page = async () => {
    const session = await auth()
    return (
        <div className='bg-[#f2f2f2] md:pt-0 pt-[100px] min-h-[80vh]'>
            <Container>
                <div>
                    <SectionTitle text={`${session?.user.name}'s Account`} color="primary" />
                </div>
            </Container>
        </div>
    )
}

export default page