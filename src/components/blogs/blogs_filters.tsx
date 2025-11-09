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
    <section className="pt-8 pb-8 px-4 sm:px-6 lg:px-8 bg-white sticky top-14 z-40 border-b border-gray-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeFilter === filter
                  ? 'bg-nexiler text-black shadow-[0_0_20px_rgba(135,237,130,0.3)]'
                  : 'bg-white border-2 border-gray-300 text-black hover:border-nexiler'
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
