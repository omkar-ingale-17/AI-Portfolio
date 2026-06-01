import React, { useState, useRef } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Demo from './components/AI_Demo/AIDemo';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import Chatbot from './components/AI_Demo/Chatbot';
import VoiceToast from './components/AI_Demo/VoiceToast';
import { useTheme } from './hooks/useTheme';
import { useToast } from './hooks/useToast';
import './index.css';

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const { toast, showToast } = useToast();
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  const toggleVoice = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      showToast('Voice not supported in this browser');
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }

    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SR();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (e) => {
      const cmd = e.results[0][0].transcript.toLowerCase();
      showToast(`Heard: "${cmd}"`);
      if (cmd.includes('about')) scrollTo('about');
      else if (cmd.includes('skill')) scrollTo('skills');
      else if (cmd.includes('project')) scrollTo('projects');
      else if (cmd.includes('demo')) scrollTo('demo');
      else if (cmd.includes('contact')) scrollTo('contact');
      else if (cmd.includes('home') || cmd.includes('top')) scrollTo('hero');
      setIsListening(false);
    };

    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
    recognition.start();
    recognitionRef.current = recognition;
    setIsListening(true);
    showToast('🎤 Listening — say a section name...');
  };

  const handleSendMsg = () => showToast('Message sent! (Demo mode)');

  return (
    <>
      <div className="ai-orb"></div>

      <div className="ai-particles">
        {[...Array(50)].map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
            }}
          />
        ))}
      </div>
      <div className={`min-h-screen ${isDark ? 'dark' : 'light'}`}
        style={{ backgroundColor: 'var(--bg-primary)', color: isDark ? '#e2e8f0' : '#1e293b' }}>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Demo />
        <Contact onSend={handleSendMsg} />
        <Footer />
        <Chatbot />
        <VoiceToast toast={toast} />
      </div>
    </>
  );
}
