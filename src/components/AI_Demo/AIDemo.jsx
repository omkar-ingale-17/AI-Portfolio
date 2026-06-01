import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, Cpu } from 'lucide-react';
import { getAIResponse } from '../../data/aiService';
import { getAIResponse as getAIResponseLocal } from '../../data/aiResponses';
import './AIDemo.css';

const tabs = [
  {
    id: 'textGeneration',
    label: 'AI Assistant',
    icon: '✍️',
    placeholder: 'Enter a prompt and watch AI generate a response...\n\nExample: "What is artificial intelligence"',
    color: '#00d4ff',
  },
  {
    id: 'sentimentAnalysis',
    label: 'Emotion Detector',
    icon: '🧠',
    placeholder: 'Enter text to analyze its sentiment...\n\nExample: "This portfolio project is amazing and awesome"',
    color: '#a855f7',
  },
  {
    id: 'codeReview',
    label: 'AI Code Analyzer',
    icon: '⚡',
    placeholder: 'Paste your code here for an AI review...\n\nExample:\nfunction fetchData(url) {\n  return fetch(url).then(r => r.json())\n}',
    color: '#00ff88',
  },
  {
    id: 'textClassification',
    label: 'Smart Categorizer',
    icon: '🏷️',
    placeholder: 'Enter text to classify into categories...\n\nExample: "Artificial intelligence and neural networks are transforming technology"',
    color: '#fbbf24',
  },
];

function LoadingDots() {
  return (
    <div className="aidemo__loading">
      <div className="aidemo__loading-dots">
        <div className="loading-dot" />
        <div className="loading-dot" />
        <div className="loading-dot" />
      </div>
      <span className="aidemo__loading-text">Processing...</span>
    </div>
  );
}

export default function AIDemo() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const currentTab = tabs.find(t => t.id === activeTab);

  const handleRun = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setOutput('');

    // Simulate processing delay
    await new Promise(r => setTimeout(r, 1200 + Math.random() * 800));

        let response = '';

    if (activeTab === 'textGeneration') {

      // Wikipedia API
      response = await getAIResponse(input);

    } else {

      // Local AI demo responses
      response = getAIResponseLocal(activeTab, input);

    }
    setLoading(false);

    // Typewriter reveal
    let i = 0;
    const interval = setInterval(() => {
      i += 3;
      setOutput(response.slice(0, i));
      if (i >= response.length) {
        setOutput(response);
        clearInterval(interval);
      }
    }, 15);
  };

  const handleReset = () => {
    setInput('');
    setOutput('');
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setInput('');
    setOutput('');
  };

  return (
    <section id="demo" className="aidemo">
      <div className="aidemo__orb" />

      <div className="aidemo__inner">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="aidemo__header"
        >
          <p className="aidemo__pre-title">// try it yourself</p>
          <h2 className="aidemo__title section-title">
            Live AI Playground
          </h2>
          <p className="aidemo__desc">
            Experiment with AI capabilities in real-time. Each tool demonstrates a different
            NLP task powered by state-of-the-art models.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass aidemo__container"
        >
          {/* Tab bar */}
          <div className="aidemo__tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`aidemo__tab ${activeTab === tab.id ? 'aidemo__tab--active' : ''}`}
                style={activeTab === tab.id ? {
                  borderBottomColor: tab.color,
                  color: tab.color,
                  backgroundColor: `${tab.color}08`,
                } : {}}
                id={`tab-${tab.id}`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Editor */}
          <div className="aidemo__editor">
            {/* Input */}
            <div className="aidemo__panel">
              <div className="aidemo__panel-header">
                <label className="aidemo__panel-label">Input Prompt</label>
                <span className="aidemo__panel-meta">{input.length} chars</span>
              </div>
              <textarea
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder={currentTab.placeholder}
                className="aidemo__textarea"
                style={{ '--tw-ring-color': currentTab.color }}
                id="ai-input"
              />
              <div className="aidemo__actions">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleRun}
                  disabled={!input.trim() || loading}
                  className="aidemo__run-btn"
                  style={{
                    background: `linear-gradient(135deg, ${currentTab.color}30, ${currentTab.color}15)`,
                    border: `1px solid ${currentTab.color}50`,
                    color: currentTab.color,
                    boxShadow: `0 0 16px ${currentTab.color}20`,
                  }}
                  id="run-ai-btn"
                >
                  {loading ? <Cpu size={16} className="animate-spin" /> : <Play size={16} />}
                  {loading ? 'Processing...' : 'Run AI'}
                </motion.button>
                <button
                  onClick={handleReset}
                  className="glass-sm aidemo__reset-btn"
                  title="Reset"
                >
                  <RotateCcw size={16} />
                </button>
              </div>
            </div>

            {/* Output */}
            <div className="aidemo__panel">
              <div className="aidemo__panel-header">
                <label className="aidemo__panel-label">AI Output</label>
                {output && (
                  <span className="aidemo__badge-complete"
                    style={{ backgroundColor: `${currentTab.color}20`, color: currentTab.color }}>
                    ✓ Complete
                  </span>
                )}
              </div>
              <div
                className="aidemo__output-box"
                style={{
                  border: `1px solid ${output ? currentTab.color + '30' : 'rgba(255,255,255,0.06)'}`,
                }}
              >
                <AnimatePresence mode="wait">
                  {loading ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <LoadingDots />
                    </motion.div>
                  ) : output ? (
                    <motion.pre
                      key="output"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="aidemo__output-content"
                    >
                      {output}
                    </motion.pre>
                  ) : (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="aidemo__empty-state"
                    >
                      <div>
                        <div className="aidemo__empty-icon">{currentTab.icon}</div>
                        <p className="aidemo__empty-text">
                          Output will appear here
                        </p>
                        <p className="aidemo__empty-subtext">
                          Enter a prompt and click Run AI
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="aidemo__footer-note">
            <p className="aidemo__note-text">
              ⚡ Powered by simulated AI models · Responses are pre-generated for demo purposes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
