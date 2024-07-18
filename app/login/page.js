import React from 'react'
import { signIn } from '@/auth'

const page = async () => {
    return (
        <form action={async () => {
            'use server'
            await signIn('google', { redirectTo: "/" })
        }}>
            <button type='submit'>Sign In</button>
        </form>
    )
}

export default page