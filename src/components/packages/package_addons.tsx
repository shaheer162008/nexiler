'use client';

import React from 'react';
import Link from 'next/link';

const PackageAddons = () => {
  const addons = [
    {
      name: 'Extra Page',
      price: '$49',
      detail: 'per additional page',
      description: 'Add more pages to your website',
    },
    {
      name: 'Blog Setup',
      price: '$199',
      detail: 'one-time',
      description: 'Complete blog system with CMS',
    },
    {
      name: 'E-Commerce',
      price: '$499',
      detail: 'starting from',
      description: 'Shopping cart & payment integration',
    },
    {
      name: 'Mobile App',
      price: '$1,499',
      detail: 'starting from',
      description: 'iOS & Android native apps',
    },
    {
      name: 'SEO Boost',
      price: '$299',
      detail: 'per month',
      description: 'Advanced SEO & marketing',
    },
    {
      name: 'Maintenance',
      price: '$149',
      detail: 'per month',
      description: 'Updates, backups & support',
    },
  ];

  return (
    <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full mb-4">
            <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Popular Add-ons</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Enhance Your Package</h2>
          <p className="text-base text-gray-700">Additional services to expand your project capabilities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addons.map((addon, index) => (
            <div key={index} className="p-6 rounded-xl border-2 border-gray-300 bg-white hover:border-nexiler hover:shadow-lg transition-all text-center">
              <h3 className="text-xl font-bold text-black mb-2">{addon.name}</h3>
              <div className="mb-3">
                <span className="text-3xl font-bold text-nexiler">{addon.price}</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{addon.detail}</p>
              <p className="text-sm text-gray-700">{addon.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600">
            Need something else? <Link href="/contact" className="text-nexiler font-semibold hover:underline">Contact us</Link> for custom add-ons and integrations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PackageAddons;
