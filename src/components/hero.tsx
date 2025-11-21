'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center pt-20 sm:pt-16 pb-8 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-5 lg:pr-8 text-center lg:text-left">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight px-2">
              <span className="block whitespace-nowrap">Transform Your Ideas</span>
              <span className="block text-nexiler">into Digital Reality</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Expert freelancing agency delivering custom web development, mobile apps, AI automation, and digital solutions for businesses of all sizes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/consultation"
                className="group relative w-full sm:w-auto px-8 py-3.5 bg-nexiler-gradient text-white-custom rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300 text-center glow-nexiler hover:shadow-lg"
              >
                <span className="relative z-10">Get Free Consultation</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 origin-left"></div>
              </Link>
              <Link
                href="/portfolio"
                className="group relative w-full sm:w-auto px-8 py-3.5 bg-white border-2 border-gray-300 text-black rounded-xl font-semibold text-sm transition-all duration-300 text-center hover:border-nexiler hover:shadow-lg hover:-translate-y-0.5"
              >
                <span className="relative z-10 group-hover:text-nexiler transition-colors duration-300">View Our Work</span>
              </Link>
            </div>
          </div>

          {/* Right Side - Mockup */}
          <div className="relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-lg lg:max-w-xl">
              <Image 
                src="/mockup.png" 
                alt="App Mockup" 
                width={810} 
                height={790} 
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;