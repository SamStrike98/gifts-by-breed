import React from 'react'
import Container from './Container'

// REACT ICONS
import { GrFacebookOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrYoutube } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='bg-primary h-[300px]'>
            <Container>
                <div className='h-[300px] w-full flex flex-col items-center justify-between py-10'>
                    <div className='w-full flex flex-row justify-center'>
                        <div className=' w-[60%] flex flex-col sm:flex-row px-auto justify-evenly gap-3'>
                            <ul className='w-full sm:w-1/2 flex flex-row justify-evenly'>
                                <span className='text-white hover:text-secondary transition-all cursor-pointer'>
                                    <GrFacebookOption size={30} />
                                </span>

                                <span className='text-white hover:text-secondary transition-all cursor-pointer'>
                                    <GrInstagram size={30} />
                                </span>

                                <span className='text-white hover:text-secondary transition-all cursor-pointer'>
                                    <GrYoutube size={30} />
                                </span>

                                <span className='text-white hover:text-secondary transition-all cursor-pointer'>
                                    <FaXTwitter size={30} />
                                </span>
                            </ul>
                            <ul className='w-full sm:w-1/2 flex flex-row justify-evenly font-bold gap-3'>
                                <span className='text-white hover:text-secondary transition-all cursor-pointer'>
                                    Socials
                                </span>

                                <span className='text-white hover:text-secondary transition-all cursor-pointer'>
                                    About
                                </span>

                                <span className='text-white hover:text-secondary transition-all cursor-pointer'>
                                    Contact
                                </span>

                                <span className='text-white hover:text-secondary transition-all cursor-pointer'>
                                    Charities
                                </span>
                            </ul>

                        </div>

                    </div>


                    <div className='text-white flex flex-col sm:flex-row sm:gap-2 sm:justify-center justify-evenly items-center px-auto w-[80%]'>
                        <p>Gifts By Breed © 2024</p>
                        <p className='sm:flex hidden'>|</p>
                        <p>Website Design By Sam Strike</p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer