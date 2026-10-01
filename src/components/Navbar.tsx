import React, { useState, useEffect } from 'react';
import { Plane, Menu, X, Compass } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenQuickBook: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onOpenQuickBook }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 40) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'packages', label: 'Paquetes' },
    { id: 'destinations', label: 'Destinos' },
    { id: 'contact', label: 'Contacto' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header-nav ${isScrolled ? 'header-scrolled' : ''}`}>
      <a href="#home" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }} className="logo-brand">
        <div className="logo-icon-wrapper">
          <Plane className="logo-plane" size={24} />
        </div>
        <span>Gow<span className="logo-accent">Travel</span></span>
      </a>

      <button
        className="menu-toggle-btn"
        aria-label="Toggle navigation menu"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <nav className={`navbar-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(item.id);
            }}
          >
            {item.label}
          </a>
        ))}
        <button className="nav-cta-btn" onClick={onOpenQuickBook}>
          <Compass size={18} />
          <span>Explorar Viajes</span>
        </button>
      </nav>

      <style>{`
        .header-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 2.2rem 9%;
          background: rgba(11, 15, 25, 0.75);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .header-scrolled {
          padding: 1.4rem 9%;
          background: rgba(11, 15, 25, 0.94);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
          border-bottom-color: rgba(255, 255, 255, 0.15);
        }

        .logo-brand {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          font-size: 2.8rem;
          color: #ffffff;
          font-weight: 800;
          font-family: 'Outfit', sans-serif;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .logo-brand:hover {
          transform: scale(1.03);
        }

        .logo-icon-wrapper {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #0284c7 0%, #2563eb 100%);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 4px 20px rgba(2, 132, 199, 0.4);
        }

        .logo-accent {
          color: #38bdf8;
        }

        .menu-toggle-btn {
          display: none;
          background: transparent;
          color: #38bdf8;
          cursor: pointer;
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 3.5rem;
        }

        .nav-link {
          font-size: 1.6rem;
          color: rgba(248, 250, 252, 0.85);
          font-weight: 600;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 3px;
          background: #38bdf8;
          border-radius: 3px;
          transition: width 0.3s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #ffffff;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .nav-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1rem 2.4rem;
          background: linear-gradient(135deg, #0284c7 0%, #2563eb 100%);
          color: white;
          font-size: 1.5rem;
          font-weight: 700;
          border-radius: 3rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 6px 20px rgba(2, 132, 199, 0.3);
        }

        .nav-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(2, 132, 199, 0.45);
        }

        @media (max-width: 895px) {
          .menu-toggle-btn {
            display: block;
          }

          .navbar-links {
            position: absolute;
            top: 100%;
            right: 0;
            width: 100%;
            max-width: 340px;
            background: rgba(11, 15, 25, 0.98);
            backdrop-filter: blur(20px);
            padding: 3rem 2.5rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
            border-left: 2px solid #0284c7;
            border-bottom: 2px solid #0284c7;
            border-bottom-left-radius: 2rem;
            box-shadow: -10px 20px 40px rgba(0, 0, 0, 0.4);
            display: none;
          }

          .navbar-links.mobile-active {
            display: flex;
            animation: slideDown 0.3s ease forwards;
          }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
};
