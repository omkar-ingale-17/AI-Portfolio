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
          <div
            className="modal-thumb"
            style={{ background: project.bg }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="modal-thumb-image"
            />
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

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View Live Demo →
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              GitHub Repo
            </a>
          )}

        </div>
      </div>
    </div>
  );
}
