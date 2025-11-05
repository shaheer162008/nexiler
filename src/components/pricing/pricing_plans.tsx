'use client';

import React from 'react';
import PricingCard from './pricing_card';

const PricingPlans = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$999',
      period: '/project',
      description: 'Perfect for small businesses and startups',
      features: [
        'Custom website design (5 pages)',
        'Responsive mobile design',
        'Basic SEO optimization',
        'Contact form integration',
        '30 days of support',
        '2 rounds of revisions',
        'Fast delivery (2-3 weeks)',
      ],
      ctaText: 'Get Started',
      ctaLink: '/consultation',
      isPopular: false,
    },
    {
      name: 'Professional',
      price: '$2,499',
      period: '/project',
      description: 'Most popular for growing businesses',
      features: [
        'Custom website/app development',
        'Advanced features & animations',
        'CMS integration',
        'Full SEO optimization',
        'Payment gateway integration',
        '60 days of support',
        '4 rounds of revisions',
        'Priority development',
        'Performance optimization',
        'Analytics setup',
      ],
      ctaText: 'Start Building',
      ctaLink: '/consultation',
      isPopular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large-scale projects and enterprises',
      features: [
        'Unlimited pages/features',
        'Custom integrations',
        'AI & automation features',
        'Dedicated project manager',
        'Multi-platform development',
        '90 days of support',
        'Unlimited revisions',
        '24/7 priority support',
        'Advanced security features',
        'Scalable architecture',
        'Training & documentation',
      ],
      ctaText: 'Contact Sales',
      ctaLink: '/consultation',
      isPopular: false,
    },
  ];

  return (
    <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              ctaText={plan.ctaText}
              ctaLink={plan.ctaLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
