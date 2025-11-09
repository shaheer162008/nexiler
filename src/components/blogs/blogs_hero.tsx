'use client';

import React from 'react';

const BlogsHero = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full mb-4">
          <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-black uppercase tracking-wider">Our Blogs</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight px-2">
          Insights & Resources
          <br />
          <span className="text-nexiler">for Digital Growth</span>
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed px-2">
          Discover the latest trends, tips, and best practices in web development, design, AI automation, and digital marketing.
        </p>
      </div>
    </section>
  );
};

export default BlogsHero;
