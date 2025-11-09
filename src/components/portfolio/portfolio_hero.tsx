'use client';

import React from 'react';

const PortfolioHero = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full mb-4">
          <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-black uppercase tracking-wider">Our Work</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight px-2">
          Projects That
          <br />
          <span className="text-nexiler">Speak for Themselves</span>
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed px-2">
          Explore our portfolio of successful projects across web development, mobile apps, AI automation, and digital solutions. Each project showcases our commitment to quality and innovation.
        </p>
      </div>
    </section>
  );
};

export default PortfolioHero;
