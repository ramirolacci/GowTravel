import React, { useState } from 'react';
import { Compass, MapPin, Sparkles, Filter } from 'lucide-react';
import { DestinationItem } from '../types';
import { DESTINATIONS_DATA } from '../data/mockData';
import { TiltCard } from './TiltCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface DestinationsProps {
  onSelectDestination: (destination: DestinationItem) => void;
  searchFilter?: string;
}

export const Destinations: React.FC<DestinationsProps> = ({ onSelectDestination, searchFilter = '' }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useScrollReveal([selectedCategory, searchFilter]);

  const filteredDestinations = DESTINATIONS_DATA.filter((dest) => {
    const matchesCategory = selectedCategory === 'all' || dest.category === selectedCategory;
    const matchesSearch = searchFilter === '' ||
      dest.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      dest.subtitle.toLowerCase().includes(searchFilter.toLowerCase()) ||
      dest.location.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="destinations" id="destinations">
      <div className="destinations-header gsap-reveal">
        <div className="dest-pill">
          <Compass size={16} />
          <span>Destinos Más Buscados</span>
        </div>
        <h2 className="heading heading-dark">
          Descubre Tus Próximos <span>Destinos</span>
        </h2>
        <p className="dest-subheading">
          Explora los rincones más fascinantes con guías expertos y experiencias personalizadas de alta gama.
        </p>

        {/* Category Filters */}
        <div className="dest-filters">
          <button
            className={`dest-chip ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            <Filter size={16} />
            <span>Todos</span>
          </button>
          <button
            className={`dest-chip ${selectedCategory === 'beach' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('beach')}
          >
            Playa & Atolones
          </button>
          <button
            className={`dest-chip ${selectedCategory === 'mountain' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('mountain')}
          >
            Montañas & Alpes
          </button>
          <button
            className={`dest-chip ${selectedCategory === 'luxury' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('luxury')}
          >
            Riviera & Europa VIP
          </button>
          <button
            className={`dest-chip ${selectedCategory === 'nature' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('nature')}
          >
            Safari & Naturaleza
          </button>
        </div>
      </div>

      <div className="destinations-container gsap-stagger-container">
        {filteredDestinations.map((dest) => (
          <TiltCard key={dest.id} className="destinations-box gsap-stagger-item" maxDegree={8} scale={1.02}>
            <div className="dest-img-wrapper">
              <img src={dest.image} alt={dest.title} className="dest-img" loading="lazy" />
              <div className="dest-category-badge">
                <Sparkles size={14} />
                <span>{dest.subtitle}</span>
              </div>
            </div>

            <div className="destinations-info">
              <div className="dest-header-info">
                <span className="dest-location-pill">
                  <MapPin size={14} />
                  {dest.location}
                </span>
                <h4>{dest.title}</h4>
              </div>

              <p>{dest.description}</p>

              <div className="dest-footer-action">
                <div className="dest-price">
                  <small>Desde</small>
                  <span>${dest.priceFrom} USD</span>
                </div>
                <button
                  className="btn btn-explore"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectDestination(dest);
                  }}
                >
                  <Compass size={16} />
                  <span>Explorar</span>
                </button>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>

      <style>{`
        .destinations {
          background: #f8fafc;
          padding: 10rem 9%;
        }

        .destinations-header {
          text-align: center;
          margin-bottom: 5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .dest-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 1.6rem;
          background: rgba(2, 132, 199, 0.08);
          border: 1px solid rgba(2, 132, 199, 0.2);
          border-radius: 3rem;
          color: #0284c7;
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .dest-subheading {
          font-size: 1.8rem;
          color: #64748b;
          max-width: 650px;
          margin: 0 auto 3rem;
          line-height: 1.6;
        }

        .dest-filters {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        .dest-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.9rem 2.4rem;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 3rem;
          color: #475569;
          font-size: 1.4rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        }

        .dest-chip:hover,
        .dest-chip.active {
          background: linear-gradient(135deg, #0284c7 0%, #2563eb 100%);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 8px 25px rgba(2, 132, 199, 0.3);
        }

        .destinations-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3.5rem;
          max-width: 1300px;
          margin: 0 auto;
        }

        .destinations-box {
          border-radius: 2.4rem;
          overflow: hidden;
          background: #ffffff;
          min-height: 500px;
          position: relative;
          border: 1px solid #e2e8f0;
          box-shadow: 0 15px 35px rgba(15, 23, 42, 0.06);
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .destinations-box:hover {
          border-color: rgba(2, 132, 199, 0.3);
          box-shadow: 0 25px 50px rgba(2, 132, 199, 0.15);
        }

        .dest-img-wrapper {
          position: relative;
          width: 100%;
          height: 250px;
          overflow: hidden;
        }

        .dest-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease;
        }

        .destinations-box:hover .dest-img {
          transform: scale(1.08);
        }

        .dest-category-badge {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 1.4rem;
          background: rgba(11, 15, 25, 0.75);
          backdrop-filter: blur(12px);
          border-radius: 2rem;
          color: #ffffff;
          font-size: 1.2rem;
          font-weight: 700;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .destinations-info {
          padding: 2.8rem 2.4rem;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 1.2rem;
        }

        .dest-location-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.2rem;
          font-weight: 800;
          color: #0284c7;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .destinations-info h4 {
          font-family: 'Outfit', sans-serif;
          font-size: 2.6rem;
          font-weight: 800;
          color: #0f172a;
          margin-top: 0.2rem;
        }

        .destinations-info p {
          font-size: 1.4rem;
          color: #64748b;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .dest-footer-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 1.8rem;
          border-top: 1px solid #f1f5f9;
        }

        .dest-price {
          display: flex;
          flex-direction: column;
        }

        .dest-price small {
          font-size: 1.1rem;
          color: #94a3b8;
          font-weight: 700;
          text-transform: uppercase;
        }

        .dest-price span {
          font-size: 2rem;
          font-weight: 800;
          color: #0284c7;
          font-family: 'Outfit', sans-serif;
        }

        .btn-explore {
          padding: 0.9rem 2.2rem;
          font-size: 1.4rem;
          border-radius: 2rem;
        }

        @media (max-width: 1095px) {
          .destinations-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 780px) {
          .destinations-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
