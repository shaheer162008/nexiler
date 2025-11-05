'use client';

import React from 'react';
import ServicesHero from '@/components/services_page/services_hero';
import ServicesGrid from '@/components/services_page/services_grid';
import ServicesProcess from '@/components/services_page/services_process';
import ServicesWhy from '@/components/services_page/services_why';
import NotSureSection from '@/components/not_sure_section';
import Newsletter from '@/components/newsletter';

const ServicesPage = () => {
  return (
    <main>
      <ServicesHero />
      <ServicesGrid />
      <ServicesProcess />
      <ServicesWhy />
      <NotSureSection />
      <Newsletter />
    </main>
  );
};

export default ServicesPage;
