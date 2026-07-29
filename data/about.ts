import { certificatesData } from "./certificates";
import { projectsData } from "./projects";

export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  location: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface AboutData {
  name: string;
  title: string;
  availability: string;
  bio: string;
  detailedBio: string;
  avatarUrl: string;
  location: string;
  email: string;
  resumeUrl: string;
  stats: {
    label: string;
    value: string;
  }[];
  socials: SocialLink[];
  education: Education[];
  experiences: Experience[];
}

export const aboutData: AboutData = {
  name: "Roy Arsito Batubara",
  title: "Multi-Discipline Engineer (ML • Web • App • IoT)",
  availability: "Available for full-time & freelance projects",
  location: "Medan, Indonesia",
  email: "royarsitobatubara@gmail.com",
  avatarUrl: "self.webp",
  resumeUrl: "https://drive.google.com/file/d/1fCBliNFuRKfD0FJHEOxxyL0lbCFkNCJW/view?usp=sharing",
  bio: "Pengembang serba bisa berpengalaman di bidang Machine Learning, Web Development, Mobile Apps (Flutter/Dart), IoT (ESP32/Arduino), dan Desain CAD/PCB.",
  detailedBio: "Saya memiliki latar belakang kelistrikan dan Teknik Informatika dengan keahlian lintas disiplin dari software hingga hardware. Berpengalaman membangun aplikasi Web & Mobile modern, model Machine Learning, integrasi API, manajemen database terdistribusi, hingga perancangan skema hardware (KiCAD, Fusion 360, Inventor).",
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: `${projectsData.length}` },
    { label: "Happy Clients", value: "18+" },
    { label: "Certifications", value: `${certificatesData.length}` },
  ],
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/royarsitobatubara",
      iconName: "Github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      iconName: "Linkedin",
    },
    {
      name: "Twitter / X",
      url: "https://twitter.com",
      iconName: "Twitter",
    },
    {
      name: "Email",
      url: "mailto:royarsitobatubara@gmail.com",
      iconName: "Mail",
    },
  ],
  education: [
    {
      degree: "Teknik Instalasi Tenaga Listrik",
      institution: "SMK Swasta Bhakti Luhur",
      period: "2020 - 2023",
      location: "Nias Selatan, Indonesia",
      description: "Mempelajari instalasi, perawatan, dan perbaikan sistem kelistrikan bangunan serta tenaga listrik. Terlatih dalam pembacaan diagram kelistrikan, penggunaan peralatan ukur, dan penerapan standar keselamatan kerja (K3).",
    },
    {
      degree: "Teknik Informatika",
      institution: "Universitas Potensi Utama",
      period: "2023 - 2027",
      location: "Medan, Indonesia",
      description: "Mempelajari fondasi ilmu komputer meliputi pemrograman, jaringan komputer, rekayasa perangkat lunak, dan kecerdasan buatan. Mengasah kemampuan problem-solving dan pengembangan aplikasi melalui tugas, proyek, serta kegiatan praktikum.",
    },
  ],
  experiences: [
    {
      role: "Full Stack Developer",
      company: "Freelance",
      period: "2024 - sekarang",
      location: "Remote",
      description: "Bertanggung jawab atas pengembangan, pemeliharaan, dan peningkatan aplikasi web dengan fokus pada pengalaman pengguna yang optimal dan performa yang handal. Menguasai ekosistem React dan Node.js untuk membangun solusi lengkap dari frontend hingga backend, serta berintegrasi dengan berbagai API pihak ketiga untuk memperkaya fungsionalitas aplikasi.",
      highlights: [
        "Bertanggung jawab atas pengembangan, pemeliharaan, dan peningkatan aplikasi web dengan fokus pada pengalaman pengguna yang optimal dan performa yang handal",
        "Menguasai ekosistem React dan Node.js untuk membangun solusi lengkap dari frontend hingga backend",
        "Berintegrasi dengan berbagai API pihak ketiga untuk memperkaya fungsionalitas aplikasi",
      ],
    },
    {
      role: "Jaringan IT",
      company: "KOMINFO",
      period: "Maret 2026 - Mei 2026",
      location: "Medan, Indonesia",
      description: "Bertanggung jawab atas pengelolaan, pemeliharaan, dan keamanan jaringan komputer di kantor. Melakukan monitoring performa sistem, troubleshooting masalah koneksi, serta instalasi dan konfigurasi perangkat keras jaringan.",
      highlights: [
        "Melakukan monitoring performa sistem",
        "Troubleshooting masalah koneksi",
        "Instalasi dan konfigurasi perangkat keras jaringan",
      ],
    },
    {
      role: "YANTEK",
      company: "PLN",
      period: "Januari 2022 - Juli 2022",
      location: "Nias Selatan, Indonesia",
      description: "Melakukan pekerjaan pemeliharaan jaringan listrik dan instalasi listrik. Terlatih dalam penggunaan peralatan ukur, serta penerapan standar keselamatan kerja (K3).",
      highlights: [
        "Melakukan pemeliharaan jaringan listrik",
        "Melakukan pemeliharaan instalasi listrik",
        "Melakukan penggunaan peralatan ukur",
        "Melakukan penerapan standar keselamatan kerja (K3)",
      ],
    },
  ],
};
