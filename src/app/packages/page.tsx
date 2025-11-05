'use client';

import React from 'react';
import Newsletter from '@/components/newsletter';
import { Package, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const PackagesPage = () => {
  const packages = [
    {
      name: 'Starter Package',
      price: '$999',
      description: 'Perfect for small businesses and startups getting started',
      features: [
        'Single page website',
        'Responsive design',
        'Contact form',
        'Basic SEO',
        'Social media links',
        '1 month support',
        'Fast delivery (7 days)',
        'Source code included',
      ],
      popular: false,
      link: '/contact',
    },
    {
      name: 'Professional Package',
      price: '$2,499',
      description: 'Most popular choice for growing businesses',
      features: [
        'Up to 10 pages',
        'Custom design',
        'CMS integration',
        'Advanced SEO',
        'Contact forms',
        '3 months support',
        'Analytics setup',
        'Social media integration',
        'Fast loading speed',
        'Mobile optimized',
      ],
      popular: true,
      link: '/contact',
    },
    {
      name: 'Enterprise Package',
      price: 'Custom',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited pages',
        'Custom development',
        'Advanced features',
        'Dedicated team',
        'Priority support',
        '12 months support',
        'Training included',
        'API integrations',
        'Custom reporting',
        'SLA guarantee',
      ],
      popular: false,
      link: '/contact',
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full mb-4">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Our Packages</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight px-2">
            Choose Your Perfect
            <br />
            <span className="text-black">Package</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-black max-w-2xl mx-auto leading-relaxed px-2">
            From starter packages to enterprise solutions, we have the right package for every business size and budget.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border bg-white transition-all ${
                  pkg.popular
                    ? 'border-black scale-105'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {pkg.popular && (
                  <div className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-2xl font-bold text-black mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-black">{pkg.price}</span>
                  {pkg.price !== 'Custom' && <span className="text-gray-600 text-sm"> / project</span>}
                </div>
                <p className="text-sm text-gray-700 mb-6">{pkg.description}</p>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-black shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={pkg.link}
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold text-sm transition-colors ${
                    pkg.popular
                      ? 'bg-black text-white hover:bg-gray-800'
                      : 'bg-white border border-gray-200 text-black hover:bg-gray-50'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="p-12 rounded-2xl border border-gray-200 bg-white text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Package className="w-8 h-8 text-black" />
            </div>
            <h2 className="text-3xl font-bold text-black mb-4">Need a Custom Package?</h2>
            <p className="text-base text-black mb-6 max-w-2xl mx-auto">
              Every business is unique. We can create a custom package tailored specifically to your needs and budget. Tell us what you need, and we'll build the perfect solution.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold text-sm"
            >
              Request Custom Package
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Available Add-ons</h2>
            <p className="text-base text-black">Enhance any package with these extras</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-gray-200 bg-white text-center">
              <h3 className="text-lg font-bold text-black mb-2">Extra Pages</h3>
              <p className="text-2xl font-bold text-black mb-2">$99</p>
              <p className="text-sm text-gray-700">per page</p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 bg-white text-center">
              <h3 className="text-lg font-bold text-black mb-2">E-Commerce</h3>
              <p className="text-2xl font-bold text-black mb-2">$799</p>
              <p className="text-sm text-gray-700">Shopping cart & payment</p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 bg-white text-center">
              <h3 className="text-lg font-bold text-black mb-2">Mobile App</h3>
              <p className="text-2xl font-bold text-black mb-2">$1,999</p>
              <p className="text-sm text-gray-700">iOS & Android app</p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 bg-white text-center">
              <h3 className="text-lg font-bold text-black mb-2">Maintenance</h3>
              <p className="text-2xl font-bold text-black mb-2">$199</p>
              <p className="text-sm text-gray-700">per month</p>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
};

export default PackagesPage;
