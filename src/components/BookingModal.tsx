import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, CreditCard } from 'lucide-react';
import { PackageItem } from '../types';

interface BookingModalProps {
  packageItem: PackageItem | null;
  onClose: () => void;
  onConfirmBooking: (bookingDetails: any) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ packageItem, onClose, onConfirmBooking }) => {
  if (!packageItem) return null;

  const [travelers, setTravelers] = useState(2);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

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
              <div className="summary-divider" />
              <div className="summary-item total-item">
                <span>Total Estimado</span>
                <span className="total-price">${totalPrice.toFixed(2)} USD</span>
              </div>
            </div>

            <div className="form-fields">
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

              <div className="field-group">
                <label>Fecha Deseada de Salida</label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>

            <div className="modal-security-note">
              <ShieldCheck size={18} className="shield-icon" />
              <span>Reserva 100% protegida y sin cargos ocultos.</span>
            </div>

            <button type="submit" className="btn modal-submit-btn">
              <CreditCard size={20} />
              <span>Confirmar Reserva (${totalPrice.toFixed(2)})</span>
            </button>
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
        }

        .modal-close-btn:hover {
          background: #155bff;
          color: #ffffff;
        }

        .modal-header {
          margin-bottom: 2.5rem;
        }

        .modal-category {
          font-size: 1.2rem;
          font-weight: 700;
          color: #155bff;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .modal-header h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 3rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0.4rem 0;
        }

        .modal-subtitle {
          font-size: 1.4rem;
          color: #64748b;
        }

        .booking-summary-card {
          background: #f8fafc;
          border-radius: 1.6rem;
          padding: 2rem;
          margin-bottom: 2.5rem;
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .summary-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.5rem;
          color: #475569;
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
          color: #155bff;
          cursor: pointer;
          width: 24px;
        }

        .summary-divider {
          height: 1px;
          background: #e2e8f0;
        }

        .total-item {
          font-weight: 700;
          color: #0f172a;
        }

        .total-price {
          font-size: 2.4rem;
          color: #155bff;
          font-family: 'Outfit', sans-serif;
        }

        .form-fields {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
          margin-bottom: 2rem;
        }

        .field-group {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .field-group label {
          font-size: 1.3rem;
          font-weight: 600;
          color: #475569;
        }

        .field-group input {
          padding: 1.3rem 1.6rem;
          font-size: 1.5rem;
          border-radius: 1rem;
          border: 1.5px solid #cbd5e1;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .field-group input:focus {
          border-color: #155bff;
        }

        .modal-security-note {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.3rem;
          color: #64748b;
          margin-bottom: 2.5rem;
        }

        .shield-icon {
          color: #10b981;
        }

        .modal-submit-btn {
          width: 100%;
          padding: 1.5rem;
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
      `}</style>
    </div>
  );
};
