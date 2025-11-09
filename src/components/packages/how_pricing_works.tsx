'use client';

import React from 'react';
import { Palette, Settings, Link2, Clock, Lightbulb } from 'lucide-react';

const HowPricingWorks = () => {
  const factors = [
    {
      icon: Palette,
      title: 'Design Complexity',
      description: 'Custom designs, animations, and visual effects increase the scope',
    },
    {
      icon: Settings,
      title: 'Features & Functions',
      description: 'Each feature like user auth, payments, or APIs adds to development time',
    },
    {
      icon: Link2,
      title: 'Integrations',
      description: 'Third-party services, APIs, and system integrations require extra work',
    },
    {
      icon: Clock,
      title: 'Timeline',
      description: 'Rush delivery or priority projects may have different pricing',
    },
  ];

  return (
    <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full mb-4">
            <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Pricing Based on What You Need
          </h2>
          <p className="text-base text-gray-700 max-w-2xl mx-auto">
            We charge based on the specific work required, not arbitrary project sizes. Here's what affects the final price:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {factors.map((factor, index) => {
            const Icon = factor.icon;
            return (
              <div 
                key={index} 
                className="p-6 rounded-xl bg-white border-2 border-gray-300 hover:border-nexiler hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 border-2 border-gray-300 rounded-xl flex items-center justify-center mb-4 group-hover:bg-nexiler group-hover:border-nexiler transition-all">
                  <Icon className="w-6 h-6 text-black group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{factor.title}</h3>
                <p className="text-sm text-gray-600">
                  {factor.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Flexible Pricing Note */}
        <div className="mt-12 p-6 rounded-xl bg-nexiler-subtle border-2 border-nexiler max-w-3xl mx-auto">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-nexiler shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-black">Flexible Pricing:</span> All packages are customizable based on your specific requirements. 
              Final pricing depends on project complexity, features, and timeline. Get a free consultation to discuss your exact needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowPricingWorks;
