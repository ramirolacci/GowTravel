import React from 'react';
import { X, MapPin, Calendar, Compass, CheckCircle2, Star } from 'lucide-react';
import { DestinationItem } from '../types';

interface DestinationModalProps {
  destination: DestinationItem | null;
  onClose: () => void;
  onBookNow: (destination: DestinationItem) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({ destination, onClose, onBookNow }) => {
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
        .dest-modal-card {
          padding: 0;
          overflow: hidden;
          max-width: 720px;
        }

        .dest-modal-banner {
          position: relative;
          width: 100%;
          height: 280px;
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
          bottom: 2.5rem;
          left: 3rem;
          right: 3rem;
          color: #ffffff;
        }

        .dest-location-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 1.2rem;
          background: rgba(21, 91, 255, 0.8);
          backdrop-filter: blur(8px);
          border-radius: 2rem;
          font-size: 1.2rem;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 0.8rem;
        }

        .dest-modal-header-text h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 3.2rem;
          font-weight: 800;
          margin-bottom: 0.2rem;
        }

        .dest-modal-header-text p {
          font-size: 1.6rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .dest-modal-body {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .dest-quick-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          background: #f8fafc;
          padding: 1.5rem;
          border-radius: 1.6rem;
          border: 1px solid #e2e8f0;
        }

        .stat-box {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-icon {
          color: #155bff;
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
          font-size: 2rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 1rem;
        }

        .dest-description-section p {
          font-size: 1.5rem;
          color: #475569;
          line-height: 1.7;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.2rem;
        }

        .highlight-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.2rem 1.5rem;
          background: #f1f5f9;
          border-radius: 1.2rem;
          font-size: 1.4rem;
          font-weight: 600;
          color: #334155;
        }

        .dest-modal-actions {
          margin-top: 1rem;
        }

        .dest-book-btn {
          width: 100%;
          padding: 1.5rem;
        }

        @media (max-width: 600px) {
          .dest-quick-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
