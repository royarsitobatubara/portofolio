"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projectsData, Project } from "@/data/constants";
import { FolderGit2, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export function ProjectsSection() {
  const categories = ["All", "Full Stack", "Frontend", "Mobile & AI", "UI/UX Design"] as const;
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-sky-500/30 text-sky-600 dark:text-sky-400 text-xs font-semibold tracking-wide uppercase mb-3">
          <FolderGit2 className="w-4 h-4" />
          <span>Featured Works</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
          Selected <span className="gradient-text">Projects</span>
        </h2>
        <p className="max-w-xl text-slate-700 dark:text-slate-300 text-sm sm:text-base mt-4 font-medium">
          Kumpulan proyek web, aplikasi mobile, model AI/ML, dan sistem IoT yang telah dikembangkan.
        </p>

        {/* Category Filters */}
        {/* <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl glass-panel border border-sky-500/20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-linear-to-r from-sky-500 via-blue-600 to-cyan-500 text-white shadow-md shadow-sky-500/25"
                  : "text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-500/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div> */}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project: Project) => (
          <div
            key={project.id}
            className="group glass-panel rounded-3xl overflow-hidden border border-sky-500/20 hover:border-sky-500/50 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/15"
          >
            <div>
              {/* Project Image Card */}
              <div className="relative w-full h-52 overflow-hidden bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                
                {project.featured && (
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/90 text-white text-xs font-semibold backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    Featured
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6">
                <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-xs font-semibold text-sky-900 dark:text-sky-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* External Links */}
            <div className="p-6 pt-0 flex items-center justify-between border-t border-sky-500/10 mt-auto">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  Code Repository
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 dark:text-sky-400 hover:text-sky-500 transition-colors ml-auto"
                >
                  <span>Live Preview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
