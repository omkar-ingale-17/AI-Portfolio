import aiVoiceAssistant from "../assets/projects/ai-voice-assistant.png";
import emailTracker from "../assets/projects/email-tracker.png";
// import trafficManagement from "../assets/projects/traffic-management.png"
import portfolioImage from "../assets/projects/portfolio.png";
import shravaniStudio from "../assets/projects/shravani-studio.png";
import hospitalManagement from "../assets/projects/hospital-management.png";

export const skillsData = [
  {
    cat: "Backend & Infrastructure",
    skills: [
      { n: "Python / FastAPI", p: 90 },
      { n: "MySQL / SQL", p: 88 },
      { n: "Java", p: 80 },
      { n: "C++", p: 80 },
    ],
  },
  {
    cat: "Frontend & Product",
    skills: [
      { n: "HTML / CSS", p: 80 },
      { n: "React.js", p: 80 },
      { n: "Web Development", p: 85 },
    ],
  },
  {
    cat: "AI / ML / Tools",
    skills: [
      { n: "PyTorch / TF", p: 88 },
      { n: "Prompt Engineering", p: 92 },
      { n: "VS Code", p: 85 },
      { n: "Git", p: 90 },
      { n: "Jupyter Notebooks/Google Colab", p: 80 },
    ],
  },
];

export const projectsData = [
  {
    image: aiVoiceAssistant,
    bg: "linear-gradient(135deg, #6a11cb, #2575fc)",
    tags: ["AI", "Voice Assistant", "Python"],
    name: "AI Voice Assistant",
    github: "https://github.com/omkar-ingale-17/AI_Based_Voice_Assistant",
    demo: "This is Desktop-based Application, so no live demo available. Please check the GitHub repository for code and instructions.",
    desc: "A smart AI-powered voice assistant built using Python that can perform voice-controlled tasks and interacting through a modern GUI interface.",
    features: [
      "🎙️ Wake word detection with multiple custom wake words like Cypher and Quantum",
      "🖥️ Open, close, minimize, and maximize desktop applications using voice commands",
      "🌐 Smart web search, Wikipedia search, weather updates, and latest news fetching",
      "📸 Capture screenshots and camera photos directly using voice commands",
      "🔊 Control system volume, brightness, Wi-Fi, Bluetooth and hotspot",
      "🧠 AI-generated code feature using LLM (CodeGen model integration)",
      "📝 Voice note creation and reminder management system",
      "⚡ Different productivity modes like Coding Mode, Study Mode, Gaming Mode, and Work Mode",
      "🎨 Modern animated GUI using PyQt5 with waveform animations and voice interaction interface",
      "📡 Internet speed checker and clean PC",
      "😂 Entertainment features like jokes, music playback, and YouTube integration"
    ],
  },
  {
    image: emailTracker,
    bg: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    tags: ["Cybersecurity", "Web Scraping", "Python"],
    name: "Ethical Email Tracking Analyzer",
    github: "https://github.com/omkar-ingale-17/Ethical-Email-Tracking-Analyzer",
    demo: "https://ethical-email-tracking.vercel.app/",
    desc: "A cybersecurity-based email security system that automatically fetches and analyzes incoming emails using AI and web scraping. The system detects phishing links, fake login pages, spoofing attacks, malware attachments, credential theft attempts, and email trackers while generating real-time risk analysis and security alerts.",
    features: [
      "Real-time phishing, spoofing, and spam detection",
      "Web scraping for extracting suspicious links and email content",
      "Low, Medium, High risk classification engine",
      "Credential theft and fake login page detection",
      "Malware attachment scanning using ClamAV/EICAR",
      "CSV report generation with live alert dashboard"
    ],
  },
  {
    emoji: "🚦",
    bg: "linear-gradient(135deg, #0f172a, #18181b)",
    tags: ["AI", "YOLOv8", "Python", "IoT", "Flask"],
    name: "AI-Based Urban Traffic Management System",
    desc: "An intelligent traffic control system that uses YOLOv8-based vehicle detection, real-time traffic analysis, and IoT integration to dynamically manage traffic signals and reduce urban congestion.",
    features: [
      "Real-time vehicle detection and traffic density analysis using YOLOv8",
      "Smart signal timing adjustment based on live traffic conditions",
      "Interactive web dashboard for traffic monitoring and analytics",
      "ESP32 and LED-based IoT traffic signal control system",
      "Traffic comparison between multiple intersections/signals",
      "Congestion alerts and adaptive traffic management logic"
    ],
  },
  {
    image: portfolioImage,
    bg: "linear-gradient(135deg, #00d4ff, #7c3aed)",
    tags: ["React", "AI", "Portfolio", "Framer Motion"],
    name: "Omkar AI Portfolio",
    desc: "A modern, responsive AI-themed portfolio website showcasing my projects, skills, achievements, certifications, and interactive AI-powered features.",

    features: [
      "Modern AI-inspired responsive UI with glassmorphism design",
      "Interactive AI chatbot with Wikipedia search integration",
      "Voice command navigation using Speech Recognition API",
      "Live AI Playground with Text Generation, Sentiment Analysis, Code Review, and Text Classification",
      "Animated sections using Framer Motion",
      "Dark/Light theme with smooth transitions",
      "Interactive project gallery with detailed project modal",
      "Mobile-first responsive design",
      "Integrated contact form and social media links",
      "Optimized deployment using Vercel"
    ],

    demo: "https://omkar-ai-portfolio.vercel.app/",
    github: "https://github.com/omkar-ingale-17/AI-Portfolio.git",

    long:
      "An AI-inspired personal portfolio built using React and Framer Motion. The website showcases my AI, Machine Learning, Python, and Full Stack projects while providing visitors with an interactive chatbot, AI demo playground, voice navigation, beautiful animations, and a fully responsive modern interface."
  },
  {
    image: shravaniStudio,
    bg: "linear-gradient(135deg, #ff7eb3, #ff758c)",
    tags: ["MERN Stack", "Node.js", "React", "Prisma"],

    name: "Shravani Bridal Studio",

    desc: "A complete bridal studio management platform with appointment booking, service management, gallery, authentication, and admin dashboard.",

    features: [
      "Responsive React frontend with elegant UI",
      "Secure user authentication and authorization",
      "Appointment booking system",
      "Admin dashboard for managing appointments",
      "Service and pricing management",
      "Gallery management",
      "Customer contact form",
      "Prisma ORM with MySQL database",
      "REST API built using Express.js",
      "Fully deployed frontend and backend"
    ],

    demo: "https://shravanibridalstudio.vercel.app/",

    github: "https://github.com/omkar-ingale-17/Shravani_Bridal_Studio.git",

    long:
      "Shravani Bridal Studio is a full-stack MERN-based web application developed for a professional beauty and bridal studio. The platform allows customers to explore services, book appointments, browse galleries, and contact the studio, while administrators can efficiently manage bookings, services, and customer information through a secure dashboard."
  },
  {
    image: hospitalManagement,
    bg: "linear-gradient(135deg, #2193b0, #6dd5ed)",
    tags: ["Python", "SQLite", "Tkinter"],
    name: "Hospital Management System",
    github: "https://github.com/omkar-ingale-17/Hospital-Management-System-Using-Python",
    demo: "This is Desktop-based Application, so no live demo available. Please check the GitHub repository for code and instructions.",
    desc: "A desktop-based Hospital Management System built using Python and SQLite to manage patients, appointments, billing, staff, inventory, and hospital records efficiently.",
    features: [
      "Patient registration, billing, appointments, and bed management",
      "GUI-based system with SQLite database and hospital analytics dashboard",
      "Staff management, inventory tracking, and medical record keeping",
    ],
  },
];

export const termLines = [
  { type: "prompt", text: "$ whoami" },
  { type: "out", text: "Omkar — AI Engineer & ML Researcher" },
  { type: "prompt", text: "$ cat expertise.txt" },
  { type: "out", text: "LLMs, RAG, Fine-tuning, Agents" },
  { type: "out", text: "Computer Vision, NLP, MLOps" },
  { type: "prompt", text: "$ uptime" },
  { type: "out", text: "5 years, 47 models shipped" },
  { type: "prompt", text: "$ ping opportunity.dev" },
  { type: "out", text: "64 bytes: Open to work ✓" },
];
