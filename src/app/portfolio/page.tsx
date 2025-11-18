'use client';

import React, { useState } from 'react';
import PortfolioHero from '@/components/portfolio/portfolio_hero';
import PortfolioFilters from '@/components/portfolio/portfolio_filters';
import PortfolioGrid from '@/components/portfolio/portfolio_grid';
import PortfolioStats from '@/components/portfolio/portfolio_stats';
import Newsletter from '@/components/newsletter';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const allProjects = [
    {
      id: 1,
      title: 'SELD Legal Dashboard',
      description: 'Legal case management dashboard for the Sindh Education & Literacy Department, built with a scalable MERN stack using Next.js, Tailwind, Express, and MongoDB.',
      category: 'Web Applications',
      image: '/portfolio/seld_legal_dashboard.webp',
      tags: ['Next Js', 'Tailwind', 'MERN Stack'],
      link: '/portfolio/seld-legal-dashboard',
      site: 'https://www.seldlegaldashboard.com'
    },
    {
      id: 2,
      title: 'Sayyid and Shaykh Law Firm ',
      description: 'AI-powered legal assistant helping clients navigate Sayyid & Shaykh’s expert legal services with quick guidance and smart support.',
      category: 'AI-Powered Web-Application',
      image: '/portfolio/sayyid_and_shaykh.webp',
      tags: ['Next Js', 'Node.js', 'Vercel AI SDK'],
      link: '/portfolio/sayyid-and-shaykh-law-firm',
      site: 'https://www.sayyidandshaykh.com'
    },
    {
      id: 3,
      title: 'Ai Solution Pk',
      description: '"AISolutionPK" a tech coaching platform offering hands on training in Web Development, IT, and AI skills.',
      category: 'Web Development',
      image: '/portfolio/ai_solution_pk.webp',
      tags: ['Next Js', 'Tailwind', 'React'],
      link: '/portfolio/ai-solution-pk',
      site: 'https://www.aisolutionpk.com'
    },
  ];

  const filteredProjects = activeFilter === 'All Projects'
    ? allProjects
    : allProjects.filter(project => project.category === activeFilter);

  return (
    <main>
      <PortfolioHero />
      <section className="relative">
        <PortfolioFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        <PortfolioGrid projects={filteredProjects} />
      </section>
      <PortfolioStats />
      <Newsletter />
    </main>
  );
};

export default PortfolioPage;
