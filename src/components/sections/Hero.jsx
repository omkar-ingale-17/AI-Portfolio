import React from 'react';
import './Hero.css';
import resume from "../../assets/Resume_v3_0.pdf";
import photo from "../../assets/My_Photo.jpeg";

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid-bg" />
      <div className="hero-inner">
        <div className="hero-eyebrow">Available for work</div>
        <div className="hero-image-wrapper">

          <div className="hero-image-border">

            <img
              src={photo}
              alt="Omkar"
              className="hero-image"
            />

          </div>

        </div>

        <h1 className="hero-title">
          <span className="line"><span>Hi, I'm</span></span>
          <span className="line"><span className="gradient-text">Omkar</span></span>
          <span className="line"><span>I build AI systems & smart applications.</span></span>
        </h1>


        <p className="hero-sub">
          Computer Engineering student passionate about AI,
          Voice Assistants, and Full Stack Development.
        </p>

        <div className="hero-cta">
          <button className="btn-primary" onClick={() => scrollTo('projects')}>
            View Projects →
          </button>
          <a href={resume} download className="btn-primary">
            Download Resume
          </a>
          <button className="btn-outline" onClick={() => scrollTo('contact')}>
            Get in Touch
          </button>
        </div>

        {/* <div className="hero-stats">
          <div className="stat">
            <div className="stat-num">47+</div>
            <div className="stat-label">AI Models Deployed</div>
          </div>
          <div className="stat">
            <div className="stat-num">12M+</div>
            <div className="stat-label">API Calls Served</div>
          </div>
          <div className="stat">
            <div className="stat-num">99.9%</div>
            <div className="stat-label">Uptime Achieved</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
