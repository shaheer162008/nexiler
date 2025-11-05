'use client';

import React from 'react';
import Newsletter from '@/components/newsletter';
import { Store, TrendingUp, DollarSign, Smartphone, Check } from 'lucide-react';
import Link from 'next/link';

const SmallBusinessPage = () => {
  const features = [
    'Professional website design',
    'Mobile-responsive',
    'SEO optimization',
    'Fast loading speed',
    'Social media integration',
    'Contact forms',
    'Google Analytics',
    'Email support',
    'Regular updates',
    'Hosting setup assistance',
    'Domain configuration',
    'Training included',
  ];

  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full mb-4">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Small Business</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight px-2">
            Grow Your Small Business
            <br />
            <span className="text-black">With Digital Solutions</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-black max-w-2xl mx-auto leading-relaxed px-2">
            Affordable, professional digital solutions designed specifically for small businesses. Get online fast and start growing.
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

      {/* Benefits */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="p-6 rounded-2xl border border-gray-200 bg-white text-center">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Store className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Professional</h3>
              <p className="text-sm text-gray-700">Look credible and trustworthy</p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 bg-white text-center">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <DollarSign className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Affordable</h3>
              <p className="text-sm text-gray-700">Budget-friendly packages</p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 bg-white text-center">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Smartphone className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Mobile Ready</h3>
              <p className="text-sm text-gray-700">Works on all devices</p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 bg-white text-center">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Grow Online</h3>
              <p className="text-sm text-gray-700">Reach more customers</p>
            </div>
          </div>

          {/* What You Get */}
          <div className="p-12 rounded-2xl border border-gray-200 bg-white">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Everything You Need</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-black shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
};

export default SmallBusinessPage;
