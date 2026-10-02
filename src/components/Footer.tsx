import React, { useState } from 'react';
import { Phone, MapPin, Send, Facebook, Instagram, Linkedin, ChevronDown } from 'lucide-react';
import { FAQ_DATA } from '../data/mockData';

interface FooterProps {
  onSubscribeNewsletter: (email: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSubscribeNewsletter }) => {
  const [email, setEmail] = useState('');
  const [showFaqAccordion, setShowFaqAccordion] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    onSubscribeNewsletter(email);
    setEmail('');
  };

  const handleToggleFaq = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowFaqAccordion((prev) => !prev);
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-overlay" />

      <div className="footer-content">
        {/* Column 1: NewsLetter (Boletín de Novedades) */}
        <div className="news">
          <h3>Boletín de Novedades</h3>
          <p className="news-desc">
            Suscríbete a nuestro boletín para recibir ofertas secretas y promociones exclusivas de temporada.
          </p>

          <form className="news-form" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder="Tu Correo Electrónico"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">
              <span>Suscribirme</span>
              <Send size={16} />
            </button>
          </form>
        </div>

        {/* Column 2: Navegación */}
        <div className="nav-column">
          <h3>Navegación</h3>
          <ul className="footer-nav-list">
            <li><a href="#home">Inicio</a></li>
            <li><a href="#packages">Paquetes</a></li>
            <li><a href="#destinations">Destinos</a></li>
            <li><a href="#contact">Contacto</a></li>
            <li>
              <a href="#faq" onClick={handleToggleFaq} className="faq-toggle-link">
                Preguntas Frecuentes (FAQ)
                <ChevronDown
                  size={16}
                  style={{
                    transform: showFaqAccordion ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                />
              </a>
            </li>
          </ul>

          {/* FAQ Accordion preview */}
          {showFaqAccordion && (
            <div className="faq-accordion-box">
              {FAQ_DATA.map((item, idx) => (
                <div key={idx} className="faq-item">
                  <button
                    className="faq-question-btn"
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      size={14}
                      style={{ transform: openFaqIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                    />
                  </button>
                  {openFaqIndex === idx && (
                    <p className="faq-answer">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Column 3: Información General */}
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
            <li><a href="#">Buenos Aires, Argentina</a></li>
          </ul>

          <div className="icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            {/* Official X (ex Twitter) Icon */}
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
          © 2026 GowTravel. Todos los derechos reservados | Desarrollado por{' '}
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
          background: rgba(11, 15, 25, 0.65);
          z-index: 1;
        }

        .footer-content {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4.5rem;
          align-items: start;
        }

        h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 2.2rem;
          font-weight: 800;
          margin-bottom: 2rem;
          color: #ffffff;
          letter-spacing: -0.01em;
        }

        /* Column 1: Newsletter */
        .news {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          gap: 1.8rem;
        }

        .news-desc {
          font-size: 1.45rem;
          color: rgba(248, 250, 252, 0.8);
          line-height: 1.6;
        }

        .news-form {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.4rem;
        }

        .news-form input {
          border-radius: 1.4rem;
          width: 100%;
          max-width: 340px;
          padding: 1.4rem 1.8rem;
          border: 1.5px solid rgba(255, 255, 255, 0.2);
          outline: none;
          font-size: 1.5rem;
          background: rgba(255, 255, 255, 0.95);
          color: #0f172a;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .news-form input:focus {
          background: #ffffff;
          border-color: #38bdf8;
          box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
        }

        .news-form button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          padding: 1.2rem 3.5rem;
          border-radius: 3rem;
          border: none;
          background: linear-gradient(135deg, #0284c7 0%, #2563eb 100%);
          color: #ffffff;
          font-weight: 700;
          font-size: 1.5rem;
          transition: all 0.3s ease;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(2, 132, 199, 0.3);
        }

        .news-form button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(2, 132, 199, 0.45);
        }

        /* Column 2: Navigation Links */
        .nav-column {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .footer-nav-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .footer-nav-list a {
          color: rgba(248, 250, 252, 0.82);
          font-size: 1.6rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .footer-nav-list a:hover {
          color: #38bdf8;
          padding-left: 0.5rem;
        }

        .faq-toggle-link {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          color: #38bdf8 !important;
          font-weight: 600 !important;
        }

        .faq-accordion-box {
          margin-top: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .faq-item {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1.2rem;
          overflow: hidden;
        }

        .faq-question-btn {
          width: 100%;
          padding: 1.1rem 1.4rem;
          background: transparent;
          color: #ffffff;
          font-size: 1.3rem;
          font-weight: 600;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          text-align: left;
        }

        .faq-answer {
          padding: 0 1.4rem 1.2rem;
          font-size: 1.25rem;
          color: rgba(248, 250, 252, 0.8);
          line-height: 1.5;
        }

        /* Column 3: General Info */
        .info {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }

        .phone-box {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.8rem;
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
          font-size: 1.5rem;
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
          margin-top: 1rem;
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
          color: rgba(248, 250, 252, 0.7);
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

        @media (max-width: 895px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 4rem;
            text-align: center;
          }
          .news, .nav-column, .info {
            align-items: center;
            text-align: center;
          }
          .news-form {
            align-items: center;
          }
          .icons {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};
