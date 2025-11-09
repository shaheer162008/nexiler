'use client';

import React from 'react';
import { Check } from 'lucide-react';

const ServicesWhy = () => {
  const reasons = [
    'Expert team with 5+ years experience',
    'Custom solutions tailored to your needs',
    '99% bug-free delivery guarantee',
    'On-time project completion',
    'Transparent pricing, no hidden fees',
    'Regular progress updates',
    'Post-launch support included',
    'Money-back guarantee',
    'Latest technologies and best practices',
    'Dedicated project manager',
    'Scalable and maintainable code',
    'Complete source code ownership',
  ];

  return (
    <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="p-8 sm:p-12 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler hover:shadow-xl transition-all duration-300">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full mb-6">
              <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-black uppercase tracking-wider">Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">What Makes Us Different</h2>
            <p className="text-base text-gray-700 max-w-2xl mx-auto">
              We're committed to delivering exceptional results that drive real business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-nexiler-subtle transition-all duration-300">
                <Check className="w-5 h-5 text-nexiler shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesWhy;
