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
        <section className="flex flex-col  px-[120px] py-[150px] gap-12">
            {/* Left Side: Title + Description */}
            <div className="flex items-center justify-between">
                <div className=" w-[475px]">
                    <h2 className="text-4xl font-extrabold text-[#101010] mb-4">
                        How <span className="text-[#FA7C45]">Digital Marketing</span> Services Fuel Business <span className="text-[#FA7C45]">Growth</span>

                    </h2>
                    <p className="text-lg mt-5 text-[#2c2c2c]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    </p>
                    <p className="mt-5 text-[#2c2c2c]">quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
                </div>



                <div className=" grid grid-cols-2 gap-[20px]">
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
            <div className="">
                <Image
                    src="/marketing effect.png"
                    alt="Banner"
                    width={500}
                    height={500}
                    className="object-cover h-full w-full"
                />
            </div>
        </section>
    );
}
