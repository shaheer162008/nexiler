'use client';

import React from 'react';
import { Check } from 'lucide-react';

const ServicesProcess = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your goals, target audience, and project requirements. Define scope and timeline.',
    },
    {
      number: '02',
      title: 'Design & Prototype',
      description: 'Create wireframes and mockups. Get your feedback and refine the design until it\'s perfect.',
    },
    {
      number: '03',
      title: 'Development & Testing',
      description: 'Build your solution using best practices. Rigorous testing to ensure quality and performance.',
    },
    {
      number: '04',
      title: 'Launch & Support',
      description: 'Deploy to production and provide training. Ongoing support to ensure your success.',
    },
  ];

  return (
    <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full mb-6">
            <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Our Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">How We Work</h2>
          <p className="text-base text-gray-700 max-w-2xl mx-auto">
            A proven methodology that delivers results every time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="group p-6 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler hover:shadow-xl transition-all duration-300 text-center">
              <div className="text-4xl font-bold text-gray-200 group-hover:text-nexiler transition-colors duration-300 mb-4">{step.number}</div>
              <h3 className="text-lg font-bold text-black mb-3 group-hover:text-nexiler transition-colors duration-300">{step.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesProcess;
