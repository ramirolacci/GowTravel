import React, { useState } from 'react';
import { Search, Calendar, Users, MapPin, ArrowRight, ShieldCheck, Award, Headset } from 'lucide-react';

interface HeroProps {
  onSearch: (destination: string) => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, onExploreClick }) => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('2');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(destination);
  };

  return (
    <section className="home" id="home">
      <div className="home-overlay" />

      <div className="home-content">
        <div className="badge-pill">
          <span>✨ Experiencias de Viaje Premium 2026</span>
        </div>

        <h1>
          Welcome to <br /> Gow<span>Travel</span>
        </h1>
        
        <p>
          Descubre paisajes inolvidables, aventuras de esquí en la montaña y destinos exclusivos alrededor del mundo con la máxima comodidad y seguridad. Tu próximo viaje soñado comienza aquí.
        </p>

        <div className="hero-actions">
          <button className="btn" onClick={onExploreClick}>
            <span>Read More</span>
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Interactive Search Widget */}
        <form className="hero-search-box" onSubmit={handleSearchSubmit}>
          <div className="search-field">
            <MapPin className="search-icon" size={22} />
            <div className="search-input-group">
              <label>¿A dónde viajas?</label>
              <input
                type="text"
                placeholder="Ej: Bariloche, Iguazú, Salta..."
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
          </div>

          <div className="search-divider" />

          <div className="search-field">
            <Calendar className="search-icon" size={22} />
            <div className="search-input-group">
              <label>Fecha de Viaje</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>

          <div className="search-divider" />

          <div className="search-field">
            <Users className="search-icon" size={22} />
            <div className="search-input-group">
              <label>Pasajeros</label>
              <select value={guests} onChange={(e) => setGuests(e.target.value)}>
                <option value="1">1 Pasajero</option>
                <option value="2">2 Pasajeros</option>
                <option value="4">4 Pasajeros</option>
                <option value="group">Grupo (5+)</option>
              </select>
            </div>
          </div>

          <button type="submit" className="search-btn" aria-label="Buscar viajes">
            <Search size={22} />
            <span>Buscar</span>
          </button>
        </form>

        {/* Trust Stats Badges */}
        <div className="hero-trust-badges">
          <div className="trust-item">
            <Award size={20} className="trust-icon" />
            <span>+50 Destinos Exclusivos</span>
          </div>
          <div className="trust-item">
            <ShieldCheck size={20} className="trust-icon" />
            <span>Garantía de Satisfacción</span>
          </div>
          <div className="trust-item">
            <Headset size={20} className="trust-icon" />
            <span>Asistencia 24/7 en Salta</span>
          </div>
        </div>
      </div>

      <style>{`
        .home {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          background: url('/wallp/wallpappers5.jpg') no-repeat center center/cover;
          position: relative;
          min-height: 100vh;
          overflow: hidden;
        }

        .home-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 45%, rgba(15, 23, 42, 0.4) 100%);
          z-index: 1;
        }

        .home-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 2rem;
          max-width: 820px;
          width: 100%;
          margin-right: auto;
        }

        .badge-pill {
          display: inline-block;
          padding: 0.6rem 1.6rem;
          background: rgba(21, 91, 255, 0.1);
          border: 1px solid rgba(21, 91, 255, 0.3);
          border-radius: 3rem;
          color: #155bff;
          font-weight: 700;
          font-size: 1.4rem;
          backdrop-filter: blur(8px);
        }

        .home-content h1 {
          font-family: 'Outfit', sans-serif;
          font-size: 7.5rem;
          font-weight: 800;
          line-height: 1.1;
          color: #0f172a;
          letter-spacing: -0.02em;
        }

        .home-content h1 span {
          color: #155bff;
        }

        .home-content p {
          font-size: 1.8rem;
          font-weight: 500;
          color: #334155;
          max-width: 650px;
          line-height: 1.6;
        }

        .hero-actions {
          margin-top: 1rem;
        }

        /* Search Box Widget */
        .hero-search-box {
          display: flex;
          align-items: center;
          background: #ffffff;
          padding: 1.2rem 1.5rem;
          border-radius: 2rem;
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.12);
          width: 100%;
          max-width: 780px;
          gap: 1.5rem;
          margin-top: 1.5rem;
          border: 1px solid rgba(226, 232, 240, 0.8);
        }

        .search-field {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          flex: 1;
        }

        .search-icon {
          color: #155bff;
          flex-shrink: 0;
        }

        .search-input-group {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          width: 100%;
        }

        .search-input-group label {
          font-size: 1.1rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #64748b;
        }

        .search-input-group input,
        .search-input-group select {
          border: none;
          background: transparent;
          font-size: 1.4rem;
          font-weight: 600;
          color: #0f172a;
          outline: none;
          width: 100%;
        }

        .search-divider {
          width: 1px;
          height: 35px;
          background: #e2e8f0;
        }

        .search-btn {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1.2rem 2.2rem;
          background: linear-gradient(135deg, #155bff, #0052ff);
          color: white;
          border: none;
          border-radius: 1.4rem;
          font-size: 1.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(21, 91, 255, 0.3);
          flex-shrink: 0;
        }

        .search-btn:hover {
          transform: scale(1.03);
          box-shadow: 0 12px 25px rgba(21, 91, 255, 0.4);
        }

        .hero-trust-badges {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.4rem;
          font-weight: 600;
          color: #475569;
        }

        .trust-icon {
          color: #155bff;
        }

        @media (max-width: 1095px) {
          .home-overlay {
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.85) 100%);
          }
          .home-content h1 {
            font-size: 5.5rem;
          }
        }

        @media (max-width: 780px) {
          .hero-search-box {
            flex-direction: column;
            align-items: stretch;
            padding: 2rem;
            gap: 1.5rem;
          }
          .search-divider {
            display: none;
          }
          .search-btn {
            justify-content: center;
            width: 100%;
          }
          .home-content h1 {
            font-size: 4.2rem;
          }
        }
      `}</style>
    </section>
  );
};
