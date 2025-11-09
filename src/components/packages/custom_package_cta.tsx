'use client';

import React from 'react';
import Link from 'next/link';
import { Package, ArrowRight } from 'lucide-react';

const CustomPackageCTA = () => {
  return (
    <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="p-12 rounded-2xl bg-white border-2 border-gray-300 text-center hover:border-nexiler hover:shadow-lg transition-all">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-nexiler-subtle border border-nexiler rounded-full mb-6">
            <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Custom Solution</span>
          </div>
          <div className="w-16 h-16 border-2 border-gray-300 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:bg-nexiler hover:border-nexiler transition-all duration-300 group">
            <Package className="w-8 h-8 text-black group-hover:text-white transition-colors" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Don't See What You Need?
          </h2>
          <p className="text-base text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Every business is unique. We can create a completely custom package tailored to your specific requirements and budget. 
            Tell us what you need, and we'll build the perfect solution from scratch.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 px-8 py-4 bg-nexiler text-black rounded-xl font-bold text-base overflow-hidden group hover:shadow-[0_0_30px_rgba(135,237,130,0.5)] transition-all"
            >
              <span className="relative z-10">Request Custom Quote</span>
              <ArrowRight className="w-5 h-5 relative z-10" />
            </Link>
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-gray-300 text-black rounded-xl font-bold text-base hover:border-nexiler transition-all"
            >
              Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomPackageCTA;
