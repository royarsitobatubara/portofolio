"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, aboutData } from "@/data/constants";
import { Menu, X, Code2, ArrowUpRight, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3 shadow-lg shadow-sky-950/20" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white group shrink-0"
          >
            <div className="p-2 rounded-xl bg-linear-to-tr from-sky-500 via-blue-600 to-cyan-400 group-hover:scale-105 transition-transform shadow-md shadow-sky-500/20">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="gradient-text font-extrabold whitespace-nowrap">{aboutData.name}</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    isActive
                      ? "bg-sky-500/20 text-sky-600 dark:text-sky-300 font-semibold border border-sky-500/30"
                      : "text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-sky-500/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA & Dark Mode Toggle */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Switcher Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full glass-panel text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-500/40 transition-all"
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-sky-600" />
              )}
            </button>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-sky-500 via-blue-600 to-cyan-500 text-white font-medium text-sm hover:opacity-90 hover:shadow-lg hover:shadow-sky-500/25 transition-all"
            >
              Get In Touch
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Actions (Theme Toggle & Menu Button) */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl glass-panel text-slate-600 dark:text-slate-300"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-sky-600" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl glass-panel text-slate-600 dark:text-slate-300 hover:text-sky-500"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel mx-4 mt-3 p-4 rounded-2xl border border-sky-500/20 shadow-2xl flex flex-col gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                  isActive
                    ? "bg-sky-500/20 text-sky-500 dark:text-sky-300 font-semibold"
                    : "text-slate-700 dark:text-slate-200 hover:bg-sky-500/10"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full text-center py-3 rounded-xl bg-linear-to-r from-sky-500 via-blue-600 to-cyan-500 text-white font-medium text-sm"
          >
            Get In Touch
          </Link>
        </div>
      )}
    </header>
  );
}
