'use client';

import React from 'react';
import { Phone, Package } from 'lucide-react';
import Link from 'next/link';

const NotSureSection = () => {
  return (
    <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 sm:p-12">
          <div className="text-center space-y-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black leading-tight">
              Not Sure Where to Start?
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Get a free consultation to discuss your project - whether you need a custom solution, pre-built package, or just expert advice to grow digitally!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <Link href="/consultation" className="w-full sm:w-auto px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                <span>Get Free Consultation</span>
              </Link>
              <Link href="/packages" className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-gray-50 border border-gray-200 text-black rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2">
                <Package className="w-5 h-5" />
                <span>View Pre-Built Packages</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotSureSection;
