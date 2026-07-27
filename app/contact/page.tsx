import React from "react";
import { Navbar } from "@/components/Navbar";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Contact | Portfolio",
  description: "Get in touch for freelance work, job opportunities, or project inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden pt-12">
      <Navbar />
      <ContactSection />
      <Footer />
    </main>
  );
}
