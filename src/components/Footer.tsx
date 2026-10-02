import React, { useState } from 'react';
import { Phone, MapPin, Send, Facebook, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onSubscribeNewsletter: (email: string) => void;
  onNavigateFaqPage: () => void;
  onNavigateLegalPage: (type: 'terms' | 'privacy' | 'consumer') => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSubscribeNewsletter,
  onNavigateFaqPage,
  onNavigateLegalPage,
  onNavigateSection
}) => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    onSubscribeNewsletter(email);
    setEmail('');
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-overlay" />

      <div className="footer-content">
        {/* Column 1: Newsletters */}
        <div className="news">
          <h3>Newsletters</h3>
          <p className="news-desc">
            Suscríbete a nuestro boletín para recibir ofertas secretas y promociones exclusivas de temporada.
          </p>

          <form className="news-inline-form" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder="Tu Correo Electrónico"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" aria-label="Suscribirse al boletín" className="news-icon-btn">
              <Send size={18} />
            </button>
          </form>
        </div>

        {/* Group Columns 2 & 3 close together: Navegación & Legales */}
        <div className="links-group">
          {/* Column 2: Navegación */}
          <div className="nav-column">
            <h3>Navegación</h3>
            <ul className="footer-nav-list">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateSection('home');
                  }}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#packages"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateSection('packages');
                  }}
                >
                  Paquetes
                </a>
              </li>
              <li>
                <a
                  href="#destinations"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateSection('destinations');
                  }}
                >
                  Destinos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateSection('contact');
                  }}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legales */}
          <div className="legales-column">
            <h3>Legales</h3>
            <ul className="footer-nav-list">
              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateFaqPage();
                  }}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#terminos"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateLegalPage('terms');
                  }}
                >
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a
                  href="#privacidad"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateLegalPage('privacy');
                  }}
                >
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="#defensa"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateLegalPage('consumer');
                  }}
                >
                  Defensa del Consumidor
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 4: Información General */}
        <div className="info">
          <h3>Información General</h3>
          
          <div className="phone-box">
            <Phone size={20} className="info-icon" />
            <p>+54 11 5263-8800</p>
          </div>

          <ul className="location-list">
            <li>
              <MapPin size={16} className="inline-icon" />
              <a href="https://maps.google.com" target="_blank" rel="noreferrer">
                Av. del Libertador 4980, Buenos Aires
              </a>
            </li>
          </ul>

          <div className="icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            {/* Official X SVG Icon */}
            <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Gow<span className="copyright-accent">Travel</span>. Todos los derechos reservados | Desarrollado por{' '}
          <a
            href="https://waveframe.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="waveframe-link"
          >
            <strong>WaveFrame Studio</strong>
          </a>
        </p>
      </div>

      <style>{`
        .footer {
          width: 100%;
          position: relative;
          background: linear-gradient(180deg, #0b0f19 0%, #060911 100%);
          color: #ffffff;
          padding: 8rem 9% 3rem;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          z-index: 1;
        }

        .footer-content {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.2fr 1.8fr 1fr;
          gap: 3.5rem;
          align-items: start;
        }

        h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 2.1rem;
          font-weight: 800;
          margin-bottom: 2rem;
          color: #ffffff;
          letter-spacing: -0.01em;
        }

        /* Column 1: Newsletters */
        .news {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          gap: 1.6rem;
        }

        .news-desc {
          font-size: 1.4rem;
          color: rgba(248, 250, 252, 0.8);
          line-height: 1.6;
        }

        .news-inline-form {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .news-inline-form input {
          border-radius: 3rem;
          flex: 1;
          padding: 1.2rem 1.8rem;
          border: 1.5px solid rgba(255, 255, 255, 0.2);
          outline: none;
          font-size: 1.4rem;
          background: rgba(255, 255, 255, 0.95);
          color: #0f172a;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .news-inline-form input:focus {
          background: #ffffff;
          border-color: #38bdf8;
          box-shadow: 0 0 15px rgba(56, 189, 248, 0.3);
        }

        .news-icon-btn {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: none;
          background: linear-gradient(135deg, #0284c7 0%, #2563eb 100%);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          flex-shrink: 0;
          box-shadow: 0 6px 18px rgba(2, 132, 199, 0.35);
        }

        .news-icon-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 10px 25px rgba(2, 132, 199, 0.5);
        }

        /* Group Columns 2 & 3 close together */
        .links-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .nav-column,
        .legales-column {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .footer-nav-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        /* All footer links have exact same uniform style & color */
        .footer-nav-list a {
          color: rgba(248, 250, 252, 0.82);
          font-size: 1.5rem;
          font-weight: 500;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .footer-nav-list a:hover {
          color: #38bdf8;
          padding-left: 0.5rem;
        }

        /* Column 4: General Info */
        .info {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }

        .phone-box {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.7rem;
          font-weight: 700;
          color: #ffffff;
        }

        .info-icon {
          color: #38bdf8;
        }

        .location-list {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .location-list li {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .inline-icon {
          color: #38bdf8;
          flex-shrink: 0;
        }

        .location-list a {
          color: rgba(248, 250, 252, 0.85);
          font-size: 1.45rem;
          transition: color 0.3s ease;
        }

        .location-list a:hover {
          color: #38bdf8;
          text-decoration: underline;
        }

        .icons {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          margin-top: 0.8rem;
        }

        .icons a {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: all 0.3s ease;
        }

        .icons a:hover {
          background: #0284c7;
          border-color: #0284c7;
          color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(2, 132, 199, 0.4);
        }

        /* Footer Bottom & WaveFrame Link */
        .footer-bottom {
          position: relative;
          z-index: 2;
          margin-top: 6rem;
          padding-top: 2.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          font-size: 1.45rem;
          color: rgba(248, 250, 252, 0.8);
        }

        .copyright-accent {
          color: #38bdf8;
          font-weight: 800;
        }

        .waveframe-link {
          color: #38bdf8;
          transition: all 0.3s ease;
        }

        .waveframe-link strong {
          font-weight: 800;
          letter-spacing: 0.02em;
        }

        .waveframe-link:hover {
          color: #ffffff;
          text-decoration: underline;
          text-shadow: 0 0 12px rgba(56, 189, 248, 0.6);
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
          }
          .links-group {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 640px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 3.5rem;
            text-align: center;
          }
          .links-group {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .news, .nav-column, .legales-column, .info {
            align-items: center;
            text-align: center;
          }
          .news-inline-form {
            justify-content: center;
          }
          .icons {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};
