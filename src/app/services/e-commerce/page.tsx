'use client';

import React from 'react';
import Newsletter from '@/components/newsletter';
import { ShoppingCart, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ECommercePage = () => {
  const features = [
    'Custom online store design',
    'Product catalog management',
    'Shopping cart & checkout',
    'Payment gateway integration',
    'Inventory management',
    'Order tracking system',
    'Customer accounts',
    'Discount & coupon codes',
    'Shipping calculator',
    'Email notifications',
    'Analytics & reporting',
    'Mobile-optimized',
  ];

  const platforms = [
    'Shopify',
    'WooCommerce',
    'Custom Solutions',
    'Magento',
    'BigCommerce',
    'Wix eCommerce',
    'Stripe',
    'PayPal',
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

          <div className="w-16 h-16 border-2 border-gray-300 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 hover:bg-nexiler transition-all duration-300 group">
            <ShoppingCart className="w-8 h-8 text-black group-hover:text-white transition-colors" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight px-2">
            E-Commerce Solutions
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed px-2">
            Complete online stores with payment processing, inventory management, and customer analytics. Start selling online today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="group relative px-6 py-3 bg-nexiler text-white rounded-lg font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(135,237,130,0.4)] w-full sm:w-auto text-center"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-nexiler-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
            <Link
              href="/pricing"
              className="group relative px-6 py-3 bg-white border-2 border-gray-300 text-black rounded-lg font-semibold text-sm transition-all duration-300 hover:border-nexiler hover:shadow-md w-full sm:w-auto text-center"
            >
              <span className="relative z-10 group-hover:text-nexiler transition-colors duration-300">View Pricing</span>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full mb-6">
              <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-black uppercase tracking-wider">What's Included</span>
            </div>
            <h2 className="text-3xl font-bold text-black mb-4">Everything You Need</h2>
            <p className="text-base text-gray-700">Complete e-commerce solutions for your store</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg border-2 border-gray-300 hover:border-nexiler hover:bg-nexiler-subtle transition-all duration-300">
                <Check className="w-5 h-5 text-nexiler shrink-0" />
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Platforms */}
          <div className="p-12 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">Platforms & Integrations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="group text-center p-4 rounded-lg border-2 border-gray-300 hover:border-nexiler hover:bg-nexiler-subtle transition-all duration-300">
                  <p className="text-sm font-semibold text-black group-hover:text-nexiler transition-colors">{platform}</p>
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
              <span className="text-sm font-semibold text-black uppercase tracking-wider">Ready to Get Started?</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Launch Your Online Store Today</h2>
            <p className="text-base text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's build your e-commerce success story together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group relative px-6 py-3 bg-nexiler text-white rounded-lg font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(135,237,130,0.4)] w-full sm:w-auto text-center"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </span>
                <div className="absolute inset-0 bg-nexiler-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
              <Link
                href="/packages"
                className="group relative px-6 py-3 bg-white border-2 border-white text-black rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-transparent hover:text-white w-full sm:w-auto text-center"
              >
                <span className="relative z-10">View Packages</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
};

export default ECommercePage;
