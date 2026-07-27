"use client";

import React, { useState } from "react";
import { skillsData, Skill } from "@/data/constants";
import { Cpu, Code2, Server, Database, Smartphone, BrainCircuit, Radio } from "lucide-react";

export function SkillsSection() {
  const categories = [
    "All",
    "Frontend & Mobile",
    "Backend & Languages",
    "Machine Learning",
    "Databases",
    "IoT & CAD Hardware",
  ] as const;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "Frontend & Mobile":
        return <Smartphone className="w-4 h-4 text-sky-600 dark:text-sky-400" />;
      case "Backend & Languages":
        return <Server className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />;
      case "Machine Learning":
        return <BrainCircuit className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case "Databases":
        return <Database className="w-4 h-4 text-sky-600 dark:text-sky-500" />;
      case "IoT & CAD Hardware":
        return <Radio className="w-4 h-4 text-teal-600 dark:text-teal-400" />;
      default:
        return <Code2 className="w-4 h-4 text-sky-600 dark:text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-sky-500/30 text-sky-600 dark:text-sky-400 text-xs font-semibold tracking-wide uppercase mb-3">
          <Cpu className="w-4 h-4" />
          <span>Technical Stack</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
          Skills &amp; <span className="gradient-text">Technologies</span>
        </h2>
        <p className="max-w-xl text-slate-700 dark:text-slate-300 text-sm sm:text-base mt-4 font-medium">
          Penjelasan lengkap keahlian bahasa pemrograman, framework, database, AI/ML, dan perancangan hardware IoT &amp; CAD.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl glass-panel border border-sky-500/20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-500 text-white shadow-md shadow-sky-500/25"
                  : "text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-500/10"
              }`}
            >
              {getCategoryIcon(cat)}
              <span>{cat}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill: Skill, index: number) => (
          <div
            key={index}
            className="glass-panel p-6 rounded-2xl border border-sky-500/20 hover:border-sky-500/50 hover:scale-[1.02] transition-all group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 group-hover:border-sky-500/50 transition-colors">
                  {getCategoryIcon(skill.category)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">{skill.category}</span>
                </div>
              </div>
              <span className="text-sm font-extrabold gradient-text">{skill.level}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-500 transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
