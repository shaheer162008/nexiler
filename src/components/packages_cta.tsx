'use client';

import React from 'react';
import Link from 'next/link';
import { Package, Sparkles, ArrowRight, Check } from 'lucide-react';

const PackagesCTA = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-400 rounded-full mb-4">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Ready to Get Started?</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Choose Your Perfect Solution
          </h2>
          <p className="text-lg text-gray-600">
            Whether you need a pre-built package or a custom solution, we have got you covered.
          </p>
        </div>

        {/* Two Column Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* View Packages Card */}
          <div className="rounded-2xl border border-gray-400 bg-linear-to-br from-gray-50 via-white to-gray-100 p-8 sm:p-10 relative overflow-hidden group hover:border-black transition-colors">
            <div className="absolute inset-0 bg-linear-to-br from-gray-200/20 via-transparent to-gray-300/20 animate-gradient-shift"></div>
            
            <div className="relative">
              {/* Icon */}
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Package className="h-8 w-8 text-white" />
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white rounded-full text-xs font-semibold mb-4">
                <span>POPULAR CHOICE</span>
              </div>

              {/* Content */}
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-3">
                Pre-Built Packages
              </h3>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                Get started quickly with our carefully crafted packages. Perfect for businesses that want proven solutions at fixed prices.
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm">
                    <strong className="text-black">Fixed Pricing</strong> - Know exactly what you pay upfront
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm">
                    <strong className="text-black">Quick Delivery</strong> - Launch your project in weeks, not months
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm">
                    <strong className="text-black">Proven Solutions</strong> - Battle-tested features that work
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm">
                    <strong className="text-black">3 Tiers Available</strong> - Starter, Professional, and Enterprise
                  </span>
                </li>
              </ul>

              {/* Pricing Preview */}
              <div className="bg-white border border-gray-400 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Starting from</span>
                  <span className="text-xs text-gray-500">+ Add-ons available</span>
                </div>
                <div className="text-4xl font-bold text-black">$999</div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Link
                  href="/packages"
                  className="w-full px-6 py-4 bg-black hover:bg-gray-800 text-white rounded-xl font-semibold text-base transition-colors inline-flex items-center justify-center gap-2 group"
                >
                  View All Packages
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full px-6 py-4 bg-white hover:bg-gray-50 border-2 border-gray-200 text-black rounded-xl font-semibold text-base transition-colors inline-flex items-center justify-center gap-2"
                >
                  Customize Pre-Built Package
                </Link>
              </div>
            </div>
          </div>

          {/* Custom Solutions Card */}
          <div className="rounded-2xl border-2 border-black bg-black p-8 sm:p-10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-br from-gray-800/50 via-transparent to-gray-700/50 animate-gradient-shift"></div>
            
            <div className="relative">
              {/* Icon */}
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="h-8 w-8 text-black" />
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-black rounded-full text-xs font-semibold mb-4">
                <span>RECOMMENDED</span>
              </div>

              {/* Content */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Custom Solutions
              </h3>
              <p className="text-gray-300 mb-6 text-base leading-relaxed">
                Build something unique for your business. We design and develop tailored solutions that perfectly match your vision and requirements.
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-black" />
                  </div>
                  <span className="text-gray-300 text-sm">
                    <strong className="text-white">100% Tailored</strong> - Built specifically for your needs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-black" />
                  </div>
                  <span className="text-gray-300 text-sm">
                    <strong className="text-white">Unlimited Features</strong> - No restrictions on what we can build
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-black" />
                  </div>
                  <span className="text-gray-300 text-sm">
                    <strong className="text-white">Dedicated Team</strong> - Your own project manager and developers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-black" />
                  </div>
                  <span className="text-gray-300 text-sm">
                    <strong className="text-white">Full Ownership</strong> - Complete source code and rights
                  </span>
                </li>
              </ul>

              {/* Pricing Preview */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Flexible pricing</span>
                  <span className="text-xs text-gray-400">Based on scope</span>
                </div>
                <div className="text-4xl font-bold text-white">Custom</div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="w-full px-6 py-4 bg-white hover:bg-gray-100 text-black rounded-xl font-semibold text-base transition-colors inline-flex items-center justify-center gap-2 group"
                >
                  Get Custom Quote
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/consultation"
                  className="w-full px-6 py-4 bg-transparent hover:bg-white/10 border-2 border-white text-white rounded-xl font-semibold text-base transition-colors inline-flex items-center justify-center gap-2"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-black" />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-black" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-black" />
              <span>Money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-black" />
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesCTA;
