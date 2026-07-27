"use client";

import React from "react";
import Image from "next/image";
import { certificatesData, Certificate } from "@/data/constants";
import { Award, ExternalLink, Calendar, CheckCircle2, ShieldCheck } from "lucide-react";

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-sky-500/30 text-sky-600 dark:text-sky-400 text-xs font-semibold tracking-wide uppercase mb-3">
          <Award className="w-4 h-4" />
          <span>Verified Credentials</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
          Certifications &amp; <span className="gradient-text">Badges</span>
        </h2>
        <p className="max-w-xl text-slate-700 dark:text-slate-300 text-sm sm:text-base mt-4 font-medium">
          Daftar sertifikasi profesional, kecerdasan buatan, IoT, dan pelatihan yang telah diselesaikan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificatesData.map((cert: Certificate) => (
          <div
            key={cert.id}
            className="glass-panel p-6 rounded-3xl border border-sky-500/20 hover:border-sky-500/50 transition-all flex flex-col sm:flex-row gap-6 items-start group"
          >
            {cert.image ? (
              <div className="relative w-full sm:w-36 h-36 rounded-2xl overflow-hidden bg-slate-900 border border-sky-500/20 shrink-0">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="150px"
                />
              </div>
            ) : (
              <div className="relative w-full sm:w-36 h-36 rounded-2xl bg-sky-500/10 border border-sky-500/20 shrink-0 flex flex-col items-center justify-center gap-2 text-sky-400">
                <ShieldCheck className="w-10 h-10 group-hover:scale-110 transition-transform text-sky-500" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-500 dark:text-sky-400">Certified</span>
              </div>
            )}

            <div className="flex-1 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-sky-600 dark:text-sky-400 mb-1">
                  <Award className="w-4 h-4" />
                  <span>{cert.issuer}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 mb-4 font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Issued: {cert.issueDate}</span>
                </div>

                {/* Skills Learned */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-500/10 text-[11px] text-sky-900 dark:text-sky-300 font-semibold border border-sky-200 dark:border-sky-500/20"
                    >
                      <CheckCircle2 className="w-3 h-3 text-sky-600 dark:text-sky-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 dark:text-sky-400 hover:text-sky-500 transition-colors mt-2"
                >
                  <span>Verify Credential</span>
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
