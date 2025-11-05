'use client';

import React from 'react';
import Newsletter from '@/components/newsletter';
import { Building2, Store, Rocket, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const SolutionsPage = () => {
  const solutions = [
    {
      icon: Building2,
      title: 'Enterprise',
      description: 'Custom digital solutions designed for large organizations. Get dedicated support, advanced features, and enterprise-grade security.',
      features: ['Dedicated team', 'Priority support', 'Custom development', 'Advanced security'],
      link: '/enterprise',
    },
    {
      icon: Store,
      title: 'Small Business',
      description: 'Affordable, professional digital solutions designed specifically for small businesses. Get online fast and start growing.',
      features: ['Professional design', 'Mobile-ready', 'SEO optimized', 'Budget-friendly'],
      link: '/small-business',
    },
    {
      icon: Rocket,
      title: 'Startups',
      description: 'From MVP to market leader. We help startups build, launch, and scale their products quickly and efficiently.',
      features: ['MVP development', 'Rapid prototyping', 'Scalable architecture', 'Flexible pricing'],
      link: '/startups',
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full mb-4">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Solutions</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight px-2">
            Solutions Built for
            <br />
            <span className="text-black">Your Business Size</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-black max-w-2xl mx-auto leading-relaxed px-2">
            Whether you're an enterprise, small business, or startup, we have the perfect solution tailored to your needs and budget.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className="p-8 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 transition-all">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-black mb-3">{solution.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  <div className="mb-6">
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-3">Key Features:</p>
                    <div className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={solution.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="p-12 rounded-2xl border border-gray-200 bg-white text-center">
            <h2 className="text-3xl font-bold text-black mb-4">Not Sure Which Solution is Right for You?</h2>
            <p className="text-base text-black mb-6">
              Let's talk about your needs and find the perfect fit
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
};

export default SolutionsPage;
