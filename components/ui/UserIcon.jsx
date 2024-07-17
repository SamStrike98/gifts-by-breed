'use client'
import { useState } from "react"

import { MdAccountCircle } from "react-icons/md"

const UserIcon = () => {
    const user = true;
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <span className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                {!user ? <MdAccountCircle size={30} color="white" /> : <div className="w-[30px] h-[30px] rounded-full bg-black"></div>}
            </span>

            {isOpen &&
                <div className="absolute z-60 translate-y-[10px] translate-x-[10px] md:-translate-x-[50px]">
                    {user ?
                        <ul className="flex flex-col justify-evenly items-center bg-secondary border border-white p-2 rounded-md gap-2">
                            <li className="text-white font-bold cursor-pointer" onClick={() => setIsOpen(!isOpen)}>Account</li>
                            <li className="text-white font-bold cursor-pointer" onClick={() => setIsOpen(!isOpen)}>Logout</li>
                        </ul>
                        :
                        <ul className="flex flex-col justify-evenly items-center bg-secondary border border-white p-2 rounded-md gap-2">
                            <li className="text-white font-bold cursor-pointer" onClick={() => setIsOpen(!isOpen)}>Sign In</li>
                        </ul>
                    }
                </div>
            }
        </div>

    )
}

export default UserIcon