export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  category: "Full Stack" | "Frontend" | "Mobile & AI" | "UI/UX Design" | "Machine Learning & Mobile" | "Machine Learning & Frontend" | "IoT & Mobile" | "Machine Learning & IoT" | "Web";
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "Yuro-smart",
    slug: "yuro-smart",
    description: "A smart home IoT application that enables users to monitor and control household devices such as lights, fans, and other appliances remotely in real time.",
    longDescription: "Yuro-smart is an IoT-based smart home application built with Flutter, ESP32, Firebase, and C++. It allows users to remotely monitor and control household devices, including lights, fans, and other connected appliances, from anywhere. The application provides real-time device status updates, instant command execution, and a user-friendly interface for seamless home automation. By leveraging Firebase for cloud communication and ESP32 as the IoT controller, Yuro-smart delivers reliable connectivity, efficient device management, and a scalable foundation for future smart home features such as scheduling, automation rules, and energy monitoring.",
    category: "IoT & Mobile",
    image: "/images/projects/yuro-smart.webp",
    tags: ["C++", "ESP32", "Dart", "Flutter", "Firebase", "IoT"],
    liveUrl: "",
    githubUrl: "https://github.com/royarsitobatubara/smart-home-app.git",
    featured: false,
  },
  {
    id: "proj-2",
    title: "Glucost",
    slug: "glucost",
    description: "An AI-powered health prediction application that uses Machine Learning to assess the risk of diseases such as diabetes, heart disease, high cholesterol, and anxiety.",
    longDescription: "Glucost is a healthcare application powered by Machine Learning, designed to predict the risk of chronic diseases and mental health conditions, including diabetes, heart disease, high cholesterol, and anxiety. The application is built with Flutter for a responsive cross-platform mobile experience, FastAPI as the backend service, and Python-based Machine Learning models using the Random Forest algorithm for accurate predictions. Users can input their health data to receive instant risk assessments, helping them gain early insights into their health status. The system is designed to support preventive healthcare by providing fast, reliable, and data-driven predictions while maintaining a scalable architecture for integrating additional predictive models and health monitoring features in the future.",
    category: "Machine Learning & Mobile",
    image: "/images/projects/glucost.webp",
    tags: ["Dart", "Flutter","Python","FastAPI","Random Forest"],
    liveUrl: "",
    githubUrl: "https://github.com/royarsitobatubara/glucost-app.git",
    featured: false,
  },
  {
    id: "proj-3",
    title: "Monitoring Jenis tanah",
    slug: "smart-task-productivity-app",
    description: "An IoT and Machine Learning application that analyzes soil conditions and predicts the most suitable soil for optimal plant growth using real-time sensor data.",
    longDescription: "Monitoring Jenis Tanah is an intelligent agriculture application that combines IoT and Machine Learning to evaluate soil conditions and predict soil suitability for different types of plants. The system uses ESP32 to collect real-time environmental and soil data from connected sensors, which are transmitted via MQTT and stored through the Google Sheets API for data logging. A Random Forest model, developed and trained in Python using Jupyter Notebook, analyzes the collected data to classify soil quality and recommend the most suitable soil for healthy plant growth. The project also includes a Streamlit dashboard for visualizing sensor readings, prediction results, and historical data, providing farmers and researchers with actionable insights to support smarter agricultural decisions.",
    category: "Machine Learning & IoT",
    image: "/images/projects/soil_moisture.webp",
    tags: ["Python", "C++","Streamlit", "Random Forest", "ESP32", "MQTT","Spreadsheet API", "Jupyter Notebook"],
    liveUrl: "",
    githubUrl: "https://github.com/royarsitobatubara/prediction-soil-moisture-ML.git",
    featured: false,
  },
  {
    id: "proj-4",
    title: "Prediksi Serangan Jantung",
    slug: "heart-attack-prediction-web",
    description: "A web-based Machine Learning application that predicts the risk of heart disease based on user health information and clinical data.",
    longDescription: "Heart Attack Prediction is a web application that leverages Machine Learning to estimate an individual's risk of developing heart disease using clinical and health-related data. Built with React and Vite for a fast, responsive user interface, the application communicates with a FastAPI backend that serves a Scikit-learn prediction model. Users can enter health indicators such as age, blood pressure, cholesterol level, heart rate, and other medical parameters to receive an instant risk assessment. The project demonstrates the integration of modern frontend technologies with AI-powered backend services, providing an intuitive interface for data-driven healthcare insights while showcasing scalable full-stack architecture and Machine Learning deployment.",
    category: "Machine Learning & Frontend",
    image: "/images/projects/heart_attack.webp",
    tags: ["React", "Vite", "Python", "Scikit-learn", "Tailwind CSS", "FastAPI"],
    liveUrl: "",
    githubUrl: "https://github.com/royarsitobatubara/heart-attack-prediction-web.git",
    featured: false,
  },
  {
    id: "proj-5",
    title: "Ubideliouse",
    slug: "ubideliouse",
    description: "A full-stack online food ordering platform featuring a wide variety of dishes, with cassava-based specialties as its signature menu.",
    longDescription: "Ubideliouse is a full-stack food ordering web application that offers customers a convenient way to explore and order a wide range of dishes, with cassava-based specialties as its signature menu. Developed using React, Tailwind CSS, Express.js, and MySQL, the platform provides a responsive and user-friendly interface for browsing menus, managing shopping carts, placing orders, and tracking purchases. The backend handles product management, customer information, and order processing through a robust RESTful API and relational database. This project showcases modern full-stack web development practices, including frontend-backend integration, database management, and scalable application architecture.",
    category: "Full Stack",
    image: "/images/projects/ubidelicious.webp",
    tags: ["JavaScript", "React", "Tailwind CSS", "Express js", "MySQL"],
    liveUrl: "",
    githubUrl: "https://github.com/royarsitobatubara/web_penjualan.git",
    featured: false,
  },
];
