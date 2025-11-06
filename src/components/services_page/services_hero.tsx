'use client';

import React from 'react';

const ServicesHero = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-400 rounded-full mb-4">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <span className="text-sm font-semibold text-black uppercase tracking-wider">Our Services</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight px-2">
          Complete Digital Solutions
          <br />
          <span className="text-black">for Your Business</span>
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-black max-w-2xl mx-auto leading-relaxed px-2">
          From web development to AI automation, we provide end-to-end digital services tailored to your business needs. Let's bring your vision to life.
        </p>
      </div>
    </section>
  );
};

export default ServicesHero;
