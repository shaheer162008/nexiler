'use client';

import React from 'react';
import Newsletter from '@/components/newsletter';
import { Building2, Shield, Users, Zap, Check } from 'lucide-react';
import Link from 'next/link';

const EnterprisePage = () => {
  const features = [
    'Dedicated account manager',
    'Custom development solutions',
    'Priority 24/7 support',
    'Advanced security features',
    'Scalable infrastructure',
    'Custom integrations',
    'Training and onboarding',
    'SLA guarantees',
    'Regular strategy sessions',
    'Unlimited revisions',
    'White-label options',
    'Dedicated development team',
  ];

  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full mb-4">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Enterprise</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight px-2">
            Enterprise Solutions
            <br />
            <span className="text-black">Built for Scale</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-black max-w-2xl mx-auto leading-relaxed px-2">
            Custom digital solutions designed for large organizations. Get dedicated support, advanced features, and enterprise-grade security.
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold text-sm"
            >
              Schedule Demo
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

      {/* Features */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="p-6 rounded-2xl border border-gray-200 bg-white text-center">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Building2 className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Scalable</h3>
              <p className="text-sm text-gray-700">Built to grow with your business</p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 bg-white text-center">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Secure</h3>
              <p className="text-sm text-gray-700">Enterprise-grade security</p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 bg-white text-center">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Dedicated Team</h3>
              <p className="text-sm text-gray-700">Your own development team</p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 bg-white text-center">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Priority Support</h3>
              <p className="text-sm text-gray-700">24/7 dedicated support</p>
            </div>
          </div>

          {/* What's Included */}
          <div className="p-12 rounded-2xl border border-gray-200 bg-white">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">What's Included</h2>
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

export default EnterprisePage;
