'use client';

import React from 'react';
import Link from 'next/link';

const ServicesHero = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full mb-4">
          <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-black uppercase tracking-wider">Our Services</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight px-2">
          Complete Digital Solutions
          <br />
          <span className="text-nexiler">for Your Business</span>
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed px-2">
          From web development to AI automation, we provide end-to-end digital services tailored to your business needs. Let's bring your vision to life.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="/consultation" className="group relative px-6 py-3 bg-nexiler text-white rounded-lg font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(135,237,130,0.4)] w-full sm:w-auto text-center">
            <span className="relative z-10">Get Free Consultation</span>
            <div className="absolute inset-0 bg-nexiler-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Link>
          <Link href="/packages" className="group relative px-6 py-3 bg-white border-2 border-gray-300 text-black rounded-lg font-semibold text-sm transition-all duration-300 hover:border-nexiler hover:shadow-md w-full sm:w-auto text-center">
            <span className="relative z-10 group-hover:text-nexiler transition-colors duration-300">View Packages</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
