'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Check, Terminal } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group border border-border-custom bg-bg-secondary hover:border-accent/30 transition-all duration-300 rounded-2xl overflow-hidden flex flex-col h-full glow-card-hover">
      {/* Screenshot Wrapper */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-border-custom/50 bg-bg-primary">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
          sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="font-mono text-[10px] text-accent bg-accent/10 border border-accent/20 px-2 py-1 rounded">
            SYS_ID: {project.id.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-grow space-y-4">
        <div className="space-y-1">
          <span className="font-mono text-[10px] text-accent font-semibold uppercase tracking-wider">
            {project.category}
          </span>
          <h3 className="font-space text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">
            {project.name}
          </h3>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Features Checklist */}
        {project.features && project.features.length > 0 && (
          <ul className="space-y-1.5 pt-2 border-t border-border-custom/40">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start text-xs text-text-secondary">
                <Check className="w-3.5 h-3.5 text-accent mr-2 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tech.map((tag) => (
            <span 
              key={tag} 
              className="font-mono text-[9px] text-text-secondary bg-surface-card border border-border-custom px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-4 mt-auto">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-lg bg-surface-card hover:bg-accent/10 border border-border-custom hover:border-accent/40 text-sm font-medium transition-all duration-300 group/btn"
          >
            <span className="group-hover/btn:text-accent transition-colors">Launch Application</span>
            <ExternalLink className="w-3.5 h-3.5 text-text-secondary group-hover/btn:text-accent transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
}
