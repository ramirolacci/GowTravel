import React, { useState } from 'react';
import { Snowflake, Mountain, HeartHandshake, CheckCircle2, Star, Sparkles } from 'lucide-react';
import { PackageItem } from '../types';
import { PACKAGES_DATA } from '../data/mockData';

interface PackagesProps {
  onSelectPackage: (pkg: PackageItem) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredPackages = activeCategory === 'all'
    ? PACKAGES_DATA
    : PACKAGES_DATA.filter((p) => p.category === activeCategory);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'fa-snowflake':
        return <Snowflake size={48} className="pkg-icon" />;
      case 'fa-person-skiing':
        return <HeartHandshake size={48} className="pkg-icon" />;
      case 'fa-mountain':
        return <Mountain size={48} className="pkg-icon" />;
      default:
        return <Mountain size={48} className="pkg-icon" />;
    }
  };

  return (
    <section className="packages" id="packages">
      <div className="packages-header">
        <div className="pkg-pill">
          <Sparkles size={16} />
          <span>Experiencias Exclusivas</span>
        </div>
        <h2 className="heading">Nuestros <span>Paquetes</span></h2>
        <p className="subheading">
          Paquetes exclusivos diseñados a la medida de tus expectativas, con servicios VIP de alta categoría.
        </p>

        {/* Filter Bar */}
        <div className="category-filters">
          <button
            className={`filter-chip ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            Todos los Paquetes
          </button>
          <button
            className={`filter-chip ${activeCategory === 'snow' ? 'active' : ''}`}
            onClick={() => setActiveCategory('snow')}
          >
            Nieve & Esquí
          </button>
          <button
            className={`filter-chip ${activeCategory === 'ski' ? 'active' : ''}`}
            onClick={() => setActiveCategory('ski')}
          >
            Alpino VIP
          </button>
          <button
            className={`filter-chip ${activeCategory === 'mountain' ? 'active' : ''}`}
            onClick={() => setActiveCategory('mountain')}
          >
            Alta Montaña
          </button>
        </div>
      </div>

      <div className="packages-container">
        {filteredPackages.map((pkg) => (
          <div key={pkg.id} className="packages-box">
            <div className="pkg-bg-overlay" style={{ backgroundImage: `url(${pkg.image})` }} />
            <div className="pkg-dark-mask" />

            <div className="pkg-content">
              <div className="pkg-top-badge">
                <Star size={14} fill="#fbbf24" color="#fbbf24" />
                <span>{pkg.rating} • {pkg.duration}</span>
              </div>

              {renderIcon(pkg.icon)}

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
                <h2>${pkg.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</h2>
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
          background: linear-gradient(180deg, #0b0f19 0%, #0f172a 100%);
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
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.25);
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
          padding: 0.9rem 2.4rem;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 3rem;
          color: #e2e8f0;
          font-size: 1.4rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .filter-chip:hover,
        .filter-chip.active {
          background: linear-gradient(135deg, #0284c7 0%, #2563eb 100%);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 8px 25px rgba(2, 132, 199, 0.4);
        }

        .packages-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 3.5rem;
          max-width: 1300px;
          margin: 0 auto;
        }

        .packages-box {
          position: relative;
          border-radius: 2.6rem;
          min-height: 640px;
          overflow: hidden;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.4);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease;
          display: flex;
          flex-direction: column;
        }

        .packages-box:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 65px rgba(2, 132, 199, 0.25);
          border-color: rgba(56, 189, 248, 0.4);
        }

        .pkg-bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 0.7s ease;
          z-index: 1;
        }

        .packages-box:hover .pkg-bg-overlay {
          transform: scale(1.08);
        }

        .pkg-dark-mask {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(11, 15, 25, 0.45) 0%, rgba(11, 15, 25, 0.92) 80%);
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
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 2rem;
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
        }

        .pkg-icon {
          color: #38bdf8;
          margin-top: 0.5rem;
          filter: drop-shadow(0 4px 15px rgba(56, 189, 248, 0.4));
        }

        .pkg-content h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 3rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.01em;
        }

        .pkg-content p {
          font-size: 1.5rem;
          color: rgba(248, 250, 252, 0.82);
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
          font-size: 1.4rem;
          color: #e2e8f0;
          text-align: left;
          background: rgba(255, 255, 255, 0.05);
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
          font-size: 4.2rem;
          font-weight: 900;
          background: linear-gradient(135deg, #ffffff 0%, #38bdf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .buy-btn {
          width: 100%;
          margin-top: auto;
          padding: 1.4rem;
        }
      `}</style>
    </section>
  );
};
