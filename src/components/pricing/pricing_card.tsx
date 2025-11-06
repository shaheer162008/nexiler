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
      className={`relative rounded-2xl border bg-white p-8 transition-all ${
        isPopular
          ? 'border-black shadow-lg scale-105'
          : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 bg-black text-white text-xs font-semibold rounded-full">
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
        className={`block w-full text-center px-6 py-3 rounded-lg font-semibold text-sm transition-colors mb-6 ${
          isPopular
            ? 'bg-black hover:bg-gray-800 text-white'
            : 'bg-white hover:bg-gray-50 border border-gray-400 text-black'
        }`}
      >
        {ctaText}
      </Link>

      {/* Features */}
      <div className="space-y-3">
        <p className="text-sm font-semibold text-black mb-4">What's included:</p>
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-black shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
