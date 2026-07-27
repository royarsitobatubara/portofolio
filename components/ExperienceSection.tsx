"use client";

import React from "react";
import { aboutData } from "@/data/constants";
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-sky-500/30 text-sky-500 dark:text-sky-400 text-xs font-semibold tracking-wide uppercase mb-3">
          <Briefcase className="w-4 h-4" />
          <span>Career Journey</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
          Experience &amp; <span className="gradient-text">Education</span>
        </h2>
        <p className="max-w-xl text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-4">
          Ringkasan latar belakang profesional, riwayat pekerjaan, dan pendidikan resmi.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Work Experience */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
            <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <Briefcase className="w-5 h-5" />
            </div>
            Work Experience
          </h3>

          <div className="relative border-l border-sky-500/20 ml-4 space-y-8">
            {aboutData.experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-8 group">
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-sky-400 group-hover:scale-125 transition-transform" />

                <div className="glass-panel p-6 rounded-2xl border border-sky-500/20 hover:border-sky-500/50 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{exp.role}</h4>
                    <span className="text-xs px-3 py-1 rounded-full bg-sky-500/10 text-sky-500 dark:text-sky-400 border border-sky-500/20 font-medium">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-4">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{exp.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <GraduationCap className="w-5 h-5" />
            </div>
            Education
          </h3>

          <div className="relative border-l border-sky-500/20 ml-4 space-y-8">
            {aboutData.education.map((edu, idx) => (
              <div key={idx} className="relative pl-8 group">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:scale-125 transition-transform" />

                <div className="glass-panel p-6 rounded-2xl border border-sky-500/20 hover:border-cyan-500/50 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                    <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 border border-cyan-500/20 font-medium">
                      {edu.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-4">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{edu.institution}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {edu.location}
                    </span>
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
