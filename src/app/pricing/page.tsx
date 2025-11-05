'use client';

import React from 'react';
import PricingHero from '@/components/pricing/pricing_hero';
import PricingPlans from '@/components/pricing/pricing_plans';
import PricingFeatures from '@/components/pricing/pricing_features';
import PricingFAQ from '@/components/pricing/pricing_faq';
import Newsletter from '@/components/newsletter';

const PricingPage = () => {
  return (
    <main>
      <PricingHero />
      <PricingPlans />
      <PricingFeatures />
      <PricingFAQ />
      <Newsletter />
    </main>
  );
};

export default PricingPage;
