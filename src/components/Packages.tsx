import React, { useState } from 'react';
import { Snowflake, Mountain, HeartHandshake, CheckCircle2, Star, Sparkles, Crown, Sun, Compass } from 'lucide-react';
import { PackageItem } from '../types';
import { PACKAGES_DATA } from '../data/mockData';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface PackagesProps {
  onSelectPackage: (pkg: PackageItem) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  const [activeCategory, setActiveCategory] = useState<string>('vip');

  useScrollReveal([activeCategory]);

  const filteredPackages = activeCategory === 'vip'
    ? PACKAGES_DATA.slice(0, 3) // Top 3 VIP Luxury Experiences
    : PACKAGES_DATA.filter((p) => p.category === activeCategory);

  const renderIcon = (iconName: string, category: string) => {
    if (category === 'beach') return <Sun size={48} className="pkg-icon" />;
    if (category === 'adventure') return <Compass size={48} className="pkg-icon" />;
    if (category === 'luxury') return <Crown size={48} className="pkg-icon" />;
    switch (iconName) {
      case 'fa-snowflake':
        return <Snowflake size={48} className="pkg-icon" />;
      case 'fa-person-skiing':
        return <HeartHandshake size={48} className="pkg-icon" />;
      case 'fa-mountain':
        return <Mountain size={48} className="pkg-icon" />;
      default:
        return <Crown size={48} className="pkg-icon" />;
    }
  };

  return (
    <section className="packages" id="packages">
      <div className="packages-header gsap-reveal">
        <div className="pkg-pill">
          <Sparkles size={16} />
          <span>Experiencias de Alta Gama</span>
        </div>
        <h2 className="heading">Nuestros <span>Paquetes</span></h2>
        <p className="subheading">
          Descubre paquetes exclusivos diseñados a la medida de tus expectativas, con servicios VIP y destinos inolvidables.
        </p>

        {/* Filter Bar */}
        <div className="category-filters">
          <button
            className={`filter-chip ${activeCategory === 'vip' ? 'active' : ''}`}
            onClick={() => setActiveCategory('vip')}
          >
            <Crown size={16} />
            <span>Paquetes VIP</span>
          </button>
          <button
            className={`filter-chip ${activeCategory === 'beach' ? 'active' : ''}`}
            onClick={() => setActiveCategory('beach')}
          >
            <Sun size={16} />
            <span>Playa & Caribe</span>
          </button>
          <button
            className={`filter-chip ${activeCategory === 'snow' ? 'active' : ''}`}
            onClick={() => setActiveCategory('snow')}
          >
            <Snowflake size={16} />
            <span>Montaña & Nieve</span>
          </button>
          <button
            className={`filter-chip ${activeCategory === 'adventure' ? 'active' : ''}`}
            onClick={() => setActiveCategory('adventure')}
          >
            <Compass size={16} />
            <span>Aventura & Safaris</span>
          </button>
        </div>
      </div>

      <div className="packages-container gsap-stagger-container">
        {filteredPackages.map((pkg) => (
          <div key={pkg.id} className="packages-box gsap-stagger-item">
            <div className="pkg-bg-overlay" style={{ backgroundImage: `url(${pkg.image})` }} />
            <div className="pkg-dark-mask" />

            <div className="pkg-content">
              <div className="pkg-top-badge">
                <Star size={14} fill="#fbbf24" color="#fbbf24" />
                <span>{pkg.rating} • {pkg.duration}</span>
              </div>

              {renderIcon(pkg.icon, pkg.category)}

              <h3>{pkg.title}</h3>
              <p>{pkg.description}</p>

              <div className="pkg-features-list">
                {pkg.features.map((feat, idx) => (
                  <div key={idx} className="feature-tag">
                    <CheckCircle2 size={15} className="check-icon" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pkg-price-tag">
                <span className="price-label">Precio Final</span>
                <h2>${pkg.price.toLocaleString('en-US', { minimumFractionDigits: 2 })} USD</h2>
              </div>

              <button className="btn buy-btn" onClick={() => onSelectPackage(pkg)}>
                RESERVAR PAQUETE
              </button>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .packages {
          background: #0b0f19;
          position: relative;
          color: #ffffff;
          padding: 10rem 9%;
        }

        .packages-header {
          text-align: center;
          margin-bottom: 5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .pkg-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 1.6rem;
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.3);
          border-radius: 3rem;
          color: #38bdf8;
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .subheading {
          font-size: 1.8rem;
          color: #94a3b8;
          max-width: 650px;
          margin: 0 auto 3rem;
          font-weight: 400;
          line-height: 1.6;
        }

        .category-filters {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        .filter-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.9rem 2.4rem;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 3rem;
          color: #e2e8f0;
          font-size: 1.4rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                      background 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                      color 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }

        .filter-chip:hover,
        .filter-chip.active {
          background: linear-gradient(135deg, #0284c7 0%, #2563eb 100%);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 8px 25px rgba(2, 132, 199, 0.4);
          transform: translateY(-3px);
        }

        /* Fixed Proportional Grid: Cards never stretch! */
        .packages-container {
          display: flex;
          justify-content: center;
          align-items: stretch;
          flex-wrap: wrap;
          gap: 3.5rem;
          max-width: 1300px;
          margin: 0 auto;
        }

        .packages-box {
          position: relative;
          border-radius: 2.6rem;
          min-height: 640px;
          width: 380px;
          max-width: 100%;
          overflow: hidden;
          background: #0f172a;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
          display: flex;
          flex-direction: column;
          will-change: transform;
          transform: translateZ(0);
        }

        .packages-box:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(2, 132, 199, 0.25);
          border-color: rgba(56, 189, 248, 0.5);
        }

        .pkg-bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 0.5s ease;
          z-index: 1;
          will-change: transform;
          transform: translateZ(0);
        }

        .packages-box:hover .pkg-bg-overlay {
          transform: scale(1.05);
        }

        .pkg-dark-mask {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(11, 15, 25, 0.5) 0%, rgba(11, 15, 25, 0.94) 80%);
          z-index: 2;
        }

        .pkg-content {
          position: relative;
          z-index: 3;
          padding: 4rem 3.2rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.6rem;
        }

        .pkg-top-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.5rem 1.5rem;
          background: rgba(11, 15, 25, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 2rem;
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
        }

        .pkg-icon {
          color: #38bdf8;
          margin-top: 0.5rem;
        }

        .pkg-content h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 2.8rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        .pkg-content p {
          font-size: 1.45rem;
          color: rgba(248, 250, 252, 0.85);
          line-height: 1.6;
        }

        .pkg-features-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
          margin: 1rem 0;
        }

        .feature-tag {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.35rem;
          color: #e2e8f0;
          text-align: left;
          background: rgba(255, 255, 255, 0.06);
          padding: 0.8rem 1.4rem;
          border-radius: 1.2rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .check-icon {
          color: #38bdf8;
          flex-shrink: 0;
        }

        .pkg-price-tag {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0.5rem 0;
        }

        .price-label {
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #94a3b8;
          font-weight: 700;
        }

        .pkg-price-tag h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 3.6rem;
          font-weight: 900;
          color: #38bdf8;
        }

        .buy-btn {
          width: 100%;
          margin-top: auto;
          padding: 1.4rem;
        }

        @media (max-width: 420px) {
          .packages-box {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
