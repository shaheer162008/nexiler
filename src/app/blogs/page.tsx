'use client';

import React, { useState } from 'react';
import BlogsHero from '@/components/blogs/blogs_hero';
import FeaturedPost from '@/components/blogs/featured_post';
import BlogsFilters from '@/components/blogs/blogs_filters';
import BlogsGrid from '@/components/blogs/blogs_grid';
import Newsletter from '@/components/newsletter';

const BlogsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All Articles');

  const allArticles = [
    {
      id: 1,
      title: 'Complete Guide to Next.js 15: What\'s New',
      excerpt: 'Explore the latest features in Next.js 15 including Server Components, improved routing, and performance enhancements.',
      category: 'Web Development',
      image: '/blogs/nextjs.jpg',
      date: 'Nov 4, 2025',
      readTime: '6 min read',
      author: 'John Smith',
      slug: 'nextjs-15-guide'
    },
    {
      id: 2,
      title: 'Building AI-Powered Chatbots with GPT-4',
      excerpt: 'Learn how to integrate OpenAI\'s GPT-4 API to create intelligent chatbots for customer support and engagement.',
      category: 'AI & Automation',
      image: '/blogs/chatbot.jpg',
      date: 'Nov 3, 2025',
      readTime: '10 min read',
      author: 'Sarah Johnson',
      slug: 'ai-chatbots-gpt4'
    },
    {
      id: 3,
      title: 'Mobile App Design Trends in 2025',
      excerpt: 'Discover the latest UI/UX trends shaping mobile app design, from minimalism to immersive experiences.',
      category: 'Design',
      image: '/blogs/mobile-design.jpg',
      date: 'Nov 2, 2025',
      readTime: '5 min read',
      author: 'Michael Chen',
      slug: 'mobile-design-trends-2025'
    },
    {
      id: 4,
      title: 'React Native vs Flutter: Which to Choose?',
      excerpt: 'A comprehensive comparison of React Native and Flutter to help you make the right choice for your mobile app.',
      category: 'Mobile Apps',
      image: '/blogs/react-flutter.jpg',
      date: 'Nov 1, 2025',
      readTime: '8 min read',
      author: 'Emily Davis',
      slug: 'react-native-vs-flutter'
    },
    {
      id: 5,
      title: 'SEO Best Practices for 2025',
      excerpt: 'Master the latest SEO strategies to boost your website\'s ranking and drive organic traffic.',
      category: 'Marketing',
      image: '/blogs/seo.jpg',
      date: 'Oct 31, 2025',
      readTime: '7 min read',
      author: 'David Wilson',
      slug: 'seo-best-practices-2025'
    },
    {
      id: 6,
      title: 'Building Scalable SaaS Applications',
      excerpt: 'Essential architecture patterns and technologies for creating scalable SaaS products.',
      category: 'Web Development',
      image: '/blogs/saas.jpg',
      date: 'Oct 30, 2025',
      readTime: '12 min read',
      author: 'John Smith',
      slug: 'scalable-saas-applications'
    },
    {
      id: 7,
      title: 'The Future of E-Commerce: AI and Personalization',
      excerpt: 'How artificial intelligence is transforming online shopping with personalized experiences.',
      category: 'Business',
      image: '/blogs/ecommerce-ai.jpg',
      date: 'Oct 29, 2025',
      readTime: '6 min read',
      author: 'Sarah Johnson',
      slug: 'ecommerce-ai-personalization'
    },
    {
      id: 8,
      title: 'Mastering Tailwind CSS: Advanced Tips',
      excerpt: 'Take your Tailwind CSS skills to the next level with these advanced techniques and utilities.',
      category: 'Design',
      image: '/blogs/tailwind.jpg',
      date: 'Oct 28, 2025',
      readTime: '9 min read',
      author: 'Michael Chen',
      slug: 'tailwind-css-advanced-tips'
    },
    {
      id: 9,
      title: 'Automating Business Workflows with AI',
      excerpt: 'Practical strategies for implementing AI automation to streamline business operations.',
      category: 'AI & Automation',
      image: '/blogs/automation.jpg',
      date: 'Oct 27, 2025',
      readTime: '11 min read',
      author: 'Emily Davis',
      slug: 'automating-workflows-ai'
    },
  ];

  const filteredArticles = activeFilter === 'All Articles'
    ? allArticles
    : allArticles.filter(article => article.category === activeFilter);

  return (
    <main>
      <BlogsHero />
      <FeaturedPost />
      <BlogsFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <BlogsGrid articles={filteredArticles} />
      <Newsletter />
    </main>
  );
};

export default BlogsPage;
