'use client'

import Image from "next/image";
import Button from "../ui/Button";
import Ellipse from "./Ellipse";
import EllipseOne from "./Ellipse1";
import Link from "next/link";

import { FaHamburger } from "react-icons/fa";
import { useState } from "react";

import { ImCross } from "react-icons/im";

export default function Navbar() {
    const [clicked, setClicked] = useState(false)
    const links = [
        { name: 'Home', path: '/' },
        { name: 'Service', path: '#services' },
        {
            name: 'Blog', path: '#blog'
        },
        {
            name: 'Contact Us', path: '#contact'
        }
    ]

    const handleMenu = () => {
        // e.preventDefault()
        console.log('button is clicked')
        setClicked(true)
    }
    const handleCross = () => {
        // e.preventDefault()
        console.log('button is closed')
        setClicked(false)
    }
    return (
        <section className="lg:px-[75px] px-6 bg-white pb-1 fixed w-full z-100 top-0 md:py-6 ">
            <div className="absolute -z-10 -top-70 -left-50">
                <Ellipse />
            </div>
            <div className="absolute -z-10 -top-70 -right-50">
                <Ellipse />
            </div>
            {/* for larger devices */}
            <div className="lg:flex hidden  items-center justify-between">
                <div>
                    <Image
                        width={150}
                        height={22}
                        alt="logo"
                        src='/PixelPulse..png'
                    />
                </div>
                <div className="flex items-center justify-center gap-[30px]">

                    {links.map((link) => (
                        <Link key={link.name} href={link.path}><span className="px-[14px]  text-[16px] text-[#101010cc] font-normal">{link.name}</span></Link>
                    ))}
                    <p className="px-[14px]  text-[16px] text-[#101010cc] font-normal ">Home</p>

                    {/* <Link><span>{links.name}</span></Link> */}

                    {/* <p className="px-[14px]  text-[16px] text-[#101010cc] font-normal ">Service</p>
                    <p className="px-[14px]  text-[16px] text-[#101010cc] font-normal ">Blog</p>
                    <p className="px-[14px]  text-[16px] text-[#101010cc] font-normal ">Contact Us</p> */}
                </div>
                <div>
                    <Button className="text-[16px]">
                        Buy Template
                    </Button>
                </div>

            </div>
            {/* for medium device */}
            <div className={`flex py-6 lg:hidden  justify-between ${clicked ? 'items-start' : 'items-center'}`}>
                <div>
                    <Image
                        width={150}
                        height={22}
                        alt="logo"
                        src='/PixelPulse..png'
                    />
                </div>
                <div>

                    {
                        clicked ?
                            <div className="flex flex-col items-end gap-2">
                                <button onClick={handleCross}>
                                    <ImCross className="w-8 h-8 text-[#FA7C45]" ></ImCross>
                                </button>
                                <div className="absolute -z-10 top-10  -right-0">
                                    <EllipseOne />
                                </div>
                                <div className="flex flex-col items-center justify-center py-10   gap-[20px]">

                                    {links.map((link) => (
                                        <Link key={link.name} href={link.path}><span className="  text-[16px] text-[#101010cc] font-normal">{link.name}</span></Link>
                                    ))}


                                    <div>
                                        <Button className="text-[16px]">
                                            Buy Template
                                        </Button>
                                    </div>
                                </div>


                            </div>
                            :
                            <button onClick={handleMenu}>
                                <FaHamburger className="w-7 h-7 text-[#FA7C45]"></FaHamburger>

                            </button>
                    }


                </div>






            </div>
        </section>

    );
}