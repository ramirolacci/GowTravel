import React, { useState, useEffect } from 'react';
import { ArrowLeft, Search, HelpCircle, PhoneCall, ChevronDown } from 'lucide-react';
import { FAQ_DATA } from '../data/mockData';

interface FaqPageProps {
  onBackToHome: () => void;
  onNavigateContact: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onBackToHome, onNavigateContact }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredFaqs = FAQ_DATA.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="faq-page-container">
      <div className="faq-page-hero">
        <button className="back-home-btn" onClick={onBackToHome}>
          <ArrowLeft size={20} />
          <span>Volver al Inicio</span>
        </button>

        <div className="faq-page-header">
          <div className="faq-icon-wrapper">
            <HelpCircle size={40} />
          </div>
          <h1>Preguntas Frecuentes (FAQ)</h1>
          <p>Resuelve todas tus dudas sobre reservaciones, paquetes VIP, políticas de cancelación y servicios de viaje.</p>
        </div>

        {/* Search Input */}
        <div className="faq-page-search">
          <Search size={22} className="search-icon" />
          <input
            type="text"
            placeholder="Buscar por palabra clave o consulta..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="faq-page-content">
        <div className="faq-page-list">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item, idx) => (
              <div key={idx} className="faq-page-item">
                <button
                  className="faq-page-question"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </button>
                {openIndex === idx && (
                  <div className="faq-page-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No encontramos preguntas que coincidan con tu búsqueda.</p>
            </div>
          )}
        </div>

        {/* Support Banner */}
        <div className="faq-support-card">
          <h3>¿Aún tienes preguntas sin responder?</h3>
          <p>Nuestro equipo de asesores de viajes en Buenos Aires está disponible para atenderte en persona o de forma telefónica.</p>
          <button className="btn support-contact-btn" onClick={onNavigateContact}>
            <PhoneCall size={18} />
            <span>Contactar a un Asesor GowTravel</span>
          </button>
        </div>
      </div>

      <style>{`
        .faq-page-container {
          min-height: 100vh;
          background: #0b0f19;
          color: #ffffff;
          padding-bottom: 8rem;
        }

        .faq-page-hero {
          background: linear-gradient(180deg, #0f172a 0%, #0b0f19 100%);
          padding: 12rem 9% 6rem;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .back-home-btn {
          position: absolute;
          top: 4rem;
          left: 9%;
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.9rem 2rem;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 3rem;
          color: #ffffff;
          font-size: 1.4rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .back-home-btn:hover {
          background: #0284c7;
          border-color: #0284c7;
        }

        .faq-page-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          max-width: 750px;
          margin-bottom: 3.5rem;
        }

        .faq-icon-wrapper {
          width: 72px;
          height: 72px;
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.3);
          border-radius: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #38bdf8;
        }

        .faq-page-header h1 {
          font-family: 'Outfit', sans-serif;
          font-size: 4.5rem;
          font-weight: 800;
          color: #ffffff;
        }

        .faq-page-header p {
          font-size: 1.7rem;
          color: #94a3b8;
          line-height: 1.6;
        }

        .faq-page-search {
          position: relative;
          width: 100%;
          max-width: 650px;
          display: flex;
          align-items: center;
        }

        .search-icon {
          position: absolute;
          left: 2rem;
          color: #38bdf8;
        }

        .faq-page-search input {
          width: 100%;
          padding: 1.6rem 2rem 1.6rem 5.5rem;
          border-radius: 3rem;
          border: 1.5px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.96);
          color: #0f172a;
          font-size: 1.6rem;
          font-weight: 500;
          outline: none;
          transition: all 0.3s ease;
        }

        .faq-page-search input:focus {
          background: #ffffff;
          border-color: #38bdf8;
          box-shadow: 0 0 25px rgba(56, 189, 248, 0.35);
        }

        .faq-page-content {
          max-width: 850px;
          margin: 6rem auto 0;
          padding: 0 2rem;
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .faq-page-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .faq-page-item {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1.8rem;
          overflow: hidden;
          transition: border-color 0.3s ease;
        }

        .faq-page-item:hover {
          border-color: rgba(56, 189, 248, 0.3);
        }

        .faq-page-question {
          width: 100%;
          padding: 2rem 2.5rem;
          background: transparent;
          color: #ffffff;
          font-size: 1.8rem;
          font-weight: 700;
          font-family: 'Outfit', sans-serif;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          text-align: left;
        }

        .faq-page-answer {
          padding: 0 2.5rem 2rem;
          font-size: 1.6rem;
          color: rgba(248, 250, 252, 0.85);
          line-height: 1.7;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 1.5rem;
        }

        .no-results {
          text-align: center;
          padding: 4rem;
          color: #94a3b8;
          font-size: 1.6rem;
        }

        .faq-support-card {
          background: linear-gradient(135deg, rgba(2, 132, 199, 0.15) 0%, rgba(37, 99, 235, 0.15) 100%);
          border: 1px solid rgba(56, 189, 248, 0.3);
          border-radius: 2.4rem;
          padding: 4rem 3rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .faq-support-card h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 2.6rem;
          font-weight: 800;
        }

        .faq-support-card p {
          font-size: 1.6rem;
          color: rgba(248, 250, 252, 0.85);
          max-width: 600px;
        }

        .support-contact-btn {
          margin-top: 1rem;
          padding: 1.4rem 3.5rem;
        }

        @media (max-width: 768px) {
          .back-home-btn {
            position: static;
            margin-bottom: 2rem;
          }
          .faq-page-header h1 {
            font-size: 3.2rem;
          }
        }
      `}</style>
    </div>
  );
};
