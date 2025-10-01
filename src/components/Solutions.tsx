'use client'

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { TfiBarChart } from "react-icons/tfi";
import { PiChartBarHorizontal, PiChartLineUp, PiPresentationChart } from "react-icons/pi";
import Button from "./ui/Button";


interface SolutionCard {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
    image: string;
}

const solutions: SolutionCard[] = [
    {
        id: 1,
        icon: <PiChartBarHorizontal size={30} />,
        title: "Digital Advertising Agency",
        description: "Gain deep insights into your business with our analytics solutions.",
        image: "/solutions/image (1).png",
    },
    {
        id: 2,
        icon: <PiPresentationChart size={30} />,
        title: "Social Media Agency",
        description: "Boost user engagement with targeted strategies and campaigns.",
        image: "/solutions/image (2).png",
    },
    {
        id: 3,
        icon: <PiChartLineUp size={30} />,
        title: "Wde Development Agency",
        description: "Enhance your brand reputation and expand your market presence.",
        image: "/solutions/image (3).png",
    },
    {
        id: 4,
        icon: <TfiBarChart size={30} />,
        title: "Customer Satisfaction",
        description: "Improve customer satisfaction through better service and experience.",
        image: "/solutions/image (1).png",
    },
];

export default function Solutions() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section className="px-[165px] py-16 text-black">
            <div className="max-w-7xl mx-auto flex flex-col gap-6">
                <h1 className="text-[44px] leading-14 text-center mx-auto w-[881px] font-extrabold">
                    Strengthening Your <span className="text-[#FA7C45]">Business</span><br /> with Trusted <span className="text-[#FA7C45]">Digital Marketing</span>
                </h1>
                <p className="text-lg font-semibold text-center mx-auto w-[652px] text-[#2c2c2c]">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-2  gap-[30px] mt-10 relative">
                    {solutions.map((solution) => (
                        <div
                            key={solution.id}
                            className="relative cursor-pointer  overflow-hidden shadow-lg"
                            onMouseEnter={() => setHoveredId(solution.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="p-[30px]  flex flex-col gap-11 bg-[#fafafa] border-1 border-[#D9D9D9]">
                                <div className="flex items-center gap-7">
                                    <div className="bg-[#FA7C45] rounded-full text-white p-4">{solution.icon}</div>
                                    <h2 className=" w-[294px] text-black font-semibold text-[32px] leading-10"> {solution.title}</h2>
                                </div>
                                <Image
                                    src={solution.image}
                                    alt={solution.title}
                                    width={480}
                                    height={368}
                                    className="object-cover h-full w-full "
                                />
                            </div>

                            {/* Hover Card */}
                            <AnimatePresence>
                                {hoveredId === solution.id && (
                                    <motion.div
                                        initial={{ y: -0, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -70, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute top-0 left-1/2 w-full h-full -translate-x-1/2 bg-[#FA7C45]/80 p-6 flex flex-col items-center justify-center  text-white z-20"
                                    >
                                        <div className="bg-white text-[#FA7C45] p-4 rounded-full">
                                            {solution.icon}
                                        </div>
                                        <h3 className="text-[40px] font-semibold mt-[44px] mb-[25px]">{solution.title}</h3>
                                        <p className="text-center text-sm">{solution.description}</p>
                                        <button className="mt-[30px]  underline text-white bg-transparent">
                                            Read More
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-12 flex items-center justify-center">
                <Button >View All Services</Button>
            </div>

        </section>
    );
}
