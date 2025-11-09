'use client';

import React from 'react';
import Newsletter from '@/components/newsletter';
import { Package, Check, ArrowRight, Zap, Rocket, Building2, Palette, Settings, Link2, Clock, Lightbulb } from 'lucide-react';
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

  const addons = [
    {
      name: 'Extra Page',
      price: '$49',
      detail: 'per additional page',
      description: 'Add more pages to your website',
    },
    {
      name: 'Blog Setup',
      price: '$199',
      detail: 'one-time',
      description: 'Complete blog system with CMS',
    },
    {
      name: 'E-Commerce',
      price: '$499',
      detail: 'starting from',
      description: 'Shopping cart & payment integration',
    },
    {
      name: 'Mobile App',
      price: '$1,499',
      detail: 'starting from',
      description: 'iOS & Android native apps',
    },
    {
      name: 'SEO Boost',
      price: '$299',
      detail: 'per month',
      description: 'Advanced SEO & marketing',
    },
    {
      name: 'Maintenance',
      price: '$149',
      detail: 'per month',
      description: 'Updates, backups & support',
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

      {/* How Pricing Works */}
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
            <div className="p-6 rounded-xl bg-white border-2 border-gray-300 hover:border-nexiler hover:shadow-lg transition-all group">
              <div className="w-12 h-12 border-2 border-gray-300 rounded-xl flex items-center justify-center mb-4 group-hover:bg-nexiler group-hover:border-nexiler transition-all">
                <Palette className="w-6 h-6 text-black group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Design Complexity</h3>
              <p className="text-sm text-gray-600">
                Custom designs, animations, and visual effects increase the scope
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border-2 border-gray-300 hover:border-nexiler hover:shadow-lg transition-all group">
              <div className="w-12 h-12 border-2 border-gray-300 rounded-xl flex items-center justify-center mb-4 group-hover:bg-nexiler group-hover:border-nexiler transition-all">
                <Settings className="w-6 h-6 text-black group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Features & Functions</h3>
              <p className="text-sm text-gray-600">
                Each feature like user auth, payments, or APIs adds to development time
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border-2 border-gray-300 hover:border-nexiler hover:shadow-lg transition-all group">
              <div className="w-12 h-12 border-2 border-gray-300 rounded-xl flex items-center justify-center mb-4 group-hover:bg-nexiler group-hover:border-nexiler transition-all">
                <Link2 className="w-6 h-6 text-black group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Integrations</h3>
              <p className="text-sm text-gray-600">
                Third-party services, APIs, and system integrations require extra work
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border-2 border-gray-300 hover:border-nexiler hover:shadow-lg transition-all group">
              <div className="w-12 h-12 border-2 border-gray-300 rounded-xl flex items-center justify-center mb-4 group-hover:bg-nexiler group-hover:border-nexiler transition-all">
                <Clock className="w-6 h-6 text-black group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Timeline</h3>
              <p className="text-sm text-gray-600">
                Rush delivery or priority projects may have different pricing
              </p>
            </div>
          </div>

          {/* Flexible Pricing Note - Moved Here */}
          <div className="mt-12 p-6 rounded-xl bg-nexiler-subtle border-2 border-nexiler max-w-3xl mx-auto text-center">
            <div className="flex items-start gap-3 justify-center">
              <Lightbulb className="w-5 h-5 text-nexiler shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 text-left">
                <span className="font-semibold text-black">Flexible Pricing:</span> All packages are customizable based on your specific requirements. 
                Final pricing depends on project complexity, features, and timeline. Get a free consultation to discuss your exact needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full mb-4">
              <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-black uppercase tracking-wider">Popular Add-ons</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Enhance Your Package</h2>
            <p className="text-base text-gray-700">Additional services to expand your project capabilities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.map((addon, index) => (
              <div key={index} className="p-6 rounded-xl border-2 border-gray-300 bg-white hover:border-nexiler hover:shadow-lg transition-all text-center">
                <h3 className="text-xl font-bold text-black mb-2">{addon.name}</h3>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-nexiler">{addon.price}</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{addon.detail}</p>
                <p className="text-sm text-gray-700">{addon.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-gray-600">
              Need something else? <Link href="/contact" className="text-nexiler font-semibold hover:underline">Contact us</Link> for custom add-ons and integrations.
            </p>
          </div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="p-12 rounded-2xl bg-black text-white text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-nexiler-subtle border border-nexiler rounded-full mb-6">
              <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-black uppercase tracking-wider">Custom Solution</span>
            </div>
            <div className="w-16 h-16 border-2 border-white rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Package className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Don't See What You Need?
            </h2>
            <p className="text-base text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Every business is unique. We can create a completely custom package tailored to your specific requirements and budget. 
              Tell us what you need, and we'll build the perfect solution from scratch.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="relative inline-flex items-center gap-2 px-8 py-4 bg-nexiler text-white rounded-xl font-bold text-base overflow-hidden group hover:shadow-[0_0_30px_rgba(135,237,130,0.5)] transition-all"
              >
                <span className="relative z-10">Request Custom Quote</span>
                <ArrowRight className="w-5 h-5 relative z-10" />
                <div className="absolute inset-0 bg-nexiler-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-base hover:bg-white hover:text-black transition-all"
              >
                Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
};

export default PackagesPage;
