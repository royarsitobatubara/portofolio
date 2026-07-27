export interface Skill {
  name: string;
  category: "Frontend & Mobile" | "Backend & Languages" | "Machine Learning" | "Databases" | "IoT & CAD Hardware";
  level: number; // percentage 0-100
  iconName: string;
  featured?: boolean;
}

export const skillsData: Skill[] = [
  // Frontend & Mobile
  { name: "React / Next.js", category: "Frontend & Mobile", level: 92, iconName: "Code2", featured: true },
  { name: "Flutter & Dart", category: "Frontend & Mobile", level: 88, iconName: "Smartphone", featured: true },
  { name: "JavaScript & TypeScript", category: "Frontend & Mobile", level: 90, iconName: "FileCode2", featured: true },
  { name: "Tailwind CSS", category: "Frontend & Mobile", level: 95, iconName: "Palette", featured: true },

  // Backend & Languages
  { name: "Express.js & Pie.js", category: "Backend & Languages", level: 88, iconName: "Server", featured: true },
  { name: "Integrasi API (REST / JSON)", category: "Backend & Languages", level: 92, iconName: "Network", featured: true },
  { name: "Python", category: "Backend & Languages", level: 90, iconName: "Terminal", featured: true },
  { name: "C++ & C", category: "Backend & Languages", level: 85, iconName: "Cpu", featured: true },
  { name: "VB.net", category: "Backend & Languages", level: 80, iconName: "Binary", featured: false },

  // Machine Learning
  { name: "Machine Learning (Python)", category: "Machine Learning", level: 85, iconName: "BrainCircuit", featured: true },
  { name: "Data Science & Processing", category: "Machine Learning", level: 82, iconName: "LineChart", featured: false },

  // Databases
  { name: "PostgreSQL & SQL Server", category: "Databases", level: 88, iconName: "Database", featured: true },
  { name: "MySQL & SQLite", category: "Databases", level: 90, iconName: "DatabaseBackup", featured: true },
  { name: "MongoDB", category: "Databases", level: 82, iconName: "Layers", featured: false },

  // IoT & CAD Hardware
  { name: "IoT & Embedded (ESP32/Arduino)", category: "IoT & CAD Hardware", level: 90, iconName: "Radio", featured: true },
  { name: "KiCAD (PCB Design)", category: "IoT & CAD Hardware", level: 85, iconName: "CircuitBoard", featured: true },
  { name: "Fusion 360 & Autodesk Inventor", category: "IoT & CAD Hardware", level: 85, iconName: "Box", featured: true },
  { name: "EasyCAD / EasyEDA", category: "IoT & CAD Hardware", level: 82, iconName: "Wrench", featured: false },
];
