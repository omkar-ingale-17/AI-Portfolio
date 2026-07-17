import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Mic, MicOff, Menu, X, Zap } from 'lucide-react';
import { useVoice } from '../../hooks/useVoice';
import './Navbar.css';

const navLinks = [
  { label: 'Home',     href: '#hero'     },
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'AI Demo',  href: '#demo'     },
  { label: 'Contact',  href: '#contact'  },
];

export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [voiceToast, setVoiceToast] = useState('');

  const handleVoiceCommand = (section, label) => {
    setVoiceToast(label);
    setTimeout(() => setVoiceToast(''), 2500);

    if (section === 'theme') {
      toggleTheme();
      return;
    }
    const el = document.getElementById(section);

    if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    }
  };

  const { isListening, transcript, isSupported, toggleListening } = useVoice({
    onCommand: handleVoiceCommand,
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);

    const id = href.replace("#", "");

    setTimeout(() => {
      const element = document.getElementById(id);

      if (!element) return;

      const navbarHeight = 80;

      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }, 200);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      >
        <div className="navbar__inner">
          {/* Logo */}
          <a
            href="#hero"
            className="navbar__logo"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
          >
            {/* <div className="navbar__logo-icon">
              <Zap size={16} />
            </div> */}
            <span className="navbar__logo-name">
              OMKAR<span className="navbar__logo-surname">.DEV</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="navbar__links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="navbar__link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="navbar__controls">
            {/* Voice button */}
            {isSupported && (
              <motion.button
                onClick={toggleListening}
                whileTap={{ scale: 0.9 }}
                className={`navbar__icon-btn ${isListening ? 'navbar__icon-btn--listening' : ''}`}
                title="Voice commands"
                id="voice-btn"
              >
                {isListening && (
                  <>
                    <span className="navbar__voice-ripple" />
                    <span className="navbar__voice-ripple navbar__voice-ripple--delay" />
                  </>
                )}
                {isListening ? <Mic size={18} /> : <MicOff size={18} />}
              </motion.button>
            )}

            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className="navbar__icon-btn"
              title="Toggle theme"
              id="theme-toggle"
            >
              <motion.div
                key={isDark ? 'dark' : 'light'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="navbar__theme-icon"
              >
                {isDark ? <Sun size={18} style={{ color: '#facc15' }} /> : <Moon size={18} />}
              </motion.div>
            </motion.button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="navbar__icon-btn navbar__menu-btn"
              id="mobile-menu-btn"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="navbar__mobile-panel"
            >
              <div className="navbar__mobile-links">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="navbar__mobile-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Voice transcript toast */}
      <AnimatePresence>
        {voiceToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className="navbar__toast"
          >
            🎙️ {voiceToast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Listening transcript bubble */}
      <AnimatePresence>
        {isListening && transcript && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="navbar__transcript"
          >
            "{transcript}"
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
