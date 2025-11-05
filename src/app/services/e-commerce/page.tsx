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
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full mb-4">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Service</span>
          </div>

          <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ShoppingCart className="w-8 h-8 text-black" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight px-2">
            E-Commerce Solutions
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-black max-w-2xl mx-auto leading-relaxed px-2">
            Complete online stores with payment processing, inventory management, and customer analytics. Start selling online today.
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold text-sm"
            >
              Get Started
            </Link>
            <Link
              href="/pricing"
              className="px-6 py-3 bg-white border border-gray-200 text-black rounded-lg hover:bg-gray-50 transition-colors font-semibold text-sm"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">What's Included</h2>
            <p className="text-base text-black">Everything for a successful online store</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg border border-gray-200">
                <Check className="w-5 h-5 text-black shrink-0" />
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Platforms */}
          <div className="p-12 rounded-2xl border border-gray-200 bg-white">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">Platforms & Integrations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="text-center p-4 rounded-lg border border-gray-200">
                  <p className="text-sm font-semibold text-black">{platform}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="p-12 rounded-2xl border border-gray-200 bg-white text-center">
            <h2 className="text-3xl font-bold text-black mb-4">Ready to Launch Your Store?</h2>
            <p className="text-base text-black mb-6">
              Let's build your e-commerce success story
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold text-sm"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
};

export default ECommercePage;
