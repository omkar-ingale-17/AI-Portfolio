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
      { n: "Jupyter Notebooks", p: 80 },
    ],
  },
];

export const projectsData = [
  {
    emoji: "🧠",
    bg: "linear-gradient(135deg, #6a11cb, #2575fc)",
    tags: ["AI", "Voice Assistant", "Python"],
    name: "Cypher AI Voice Assistant",
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
    emoji: "🛡️",
    bg: "from-blue-500 to-cyan-500",
    tags: ["Cybersecurity", "Web Scraping", "Python"],
    name: "Ethical Email Tracking Analyzer",
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
  bg: "from-slate-900 via-gray-900 to-zinc-900",
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
  emoji: "🏥",
  bg: "",
  tags: ["Python", "SQLite", "Tkinter"],
  name: "Hospital Management System",
  desc: "A desktop-based Hospital Management System built using Python and SQLite to manage patients, appointments, billing, staff, inventory, and hospital records efficiently.",
  features: [
    "Patient registration, billing, appointments, and bed management",
    "GUI-based system with SQLite database and hospital analytics dashboard",
  ],
  },
];

export const termLines = [
  { type: "prompt", text: "$ whoami" },
  { type: "out", text: "aria — AI Engineer & ML Researcher" },
  { type: "prompt", text: "$ cat expertise.txt" },
  { type: "out", text: "LLMs, RAG, Fine-tuning, Agents" },
  { type: "out", text: "Computer Vision, NLP, MLOps" },
  { type: "prompt", text: "$ uptime" },
  { type: "out", text: "5 years, 47 models shipped" },
  { type: "prompt", text: "$ ping opportunity.dev" },
  { type: "out", text: "64 bytes: Open to work ✓" },
];

export const chatReplies = {
  skills:
    "I specialize in LLM fine-tuning, RAG systems, computer vision, and full-stack AI deployment. Ask me about any specific area!",
  projects:
    "I've built NeuralRAG Pro, VisionGuard, AgentFlow, and more. Scroll to the Projects section to explore them, or ask about a specific one.",
  contact:
    "You can reach me via the contact form below, or connect on GitHub, LinkedIn, or Twitter. I'm currently open to new opportunities!",
  experience:
    "5+ years in AI engineering, with experience at two AI startups and a Fortune 500 tech company. I focus on production-grade ML systems.",
  available:
    "Yes! I'm currently open to full-time roles and consulting engagements in AI/ML engineering.",
  default:
    "Great question! I'm an AI engineer focused on building production ML systems. Feel free to ask about my projects, skills, or availability!",
};

export const demoResponses = {
  text: (q) =>
    `Processing "${q.slice(0, 40)}...":\n\nHere's a thoughtful response generated by the language model. The system analyzes semantic context, applies chain-of-thought reasoning, and produces coherent, factually-grounded output. In production, this connects to a fine-tuned model endpoint with RAG retrieval.\n\nResponse latency: 187ms | Tokens: 142 | Model: aria-llm-v2`,
  sentiment: (q) => {
    const pos = ["happy","great","love","excellent","amazing","good","wonderful"];
    const neg = ["bad","terrible","hate","awful","poor","horrible","disappointing"];
    const posScore = pos.filter((w) => q.toLowerCase().includes(w)).length;
    const negScore = neg.filter((w) => q.toLowerCase().includes(w)).length;
    const sentiment = posScore > negScore ? "POSITIVE" : negScore > posScore ? "NEGATIVE" : "NEUTRAL";
    const conf = Math.floor(75 + Math.random() * 20);
    return `Sentiment: ${sentiment}\nConfidence: ${conf}%\nTone: ${sentiment === "POSITIVE" ? "Optimistic, engaged" : sentiment === "NEGATIVE" ? "Critical, dissatisfied" : "Matter-of-fact"}\nEmotion markers detected: ${posScore + negScore}\nModel: fine-tuned RoBERTa | Latency: 43ms`;
  },
  code: () =>
    `Code Review Analysis:\n\n✓ Syntax: Valid\n⚠ Complexity: Consider refactoring nested conditionals\n✓ Security: No obvious vulnerabilities detected\n⚠ Performance: Potential O(n²) complexity in loop structure\n→ Suggestion: Extract helper functions for readability\n→ Suggestion: Add error handling for edge cases\n\nOverall Quality Score: 7.4/10 | Analysis: AST parsing + LLM review`,
  classify: (q) => {
    const topics = ["Technology","Science","Business","Health","Politics","Entertainment","Sports","Education"];
    const topic = topics[Math.floor(Math.random() * topics.length)];
    const conf = Math.floor(72 + Math.random() * 24);
    return `Primary Topic: ${topic} (${conf}% confidence)\nSecondary: ${topics[Math.floor(Math.random() * topics.length)]} (${Math.floor(30 + Math.random() * 30)}%)\n\nKeyword extraction: [${q.split(" ").slice(0, 3).join(", ")}...]\nReadability score: ${Math.floor(50 + Math.random() * 40)}/100\nModel: distilBERT-classifier | Latency: 28ms`;
  },
};
