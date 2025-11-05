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
      title: 'E-Commerce Platform',
      description: 'Complete online store with payment integration, inventory management, and analytics dashboard.',
      category: 'E-Commerce',
      image: '/projects/ecommerce.jpg',
      tags: ['Next.js', 'Stripe', 'MongoDB'],
      link: '/portfolio/ecommerce-platform'
    },
    {
      id: 2,
      title: 'AI Chatbot Solution',
      description: 'Intelligent customer support chatbot with natural language processing and multi-language support.',
      category: 'AI & Automation',
      image: '/projects/chatbot.jpg',
      tags: ['Python', 'OpenAI', 'React'],
      link: '/portfolio/ai-chatbot'
    },
    {
      id: 3,
      title: 'Mobile Fitness App',
      description: 'Cross-platform fitness tracking app with workout plans, nutrition tracking, and social features.',
      category: 'Mobile Apps',
      image: '/projects/fitness.jpg',
      tags: ['React Native', 'Firebase', 'HealthKit'],
      link: '/portfolio/fitness-app'
    },
    {
      id: 4,
      title: 'Corporate Website Redesign',
      description: 'Modern, responsive website for Fortune 500 company with CMS integration and SEO optimization.',
      category: 'Web Development',
      image: '/projects/corporate.jpg',
      tags: ['Next.js', 'Tailwind', 'Contentful'],
      link: '/portfolio/corporate-website'
    },
    {
      id: 5,
      title: 'Brand Identity Package',
      description: 'Complete branding solution including logo design, color palette, typography, and brand guidelines.',
      category: 'Branding',
      image: '/projects/branding.jpg',
      tags: ['Figma', 'Adobe CC', 'Brand Strategy'],
      link: '/portfolio/brand-identity'
    },
    {
      id: 6,
      title: 'SaaS Dashboard',
      description: 'Analytics dashboard for SaaS platform with real-time data visualization and custom reporting.',
      category: 'Web Development',
      image: '/projects/dashboard.jpg',
      tags: ['React', 'D3.js', 'PostgreSQL'],
      link: '/portfolio/saas-dashboard'
    },
    {
      id: 7,
      title: 'Food Delivery App',
      description: 'On-demand food delivery platform with real-time tracking, payment integration, and ratings system.',
      category: 'Mobile Apps',
      image: '/projects/food.jpg',
      tags: ['Flutter', 'Node.js', 'Google Maps'],
      link: '/portfolio/food-delivery'
    },
    {
      id: 8,
      title: 'Marketing Automation',
      description: 'Email marketing automation system with segmentation, A/B testing, and analytics.',
      category: 'AI & Automation',
      image: '/projects/marketing.jpg',
      tags: ['Python', 'AWS', 'SendGrid'],
      link: '/portfolio/marketing-automation'
    },
    {
      id: 9,
      title: 'Fashion E-Store',
      description: 'Luxury fashion e-commerce site with virtual try-on, style recommendations, and concierge service.',
      category: 'E-Commerce',
      image: '/projects/fashion.jpg',
      tags: ['Shopify', 'AR.js', 'AI'],
      link: '/portfolio/fashion-store'
    },
  ];

  const filteredProjects = activeFilter === 'All Projects'
    ? allProjects
    : allProjects.filter(project => project.category === activeFilter);

  return (
    <main>
      <PortfolioHero />
      <PortfolioFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <PortfolioGrid projects={filteredProjects} />
      <PortfolioStats />
      <Newsletter />
    </main>
  );
};

export default PortfolioPage;
