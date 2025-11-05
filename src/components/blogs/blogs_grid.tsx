'use client';

import React from 'react';
import BlogCard from './blog_card';

interface BlogArticle {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  slug: string;
}

interface BlogsGridProps {
  articles: BlogArticle[];
}

const BlogsGrid = ({ articles }: BlogsGridProps) => {
  return (
    <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <BlogCard
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                category={article.category}
                image={article.image}
                date={article.date}
                readTime={article.readTime}
                author={article.author}
                slug={article.slug}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-gray-600">No articles found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogsGrid;
