'use client';

import React from 'react';
import Newsletter from '@/components/newsletter';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CustomSolutionsPage = () => {
  const features = [
    'Custom software development',
    'Tailored to your needs',
    'System integration',
    'Legacy system modernization',
    'API development',
    'Third-party integrations',
    'Custom dashboards',
    'Reporting tools',
    'Internal tools',
    'Process automation',
    'Technical consulting',
    'Architecture design',
  ];

  const useCases = [
    'CRM Systems',
    'Project Management',
    'Booking Systems',
    'Learning Platforms',
    'Inventory Systems',
    'Analytics Tools',
    'Workflow Tools',
    'Internal Portals',
  ];

  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full mb-4">
            <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Service</span>
          </div>

          <div className="w-16 h-16 border-2 border-gray-300 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:bg-nexiler transition-all group">
            <Sparkles className="w-8 h-8 text-black group-hover:text-white transition-colors" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight px-2">
            Custom Solutions
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-black max-w-2xl mx-auto leading-relaxed px-2">
            Tailored software solutions for unique business needs. We build exactly what you need, the way you need it.
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="relative px-6 py-3 bg-nexiler text-white rounded-lg font-semibold text-sm overflow-hidden group hover:shadow-[0_0_20px_rgba(135,237,130,0.4)] transition-all"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-nexiler-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>
            <Link
              href="/pricing"
              className="relative px-6 py-3 bg-white border-2 border-nexiler text-black rounded-lg font-semibold text-sm overflow-hidden group hover:bg-nexiler-subtle transition-all"
            >
              <span className="relative z-10">View Pricing</span>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">What's Included</h2>
            <p className="text-base text-black">Fully customized software solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg border-2 border-gray-300 hover:border-nexiler hover:bg-nexiler-subtle transition-all">
                <Check className="w-5 h-5 text-nexiler shrink-0" />
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Use Cases */}
          <div className="p-12 rounded-2xl border-2 border-gray-300 bg-white">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">Common Use Cases</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="text-center p-4 rounded-lg border-2 border-gray-300 hover:border-nexiler hover:bg-nexiler-subtle transition-all">
                  <p className="text-sm font-semibold text-black">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="p-12 rounded-2xl bg-black text-white text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-nexiler-subtle border border-nexiler rounded-full mb-6">
              <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-black uppercase tracking-wider">Let's Build Together</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Have a Unique Challenge?</h2>
            <p className="text-base text-gray-300 mb-6">
              Let's discuss your custom software needs
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/contact"
                className="relative inline-flex items-center gap-2 px-6 py-3 bg-nexiler text-white rounded-lg font-semibold text-sm overflow-hidden group hover:shadow-[0_0_20px_rgba(135,237,130,0.4)] transition-all"
              >
                <span className="relative z-10">Get in Touch</span>
                <ArrowRight className="w-4 h-4 relative z-10" />
                <div className="absolute inset-0 bg-nexiler-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-sm hover:bg-white hover:text-black transition-all"
              >
                View Pricing
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
};

export default CustomSolutionsPage;
