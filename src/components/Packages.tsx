import React, { useState } from 'react';
import { Snowflake, Mountain, HeartHandshake, CheckCircle2, Star } from 'lucide-react';
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
        return <Snowflake size={52} className="pkg-icon" />;
      case 'fa-person-skiing':
        return <HeartHandshake size={52} className="pkg-icon" />;
      case 'fa-mountain':
        return <Mountain size={52} className="pkg-icon" />;
      default:
        return <Mountain size={52} className="pkg-icon" />;
    }
  };

  return (
    <section className="packages" id="packages">
      <div className="packages-header">
        <h2 className="heading">Packages</h2>
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
                <span>{pkg.rating} ({pkg.duration})</span>
              </div>

              {renderIcon(pkg.icon)}

              <h3>{pkg.title}</h3>
              <p>{pkg.description}</p>

              <div className="pkg-features-list">
                {pkg.features.map((feat, idx) => (
                  <div key={idx} className="feature-tag">
                    <CheckCircle2 size={14} className="check-icon" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pkg-price-tag">
                <h2>${pkg.price.toFixed(2)}</h2>
              </div>

              <button className="btn buy-btn" onClick={() => onSelectPackage(pkg)}>
                BUY PACKAGE
              </button>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .packages {
          background: linear-gradient(180deg, #155bff 0%, #0043df 100%);
          position: relative;
          color: #ffffff;
        }

        .packages-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .subheading {
          font-size: 1.8rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 650px;
          margin: 0 auto 3rem;
          font-weight: 400;
        }

        .category-filters {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        .filter-chip {
          padding: 0.9rem 2.2rem;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 3rem;
          color: #ffffff;
          font-size: 1.4rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-chip:hover,
        .filter-chip.active {
          background: #ffffff;
          color: #155bff;
          border-color: #ffffff;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
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
          border-radius: 2.4rem;
          min-height: 620px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
          display: flex;
          flex-direction: column;
        }

        .packages-box:hover {
          transform: translateY(-12px) scale(1.01);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
        }

        .pkg-bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 0.6s ease;
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
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.85) 100%);
          z-index: 2;
        }

        .pkg-content {
          position: relative;
          z-index: 3;
          padding: 4rem 3rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.5rem;
        }

        .pkg-top-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.5rem 1.4rem;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 2rem;
          font-size: 1.3rem;
          font-weight: 600;
          color: #ffffff;
        }

        .pkg-icon {
          color: #ffffff;
          margin-top: 1rem;
          filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.3));
        }

        .pkg-content h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 2.8rem;
          font-weight: 700;
          color: #ffffff;
        }

        .pkg-content p {
          font-size: 1.5rem;
          color: rgba(255, 255, 255, 0.88);
          line-height: 1.6;
        }

        .pkg-features-list {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          width: 100%;
          margin: 1rem 0;
        }

        .feature-tag {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.95);
          text-align: left;
        }

        .check-icon {
          color: #38bdf8;
          flex-shrink: 0;
        }

        .pkg-price-tag h2 {
          display: inline-block;
          padding: 1rem 3rem;
          background: #ffffff;
          color: #155bff;
          border-radius: 1.6rem;
          font-size: 4rem;
          font-weight: 800;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
          font-family: 'Outfit', sans-serif;
        }

        .packages-box:hover .pkg-price-tag h2 {
          background: #155bff;
          color: #ffffff;
          box-shadow: 0 12px 30px rgba(21, 91, 255, 0.4);
        }

        .buy-btn {
          width: 100%;
          margin-top: auto;
        }
      `}</style>
    </section>
  );
};
