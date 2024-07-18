'use client'
import { useState } from "react"
import Link from "next/link"
import { MdAccountCircle } from "react-icons/md"
import { signIn, signOut } from "next-auth/react"



const UserIcon = ({ user }) => {
    // const user = true;
    const [isOpen, setIsOpen] = useState(false)
    const handleSignIn = () => {
        signIn();
        setIsOpen(!isOpen)
    }

    const handleSignOut = () => {
        signOut();
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <span className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                {!user ? <MdAccountCircle size={30} color="white" /> : <div className="w-[30px] h-[30px] rounded-full bg-black"></div>}
            </span>

            {isOpen &&
                <div className="absolute h-[80px] z-60 translate-y-[10px] translate-x-[10px] md:-translate-x-[50px] rounded-md bg-secondary border border-white">
                    {user ?
                        <ul className="flex flex-col justify-between items-center p-2 h-full">
                            <li className="text-white font-bold cursor-pointer" onClick={() => setIsOpen(!isOpen)}><Link href="/account">Account</Link></li>
                            <li className="text-white font-bold cursor-pointer" onClick={() => handleSignOut()}>Logout</li>
                        </ul>
                        :
                        <ul className="flex flex-col justify-between items-center p-2 h-full">
                            <li className="text-white font-bold cursor-pointer" onClick={() => handleSignIn()}>
                                Sign In
                            </li>
                        </ul>
                    }
                </div>
            }
        </div>

    )
}

export default UserIcon