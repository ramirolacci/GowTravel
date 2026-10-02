import React, { useState } from 'react';
import { Phone, MapPin, Send, Facebook, Instagram, Twitter, Linkedin, ChevronDown } from 'lucide-react';
import { FAQ_DATA } from '../data/mockData';

interface FooterProps {
  onSubscribeNewsletter: (email: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSubscribeNewsletter }) => {
  const [email, setEmail] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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
        {/* Column 1: FAQ */}
        <div className="faq">
          <h3>Preguntas Frecuentes</h3>
          <ul className="faq-list">
            <li><a href="#faq" onClick={(e) => { e.preventDefault(); setOpenFaqIndex(openFaqIndex === 0 ? null : 0); }}>Empresa & Historia</a></li>
            <li><a href="#faq" onClick={(e) => { e.preventDefault(); setOpenFaqIndex(openFaqIndex === 1 ? null : 1); }}>Bolsa de Trabajo</a></li>
            <li><a href="#faq" onClick={(e) => { e.preventDefault(); setOpenFaqIndex(openFaqIndex === 2 ? null : 2); }}>Historial de Reservas</a></li>
            <li><a href="#faq" onClick={(e) => { e.preventDefault(); setOpenFaqIndex(openFaqIndex === 3 ? null : 3); }}>Términos y Servicios</a></li>
          </ul>

          {/* Interactive Accordion Preview */}
          <div className="faq-accordion-box">
            {FAQ_DATA.map((item, idx) => (
              <div key={idx} className="faq-item">
                <button
                  className="faq-question-btn"
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    size={16}
                    style={{ transform: openFaqIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                  />
                </button>
                {openFaqIndex === idx && (
                  <p className="faq-answer">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: NewsLetter */}
        <div className="news">
          <h3>Boletín de Novedades</h3>
          <p className="news-desc">Suscríbete a nuestro boletín para recibir ofertas secretas y promociones exclusivas de temporada.</p>

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

        {/* Column 3: General Information */}
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
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 GowTravel - Buenos Aires, Argentina. Todos los derechos reservados.</p>
      </div>

      <style>{`
        .footer {
          width: 100%;
          position: relative;
          background: linear-gradient(180deg, #0b0f19 0%, #080b12 100%);
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
          background: rgba(11, 15, 25, 0.6);
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

        /* FAQ */
        .faq {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-list a {
          color: rgba(248, 250, 252, 0.75);
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .faq-list a:hover {
          color: #38bdf8;
          padding-left: 0.5rem;
        }

        .faq-accordion-box {
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .faq-item {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.2rem;
          overflow: hidden;
        }

        .faq-question-btn {
          width: 100%;
          padding: 1.2rem 1.4rem;
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
          font-size: 1.3rem;
          color: rgba(248, 250, 252, 0.8);
          line-height: 1.5;
        }

        /* Newsletter */
        .news {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.8rem;
        }

        .news-desc {
          font-size: 1.4rem;
          color: rgba(248, 250, 252, 0.8);
          line-height: 1.6;
        }

        .news-form {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .news-form input {
          border-radius: 1.4rem;
          width: 100%;
          max-width: 320px;
          padding: 1.4rem 1.8rem;
          border: 1.5px solid rgba(255, 255, 255, 0.2);
          outline: none;
          text-align: center;
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

        /* General Info */
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

        .footer-bottom {
          position: relative;
          z-index: 2;
          margin-top: 6rem;
          padding-top: 2.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          font-size: 1.4rem;
          color: rgba(248, 250, 252, 0.6);
        }

        @media (max-width: 895px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 4rem;
            text-align: center;
          }
          .faq, .info {
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
