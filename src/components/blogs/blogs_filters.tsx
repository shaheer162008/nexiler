'use client';

import React from 'react';

interface BlogsFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const BlogsFilters = ({ activeFilter, onFilterChange }: BlogsFiltersProps) => {
  const filters = [
    'All Articles',
    'Web Development',
    'Mobile Apps',
    'AI & Automation',
    'Design',
    'Marketing',
    'Business'
  ];

  return (
    <section className="pt-8 pb-8 px-4 sm:px-6 lg:px-8 bg-white sticky top-14 z-40 border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activeFilter === filter
                  ? 'bg-black text-white'
                  : 'bg-white border border-gray-200 text-black hover:bg-gray-50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsFilters;
