import React from "react";
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "About Me | Portfolio",
  description: "Learn more about my background, technical skill set, and career journey.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden pt-12">
      <Navbar />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <Footer />
    </main>
  );
}
