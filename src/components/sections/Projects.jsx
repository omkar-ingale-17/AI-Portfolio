import React, { useState } from 'react';
import { projectsData } from '../../data/portfolioData';
import ProjectModal from './ProjectModal';
import './Projects.css';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="section-inner">
        <div className="section-title-group">
          <div className="section-tag">// work</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">
            Production systems and research experiments — click any card to explore.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((p, i) => (
            <div className="proj-card" key={i} onClick={() => setActiveProject(p)}>
              <div className="proj-thumb" style={{ background: p.bg }}>{p.emoji}</div>
              <div className="proj-body">
                <div className="proj-tags">
                  {p.tags.map((t) => (
                    <span className="proj-tag" key={t}>{t}</span>
                  ))}
                </div>
                <div className="proj-name">{p.name}</div>
                <div className="proj-desc">{p.desc}</div>
              </div>
              <div className="proj-hover-overlay">View Details →</div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
