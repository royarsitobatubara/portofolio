import React from "react";
import { Navbar } from "@/components/Navbar";
import { CertificatesSection } from "@/components/CertificatesSection";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Certificates | Portfolio",
  description: "View verified cloud engineer, full-stack, and developer certifications.",
};

export default function CertificatesPage() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden pt-12">
      <Navbar />
      <CertificatesSection />
      <Footer />
    </main>
  );
}
