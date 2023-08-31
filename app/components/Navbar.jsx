"use client"
import Image from 'next/image';
import React, {useState} from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Logo from "../../app/5star.png"

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    };

    return (
        <div className='bg-gray-100 w-full ease-in duration-300'>
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-2 text-gray-800'>
                <Link href='/'>
                    <Image
                        src={Logo}
                        alt='5star logo'
                        width={70}
                        height={70}
                    />
                </Link>
                <ul className='hidden sm:flex cursor-pointer uppercase font-extrabold'>
                    <li className='p-4'>
                        <Link href='/' className='active:accent-gold'>Home</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/gallery'> Gallery</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/hire'>For Hire</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>

                {/* Mobile Button */}
                <div onClick={handleNav} className='block sm:hidden z-10 cursor-pointer'>
                    {nav ? (
                        <AiOutlineClose size={20} />
                    ) : (
                        <AiOutlineMenu size={20} />
                    )}
                </div>
                {/* Mobile Menu */}
                <div className={
                    nav
                    ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                    : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 cursor-pointer'
                }>
                    <ul>
                        <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500'>
                            <Link href='/gallery'> Gallery</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500'>
                            <Link href='hire'>For Hire</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500'>
                            <Link href='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar