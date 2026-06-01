import { Mail, Zap, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import './Footer.css';

export default function Footer() {
  const socials = [
    { icon: <GithubIcon size={18} />,   href: 'https://github.com/omkar-ingale-17', label: 'GitHub'   },
    { icon: <LinkedinIcon size={18} />, href: 'https://www.linkedin.com/in/onkar-ingale-b21658310/', label: 'LinkedIn' },
    // { icon: <TwitterIcon size={18} />,  href: '#', label: 'Twitter'  },
    { icon: <Mail size={18} />,         href: 'mailto:oingale339@gmail.com', label: 'Email' },
  ];

  return (
    <footer id="contact" className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          {/* Brand */}
          <div>
            <div className="footer__brand-logo">
              <div className="footer__brand-icon">
                <Zap size={16} />
              </div>
              <span className="footer__brand-name">OmkarIngale</span>
            </div>
            <p className="footer__brand-desc">
              AI Developer & Student building intelligent systems that solve real-world problems.
              Always learning, always building.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer__col-heading">Quick Links</h4>
            <ul className="footer__links-list">
              {['About', 'Skills', 'Projects', 'AI Demo'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    className="footer__nav-link"
                  >
                    → {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer__col-heading">Get In Touch</h4>
            <p className="footer__contact-desc">
              Open to internships, collaborations, and interesting AI projects.
            </p>
            <a href="mailto:oingale339@gmail.com" className="footer__email-link">
              <Mail size={16} /> oingale339@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p className="footer__copy">
            Built with <Heart size={12} className="footer__heart" /> by Omkar Ingale · {new Date().getFullYear()}
          </p>
          <div className="footer__socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="footer__social-link"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
