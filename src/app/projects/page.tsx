'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Grid, List, ArrowLeft, ExternalLink, Terminal, ShieldAlert } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { projects, Project } from '@/data/projects';

type ProjectCategory = Project['category'] | 'All';

export default function ProjectsArchive() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'console'>('grid');

  const categories: ProjectCategory[] = [
    'All',
    'AI Infrastructure',
    'B2B Operating Systems',
    'Financial Technology',
    'Data Intelligence',
    'Commercial Products',
    'Client Solutions',
  ];

  // Filter projects based on query and category
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = 
        selectedCategory === 'All' || project.category === selectedCategory;
      
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        project.name.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.tech.some((t) => t.toLowerCase().includes(searchLower)) ||
        (project.features && project.features.some((f) => f.toLowerCase().includes(searchLower)));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 pb-24 bg-bg-primary grid-pattern">
        <div className="max-w-[1200px] mx-auto px-6 space-y-12">
          
          {/* Header */}
          <div className="space-y-4">
            <Link 
              href="/" 
              className="inline-flex items-center space-x-2 text-xs font-mono text-text-secondary hover:text-accent transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>RETURN_TO_BASE</span>
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                <h1 className="font-space text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Product Archive Console
                </h1>
                <p className="text-text-secondary text-sm max-w-xl font-sans">
                  A searchable, filtered console of all 23+ microservices, enterprise ledgers, writing engines, and luxury lifestyle platforms built by Zolile.
                </p>
              </div>
              
              {/* View Toggle */}
              <div className="flex items-center bg-bg-secondary border border-border-custom p-1 rounded-xl shrink-0 font-mono text-[10px]">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg transition-colors duration-200 ${
                    viewMode === 'grid' 
                      ? 'bg-accent/10 border border-accent/25 text-accent' 
                      : 'text-text-secondary hover:text-white'
                  }`}
                >
                  <Grid className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">VISUAL_GRID</span>
                </button>
                <button
                  onClick={() => setViewMode('console')}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg transition-colors duration-200 ${
                    viewMode === 'console' 
                      ? 'bg-accent/10 border border-accent/25 text-accent' 
                      : 'text-text-secondary hover:text-white'
                  }`}
                >
                  <List className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">SYS_LEDGER</span>
                </button>
              </div>
            </div>
          </div>

          {/* Search and Filters panel */}
          <div className="border border-border-custom bg-bg-secondary p-5 rounded-2xl space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
              <input
                type="text"
                placeholder="Search index by keyword, tech stack (e.g. Next.js, FastAPI, WebGPU)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-bg-primary border border-border-custom hover:border-border-custom/80 focus:border-accent rounded-xl py-3.5 pl-11 pr-4 text-sm text-white transition-all font-mono"
              />
            </div>

            {/* Category Selectors */}
            <div className="flex flex-wrap gap-2 pt-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 rounded-lg border text-xs transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-accent/10 border-accent/30 text-accent font-medium'
                      : 'bg-bg-primary border-border-custom text-text-secondary hover:text-white hover:border-border-custom/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Metrics bar */}
          <div className="flex items-center justify-between font-mono text-[10px] text-text-secondary border-b border-border-custom/40 pb-4">
            <span>INDEX_QUERY: SUCCESS</span>
            <span>SHOWN: {filteredProjects.length} / {projects.length} PRODUCTS</span>
          </div>

          {/* Results Area */}
          {filteredProjects.length > 0 ? (
            viewMode === 'grid' ? (
              /* Visual Grid Layout */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              /* System Ledger Table Layout */
              <div className="border border-border-custom bg-bg-secondary rounded-2xl overflow-hidden overflow-x-auto shadow-2xl">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-[#131313] border-b border-border-custom font-mono text-[10px] text-text-secondary uppercase tracking-wider">
                      <th className="py-4 px-6">ID / Name</th>
                      <th className="py-4 px-6">Category</th>
                      <th className="py-4 px-6">Key Capabilities</th>
                      <th className="py-4 px-6">Tech Stack</th>
                      <th className="py-4 px-6 text-right">Redirect</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-custom/50 font-sans text-sm text-text-secondary">
                    {filteredProjects.map((project) => (
                      <tr key={project.id} className="hover:bg-surface-card/45 transition-colors">
                        <td className="py-4 px-6 font-space font-bold text-white">
                          <div className="flex flex-col">
                            <span>{project.name}</span>
                            <span className="font-mono text-[9px] text-text-secondary uppercase mt-0.5">SYS_ID: {project.id}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="font-mono text-[9px] bg-bg-primary border border-border-custom text-accent px-2 py-0.5 rounded font-semibold">
                            {project.category}
                          </span>
                        </td>
                        <td className="py-4 px-6 max-w-xs leading-relaxed text-xs">
                          {project.description}
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex flex-wrap gap-1">
                            {project.tech.map((t) => (
                              <span key={t} className="font-mono text-[8px] border border-border-custom px-1.5 py-0.5 rounded bg-bg-primary">
                                {t}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1 font-mono text-xs text-accent hover:underline"
                            aria-label={`Launch ${project.name}`}
                          >
                            <span>LAUNCH</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          ) : (
            /* Empty State */
            <div className="border border-border-custom bg-bg-secondary p-16 rounded-2xl text-center space-y-4">
              <div className="w-12 h-12 rounded-xl bg-accent/5 border border-accent/25 flex items-center justify-center mx-auto text-accent">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-space font-bold text-white text-base">Zero records matched query</h3>
                <p className="text-text-secondary text-sm font-sans max-w-md mx-auto leading-relaxed">
                  No products matched the search query &ldquo;{searchQuery}&rdquo; within the selected category filter. Try clearing filters or revising text parameters.
                </p>
              </div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-4 py-2 border border-border-custom hover:border-accent hover:text-accent text-xs font-mono rounded-lg transition-colors duration-300"
              >
                CLEAR_FILTERS
              </button>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}
