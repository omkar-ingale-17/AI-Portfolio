import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { getBotResponse } from '../../data/chatResponses';
import './Chatbot.css';

function formatTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function MessageBubble({ msg }) {
  const isBot = msg.role === 'bot';
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`chatbot-msg-row ${isBot ? '' : 'chatbot-msg-row--user'}`}
    >
      {/* Avatar */}
      <div className={`chatbot-msg-avatar ${isBot ? 'chatbot-msg-avatar--bot' : 'chatbot-msg-avatar--user'}`}>
        {isBot ? <Bot size={14} /> : <User size={14} />}
      </div>

      {/* Bubble */}
      <div className="chatbot-bubble">
        <div className={`chatbot-bubble__text ${isBot ? 'chatbot-bubble__text--bot' : 'chatbot-bubble__text--user'}`}>
          {/* Render markdown bold */}
          {msg.text.split(/(\*\*.*?\*\*)/).map((part, i) =>
            part.startsWith('**') && part.endsWith('**')
              ? <strong key={i} style={{ color: '#00d4ff' }}>{part.slice(2, -2)}</strong>
              : part
          )}
        </div>
        <div className={`chatbot-bubble__time ${isBot ? 'chatbot-bubble__time--bot' : 'chatbot-bubble__time--user'}`}>
          {msg.time}
        </div>
      </div>
    </motion.div>
  );
}

const SUGGESTIONS = ['Tell me about skills', 'Show me projects', 'How to contact?', 'About Omkar'];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: "Hey! 👋 I'm Omkar's AI assistant. Ask me about skills, projects, contact, or anything else!",
      time: formatTime(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }, [messages, isOpen]);

  const sendMessage = async (text) => {
    const msg = (text || input).trim();
    if (!msg) return;

    setMessages(prev => [...prev, { role: 'user', text: msg, time: formatTime() }]);
    setInput('');
    setIsTyping(true);

    await new Promise(r => setTimeout(r, 700 + Math.random() * 500));

    const response = getBotResponse(msg);
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'bot', text: response, time: formatTime() }]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            className="chatbot-window"
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="chatbot-header__left">
                <div className="chatbot-avatar">
                  <Bot size={18} />
                </div>
                <div>
                  <p className="chatbot-name">Omkar's AI Assistant</p>
                  <div className="chatbot-status">
                    <span className="chatbot-status__dot" />
                    <span className="chatbot-status__text">Online · Always ready</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="chatbot-close-btn">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="chatbot-messages">
              {messages.map((msg, i) => (
                <MessageBubble key={i} msg={msg} />
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="chatbot-typing-row"
                >
                  <div className="chatbot-msg-avatar chatbot-msg-avatar--bot">
                    <Bot size={14} />
                  </div>
                  <div className="chatbot-typing-bubble">
                    <div className="chatbot-typing-dots">
                      <div className="loading-dot" />
                      <div className="loading-dot" />
                      <div className="loading-dot" />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick suggestions */}
            {messages.length <= 2 && (
              <div className="chatbot-suggestions">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    className="chatbot-suggestion-btn"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="chatbot-input-area">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                className="chatbot-input"
                id="chatbot-input"
              />
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => sendMessage()}
                disabled={!input.trim()}
                className="chatbot-send-btn"
              >
                <Send size={16} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger button */}
      <motion.button
        onClick={() => setIsOpen(v => !v)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="chatbot-trigger"
        id="chatbot-toggle"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? 'x' : 'chat'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* Notification badge */}
      {!isOpen && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="chatbot-badge"
        >
          1
        </motion.div>
      )}
    </>
  );
}
