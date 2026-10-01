import React, { useState } from 'react';
import { Search, Calendar, Users, MapPin, ArrowRight, ShieldCheck, Award, Headset, Compass } from 'lucide-react';

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
          <Compass className="badge-icon" size={16} />
          <span>Experiencias de Viaje Premium 2026</span>
        </div>

        <h1>
          Descubre el Mundo con <br />
          Gow<span className="hero-highlight">Travel</span>
        </h1>
        
        <p>
          Explora destinos exclusivos, montañas impresionantes y paquetes de lujo diseñados para hacer de cada viaje una experiencia inolvidable.
        </p>

        <div className="hero-actions">
          <button className="btn" onClick={onExploreClick}>
            <span>Explorar Destinos</span>
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Interactive Search Box Aligned Right */}
        <form className="hero-search-box" onSubmit={handleSearchSubmit}>
          <div className="search-field">
            <MapPin className="search-icon" size={22} />
            <div className="search-input-group">
              <label>¿A dónde viajas?</label>
              <input
                type="text"
                placeholder="Ej: Bariloche, Salta, Cancún..."
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
            <Search size={20} />
            <span>Buscar</span>
          </button>
        </form>

        {/* Trust Badges */}
        <div className="hero-trust-badges">
          <div className="trust-item">
            <Award size={18} className="trust-icon" />
            <span>+50 Destinos VIP</span>
          </div>
          <div className="trust-item">
            <ShieldCheck size={18} className="trust-icon" />
            <span>Garantía GowTravel</span>
          </div>
          <div className="trust-item">
            <Headset size={18} className="trust-icon" />
            <span>Atención 24/7</span>
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
          padding: 14rem 9% 8rem;
          overflow: hidden;
        }

        .home-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(270deg, rgba(11, 15, 25, 0.94) 0%, rgba(11, 15, 25, 0.78) 50%, rgba(11, 15, 25, 0.25) 100%);
          z-index: 1;
        }

        .home-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          text-align: right;
          gap: 2.2rem;
          max-width: 860px;
          width: 100%;
          margin-left: auto;
        }

        .badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.7rem 2rem;
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.3);
          border-radius: 3rem;
          color: #38bdf8;
          font-weight: 700;
          font-size: 1.3rem;
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 20px rgba(56, 189, 248, 0.15);
        }

        .badge-icon {
          color: #38bdf8;
        }

        .home-content h1 {
          font-family: 'Outfit', sans-serif;
          font-size: 7.2rem;
          font-weight: 900;
          line-height: 1.08;
          color: #ffffff;
          letter-spacing: -0.03em;
        }

        .hero-highlight {
          background: linear-gradient(135deg, #0284c7 0%, #38bdf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .home-content p {
          font-size: 1.9rem;
          font-weight: 400;
          color: rgba(248, 250, 252, 0.9);
          max-width: 680px;
          line-height: 1.6;
        }

        .hero-actions {
          margin-top: 0.5rem;
        }

        /* Search Box Widget */
        .hero-search-box {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(20px);
          padding: 1.2rem 1.6rem;
          border-radius: 2.2rem;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
          width: 100%;
          max-width: 840px;
          gap: 1.5rem;
          margin-top: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.6);
          text-align: left;
        }

        .search-field {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          flex: 1;
        }

        .search-icon {
          color: #0284c7;
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
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #64748b;
        }

        .search-input-group input,
        .search-input-group select {
          border: none;
          background: transparent;
          font-size: 1.5rem;
          font-weight: 700;
          color: #0f172a;
          outline: none;
          width: 100%;
        }

        .search-divider {
          width: 1px;
          height: 38px;
          background: #cbd5e1;
        }

        .search-btn {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1.3rem 2.5rem;
          background: linear-gradient(135deg, #0284c7 0%, #2563eb 100%);
          color: white;
          border: none;
          border-radius: 1.6rem;
          font-size: 1.6rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 25px rgba(2, 132, 199, 0.4);
          flex-shrink: 0;
        }

        .search-btn:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 15px 35px rgba(2, 132, 199, 0.5);
        }

        .hero-trust-badges {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 3rem;
          margin-top: 1.5rem;
          flex-wrap: wrap;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.4rem;
          font-weight: 600;
          color: rgba(248, 250, 252, 0.9);
        }

        .trust-icon {
          color: #38bdf8;
        }

        @media (max-width: 1095px) {
          .home-content h1 {
            font-size: 5.6rem;
          }
        }

        @media (max-width: 780px) {
          .home-content {
            align-items: center;
            text-align: center;
          }
          .hero-trust-badges {
            justify-content: center;
          }
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
            font-size: 4rem;
          }
        }
      `}</style>
    </section>
  );
};
