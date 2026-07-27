"use client";

import React from "react";
import { aboutData } from "@/data/constants";
import { ArrowDown, Mail, Sparkles, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";

export function HeroSection() {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Github":
        return <GithubIcon className="w-5 h-5" />;
      case "Linkedin":
        return <LinkedinIcon className="w-5 h-5" />;
      case "Twitter":
        return <TwitterIcon className="w-5 h-5" />;
      case "Mail":
        return <Mail className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Decorative Sky Blue Glow Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-137.5 h-137.5 bg-linear-to-tr from-sky-500/20 via-blue-600/15 to-cyan-400/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-87.5 h-87.5 bg-sky-400/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-sky-500/30 text-sky-600 dark:text-sky-400 text-xs sm:text-sm font-medium mb-8 animate-pulse">
          <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping" />
          <span>{aboutData.availability}</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.2]">
          Hi, I&apos;m{" "}
          <span className="gradient-text inline-block sm:whitespace-nowrap">
            {aboutData.name}
          </span>
          <br />
          <span className="text-slate-700 dark:text-slate-300 font-semibold text-2xl sm:text-4xl md:text-5xl mt-2 block">
            {aboutData.title}
          </span>
        </h1>

        {/* Short Bio */}
        <p className="max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
          {aboutData.bio}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-full bg-linear-to-r from-sky-500 via-blue-600 to-cyan-500 text-white font-semibold text-sm sm:text-base hover:opacity-90 hover:scale-105 shadow-lg shadow-sky-500/25 transition-all"
          >
            View Projects
          </a>
          <a
            href={aboutData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass-panel text-slate-800 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-400 font-semibold text-sm sm:text-base border border-sky-500/20 hover:border-sky-500/40 transition-all"
          >
            <FileText className="w-5 h-5 text-sky-500" />
            Resume / CV
          </a>
        </div>

        {/* Social Links Bar */}
        <div className="flex items-center gap-4 mb-16">
          {aboutData.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-panel text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-500/50 hover:bg-sky-500/10 hover:scale-110 transition-all"
              title={social.name}
            >
              {getSocialIcon(social.iconName)}
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-sky-500 transition-colors animate-bounce"
        >
          <span>Scroll down</span>
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
