"use client";

import React, { useState } from "react";
import { aboutData } from "@/data/constants";
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, Sparkles } from "lucide-react";

export function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-sky-500/30 text-sky-500 dark:text-sky-400 text-xs font-semibold tracking-wide uppercase mb-3">
          <MessageSquare className="w-4 h-4" />
          <span>Contact</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
          Let&apos;s Build Something <span className="gradient-text">Great Together</span>
        </h2>
        <p className="max-w-xl text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-4">
          Punya proyek menarik, tawaran pekerjaan, atau sekadar ingin berdiskusi? Kirimkan pesan di bawah ini!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="glass-panel p-6 rounded-3xl border border-sky-500/20 flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400">Direct Email</h3>
              <a
                href={`mailto:${aboutData.email}`}
                className="text-lg font-bold text-slate-900 dark:text-white hover:text-sky-400 transition-colors"
              >
                {aboutData.email}
              </a>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-sky-500/20 flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400">Location</h3>
              <p className="text-lg font-bold text-slate-900 dark:text-white">{aboutData.location}</p>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-sky-500/20 flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400">Current Status</h3>
              <p className="text-base font-semibold text-sky-500 dark:text-sky-400">{aboutData.availability}</p>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 rounded-3xl border border-sky-500/20">
            {formSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-sky-500/20 border border-sky-500/30 text-sky-400 flex items-center justify-center mb-4 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-md">
                  Terima kasih sudah menghubungi. Saya akan membalas pesan Anda secepatnya.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Roy Arsito"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-sky-500/20 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nama@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-sky-500/20 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Tawaran Proyek / Diskusi"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-sky-500/20 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Halo Roy, saya ingin berdiskusi mengenai proyek..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-sky-500/20 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-500 text-white font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
