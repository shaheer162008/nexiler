'use client';

import React from 'react';
import ProjectCard from './project_card';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  link?: string;
}

interface PortfolioGridProps {
  projects: Project[];
}

const PortfolioGrid = ({ projects }: PortfolioGridProps) => {
  return (
    <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                category={project.category}
                image={project.image}
                tags={project.tags}
                link={project.link}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-gray-600">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGrid;
