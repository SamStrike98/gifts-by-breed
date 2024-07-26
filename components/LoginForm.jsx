'use client'

import { doCredentialLogin } from "@/app/actions"
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
    const [error, setError] = useState("")

    const router = useRouter()
    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const formData = new FormData(e.currentTarget)

            const response = await doCredentialLogin(formData)

            if (response.error) {
                setError(response.error.message)
            } else {
                router.push('/')
                router.refresh()
            }
        } catch (error) {
            console.error(error)
            setError("Check your details")
        }

    }

    return (
        <>
            <div className="text-red-500">{error}</div>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>

                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default LoginForm