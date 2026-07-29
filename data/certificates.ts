export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  image?: string;
}

export const certificatesData: Certificate[] = [
  {
    id: "cert-1",
    title: "Belajar Dasar AI",
    issuer: "Dicoding",
    issueDate: "Nov 2025",
    credentialId: "JMZVV809RZN9",
    credentialUrl: "https://www.dicoding.com/certificates/JMZVV809RZN9",
    skills: ["Machine Learning", "Python", "Neural Networks", "Data Science", "AI"],
    image: "/images/certificates/belajar-dasar-ai.webp",
  },
  {
    id: "cert-2",
    title: "Internet of Things",
    issuer: "MySertifikasi",
    issueDate: "Des 2025",
    credentialId: "006/SRTFPTOZAMI/XII/2025",
    credentialUrl: "https://drive.google.com/file/d/1D8wW73lsTM8AXRFVDOmjyG6ZEJDDxdpT/view?usp=drive_link",
    skills: ["Internet of Things", "Arduino", "ESP32", "NodeMCU"],
    image: "/images/certificates/Iot.webp",
  },
  {
    id: "cert-3",
    title: "AWS Cloud Computing",
    issuer: "Dilesin",
    issueDate: "Juni 2024",
    credentialId: "272/SKAT/06/2025",
    credentialUrl: "https://drive.google.com/file/d/1qQlKIwew4nNmjbxATTEnHLtUL0dlv92E/view?usp=sharing",
    skills: ["GCP Compute Engine", "Kubernetes (GKE)", "Cloud Run", "BigQuery"],
    image: "/images/certificates/aws.webp",
  },
  {
    id: "cert-4",
    title: "Introduction to Financial Literacy",
    issuer: "Dicoding",
    issueDate: "Nov 2025",
    credentialId: "72ZDKM2VLPYW",
    credentialUrl: "https://drive.google.com/file/d/11JdEtHkK_bL_Or8n0r3xjXVMlliTbCLI/view?usp=sharing",
    skills: ["Node.js", "Express", "React", "Redux", "MongoDB", "GraphQL", "TypeScript"],
    image: "/images/certificates/finacey.webp"
  },
  {
    id: "cert-5",
    title: "Cloud dan Gen AI di AWS",
    issuer: "Dicoding",
    issueDate: "Nov 2025",
    credentialId: "L4PQ27YD2ZO1",
    credentialUrl: "https://www.dicoding.com/certificates/L4PQ27YD2ZO1",
    skills: ["Cloud Computing", "Generative AI", "AWS Services", "Machine Learning"],
    image: "/images/certificates/cloud-gen-ai-aws.webp",
  },
  {
    id: "cert-6",
    title: "Intro to Software Engineering",
    issuer: "REVOU",
    issueDate: "Nov 2025",
    credentialId: "",
    credentialUrl: "https://drive.google.com/file/d/1hSJAmuFAmx1iVGQbfI9OvhqVxlRNIYCC/view",
    skills: ["Software Engineering", "Agile Methodologies", "Version Control", "Testing", "CI/CD"],
    image: "/images/certificates/intro-to-software-engineering.webp",
  },
];
