'use client';

import React from 'react';
import AboutHero from '@/components/about/about_hero';
import AboutStory from '@/components/about/about_story';
import AboutValues from '@/components/about/about_values';
import AboutTeam from '@/components/about/about_team';
import Newsletter from '@/components/newsletter';

const AboutPage = () => {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <Newsletter />
    </main>
  );
};

export default AboutPage;
