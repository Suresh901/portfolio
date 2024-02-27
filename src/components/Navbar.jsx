"use client"

import Link from "next/link"
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import NavLink from '@/components/NavLink'

const links = [
    { url: '/', title: "Home" },
    { url: '/about', title: "About" },
    { url: '/portfolio', title: "Portfolio" },
    { url: '/contact', title: "Contact" },
]

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
            {/* links */}
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map(link => (
                    <NavLink link={link} key={link.title} />
                )
                )}
            </div>
            {/* logo */}
            <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
                <Link href='/' className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center ">
                    <span className="text-white mr-1">Suresh</span>
                    <span className="w-12 h-8 bg-white rounded text-black flex items-center justify-center">Stha</span>
                </Link>
            </div>


            {/* icons  */}
            <div className="hidden md:flex items-center gap-6 w-1/3">
                <Link href='https://github.com/Suresh901'>
                    <img src="/github.png" alt="" className="w-8 h-8" />
                </Link>
                <Link href='https://www.linkedin.com/in/suresh-shrestha-784b98256/'>
                    <img src="/linkedin.png" alt="" className="w-6 h-6" />
                </Link>
                <Link href='https://facebook.com/cresus.stha'>
                    <img src="/facebook.png" alt="" className="w-6 h-6" />
                </Link>
                <Link href='https://www.instagram.com/err0r_404_n0tf0und/'>
                    <img src="/insta.png" alt="" className="w-6 h-6" />
                </Link>

            </div>

            {/* responsive menu */}
            <div className="md:hidden">
                <RxHamburgerMenu size={25} className="z-50 relative text-black" onClick={() => setOpen(!open)} />
                {/* menu list */}
                {
                    open &&
                    <div className="absolute bg-black top-0 right-0 w-screen h-screen text-white flex flex-col items-center justify-center gap-8 text-3xl">
                        {links.map(link => (
                            <Link href={link.url} key={link.title}>{link.title}</Link>
                        )
                        )}
                    </div>
                }

            </div>

        </div>
    )
}

export default Navbar