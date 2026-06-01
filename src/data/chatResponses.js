const responses = {
  greeting: [
    "Hey there! 👋 I'm Omkar's portfolio assistant. Ask me about skills, projects, or how to get in touch!",
    "Hello! I'm here to help you explore Omkar's work. What would you like to know?",
  ],
  skills: [
    "Omkar specializes in **Software Development & AI Applications** with strong proficiency in:\n• Python, Java, C++, SQL/MySQL\n• AI Assistants & Automation\n• React.js & Frontend Development\n• Data Structures & Algorithms\n• Git, GitHub & Prompt Engineering\n\nHead to the Skills section to see detailed breakdowns! 🚀",
  ],

  projects: [
    "Omkar has built several innovative projects:\n\n🎙️ **AI Voice Assistant** — Intelligent voice-controlled desktop assistant\n📄 **PDF-to-Audio Converter** — Converts study materials into audio summaries\n📧 **Ethical Email Tracker** — Email monitoring and phishing detection system\n🚦 **AI Traffic Management System** — Smart traffic optimization using AI\n👤 **Face Detection & Recognition System** — Real-time face recognition and attendance tracking\n🌐 **AI Portfolio Website** — Interactive portfolio with AI-powered features\n\nCheck the Projects section for details!",
  ],

  contact: [
    "You can reach Omkar at:\n\n📧 oingale339@gmail.com\n🐙 github.com/omkar-ingale-17\n💼 linkedin.com/in/onkar-ingale-b21658310\n\nOr use the contact form at the bottom of the page!",
  ],

  about: [
    "Omkar Ingale is an **Engineering Student & Aspiring Software Developer** passionate about Artificial Intelligence, Full Stack Development, and real-world problem solving.\n\nCurrently pursuing Engineering at SVERI's College of Engineering, Pandharpur. He enjoys building AI-powered applications, automation tools, and innovative software solutions that create practical impact.\n\n> 'Keep learning, keep building, and keep improving.' ✨",
  ],

  experience: [
    "Omkar's experience includes:\n\n🎓 **Engineering Student** — Computer Science & Engineering\n💻 **AI & Software Projects** — Multiple academic and personal projects\n🏆 **Paper Presentation** — Artificial Intelligence research presentation\n🏭 **Industrial Visit Presentation** — Technical presentation experience\n🌐 **Portfolio Development** — Building modern React and AI-based applications\n📚 **Continuous Learning** — Full Stack Development, AI, and Software Engineering",
  ],
  default: [
    "Interesting question! I can tell you about Omkar's **skills**, **projects**, **experience**, or how to **contact** him. What interests you most?",
    "I'm not sure about that, but I can help with info on Omkar's skills, projects, or contact details. Just ask! 🚀",
    "Good question! Try asking me about 'skills', 'projects', 'contact', or 'about Omkar'. I'll do my best to help! 💡",
  ],
  education: [
    "🎓 B.Tech Engineering Student\nSVERI's College of Engineering, Pandharpur (Autonomous)\n\n🎓 Diploma in Computer Engineering\nIndira Institute of Diploma Engineering, Vairag"
  ],
  certifications: [
    "📜 Python Programming Certification — SevenMentor & Training (2024)\n📜 AI & Machine Learning Learning Path\n📜 Full Stack Development (In Progress)"
  ],
  resume: [
    "📄 Download Resume:\nhttps://your-resume-link.com"
  ],
};

export function getBotResponse(userMessage) {
  const msg = userMessage.toLowerCase();

  if (msg.match(/hello|hi|hey|greet|start/))        return pick(responses.greeting);
  if (msg.match(/skill|tech|stack|know|language|framework|tool/)) return pick(responses.skills);
  if (msg.match(/project|build|work|app|portf/))    return pick(responses.projects);
  if (msg.match(/contact|email|reach|hire|linkedin|github|twitter/)) return pick(responses.contact);
  if (msg.match(/about|who|person|bio|background/)) return pick(responses.about);
  if (msg.match(/experience|intern|job|career|work history/)) return pick(responses.experience);

  return pick(responses.default);
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
