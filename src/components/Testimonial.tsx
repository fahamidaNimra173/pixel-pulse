"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

interface Testimonial {
  name: string;
  role: string;
  comment: string;
  avatar: string;
}

interface TestimonialSliderProps {
  testimonials?: Testimonial[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const defaultTestimonials: Testimonial[] = [
    {
      name: "Kianna Curtis",
      role: "Customers",
      comment:
        "I was thoroughly impressed with their strategy. They have a deep understanding of our market and have helped us achieve remarkable growth.",
      avatar: "/testimonial/Ellipse 452 (1) - Copy.png",
    },
    {
      name: "Marcus Johnson",
      role: "Business Owner",
      comment:
        "Working with this team transformed our online presence. Their innovative approach and attention to detail exceeded all expectations.",
      avatar: "/testimonial/Ellipse 452 - Copy.png",
    },
    {
      name: "Sofia Rodriguez",
      role: "Marketing Director",
      comment:
        "The results speak for themselves. Our engagement has tripled, and the ROI has been phenomenal. Highly recommend their services!",
      avatar: "/testimonial/Ellipse 452 (2).png",
    },
    {
      name: "Sofia Rodriguez",
      role: "Marketing Director",
      comment:
        "The results speak for themselves. Our engagement has tripled, and the ROI has been phenomenal. Highly recommend their services!",
      avatar: "/testimonial/Ellipse 452 (2).png",
    },
    {
      name: "Sofia Rodriguez",
      role: "Marketing Director",
      comment:
        "The results speak for themselves. Our engagement has tripled, and the ROI has been phenomenal. Highly recommend their services!",
      avatar: "/testimonial/Ellipse 452 (2).png",
    },
    {
      name: "Sofia Rodriguez",
      role: "Marketing Director",
      comment:
        "The results speak for themselves. Our engagement has tripled, and the ROI has been phenomenal. Highly recommend their services!",
      avatar: "/testimonial/Ellipse 452 (2).png",
    },
    {
      name: "Sofia Rodriguez",
      role: "Marketing Director",
      comment:
        "The results speak for themselves. Our engagement has tripled, and the ROI has been phenomenal. Highly recommend their services!",
      avatar: "/testimonial/Ellipse 452 (2).png",
    },
    {
      name: "Sofia Rodriguez",
      role: "Marketing Director",
      comment:
        "The results speak for themselves. Our engagement has tripled, and the ROI has been phenomenal. Highly recommend their services!",
      avatar: "/testimonial/Ellipse 452 (2).png",
    },
  ];

  const testimonialList = testimonials || defaultTestimonials;

  return (
    <div className="w-full py-[150px] px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-8">
          Do not Just Take Our Word for It— <br />
          Hear from <span className="text-[#FF6B47]">Our Clients</span>
        </h2>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setCurrentIndex(swiper.activeIndex);
            }}
            spaceBetween={30}
            slidesPerView={1}
          >
            {testimonialList.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                  <p className="text-xl md:text-2xl text-wrap  text-gray-700 leading-relaxed mb-8">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm md:text-base text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="w-10 h-10 flex items-center justify-center  hover:bg-gray-100 transition-colors"
                        aria-label="Previous testimonial"
                      >
                        <svg
                          className="w-5 h-5 text-gray-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>

                      <span className="text-gray-700 font-medium">
                        {currentIndex + 1}/{testimonialList.length}
                      </span>

                      <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="w-10 h-10 flex items-center justify-center  hover:bg-gray-100 transition-colors"
                        aria-label="Next testimonial"
                      >
                        <svg
                          className="w-5 h-5 text-gray-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;