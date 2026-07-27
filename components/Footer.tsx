"use client";

import React from "react";
import { aboutData, NAV_LINKS } from "@/data/constants";
import { ArrowUp, Code2 } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-sky-500/20 bg-sky-950/20 dark:bg-[#070d19] py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-sky-500 to-cyan-500 text-white">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="font-bold text-slate-900 dark:text-white text-lg">{aboutData.name}</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600 dark:text-slate-400">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-sky-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full glass-panel text-slate-600 dark:text-slate-400 hover:text-sky-500 hover:border-sky-500/50 transition-colors"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-sky-500/10 text-center text-xs text-slate-500 dark:text-slate-500">
        &copy; {new Date().getFullYear()} {aboutData.name}. Built with Next.js 16, React 19 &amp; Tailwind CSS.
      </div>
    </footer>
  );
}
