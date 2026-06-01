import React, { useState } from 'react';
import './Contact.css';

const SOCIALS = [
  {
    icon: '📁',
    bg: 'rgba(0,212,255,0.1)',
    name: 'GitHub',
    handle: 'https://github.com/omkar-ingale-17',
  },

  {
    icon: '💼',
    bg: 'rgba(124,58,237,0.1)',
    name: 'LinkedIn',
    handle: 'https://www.linkedin.com/in/onkar-ingale-b21658310/',
  },

  {
    icon: '📧',
    bg: 'rgba(239,68,68,0.1)',
    name: 'Email',
    handle: 'mailto:oingale339@gmail.com',
  },
];

export default function Contact({ onSend }) {
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const sendMessage = () => {

  const text = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
`;

  /* WhatsApp */
  const whatsappURL =
    `https://wa.me/917276738788?text=${encodeURIComponent(text)}`;

  window.open(whatsappURL, '_blank');

  /* Email */
  const mailURL =
    `mailto:oingale339@gmail.com?subject=Portfolio Contact&body=${encodeURIComponent(text)}`;

  window.location.href = mailURL;
};
  return (
    <section id="contact" className="contact-section">
      <div className="section-inner">
        <div className="section-title-group">
          <div className="section-tag">// get in touch</div>
          <h2 className="section-title">Let's Build Together</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-form">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                className="form-input"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-input"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your anything..."
              ></textarea>
            </div>
            <button className="btn-primary" onClick={sendMessage}>Send Message →</button>
          </div>

          <div>
            <p className="section-desc" style={{ marginBottom: '1rem' }}>
              Open to full-time roles, consulting, and interesting collaborations in AI/ML.
            </p>
            <div className="social-links">
              {SOCIALS.map((s) => (
                <a className="social-link" href={s.handle} key={s.name} target="_blank" rel="noopener noreferrer">
                  <div className="social-icon" style={{ background: s.bg }}>{s.icon}</div>
                  <div className="social-info">
                    <div className="social-name">{s.name}</div>
                    <div className="social-handle">{s.handle}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}