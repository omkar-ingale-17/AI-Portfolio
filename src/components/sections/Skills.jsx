import React, { useEffect, useRef } from 'react';
import { skillsData } from '../../data/portfolioData';
import './Skills.css';

export default function Skills() {
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.skill-fill').forEach((f) => {
              f.style.transform = `scaleX(${f.dataset.pct})`;
              f.classList.add('animate');
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    gridRef.current.querySelectorAll('.skill-card').forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="section-inner">
        <div className="section-title-group">
          <div className="section-tag">// expertise</div>
          <h2 className="section-title">Skills &amp; Stack</h2>
          <p className="section-desc">
            From model architecture to deployment pipelines — the full AI engineering spectrum.
          </p>
        </div>
        <div className="skills-grid" ref={gridRef}>
          {skillsData.map((cat) => (
            <div className="skill-card" key={cat.cat}>
              <div className="skill-category">{cat.cat}</div>
              {cat.skills.map((s) => (
                <div className="skill-item" key={s.n}>
                  <div className="skill-header">
                    <span className="skill-name">{s.n}</span>
                    <span className="skill-pct">{s.p}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" data-pct={s.p / 100} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
