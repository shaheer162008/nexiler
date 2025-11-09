'use client';

import React from 'react';
import { Check } from 'lucide-react';
import Link from 'next/link';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
}

const PricingCard = ({
  name,
  price,
  period,
  description,
  features,
  isPopular = false,
  ctaText,
  ctaLink,
}: PricingCardProps) => {
  return (
    <div
      className={`relative rounded-2xl border-2 bg-white p-8 transition-all ${
        isPopular
          ? 'border-nexiler shadow-xl scale-105'
          : 'border-gray-300 hover:border-nexiler hover:shadow-lg'
      }`}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 bg-nexiler text-white text-xs font-semibold rounded-full">
            Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-black mb-2">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-bold text-black">{price}</span>
          <span className="text-lg text-gray-600">{period}</span>
        </div>
      </div>

      {/* CTA Button */}
      <Link
        href={ctaLink}
        className={`relative block w-full text-center px-6 py-3 rounded-lg font-semibold text-sm transition-all mb-6 overflow-hidden group ${
          isPopular
            ? 'bg-nexiler hover:shadow-[0_0_20px_rgba(135,237,130,0.4)] text-white'
            : 'bg-white hover:bg-nexiler-subtle border-2 border-nexiler text-black'
        }`}
      >
        <span className="relative z-10">{ctaText}</span>
        {isPopular && (
          <div className="absolute inset-0 bg-nexiler-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        )}
      </Link>

      {/* Features */}
      <div className="space-y-3">
        <p className="text-sm font-semibold text-black mb-4">What's included:</p>
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-nexiler shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
