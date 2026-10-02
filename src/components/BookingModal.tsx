import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ShieldCheck, CreditCard } from 'lucide-react';
import { PackageItem } from '../types';

interface BookingModalProps {
  packageItem: PackageItem | null;
  onClose: () => void;
  onConfirmBooking: (bookingDetails: any) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ packageItem, onClose, onConfirmBooking }) => {
  const [travelers, setTravelers] = useState(2);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (packageItem) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [packageItem]);

  if (!packageItem) return null;

  const totalPrice = packageItem.price * travelers;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);

    setTimeout(() => {
      onConfirmBooking({
        packageId: packageItem.id,
        packageName: packageItem.title,
        travelers,
        date,
        totalPrice,
        customerName: name,
        email
      });
      setIsSuccess(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        {!isSuccess ? (
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="modal-header">
              <span className="modal-category">Reservar Paquete Turístico</span>
              <h2>{packageItem.title}</h2>
              <p className="modal-subtitle">{packageItem.duration} • Incluye traslados y hotel 5★</p>
            </div>

            <div className="booking-summary-card">
              <div className="summary-item">
                <span>Precio por persona</span>
                <strong>${packageItem.price.toFixed(2)} USD</strong>
              </div>
              <div className="summary-item">
                <span>Pasajeros</span>
                <div className="counter-controls">
                  <button type="button" onClick={() => setTravelers(Math.max(1, travelers - 1))}>-</button>
                  <span>{travelers}</span>
                  <button type="button" onClick={() => setTravelers(travelers + 1)}>+</button>
                </div>
              </div>
              <div className="summary-item total-item">
                <span>Total Estimado</span>
                <span className="total-price">${totalPrice.toFixed(2)} USD</span>
              </div>
            </div>

            <div className="form-fields-grid">
              <div className="field-group">
                <label>Nombre y Apellido</label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="field-group">
                <label>Correo Electrónico</label>
                <input
                  type="email"
                  required
                  placeholder="ejemplo@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="field-group full-width">
                <label>Fecha Deseada de Salida</label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>

            <div className="modal-footer-action">
              <div className="modal-security-note">
                <ShieldCheck size={18} className="shield-icon" />
                <span>Reserva 100% protegida y sin cargos ocultos.</span>
              </div>

              <button type="submit" className="btn modal-submit-btn">
                <CreditCard size={20} />
                <span>Confirmar Reserva (${totalPrice.toFixed(2)} USD)</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="modal-success-state">
            <CheckCircle size={70} className="success-icon" />
            <h2>¡Reserva Solicitada con Éxito!</h2>
            <p>Hemos enviado la confirmación y el itinerario detallado a <strong>{email}</strong>.</p>
          </div>
        )}
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
          padding: 3.5rem 4rem !important;
          width: 100% !important;
          max-width: 780px !important;
          max-height: 92vh !important;
          overflow-y: auto !important;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.45) !important;
          border: 1px solid rgba(255, 255, 255, 0.3) !important;
          margin: auto !important;
        }

        .modal-close-btn {
          position: absolute;
          top: 2rem;
          right: 2rem;
          background: #f1f5f9;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #64748b;
          transition: all 0.3s ease;
          border: none;
        }

        .modal-close-btn:hover {
          background: #0284c7;
          color: #ffffff;
        }

        .modal-header {
          margin-bottom: 2rem;
        }

        .modal-category {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0284c7;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .modal-header h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 3rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0.4rem 0;
        }

        .modal-subtitle {
          font-size: 1.45rem;
          color: #64748b;
        }

        .booking-summary-card {
          background: #f8fafc;
          border-radius: 1.6rem;
          padding: 1.8rem 2.4rem;
          margin-bottom: 2rem;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .summary-item {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-size: 1.35rem;
          color: #64748b;
        }

        .summary-item strong {
          font-size: 1.8rem;
          color: #0f172a;
        }

        .counter-controls {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          background: #ffffff;
          padding: 0.4rem 1.2rem;
          border-radius: 2rem;
          border: 1px solid #cbd5e1;
        }

        .counter-controls button {
          background: transparent;
          font-size: 1.8rem;
          font-weight: 700;
          color: #0284c7;
          cursor: pointer;
          width: 24px;
          border: none;
        }

        .total-item {
          text-align: right;
        }

        .total-price {
          font-size: 2.5rem;
          color: #0284c7;
          font-weight: 800;
          font-family: 'Outfit', sans-serif;
        }

        .form-fields-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.6rem;
          margin-bottom: 2rem;
        }

        .field-group {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .field-group.full-width {
          grid-column: 1 / -1;
        }

        .field-group label {
          font-size: 1.3rem;
          font-weight: 600;
          color: #475569;
        }

        .field-group input {
          padding: 1.2rem 1.6rem;
          font-size: 1.5rem;
          border-radius: 1rem;
          border: 1.5px solid #cbd5e1;
          outline: none;
          transition: border-color 0.3s ease;
          width: 100%;
        }

        .field-group input:focus {
          border-color: #0284c7;
        }

        .modal-footer-action {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .modal-security-note {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.3rem;
          color: #64748b;
        }

        .shield-icon {
          color: #10b981;
          flex-shrink: 0;
        }

        .modal-submit-btn {
          width: 100%;
          padding: 1.4rem;
        }

        .modal-success-state {
          text-align: center;
          padding: 4rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .success-icon {
          color: #10b981;
        }

        @media (max-width: 640px) {
          .form-fields-grid {
            grid-template-columns: 1fr;
          }
          .booking-summary-card {
            flex-direction: column;
            align-items: flex-start;
          }
          .total-item {
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
};
