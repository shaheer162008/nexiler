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
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full mb-4">
            <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
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
          <div className="group p-8 sm:p-10 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler hover:shadow-xl transition-all duration-300 cursor-pointer text-center lg:text-left">
            {/* Icon */}
            <div className="w-16 h-16 border-2 border-gray-300 group-hover:border-nexiler rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 mx-auto lg:mx-0">
              <Package className="h-8 w-8 text-black group-hover:text-nexiler transition-colors duration-300" />
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-nexiler-subtle border-2 border-nexiler text-nexiler-dark rounded-full text-xs font-semibold mb-4">
              <span>POPULAR CHOICE</span>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-black group-hover:text-nexiler mb-3 transition-colors duration-300">
                Pre-Built Packages
              </h3>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                Get started quickly with our carefully crafted packages. Perfect for businesses that want proven solutions at fixed prices.
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 text-left inline-block">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-nexiler rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm">
                    <strong className="text-black">Fixed Pricing</strong> - Know exactly what you pay upfront
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-nexiler rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm">
                    <strong className="text-black">Quick Delivery</strong> - Launch your project in weeks, not months
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-nexiler rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm">
                    <strong className="text-black">Proven Solutions</strong> - Battle-tested features that work
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-nexiler rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm">
                    <strong className="text-black">3 Tiers Available</strong> - Starter, Professional, and Enterprise
                  </span>
                </li>
              </ul>

              {/* Pricing Preview */}
              <div className="relative bg-black rounded-2xl p-6 mb-6 overflow-hidden group-hover:scale-[1.02] transition-all duration-300">
                <div className="absolute inset-0 bg-linear-to-br from-nexiler/20 to-transparent"></div>
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                    <div className="w-1.5 h-1.5 bg-nexiler rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-white/80">STARTING PRICE</span>
                  </div>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-6xl font-bold text-white">$999</span>
                    <span className="text-xl text-white/60 mb-2">/project</span>
                  </div>
                  <p className="text-sm text-white/50">Fixed packages • Quick delivery</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Link
                  href="/packages"
                  className="group w-full px-6 py-4 bg-nexiler hover:bg-nexiler-dark text-white rounded-xl font-semibold text-base transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  View All Packages
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="group w-full px-6 py-4 bg-white hover:bg-nexiler-subtle border-2 border-gray-300 hover:border-nexiler text-black rounded-xl font-semibold text-base transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  <span className="group-hover:text-nexiler transition-colors duration-300">Customize Pre-Built Package</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Custom Solutions Card */}
          <div className="group p-8 sm:p-10 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler hover:shadow-xl transition-all duration-300 cursor-pointer text-center lg:text-left">
            {/* Icon */}
            <div className="w-16 h-16 border-2 border-gray-300 group-hover:border-nexiler rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 mx-auto lg:mx-0">
              <Sparkles className="h-8 w-8 text-black group-hover:text-nexiler transition-colors duration-300" />
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-nexiler text-white rounded-full text-xs font-semibold mb-4">
              <span>RECOMMENDED</span>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-black group-hover:text-nexiler mb-3 transition-colors duration-300">
                Custom Solutions
              </h3>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                Build something unique for your business. We design and develop tailored solutions that perfectly match your vision and requirements.
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 text-left inline-block">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-nexiler rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm">
                    <strong className="text-black">100% Tailored</strong> - Built specifically for your needs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-nexiler rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm">
                    <strong className="text-black">Unlimited Features</strong> - No restrictions on what we can build
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-nexiler rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm">
                    <strong className="text-black">Dedicated Team</strong> - Your own project manager and developers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-nexiler rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm">
                    <strong className="text-black">Full Ownership</strong> - Complete source code and rights
                  </span>
                </li>
              </ul>

              {/* Pricing Preview */}
              <div className="relative bg-black rounded-2xl p-6 mb-6 overflow-hidden group-hover:scale-[1.02] transition-all duration-300">
                <div className="absolute inset-0 bg-linear-to-br from-nexiler/20 to-transparent"></div>
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                    <div className="w-1.5 h-1.5 bg-nexiler rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-white/80">CUSTOM QUOTE</span>
                  </div>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-6xl font-bold text-white">Custom</span>
                  </div>
                  <p className="text-sm text-white/50">Tailored solutions • Unlimited scope</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="group w-full px-6 py-4 bg-nexiler hover:bg-nexiler-dark text-white rounded-xl font-semibold text-base transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Get Custom Quote
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/consultation"
                  className="group w-full px-6 py-4 bg-white hover:bg-nexiler-subtle border-2 border-gray-300 hover:border-nexiler text-black rounded-xl font-semibold text-base transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  <span className="group-hover:text-nexiler transition-colors duration-300">Free Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-nexiler" />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-nexiler" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-nexiler" />
              <span>Money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-nexiler" />
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesCTA;
