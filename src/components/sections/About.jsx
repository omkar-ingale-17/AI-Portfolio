import React, { useEffect, useRef } from 'react';
import { termLines } from '../../data/portfolioData';
import './About.css';

async function typeTerminal(el) {
  for (const line of termLines) {
    await new Promise((r) => setTimeout(r, 300));
    const div = document.createElement('div');
    if (line.type === 'prompt') {
      div.innerHTML = `<span class="t-prompt">›</span> <span class="t-cmd"></span>`;
      el.appendChild(div);
      const cmd = div.querySelector('.t-cmd');
      for (const c of line.text.slice(2)) {
        cmd.textContent += c;
        await new Promise((r) => setTimeout(r, 50));
      }
    } else {
      div.innerHTML = `<span class="t-out">${line.text}</span>`;
      el.appendChild(div);
    }
    el.scrollTop = el.scrollHeight;
  }
  const cursor = document.createElement('span');
  cursor.className = 't-cursor';
  el.appendChild(cursor);
}

export default function About() {
  const termRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (termRef.current && !started.current) {
        started.current = true;
        typeTerminal(termRef.current);
      }
    }, 600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="section-inner">
        <div className="about-grid">
          <div>
            <div className="section-tag">// about me</div>
            <h2 className="section-title">I create AI systems that actually work.</h2>
            <p className="about-bio">
              Computer engineering student skilled in Python development, basic AI, and backend systems. Seeking an
              opportunity to apply programming, problem-solving, and AI skills to build real-world software solutions while
              continuously learning and contributing to innovative technology projects.
            </p>
            <p className="about-bio">
              Currently focused on multimodal AI, agent frameworks, and making powerful models
              accessible to real users.
            </p>
            <div className="tag-list">
              {['PyTorch','Transformers','React.js','FastAPI','SQL'].map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>

          <div className="terminal">
            <div className="terminal-bar">
              <div className="dot dot-r" />
              <div className="dot dot-y" />
              <div className="dot dot-g" />
              <span className="terminal-title">oma@portfolio:~</span>
            </div>
            <div className="terminal-body" ref={termRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
