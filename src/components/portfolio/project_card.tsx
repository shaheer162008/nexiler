'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  link?: string;
}

const ProjectCard = ({ title, description, category, image, tags, link }: ProjectCardProps) => {
  return (
    <div className="group rounded-2xl border border-gray-400 bg-white hover:border-gray-300 transition-all overflow-hidden">
      {/* Image */}
      <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-black">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-50 rounded-md text-xs font-medium text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        {link && (
          <Link
            href={link}
            className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:gap-3 transition-all"
          >
            View Case Study
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
