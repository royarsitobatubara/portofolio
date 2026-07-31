export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  category: "Mobile" | "Full Stack" | "Full Stack & ML" | "Mobile & AI" | "UI/UX Design" | "Machine Learning & Mobile" | "Machine Learning & Frontend" | "IoT & Mobile" | "Machine Learning & IoT" | "Web";
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
    description: "Aplikasi IoT smart home untuk memantau dan mengontrol perangkat rumah tangga seperti lampu dan kipas angin secara jarak jauh dan real-time.",
    longDescription: "Yuro-smart adalah aplikasi rumah pintar berbasis IoT yang dibangun menggunakan Flutter, ESP32, Firebase, dan C++. Aplikasi ini memungkinkan pengguna memantau dan mengontrol perangkat rumah tangga secara jarak jauh dari mana saja. Fitur utamanya mencakup pembaruan status perangkat secara real-time, eksekusi perintah instan, serta antarmuka yang ramah pengguna. Dengan memanfaatkan Firebase untuk komunikasi cloud dan ESP32 sebagai pengontrol IoT, Yuro-smart menawarkan konektivitas yang andal, manajemen perangkat yang efisien, serta fondasi yang dapat dikembangkan untuk fitur otomatisasi di masa depan.",
    category: "IoT & Mobile",
    image: "/images/projects/yuro-smart.webp",
    tags: ["C++", "ESP32", "Dart", "Flutter", "Firebase", "IoT"],
    liveUrl: "https://drive.google.com/file/d/1kUT5vmfbfoYXxm5fbY_akSXByaWvfrNG/view?usp=sharing",
    githubUrl: "https://github.com/royarsitobatubara/smart-home-app.git",
    featured: false,
  },
  {
    id: "proj-2",
    title: "Glucost",
    slug: "glucost",
    description: "Aplikasi prediksi kesehatan berbasis Machine Learning untuk menilai risiko penyakit seperti diabetes, jantung, kolesterol tinggi, dan kecemasan.",
    longDescription: "Glucost adalah aplikasi kesehatan berbasis Machine Learning yang dirancang untuk memprediksi risiko penyakit kronis dan kondisi kesehatan mental, termasuk diabetes, penyakit jantung, kolesterol tinggi, dan kecemasan. Aplikasi ini menggunakan Flutter untuk antarmuka mobile lintas platform, FastAPI sebagai layanan backend, dan model Machine Learning berbasis Python menggunakan algoritma Random Forest untuk hasil prediksi yang akurat. Pengguna dapat memasukkan data kesehatan mereka untuk mendapatkan penilaian risiko secara instan sebagai langkah deteksi dini.",
    category: "Machine Learning & Mobile",
    image: "/images/projects/glucost.webp",
    tags: ["Dart", "Flutter", "Python", "FastAPI", "Random Forest"],
    liveUrl: "https://drive.google.com/file/d/1rEWH_UcJgA5rvWd-4pYF4a4vuL9poVGF/view?usp=sharing",
    githubUrl: "https://github.com/royarsitobatubara/glucost-app.git",
    featured: false,
  },
  {
    id: "proj-3",
    title: "Monitoring Jenis tanah",
    slug: "smart-task-productivity-app",
    description: "Aplikasi IoT dan Machine Learning yang menganalisis kondisi tanah dan memprediksi jenis tanah paling cocok untuk pertumbuhan tanaman secara real-time.",
    longDescription: "Monitoring Jenis Tanah adalah aplikasi pertanian cerdas yang menggabungkan IoT dan Machine Learning untuk mengevaluasi kondisi tanah serta merekomendasikan kesesuaian tanah untuk berbagai jenis tanaman. Sistem ini menggunakan ESP32 untuk mengumpulkan data tanah dan lingkungan secara real-time melalui protokol MQTT yang disimpan via Google Sheets API. Model Random Forest yang dilatih menggunakan Python menganalisis data untuk mengklasifikasikan kualitas tanah, sedangkan dashboard Streamlit digunakan untuk visualisasi data sensor dan hasil prediksi.",
    category: "Machine Learning & IoT",
    image: "/images/projects/soil_moisture.webp",
    tags: ["Python", "C++", "Streamlit", "Random Forest", "ESP32", "MQTT", "Spreadsheet API", "Jupyter Notebook"],
    liveUrl: "",
    githubUrl: "https://github.com/royarsitobatubara/prediction-soil-moisture-ML.git",
    featured: false,
  },
  {
    id: "proj-4",
    title: "Prediksi Serangan Jantung",
    slug: "heart-attack-prediction-web",
    description: "Aplikasi web berbasis Machine Learning yang memprediksi risiko penyakit jantung berdasarkan data klinis dan informasi kesehatan pengguna.",
    longDescription: "Prediksi Serangan Jantung adalah aplikasi web berbasis Machine Learning yang memperkirakan risiko seseorang terkena penyakit jantung menggunakan data medis klinis. Dibangun menggunakan React dan Vite untuk antarmuka pengguna yang cepat dan responsif, aplikasi ini terhubung ke backend FastAPI yang menjalankan model prediksi Scikit-learn. Pengguna cukup memasukkan indikator kesehatan seperti usia, tekanan darah, kadar kolesterol, dan detak jantung untuk menerima hasil analisis risiko secara langsung.",
    category: "Machine Learning & Frontend",
    image: "/images/projects/heart_attack.webp",
    tags: ["React", "Vite", "Python", "Scikit-learn", "Tailwind CSS", "FastAPI"],
    liveUrl: "https://yuro-heart-attack-prediction.vercel.app/",
    githubUrl: "https://github.com/royarsitobatubara/heart-attack-prediction-web.git",
    featured: false,
  },
  {
    id: "proj-5",
    title: "Ubideliouse",
    slug: "ubideliouse",
    description: "Platform pemesanan makanan online full-stack yang menyajikan aneka hidangan dengan olahan ubi sebagai menu andalan.",
    longDescription: "Ubideliouse adalah aplikasi web pemesanan makanan full-stack yang memberikan kemudahan bagi pelanggan untuk menjelajahi dan memesan berbagai hidangan, dengan keunikan utama pada menu berbahan dasar ubi. Dibuat menggunakan React, Tailwind CSS, Express.js, dan MySQL, platform ini menyediakan antarmuka yang responsif untuk melihat menu, mengelola keranjang belanja, hingga melakukan proses pemesanan melalui layanan RESTful API yang terintegrasi.",
    category: "Full Stack",
    image: "/images/projects/ubidelicious.webp",
    tags: ["JavaScript", "React", "Tailwind CSS", "Express js", "MySQL"],
    liveUrl: "",
    githubUrl: "https://github.com/royarsitobatubara/web_penjualan.git",
    featured: false,
  },
  {
    id: "proj-6",
    title: "Diabetes Prediction System",
    slug: "diabetes-prediction-ml",
    description: "Sistem skrining medis berbasis Machine Learning untuk memprediksi risiko diabetes menggunakan Gaussian Process Classifier dan REST API FastAPI.",
    longDescription: "Aplikasi full-stack skrining risiko diabetes yang dibangun untuk mengoptimalkan deteksi dini penyakit medis. Proyek ini menggabungkan model Machine Learning Gaussian Process Classifier (GPC) yang dilatih menggunakan teknik SMOTE dan preprocessing steril (StandardScaler + OneHotEncoder) untuk mencegah data leakage. Model dikalibrasi dengan custom decision threshold (0.30) untuk mengejar Recall hingga 92%, meminimalkan risiko False Negative pada kasus kesehatan. Backend API dibangun menggunakan FastAPI dengan arsitektur asynchronous dan terintegrasi langsung dengan antarmuka web interaktif.",
    category: "Full Stack & ML",
    image: "/images/projects/diabete-prediction.webp",
    tags: ["TypeScript", "Python", "FastAPI", "React", "Scikit-Learn", "Gaussian Processing Classifier","Machine Learning"],
    liveUrl: "https://yuro-diabetes-predict.vercel.app",
    githubUrl: "https://github.com/royarsitobatubara/diabetes_predict-ML.git",
    featured: false,
  },
  {
    id: "proj-7",
    title: "Quizix",
    slug: "quizix-app",
    description: "Aplikasi kuis mobile interaktif dengan sistem tugas harian tergamifikasi, mini-game, dan tantangan kuis berbasis mata pelajaran.",
    longDescription: "Quizix adalah aplikasi kuis edukatif mobile yang dirancang untuk membuat kegiatan belajar menjadi menyenangkan dan mudah diakses. Aplikasi ini menyediakan beragam kuis mata pelajaran (Informatika, Matematika, Fisika, Kimia), mini-game terintegrasi seperti Tic-Tac-Toe dan Ular, pemantauan progres harian, serta penyimpanan data lokal secara offline menggunakan SQFLite.",
    category: "Mobile",
    image: "/images/projects/quizix.webp",
    tags: ["Dart", "Flutter", "SQFLite"],
    liveUrl: "https://drive.google.com/file/d/1AAjYBLvXNurszYNNYlqu1HowCA8FgIak/view?usp=sharing",
    githubUrl: "https://github.com/royarsitobatubara/quizix-APP.git",
    featured: false,
  },
  {
    id: "proj-8",
    title: "Saldoify",
    slug: "saldoify-app",
    description: "Aplikasi pencatat keuangan pribadi yang intuitif untuk memantau pemasukan, pengeluaran, dan riwayat transaksi harian.",
    longDescription: "Saldoify adalah aplikasi mobile yang dirancang untuk menyederhanakan pengelolaan keuangan pribadi. Menyediakan dashboard real-time yang menampilkan total saldo, statistik visual perbandingan pemasukan vs pengeluaran, grafik rincian kategori, serta pencatatan transaksi yang mudah untuk pemantauan pengeluaran sehari-hari.",
    category: "Mobile",
    image: "/images/projects/saldoify.webp",
    tags: ["Dart", "Flutter", "SQFLite"],
    liveUrl: "https://drive.google.com/file/d/1Q0IiYxK3-r-crdi3snHQNqG7Upt_2bqK/view?usp=sharing",
    githubUrl: "https://github.com/royarsitobatubara/saldoify-APP.git",
    featured: false,
  }
];