import React from "react";
import Image from "next/image";
import { CgNotes } from "react-icons/cg";
import { FiUsers } from "react-icons/fi";
import { GoGraph, GoThumbsup } from "react-icons/go";




const stats = [
    { icon: <CgNotes size={30} className="text-[#FA7C45]" />, number: "10K", title: "COMPLED PROJECTS" },
    { icon: <FiUsers size={30} className="text-[#FA7C45]" />, number: "80k+", title: "HAPPY CUSTOMERS" },
    { icon: <GoThumbsup size={30} className="text-[#FA7C45]" />, number: "54%", title: "CLIENT SATISFACTION" },
    { icon: <GoGraph size={30} className="text-[#FA7C45]" />, number: "$50", title: "AVERAGE ROLL" },
];

export default function StatsSection() {
    return (
        <section  className="flex flex-col px-6 lg:px-[120px] py-20 md:py-[150px] gap-12">
            {/* Left Side: Title + Description */}
            <div className="flex lg:flex-row flex-col items-center justify-between">
                <div className="  lg:w-[475px]">
                    <h2 className="text-4xl text-center font-extrabold text-[#101010] mb-4">
                        How <span className="text-[#FA7C45]">Digital Marketing</span> Services Fuel Business <span className="text-[#FA7C45]">Growth</span>

                    </h2>
                    <p className="text-lg mt-5 text-[#2c2c2c]">
                       Digital marketing services help businesses reach the right audience, increase brand awareness, and drive sales effectively. By leveraging online strategies, companies can grow their customer base and boost revenue efficiently.
                    </p>
                    <p className="mt-5 text-lg text-[#2c2c2c]">Digital marketing strategies are designed to engage audiences without causing overwhelm or intrusive experiences. While campaigns aim to maximize reach and conversions, they respect user privacy and ensure ethical practices at every step.</p>
                </div>



                <div className=" grid grid-cols-1 mt-7 lg:mt-0 md:grid-cols-2 gap-[20px]">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center justify-center w-[256px] py-5  bg-[#fef9f3] shadow-lg rounded-xl p-6 text-center">
                            {stat.icon}
                            <h3 className="text-[50px] font-bold text-black mt-2">{stat.number}</h3>
                            <p className="text-gray-800 text-[20px] font-semibold mt-3">{stat.title}</p>
                        </div>
                    ))}
                </div>
            </div>


            {/* Right Side: Cards */}


            {/* Image on the side */}
            <div className="overflow-hidden">
                <Image
                    src="/marketing effect.png"
                    alt="Banner"
                    width={500}
                    height={500}
                    className="object-cover h-full transition-transform duration-500 hover:scale-105 w-full"
                />
            </div>
        </section>
    );
}
