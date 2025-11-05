'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Team Avatars Row */}
        <div className="flex justify-center items-center mb-4">
          <Image 
            src="/hero.avif" 
            alt="Team Collaboration" 
            width={2400} 
            height={560} 
            className="w-full max-w-lg sm:max-w-xl h-auto"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight px-2">
          Transform Your Ideas Into Digital Reality
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed px-2">
          Expert freelancing agency delivering custom web development, mobile apps, AI automation, and digital solutions for businesses of all sizes.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 px-2">
          <Link
            href="/consultation"
            className="w-full sm:w-auto px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-lg font-semibold text-sm transition-colors"
          >
            Get Free Consultation
          </Link>
          <Link
            href="/portfolio"
            className="w-full sm:w-auto px-6 py-3 bg-white border border-gray-200 text-black hover:bg-gray-50 rounded-lg font-semibold text-sm transition-colors"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;