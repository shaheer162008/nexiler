'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  slug: string;
}

const BlogCard = ({ title, excerpt, category, image, date, readTime, author, slug }: BlogCardProps) => {
  return (
    <article className="group rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler hover:shadow-lg transition-all overflow-hidden">
      {/* Image */}
      <div className="relative w-full h-56 bg-gray-100 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-nexiler rounded-full text-xs font-semibold text-black">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-black mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">{excerpt}</p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-300">
          <span className="text-sm font-medium text-gray-700">{author}</span>
          <Link
            href={`/blog/${slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-nexiler hover:gap-3 transition-all"
          >
            Read More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
