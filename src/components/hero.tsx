'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center pt-16 pb-8 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-5 lg:pr-8">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.1]">
              Transform Your Ideas Into Digital Reality
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              Expert freelancing agency delivering custom web development, mobile apps, AI automation, and digital solutions for businesses of all sizes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-3 pt-1">
              <Link
                href="/consultation"
                className="w-full sm:w-auto px-7 py-3 bg-black hover:bg-gray-800 text-white rounded-lg font-semibold text-sm transition-colors text-center"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/portfolio"
                className="w-full sm:w-auto px-7 py-3 bg-white border-2 border-gray-300 text-black hover:bg-gray-50 rounded-lg font-semibold text-sm transition-colors text-center"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* Right Side - Mockup */}
          <div className="relative flex items-center justify-center lg:justify-end">
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