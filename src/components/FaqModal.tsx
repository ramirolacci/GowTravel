import React, { useState } from 'react';
import { X, ChevronDown, HelpCircle, Search, PhoneCall } from 'lucide-react';
import { FAQ_DATA } from '../data/mockData';

interface FaqModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateContact: () => void;
}

export const FaqModal: React.FC<FaqModalProps> = ({ isOpen, onClose, onNavigateContact }) => {
  if (!isOpen) return null;

  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = FAQ_DATA.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card faq-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar modal">
          <X size={24} />
        </button>

        <div className="faq-modal-header">
          <div className="faq-modal-icon">
            <HelpCircle size={32} />
          </div>
          <h2>Preguntas Frecuentes (FAQ)</h2>
          <p>Encuentra respuestas inmediatas sobre tus reservas, servicios VIP y políticas de viaje.</p>
        </div>

        {/* Search inside FAQ */}
        <div className="faq-search-box">
          <Search size={18} className="faq-search-icon" />
          <input
            type="text"
            placeholder="Buscar duda o palabra clave..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Accordion List */}
        <div className="faq-modal-list">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item, idx) => (
              <div key={idx} className="faq-modal-item">
                <button
                  className="faq-modal-question"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </button>
                {openIndex === idx && (
                  <div className="faq-modal-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="no-faq-results">No encontramos resultados para tu búsqueda.</p>
          )}
        </div>

        <div className="faq-modal-footer">
          <p>¿Tienes otra consulta específica?</p>
          <button
            className="btn faq-contact-btn"
            onClick={() => {
              onClose();
              onNavigateContact();
            }}
          >
            <PhoneCall size={18} />
            <span>Contactar Asesor VIP</span>
          </button>
        </div>
      </div>

      <style>{`
        .faq-modal-card {
          max-width: 680px;
          padding: 3.5rem 3rem;
          border-radius: 2.4rem;
          background: #ffffff;
        }

        .faq-modal-header {
          text-align: center;
          margin-bottom: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .faq-modal-icon {
          width: 58px;
          height: 58px;
          background: rgba(2, 132, 199, 0.1);
          border-radius: 1.6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0284c7;
        }

        .faq-modal-header h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 2.8rem;
          font-weight: 800;
          color: #0f172a;
        }

        .faq-modal-header p {
          font-size: 1.45rem;
          color: #64748b;
        }

        .faq-search-box {
          position: relative;
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
        }

        .faq-search-icon {
          position: absolute;
          left: 1.6rem;
          color: #0284c7;
        }

        .faq-search-box input {
          width: 100%;
          padding: 1.3rem 1.6rem 1.3rem 4.8rem;
          border-radius: 1.4rem;
          border: 1.5px solid #cbd5e1;
          font-size: 1.45rem;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .faq-search-box input:focus {
          border-color: #0284c7;
        }

        .faq-modal-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-height: 380px;
          overflow-y: auto;
          padding-right: 0.5rem;
        }

        .faq-modal-item {
          border: 1.5px solid #e2e8f0;
          border-radius: 1.4rem;
          overflow: hidden;
          background: #f8fafc;
        }

        .faq-modal-question {
          width: 100%;
          padding: 1.4rem 1.8rem;
          background: transparent;
          color: #0f172a;
          font-size: 1.5rem;
          font-weight: 700;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          text-align: left;
        }

        .faq-modal-answer {
          padding: 0 1.8rem 1.4rem;
          font-size: 1.4rem;
          color: #475569;
          line-height: 1.6;
          border-top: 1px solid #e2e8f0;
          padding-top: 1.2rem;
          background: #ffffff;
        }

        .no-faq-results {
          text-align: center;
          color: #94a3b8;
          font-size: 1.4rem;
          padding: 2rem 0;
        }

        .faq-modal-footer {
          margin-top: 2.5rem;
          padding-top: 1.8rem;
          border-top: 1px solid #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .faq-modal-footer p {
          font-size: 1.4rem;
          font-weight: 600;
          color: #475569;
        }

        .faq-contact-btn {
          padding: 1rem 2.2rem;
          font-size: 1.4rem;
        }
      `}</style>
    </div>
  );
};
