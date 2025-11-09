'use client';

import React from 'react';
import Newsletter from '@/components/newsletter';
import HowPricingWorks from '@/components/packages/how_pricing_works';
import PackageAddons from '@/components/packages/package_addons';
import CustomPackageCTA from '@/components/packages/custom_package_cta';
import { Check, ArrowRight, Zap, Rocket, Building2 } from 'lucide-react';
import Link from 'next/link';

const PackagesPage = () => {
  const packages = [
    {
      name: 'Basic',
      icon: Zap,
      price: '$299',
      priceDetail: 'per feature/task',
      description: 'Perfect for single tasks, small fixes, or testing our services',
      ideal: 'Landing pages, bug fixes, small features, consultations',
      features: [
        'Single task/feature delivery',
        'Bug fixes & improvements',
        'Landing page design',
        'Form integration',
        'Basic SEO setup',
        'Simple animations',
        '7-day delivery',
        '2 weeks support',
        'Source code included',
        'Free consultation call',
      ],
      popular: false,
      link: '/contact',
    },
    {
      name: 'Professional',
      icon: Rocket,
      price: '$999',
      priceDetail: 'starting from',
      description: 'Complete solutions for businesses ready to grow online',
      ideal: 'Full websites, web apps, mobile apps, e-commerce stores',
      features: [
        'Complete project delivery',
        'Multi-page websites (up to 10 pages)',
        'Custom web/mobile applications',
        'E-commerce integration',
        'CMS & database setup',
        'Payment gateway integration',
        'Advanced SEO & analytics',
        'Responsive design',
        '3 months support',
        'Unlimited revisions',
        'Priority support',
        'Free hosting guidance',
      ],
      popular: true,
      link: '/contact',
    },
    {
      name: 'Enterprise',
      icon: Building2,
      price: '$2,999',
      priceDetail: 'starting from',
      description: 'Large-scale projects with complex requirements and dedicated team',
      ideal: 'Enterprise software, SaaS platforms, complex systems, AI integration',
      features: [
        'Unlimited pages & features',
        'Custom enterprise solutions',
        'AI & automation integration',
        'Multi-platform development',
        'Advanced security features',
        'Scalable architecture',
        'API development & integrations',
        'Dedicated project manager',
        'Dedicated development team',
        '12 months support',
        '24/7 priority support',
        'Training & documentation',
        'SLA guarantee',
        'Free maintenance (first 3 months)',
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
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full mb-4">
            <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Our Packages</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight px-2">
            Transparent Pricing
            <br />
            <span className="text-nexiler">For Every Budget</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed px-2">
            Choose the package that fits your needs. All prices are based on project scope and complexity. 
            <span className="font-semibold text-black"> Starting from just $299</span> for small tasks to enterprise solutions.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-nexiler" />
              <span className="text-sm text-gray-700">No hidden fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-nexiler" />
              <span className="text-sm text-gray-700">Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-nexiler" />
              <span className="text-sm text-gray-700">Money-back guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => {
              const Icon = pkg.icon;
              return (
                <div
                  key={index}
                  className={`relative p-8 rounded-2xl border-2 bg-white transition-all ${
                    pkg.popular
                      ? 'border-nexiler shadow-2xl scale-105 lg:scale-110'
                      : 'border-gray-300 hover:border-nexiler hover:shadow-xl'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1.5 bg-nexiler text-white text-xs font-bold rounded-full shadow-lg">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border-2 transition-all ${
                    pkg.popular ? 'bg-nexiler border-nexiler' : 'border-gray-300 bg-white'
                  }`}>
                    <Icon className={`w-7 h-7 ${pkg.popular ? 'text-white' : 'text-black'}`} />
                  </div>

                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-black mb-2">{pkg.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
                    
                    {/* Ideal For Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-nexiler-subtle border border-nexiler rounded-full">
                      <div className="w-1.5 h-1.5 bg-nexiler rounded-full"></div>
                      <span className="text-xs font-semibold text-black">IDEAL FOR</span>
                    </div>
                    <p className="text-sm text-gray-700 mt-2 leading-relaxed">{pkg.ideal}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b-2 border-gray-200">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-black">{pkg.price}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{pkg.priceDetail}</p>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={pkg.link}
                    className={`relative block w-full text-center px-6 py-4 rounded-xl font-bold text-sm transition-all mb-6 overflow-hidden group ${
                      pkg.popular
                        ? 'bg-nexiler hover:shadow-[0_0_30px_rgba(135,237,130,0.5)] text-white'
                        : 'bg-white hover:bg-nexiler-subtle border-2 border-nexiler text-black'
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    {pkg.popular && (
                      <div className="absolute inset-0 bg-nexiler-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    )}
                  </Link>

                  {/* Features */}
                  <div className="space-y-3">
                    <p className="text-sm font-bold text-black mb-4 uppercase tracking-wide">What's Included:</p>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-nexiler shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How Pricing Works Component */}
      <HowPricingWorks />

      {/* Package Add-ons Component */}
      <PackageAddons />

      {/* Custom Package CTA Component */}
      <CustomPackageCTA />

      <Newsletter />
    </main>
  );
};

export default PackagesPage;
