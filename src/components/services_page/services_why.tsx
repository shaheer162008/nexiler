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
        <div className="p-8 sm:p-12 rounded-2xl border border-gray-400 bg-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Why Choose Us?</h2>
            <p className="text-base text-black max-w-2xl mx-auto">
              We're committed to delivering exceptional results that drive real business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-black shrink-0 mt-0.5" />
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
