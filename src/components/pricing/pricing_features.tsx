'use client';

import React from 'react';
import { Check } from 'lucide-react';

const PricingFeatures = () => {
  const features = [
    {
      title: 'All Plans Include',
      items: [
        'Quality guarantee - 99% bug-free delivery',
        'Money-back guarantee if not satisfied',
        'Free consultation before starting',
        'Regular progress updates',
        'Source code ownership',
        'Post-launch support included',
      ],
    },
    {
      title: 'Payment Options',
      items: [
        'Flexible payment plans available',
        '50% upfront, 50% on completion',
        'Milestone-based payments for large projects',
        'All major payment methods accepted',
        'No hidden fees or charges',
        'Invoice and receipt provided',
      ],
    },
  ];

  return (
    <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((section, index) => (
            <div key={index} className="p-8 rounded-2xl border border-gray-400 bg-white">
              <h3 className="text-2xl font-bold text-black mb-6">{section.title}</h3>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-black shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingFeatures;
