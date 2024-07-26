'use client'

import { doCredentialLogin } from "@/app/actions"
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterForm = () => {
    const [error, setError] = useState("")

    const router = useRouter()

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const formData = new FormData(e.currentTarget)

            const name = formData.get("name");
            const email = formData.get("email");
            const password = formData.get("password")

            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            }
            )

            response.status === 201 && router.push("/login")

            if (response.error) {
                setError(response.error.message)
            } else {
                router.push('/')
            }
        } catch (error) {
            console.error(e)
            // setError("Check your details")
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>

                <button type="submit">Register</button>
            </form>
        </>
    )
}

export default RegisterForm