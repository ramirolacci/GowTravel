import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  Calendar as CalendarIcon,
  Users,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Award,
  Headset,
  Compass,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Check,
  User,
  UserPlus
} from 'lucide-react';
import gsap from 'gsap';

interface HeroProps {
  onSearch: (destination: string) => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, onExploreClick }) => {
  const [destination, setDestination] = useState('');
  const [dateStr, setDateStr] = useState('15 Oct 2026');
  const [selectedDay, setSelectedDay] = useState<number>(15);
  const [currentMonthIdx, setCurrentMonthIdx] = useState(9); // Octubre
  const [currentYear, setCurrentYear] = useState(2026);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const [guestsLabel, setGuestsLabel] = useState('2 Pasajeros');
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [isGuestsPickerOpen, setIsGuestsPickerOpen] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const searchBoxRef = useRef<HTMLFormElement>(null);

  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  const weekDays = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do'];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.0 } });

      tl.fromTo('.badge-pill', { opacity: 0, y: -20 }, { opacity: 1, y: 0, delay: 0.2 })
        .fromTo('.home-content h1', { opacity: 0, y: 35, scale: 0.98 }, { opacity: 1, y: 0, scale: 1 }, '-=0.6')
        .fromTo('.home-content p', { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, '-=0.6')
        .fromTo('.hero-actions', { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '-=0.6')
        .fromTo('.hero-search-box', { opacity: 0, y: 30, scale: 0.96 }, { opacity: 1, y: 0, scale: 1 }, '-=0.5')
        .fromTo('.trust-item', { opacity: 0, y: 15 }, { opacity: 1, y: 0, stagger: 0.15 }, '-=0.4');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Close popovers on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(e.target as Node)) {
        setIsDatePickerOpen(false);
        setIsGuestsPickerOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(destination);
  };

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentMonthIdx === 0) {
      setCurrentMonthIdx(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonthIdx(currentMonthIdx - 1);
    }
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentMonthIdx === 11) {
      setCurrentMonthIdx(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonthIdx(currentMonthIdx + 1);
    }
  };

  const handleSelectDay = (day: number) => {
    setSelectedDay(day);
    const shortMonth = months[currentMonthIdx].substring(0, 3);
    setDateStr(`${day} ${shortMonth} ${currentYear}`);
    setIsDatePickerOpen(false);
  };

  const updateGuestsTotal = (newAdults: number, newKids: number) => {
    setAdults(newAdults);
    setChildrenCount(newKids);
    const total = newAdults + newKids;
    if (total === 1) setGuestsLabel('1 Pasajero');
    else if (total >= 5) setGuestsLabel(`Grupo VIP (${total})`);
    else setGuestsLabel(`${total} Pasajeros`);
  };

  // Generate days grid for the month calendar (e.g. Oct 2026 starts on Thursday -> 3 blank cells)
  const daysInMonth = 31; // October
  const startBlankCells = 3; // Starts Thursday

  return (
    <section className="home" id="home" ref={heroRef}>
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

        {/* Interactive Search Box */}
        <form className="hero-search-box" onSubmit={handleSearchSubmit} ref={searchBoxRef}>
          {/* Field 1: Destination */}
          <div className="search-field">
            <MapPin className="search-icon" size={22} />
            <div className="search-input-group">
              <label>¿A dónde viajas?</label>
              <input
                type="text"
                placeholder="Ej: Miami, Grecia, Cancún..."
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
          </div>

          <div className="search-divider" />

          {/* Field 2: Custom Date Picker */}
          <div className="search-field relative-field">
            <CalendarIcon className="search-icon" size={22} />
            <div
              className="search-input-group clickable-group"
              onClick={() => {
                setIsDatePickerOpen(!isDatePickerOpen);
                setIsGuestsPickerOpen(false);
              }}
            >
              <label>Fecha de Viaje</label>
              <span className="custom-picker-value">
                <span>{dateStr}</span>
                <CalendarIcon size={16} className={`picker-inline-icon ${isDatePickerOpen ? 'open' : ''}`} />
              </span>
            </div>

            {/* Custom Styled Calendar Popover */}
            {isDatePickerOpen && (
              <div className="custom-calendar-popover" onClick={(e) => e.stopPropagation()}>
                <div className="calendar-header">
                  <button type="button" className="cal-nav-btn" onClick={handlePrevMonth}>
                    <ChevronLeft size={18} />
                  </button>
                  <span className="month-title">
                    {months[currentMonthIdx]} {currentYear}
                  </span>
                  <button type="button" className="cal-nav-btn" onClick={handleNextMonth}>
                    <ChevronRight size={18} />
                  </button>
                </div>

                <div className="calendar-weekdays">
                  {weekDays.map((d, i) => (
                    <span key={i}>{d}</span>
                  ))}
                </div>

                <div className="calendar-days-grid">
                  {Array.from({ length: startBlankCells }).map((_, i) => (
                    <span key={`blank-${i}`} className="day-cell blank" />
                  ))}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const dayNum = i + 1;
                    const isSelected = dayNum === selectedDay;
                    return (
                      <button
                        key={dayNum}
                        type="button"
                        className={`day-cell ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleSelectDay(dayNum)}
                      >
                        {dayNum}
                      </button>
                    );
                  })}
                </div>

                <div className="calendar-quick-actions">
                  <button
                    type="button"
                    className="cal-quick-btn"
                    onClick={() => handleSelectDay(15)}
                  >
                    Hoy
                  </button>
                  <button
                    type="button"
                    className="cal-quick-btn primary"
                    onClick={() => handleSelectDay(20)}
                  >
                    Próximo Fin de Semana
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="search-divider" />

          {/* Field 3: Custom Passengers Picker */}
          <div className="search-field relative-field">
            <Users className="search-icon" size={22} />
            <div
              className="search-input-group clickable-group"
              onClick={() => {
                setIsGuestsPickerOpen(!isGuestsPickerOpen);
                setIsDatePickerOpen(false);
              }}
            >
              <label>Pasajeros</label>
              <span className="custom-picker-value">
                <span>{guestsLabel}</span>
                <ChevronDown size={16} className={`picker-inline-icon ${isGuestsPickerOpen ? 'open' : ''}`} />
              </span>
            </div>

            {/* Custom Styled Passengers Dropdown Popover */}
            {isGuestsPickerOpen && (
              <div className="custom-guests-popover" onClick={(e) => e.stopPropagation()}>
                <div className="guests-option-header">Seleccionar Pasajeros</div>

                <div className="guests-counter-row">
                  <div className="counter-info">
                    <strong>Adultos</strong>
                    <small>Mayores de 12 años</small>
                  </div>
                  <div className="counter-btn-group">
                    <button
                      type="button"
                      onClick={() => updateGuestsTotal(Math.max(1, adults - 1), childrenCount)}
                    >
                      -
                    </button>
                    <span>{adults}</span>
                    <button
                      type="button"
                      onClick={() => updateGuestsTotal(adults + 1, childrenCount)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="guests-counter-row">
                  <div className="counter-info">
                    <strong>Niños / Bebés</strong>
                    <small>De 0 a 11 años</small>
                  </div>
                  <div className="counter-btn-group">
                    <button
                      type="button"
                      onClick={() => updateGuestsTotal(adults, Math.max(0, childrenCount - 1))}
                    >
                      -
                    </button>
                    <span>{childrenCount}</span>
                    <button
                      type="button"
                      onClick={() => updateGuestsTotal(adults, childrenCount + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="guests-presets">
                  <div
                    className={`preset-chip ${adults === 1 && childrenCount === 0 ? 'active' : ''}`}
                    onClick={() => updateGuestsTotal(1, 0)}
                  >
                    <User size={14} />
                    <span>Individual (1)</span>
                  </div>
                  <div
                    className={`preset-chip ${adults === 2 && childrenCount === 0 ? 'active' : ''}`}
                    onClick={() => updateGuestsTotal(2, 0)}
                  >
                    <Users size={14} />
                    <span>Pareja (2)</span>
                  </div>
                  <div
                    className={`preset-chip ${adults === 4 && childrenCount === 0 ? 'active' : ''}`}
                    onClick={() => updateGuestsTotal(4, 0)}
                  >
                    <UserPlus size={14} />
                    <span>Familia (4)</span>
                  </div>
                  <div
                    className={`preset-chip ${adults >= 5 ? 'active' : ''}`}
                    onClick={() => updateGuestsTotal(5, 0)}
                  >
                    <Award size={14} />
                    <span>Grupo VIP (5+)</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="guests-apply-btn"
                  onClick={() => setIsGuestsPickerOpen(false)}
                >
                  <Check size={16} />
                  <span>Aplicar ({adults + childrenCount})</span>
                </button>
              </div>
            )}
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
          z-index: 20;
          min-height: 100vh;
          padding: 14rem 9% 8rem;
          overflow: visible;
        }

        .home-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(270deg, rgba(11, 15, 25, 0.65) 0%, rgba(11, 15, 25, 0.4) 55%, rgba(11, 15, 25, 0.1) 100%);
          z-index: 1;
        }

        .home-content {
          position: relative;
          z-index: 30;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
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
          background: rgba(11, 15, 25, 0.4);
          border: 1px solid rgba(56, 189, 248, 0.4);
          border-radius: 3rem;
          color: #38bdf8;
          font-weight: 700;
          font-size: 1.3rem;
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
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
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
        }

        .hero-highlight {
          background: linear-gradient(135deg, #0284c7 0%, #38bdf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .home-content p {
          font-size: 1.9rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.95);
          max-width: 680px;
          line-height: 1.6;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
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
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.35);
          width: 100%;
          max-width: 840px;
          gap: 1.5rem;
          margin-top: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.8);
          text-align: left;
          position: relative;
          z-index: 200 !important;
        }

        .search-field {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          flex: 1;
        }

        .relative-field {
          position: relative;
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

        .clickable-group {
          cursor: pointer;
          user-select: none;
        }

        .search-input-group label {
          font-size: 1.1rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #64748b;
        }

        .search-input-group input {
          border: none;
          background: transparent;
          font-size: 1.5rem;
          font-weight: 700;
          color: #0f172a;
          outline: none;
          width: 100%;
        }

        .custom-picker-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0f172a;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.8rem;
          width: 100%;
        }

        .picker-inline-icon {
          color: #64748b;
          transition: transform 0.25s ease, color 0.2s ease;
          flex-shrink: 0;
        }

        .picker-inline-icon.open {
          transform: rotate(180deg);
          color: #0284c7;
        }

        .clickable-group:hover .picker-inline-icon {
          color: #0284c7;
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

        /* CUSTOM STYLED CALENDAR POPOVER */
        .custom-calendar-popover {
          position: absolute;
          top: calc(100% + 1.2rem);
          left: -1rem;
          width: 320px;
          background: #ffffff;
          border-radius: 2rem;
          padding: 2rem;
          box-shadow: 0 25px 50px rgba(11, 15, 25, 0.35);
          border: 1px solid rgba(2, 132, 199, 0.2);
          z-index: 9999;
          animation: popoverFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .calendar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .month-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.6rem;
          font-weight: 800;
          color: #0f172a;
        }

        .cal-nav-btn {
          background: #f1f5f9;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .cal-nav-btn:hover {
          background: #0284c7;
          color: #ffffff;
        }

        .calendar-weekdays {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          text-align: center;
          font-size: 1.2rem;
          font-weight: 700;
          color: #94a3b8;
          margin-bottom: 0.8rem;
        }

        .calendar-days-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.4rem;
        }

        .day-cell {
          height: 36px;
          border: none;
          background: transparent;
          border-radius: 50%;
          font-size: 1.35rem;
          font-weight: 600;
          color: #1e293b;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .day-cell:hover {
          background: rgba(2, 132, 199, 0.12);
          color: #0284c7;
        }

        .day-cell.selected {
          background: linear-gradient(135deg, #0284c7 0%, #2563eb 100%);
          color: #ffffff;
          font-weight: 800;
          box-shadow: 0 4px 12px rgba(2, 132, 199, 0.4);
        }

        .day-cell.blank {
          cursor: default;
        }

        .calendar-quick-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 1.5rem;
          padding-top: 1.2rem;
          border-top: 1px solid #f1f5f9;
        }

        .cal-quick-btn {
          background: transparent;
          border: none;
          font-size: 1.25rem;
          font-weight: 700;
          color: #64748b;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .cal-quick-btn:hover {
          color: #0284c7;
        }

        .cal-quick-btn.primary {
          color: #0284c7;
        }

        /* CUSTOM STYLED GUESTS POPOVER */
        .custom-guests-popover {
          position: absolute;
          top: calc(100% + 1.2rem);
          right: -1rem;
          width: 320px;
          background: #ffffff;
          border-radius: 2rem;
          padding: 2rem;
          box-shadow: 0 25px 50px rgba(11, 15, 25, 0.35);
          border: 1px solid rgba(2, 132, 199, 0.2);
          z-index: 9999;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          animation: popoverFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .guests-option-header {
          font-family: 'Outfit', sans-serif;
          font-size: 1.6rem;
          font-weight: 800;
          color: #0f172a;
        }

        .guests-counter-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .counter-info {
          display: flex;
          flex-direction: column;
        }

        .counter-info strong {
          font-size: 1.4rem;
          color: #0f172a;
        }

        .counter-info small {
          font-size: 1.15rem;
          color: #94a3b8;
        }

        .counter-btn-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: #f8fafc;
          padding: 0.4rem 1rem;
          border-radius: 2rem;
          border: 1px solid #e2e8f0;
        }

        .counter-btn-group button {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: none;
          background: #ffffff;
          color: #0284c7;
          font-size: 1.6rem;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .counter-btn-group button:hover {
          background: #0284c7;
          color: #ffffff;
        }

        .counter-btn-group span {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0f172a;
          min-width: 18px;
          text-align: center;
        }

        .guests-presets {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.8rem;
        }

        .preset-chip {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.7rem 1rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 1.2rem;
          font-size: 1.2rem;
          font-weight: 700;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .preset-chip:hover,
        .preset-chip.active {
          background: rgba(2, 132, 199, 0.1);
          border-color: #0284c7;
          color: #0284c7;
        }

        .guests-apply-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 1.1rem;
          background: linear-gradient(135deg, #0284c7 0%, #2563eb 100%);
          color: #ffffff;
          border: none;
          border-radius: 1.2rem;
          font-size: 1.4rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 6px 18px rgba(2, 132, 199, 0.35);
        }

        .guests-apply-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(2, 132, 199, 0.45);
        }

        @keyframes popoverFadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-trust-badges {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 3rem;
          margin-top: 1.5rem;
          flex-wrap: wrap;
          position: relative;
          z-index: 1 !important;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.4rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.95);
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
          position: relative;
          z-index: 1;
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
          .custom-calendar-popover,
          .custom-guests-popover {
            left: 50%;
            transform: translateX(-50%);
            right: auto;
            width: 90vw;
            max-width: 320px;
          }
        }
      `}</style>
    </section>
  );
};
