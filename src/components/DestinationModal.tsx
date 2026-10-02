import React, { useEffect } from 'react';
import { X, MapPin, Calendar, Compass, CheckCircle2, Star } from 'lucide-react';
import { DestinationItem } from '../types';

interface DestinationModalProps {
  destination: DestinationItem | null;
  onClose: () => void;
  onBookNow: (destination: DestinationItem) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({ destination, onClose, onBookNow }) => {
  useEffect(() => {
    if (destination) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [destination]);

  if (!destination) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card dest-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        <div className="dest-modal-banner">
          <img src={destination.image} alt={destination.title} />
          <div className="dest-modal-banner-overlay" />
          <div className="dest-modal-header-text">
            <span className="dest-location-badge">
              <MapPin size={14} />
              {destination.location}
            </span>
            <h2>{destination.title}</h2>
            <p>{destination.subtitle}</p>
          </div>
        </div>

        <div className="dest-modal-body">
          <div className="dest-quick-stats">
            <div className="stat-box">
              <Calendar size={18} className="stat-icon" />
              <div>
                <small>Mejor Época</small>
                <strong>{destination.bestSeason}</strong>
              </div>
            </div>

            <div className="stat-box">
              <Star size={18} className="stat-icon yellow" />
              <div>
                <small>Valoración</small>
                <strong>4.9 / 5.0 Excelente</strong>
              </div>
            </div>

            <div className="stat-box">
              <Compass size={18} className="stat-icon" />
              <div>
                <small>Tarifa Desde</small>
                <strong>${destination.priceFrom} USD</strong>
              </div>
            </div>
          </div>

          <div className="dest-description-section">
            <h3>Descripción del Destino</h3>
            <p>{destination.description}</p>
          </div>

          <div className="dest-highlights-section">
            <h3>Puntos Destacados e Itinerario</h3>
            <div className="highlights-grid">
              {destination.highlights.map((item, idx) => (
                <div key={idx} className="highlight-card">
                  <CheckCircle2 size={18} className="check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="dest-modal-actions">
            <button
              className="btn dest-book-btn"
              onClick={() => {
                onClose();
                onBookNow(destination);
              }}
            >
              <Compass size={20} />
              <span>Reservar Experiencia (${destination.priceFrom} USD)</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          background: rgba(11, 15, 25, 0.82) !important;
          backdrop-filter: blur(12px) !important;
          -webkit-backdrop-filter: blur(12px) !important;
          z-index: 999999 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 2rem !important;
        }

        .modal-card {
          position: relative !important;
          background: #ffffff !important;
          color: #0f172a !important;
          border-radius: 2.4rem !important;
          width: 100% !important;
          max-width: 860px !important;
          max-height: 92vh !important;
          overflow-y: auto !important;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.45) !important;
          border: 1px solid rgba(255, 255, 255, 0.3) !important;
          margin: auto !important;
        }

        .dest-modal-card {
          padding: 0 !important;
          overflow: hidden !important;
        }

        .modal-close-btn {
          position: absolute;
          top: 2rem;
          right: 2rem;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #0f172a;
          transition: all 0.3s ease;
          z-index: 10;
          border: none;
        }

        .modal-close-btn:hover {
          background: #0284c7;
          color: #ffffff;
        }

        .dest-modal-banner {
          position: relative;
          width: 100%;
          height: 260px;
        }

        .dest-modal-banner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .dest-modal-banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.2) 0%, rgba(15, 23, 42, 0.85) 100%);
        }

        .dest-modal-header-text {
          position: absolute;
          bottom: 2rem;
          left: 3rem;
          right: 3rem;
          color: #ffffff;
        }

        .dest-location-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 1.2rem;
          background: rgba(2, 132, 199, 0.85);
          backdrop-filter: blur(8px);
          border-radius: 2rem;
          font-size: 1.2rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 0.6rem;
        }

        .dest-modal-header-text h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 3.2rem;
          font-weight: 800;
          margin-bottom: 0.2rem;
        }

        .dest-modal-header-text p {
          font-size: 1.5rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .dest-modal-body {
          padding: 2.5rem 3rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .dest-quick-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          background: #f8fafc;
          padding: 1.4rem 2rem;
          border-radius: 1.6rem;
          border: 1px solid #e2e8f0;
        }

        .stat-box {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-icon {
          color: #0284c7;
        }

        .stat-icon.yellow {
          color: #f59e0b;
        }

        .stat-box small {
          display: block;
          font-size: 1.1rem;
          color: #64748b;
          text-transform: uppercase;
          font-weight: 600;
        }

        .stat-box strong {
          font-size: 1.4rem;
          color: #0f172a;
        }

        .dest-description-section h3,
        .dest-highlights-section h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.9rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.8rem;
        }

        .dest-description-section p {
          font-size: 1.45rem;
          color: #475569;
          line-height: 1.6;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
        }

        .highlight-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.4rem;
          background: #f1f5f9;
          border-radius: 1.2rem;
          font-size: 1.35rem;
          font-weight: 600;
          color: #334155;
        }

        .dest-modal-actions {
          margin-top: 0.5rem;
        }

        .dest-book-btn {
          width: 100%;
          padding: 1.4rem;
        }

        @media (max-width: 640px) {
          .dest-quick-stats {
            grid-template-columns: 1fr;
          }
          .dest-modal-body {
            padding: 2rem;
          }
        }
      `}</style>
    </div>
  );
};
