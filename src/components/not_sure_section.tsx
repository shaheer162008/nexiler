'use client';

import React from 'react';
import { Phone, Package } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';


const NotSureSection = () => {
  return (
    <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Tag Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full">
            <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Need Help?</span>
          </div>
        </div>
        
        <div className="text-center bg-black rounded-2xl p-8 sm:p-12 border-2 border-gray-800">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full mb-4">
            <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-white uppercase tracking-wider">Need Guidance?</span>
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Not Sure Where to Start?
          </h3>
          <p className="text-base text-gray-300 mb-6 max-w-2xl mx-auto">
            Get a free consultation to discuss your project - whether you need a custom solution, pre-built package, or just expert advice to grow digitally!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              href="/consultation" 
              className="group relative px-6 sm:px-8 py-3.5 bg-nexiler text-white rounded-xl font-semibold text-xs sm:text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(135,237,130,0.4)] hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Get Free Consultation</span>
              <div className="absolute inset-0 bg-nexiler-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
            
            <Link 
              href="/packages" 
              className="group relative px-6 sm:px-8 py-3.5 bg-white border-2 border-gray-700 text-black rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 hover:border-nexiler hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Package className="w-4 h-4 relative z-10 group-hover:text-nexiler transition-colors" />
              <span className="relative z-10 group-hover:text-nexiler transition-colors">View Pre-Built Packages</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotSureSection;
