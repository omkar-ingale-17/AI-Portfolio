import React from 'react';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className={`modal-overlay ${project ? 'open' : ''}`}
      id="modal"
      onClick={(e) => e.target.id === 'modal' && onClose()}
    >
      <div className="modal" style={{ position: 'relative' }}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-header">
          <div className="modal-thumb" style={{ background: project.bg }}>
            {project.emoji}
          </div>
          <div className="proj-tags" style={{ marginBottom: '0.75rem' }}>
            {project.tags.map((t) => (
              <span className="proj-tag" key={t}>{t}</span>
            ))}
          </div>
          <div className="modal-title">{project.name}</div>
        </div>

        <div className="modal-body">
          <div className="modal-desc">{project.long}</div>
          <div className="modal-section-title">Key Features</div>
          <ul className="modal-features">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="modal-footer">
          <button className="btn-primary">View Live Demo →</button>
          <button className="btn-outline">GitHub Repo</button>
        </div>
      </div>
    </div>
  );
}
