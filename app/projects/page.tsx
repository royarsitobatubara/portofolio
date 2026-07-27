import React from "react";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Projects | Portfolio",
  description: "Browse featured web apps, SaaS dashboards, and full-stack projects.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden pt-12">
      <Navbar />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
