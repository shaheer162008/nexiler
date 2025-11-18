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
  site?: string;
}

const ProjectCard = ({ title, description, category, image, tags, link, site }: ProjectCardProps) => {
  return (
    <div className="group rounded-md border-2 border-gray-300 bg-white hover:border-nexiler hover:shadow-lg transition-all overflow-hidden flex flex-col h-full">
      {/* Image */}
      <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-300 group-hover:brightness-90"
        />
        {/* gradient overlay (fades in) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />
        {/* slide-up Visit Site only when `site` exists (clickable) */}
        {site && (
          <div className="absolute left-0 right-0 bottom-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-auto">
            <div className="mx-4 mb-4 py-0">
              <a
                href={site}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-nexiler-light text-black py-2 px-3 rounded-md text-sm font-semibold text-center"
              >
                Visit Site
              </a>
            </div>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-nexiler rounded-full text-xs font-semibold text-black">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col items-center text-center grow">
        <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4 grow">{description}</p>

        {/* Tags */}
        <div className="flex gap-2 mb-4 overflow-x-auto justify-center">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 border border-gray-300 rounded-md text-xs font-medium text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <div className="mt-2 flex items-center gap-3 justify-center">
          {link && (
            <Link
              href={link}
              className="inline-flex items-center gap-2 text-sm font-semibold text-nexiler hover:gap-3 transition-all"
            >
              View Case Study
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
