'use client'

import Image from "next/image"
import Container from "./Container"
import Link from "next/link"
import { useState } from "react";

// REACT ICONS
import { MdAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaPaw } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";

const navLinks = [
    {
        id: 1,
        title: "Home",
        link: "/"
    },
    {
        id: 2,
        title: "Shop All",
        link: "/products"
    },
    {
        id: 3,
        title: "Breeds",
        link: "/products/categories"
    },
    {
        id: 4,
        title: "About",
        link: "/about"
    },
    {
        id: 5,
        title: "Contact",
        link: "/contact"
    },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className="fixed md:relative md:flex w-full h-[100px] overflow-y-hidden bg-primary md:z-10 z-50 border-b-2 border-white">
            <Container>
                <div className="flex flex-row justify-between items-center px-8 w-full bg-primary z-50">
                    <Image alt="logo" src="/gbb_logo2.png" height={100} width={100} />
                    <nav className="flex flex-row w-1/2 justify-evenly">
                        {navLinks.map(item => (
                            <li key={item.id} className="md:flex flex-col justify-end items-center group hidden">
                                <span className="group-hover:text-secondary text-transparent transition-all"><FaPaw size={20} /></span>
                                <Link href={item.link} className="text-accent text-lg font-bold ">{item.title}</Link>
                            </li>

                        ))}
                    </nav>

                    <div className="flex flex-row w-1/4 justify-end gap-5">
                        <span className="cursor-pointer">
                            <FaShoppingCart size={30} color="white" />
                        </span>

                        <span className="cursor-pointer">
                            <MdAccountCircle size={30} color="white" />
                        </span>

                        <span className="md:hidden pr-5 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <LiaTimesSolid size={30} color="white" /> : <RxHamburgerMenu size={30} color="white" />}
                        </span>
                    </div>


                </div>

                <nav className={`fixed bg-secondary text-white flex flex-col justify-evenly items-center mt-[100px] h-[300px] w-full z-40 ${isOpen ? 'translate-y-0' : '-translate-y-[400px]'} transition-all duration-600 md:hidden`}>
                    {navLinks.map(item => (
                        <Link key={item.id} href={item.link} onClick={() => setIsOpen(!isOpen)} className="w-full h-full flex flex-row justify-center items-center bg-secondary hover:bg-primary text=lg font-bold transition-all">{item.title}</Link>
                    ))}
                </nav>
            </Container>

        </header>
    )
}

export default Navbar