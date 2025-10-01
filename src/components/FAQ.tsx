'use client'

import React, { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    faqs?: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const defaultFAQs: FAQItem[] = [
        {
            question: 'What Digital Marketing Services Do You Offer?',
            answer: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,',
        },
        {
            question: 'What Types of Properties Does Aruna Offer?',
            answer: 'We offer a wide range of properties including residential, commercial, and investment properties tailored to your needs.',
        },
        {
            question: 'Can Aruna Assist With Property Financing Or Mortgages?',
            answer: 'Yes, we work with leading financial institutions to help you secure the best financing options for your property purchase.',
        },
        {
            question: 'Does Aruna Provide Property Management Services?',
            answer: 'We provide comprehensive property management services including tenant screening, maintenance, and rent collection.',
        },
        {
            question: 'Are Thers Any Fees involved In working With Aruna?',
            answer: 'Our fee structure is transparent and competitive. We discuss all costs upfront before any commitment.',
        },
    ];

    const faqList = faqs || defaultFAQs;

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full py-16 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Side - Title */}
                    <div>
                        <h2 className="text-[44px] font-semibold  text-gray-900 leading-tight">
                            Common Questions
                            <br />
                            <span className="text-[#FF6B47]">Answered</span>
                        </h2>
                        <p className="mt-6 text-[#272727] text-base w-[429px] md:text-lg leading-relaxed">
                            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment,
                        </p>
                    </div>

                    {/* Right Side - Accordion */}
                    <div className="space-y-4">
                        {faqList.map((faq, index) => (
                            <div
                                key={index}
                                className="border-b-1  border-[#2C2C2C] pb-4"
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between text-left py-2 focus:outline-none group"
                                >
                                    <span className="text-xl font-bold text-gray-900 pr-4">
                                        {faq.question}
                                    </span>
                                    <div className="flex-shrink-0 w-5 h-5 text-black flex items-center justify-center rounded-full border-1 border-[#2C2C2C] transition-transform duration-300">
                                        {openIndex === index ? (
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M20 12H4"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 4v16m8-8H4"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <p className="text-[#272727]  leading-relaxed pr-12">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;