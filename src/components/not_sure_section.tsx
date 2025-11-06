'use client';

import React from 'react';
import { Phone, Package } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';


const NotSureSection = () => {
  return (
    <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">

<div className="text-center bg-black rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Not Sure Where to Start?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get a free consultation to discuss your project - whether you need a custom solution, pre-built package, or just expert advice to grow digitally!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/consultation" className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                <span>Get Free Consultation</span>
              </Link>
             <Link href="/packages" className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center gap-2">
                <Package className="w-5 h-5" />
                <span>View Pre-Built Packages</span>
              </Link>
          </div>
        </div>
      
    </section>
  );
};

export default NotSureSection;
