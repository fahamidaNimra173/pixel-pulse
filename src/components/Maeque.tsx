'use client'

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

interface Logo {
  src: string;
  alt: string;
}

interface LogoMarqueeProps {
  logos?: Logo[];
  speed?: number;
}

const LogoMarquee: React.FC<LogoMarqueeProps> = ({ logos, speed = 50 }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  // Default logos if none provided
  const defaultLogos: Logo[] = [
    { src: '/Marque/Company logo_Monday.com.png', alt: 'Monday.com' },
    { src: '/Marque/Group 1000011993.png', alt: 'Amazon' },
    { src: '/Marque/Vector (3).png', alt: 'SpaceX' },
    { src: '/Marque/Group 1000011993.png', alt: 'Afterpay' },
  ];

  const logoList = logos || defaultLogos;
  
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logoList, ...logoList, ...logoList];

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let position = 0;
    const animate = () => {
      position -= speed / 60; // 60fps
      
      // Reset position when half the content has scrolled
      const halfWidth = marquee.scrollWidth / 3;
      if (Math.abs(position) >= halfWidth) {
        position = 0;
      }
      
      marquee.style.transform = `translateX(${position}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed]);

  const handleMouseEnter = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleMouseLeave = () => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const currentTransform = marquee.style.transform;
    const currentPosition = parseFloat(currentTransform.replace('translateX(', '').replace('px)', '')) || 0;
    
    let position = currentPosition;
    const animate = () => {
      position -= speed / 60;
      
      const halfWidth = marquee.scrollWidth / 3;
      if (Math.abs(position) >= halfWidth) {
        position = 0;
      }
      
      marquee.style.transform = `translateX(${position}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <div className="flex  items-center">
        {/* Trust Badge */}
        <div className="relative flex-shrink-0 bg-[#FA7C45] z-0 px-12 py-8 text-white clip-path-slant">
          <div className="relative z-60">
            <p className="text-2xl font-bold leading-tight">
              More Than 6,000<br />
              Users Trust<br />
              PixelPulse.
            </p>
          </div>

        </div>

        {/* Marquee Container */}
        <div 
          className="flex-1 overflow-hidden clip-path-slant2 bg-[#f3f3f3] py-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div ref={marqueeRef} className="flex space-x-16 px-8 will-change-transform">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex h-16 w-40 flex-shrink-0 items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={64}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .clip-path-slant {
          clip-path: polygon(0 0, calc(100% - 0px) 0%, 0 500%, 0 00%);
        }
               
      `}</style>
    </div>
  );
};

export default LogoMarquee;