'use client';

import React from 'react';
import Link from 'next/link';

const FeaturedPost = () => {
  return (
    <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="p-8 sm:p-12 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left - Content */}
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-nexiler text-black rounded-full text-xs font-semibold">
                Featured Article
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-black">
                10 Web Development Trends to Watch in 2025
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Discover the cutting-edge technologies and practices that are shaping the future of web development. From AI integration to performance optimization, learn what's trending.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>Nov 5, 2025</span>
                <span>•</span>
                <span>8 min read</span>
                <span>•</span>
                <span>Sarah Johnson</span>
              </div>
              <Link
                href="/blog/web-development-trends-2025"
                className="inline-flex items-center gap-2 px-6 py-3 bg-nexiler hover:shadow-[0_0_20px_rgba(135,237,130,0.4)] text-black rounded-lg font-semibold text-sm transition-all"
              >
                Read Full Article
              </Link>
            </div>

            {/* Right - Image */}
            <div className="relative w-full h-80 bg-gray-100 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span className="text-sm">Featured Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
