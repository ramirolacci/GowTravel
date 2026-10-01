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
          <h3>FAQ</h3>
          <ul className="faq-list">
            <li><a href="#faq" onClick={(e) => { e.preventDefault(); setOpenFaqIndex(openFaqIndex === 0 ? null : 0); }}>Company</a></li>
            <li><a href="#faq" onClick={(e) => { e.preventDefault(); setOpenFaqIndex(openFaqIndex === 1 ? null : 1); }}>Employment</a></li>
            <li><a href="#faq" onClick={(e) => { e.preventDefault(); setOpenFaqIndex(openFaqIndex === 2 ? null : 2); }}>Order History</a></li>
            <li><a href="#faq" onClick={(e) => { e.preventDefault(); setOpenFaqIndex(openFaqIndex === 3 ? null : 3); }}>Terms & Services</a></li>
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
          <h3>NewsLetter</h3>
          <p className="news-desc">Suscríbete a nuestro boletín para recibir ofertas secretas y paquetes de temporada.</p>

          <form className="news-form" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder="Your E-mail Adress"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">
              <span>Send</span>
              <Send size={16} />
            </button>
          </form>
        </div>

        {/* Column 3: General Information */}
        <div className="info">
          <h3>General Information</h3>
          
          <div className="phone-box">
            <Phone size={20} className="info-icon" />
            <p>853-967-0100</p>
          </div>

          <ul className="location-list">
            <li>
              <MapPin size={16} className="inline-icon" />
              <a href="https://maps.google.com" target="_blank" rel="noreferrer">
                750 Santiago del Estero. Salta Capital
              </a>
            </li>
            <li><a href="#">Salta Capital, Argentina</a></li>
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
        <p>© 2026 GowTravel - Salta Capital, Argentina. Todos los derechos reservados.</p>
      </div>

      <style>{`
        .footer {
          width: 100%;
          position: relative;
          background: linear-gradient(135deg, #155bff 0%, #0043df 100%);
          color: #ffffff;
          padding: 7rem 9% 3rem;
          overflow: hidden;
        }

        .footer-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 23, 42, 0.45);
          z-index: 1;
        }

        .footer-content {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem;
          align-items: start;
        }

        h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 2rem;
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
          color: rgba(255, 255, 255, 0.85);
          font-size: 1.6rem;
          transition: all 0.3s ease;
        }

        .faq-list a:hover {
          color: #ffffff;
          padding-left: 0.5rem;
        }

        .faq-accordion-box {
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .faq-item {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          overflow: hidden;
        }

        .faq-question-btn {
          width: 100%;
          padding: 1rem 1.4rem;
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
          padding: 0 1.4rem 1rem;
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
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
          color: rgba(255, 255, 255, 0.85);
        }

        .news-form {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .news-form input {
          border-radius: 1.2rem;
          width: 90%;
          padding: 1.4rem 1.8rem;
          border: 2px solid rgba(255, 255, 255, 0.8);
          outline: none;
          text-align: center;
          font-size: 1.5rem;
          background: rgba(255, 255, 255, 0.95);
          color: #0f172a;
          transition: all 0.3s ease;
        }

        .news-form input:focus {
          background: #ffffff;
          border-color: #ffffff;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
        }

        .news-form button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          padding: 1.2rem 4rem;
          border-radius: 1.2rem;
          border: 2px solid #ffffff;
          background: transparent;
          color: #ffffff;
          font-weight: 700;
          font-size: 1.6rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .news-form button:hover {
          background: #ffffff;
          color: #155bff;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
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
        }

        .location-list {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .location-list li {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .location-list a {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.5rem;
          transition: color 0.3s ease;
        }

        .location-list a:hover {
          color: #ffffff;
          text-decoration: underline;
        }

        .icons {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          margin-top: 1rem;
        }

        .icons a {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 2px solid #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: all 0.4s ease;
        }

        .icons a:hover {
          background: #ffffff;
          color: #155bff;
          transform: scale(1.15) rotate(5deg);
        }

        .footer-bottom {
          position: relative;
          z-index: 2;
          margin-top: 6rem;
          padding-top: 2.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          text-align: center;
          font-size: 1.4rem;
          color: rgba(255, 255, 255, 0.8);
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
