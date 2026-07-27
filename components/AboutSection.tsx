"use client";

import React from "react";
import Image from "next/image";
import { aboutData } from "@/data/constants";
import { User, MapPin, Mail, Sparkles } from "lucide-react";
import self from "@/public/self.webp"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-sky-500/30 text-sky-500 dark:text-sky-400 text-xs font-semibold tracking-wide uppercase mb-3">
          <User className="w-4 h-4" />
          <span>About Me</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
          Architecting Clean &amp; <span className="gradient-text">Scalable Systems</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Avatar / Photo Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="absolute -inset-1 bg-linear-to-r from-sky-400 via-blue-500 to-cyan-400 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />
            <div className="relative w-full h-full rounded-3xl overflow-hidden glass-panel border border-sky-500/20">
              <Image
                src={self}
                alt={aboutData.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bio Content & Highlights */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-sky-400" />
            Multi-Discipline Engineer based in {aboutData.location}
          </h3>

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
            {aboutData.detailedBio}
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 py-2">
            <div className="flex items-center gap-2 glass-panel px-4 py-2 rounded-xl border border-sky-500/20">
              <MapPin className="w-4 h-4 text-sky-500" />
              <span>{aboutData.location}</span>
            </div>
            <div className="flex items-center gap-2 glass-panel px-4 py-2 rounded-xl border border-sky-500/20">
              <Mail className="w-4 h-4 text-sky-500" />
              <span>{aboutData.email}</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            {aboutData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-panel p-5 rounded-2xl border border-sky-500/20 text-center hover:border-sky-500/50 transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-extrabold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
