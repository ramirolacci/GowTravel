import React, { useState } from 'react';
import { Mail, Phone, User, Send, MapPin, CheckCircle } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactProps {
  onSubmitContact: (data: ContactFormData) => void;
}

export const Contact: React.FC<ContactProps> = ({ onSubmitContact }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onSubmitContact(formData);
      setFormData({ fullName: '', email: '', phone: '', message: '' });

      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-overlay" />

      <div className="contact-container">
        <h2 className="heading">Contact Us</h2>
        <p className="contact-subtitle">
          ¿Tienes alguna duda o quieres cotizar un paquete personalizado? Completa tus datos y un asesor se pondrá en contacto contigo a la brevedad.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-grid">
            <div className="input-wrapper">
              <User className="input-icon" size={20} />
              <input
                type="text"
                placeholder="Full Name *"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>

            <div className="input-wrapper">
              <Mail className="input-icon" size={20} />
              <input
                type="email"
                placeholder="E-mail *"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="input-wrapper">
              <Phone className="input-icon" size={20} />
              <input
                type="tel"
                placeholder="Phone Number *"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <div className="input-wrapper textarea-wrapper">
            <textarea
              placeholder="¿Cómo podemos ayudarte? (Destino de preferencia, fechas estimadas, número de viajeros...)"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button type="submit" className="btn submit-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              <span>Enviando...</span>
            ) : isSuccess ? (
              <>
                <CheckCircle size={22} />
                <span>¡Mensaje Enviado!</span>
              </>
            ) : (
              <>
                <Send size={20} />
                <span>Contact Us</span>
              </>
            )}
          </button>
        </form>

        {/* Quick Location Badge */}
        <div className="contact-info-strip">
          <div className="info-badge">
            <MapPin size={18} className="info-icon" />
            <span>Santiago del Estero 750, Salta Capital, Argentina</span>
          </div>
          <div className="info-badge">
            <Phone size={18} className="info-icon" />
            <span>853-967-0100</span>
          </div>
        </div>
      </div>

      <style>{`
        .contact {
          background: url('/wallp/wallpappers6.jpg') no-repeat center center/cover;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }

        .contact-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(4px);
          z-index: 1;
        }

        .contact-container {
          position: relative;
          z-index: 2;
          max-width: 800px;
          width: 100%;
          text-align: center;
          color: #ffffff;
        }

        .contact-subtitle {
          font-size: 1.7rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 4rem;
          line-height: 1.6;
        }

        .contact-form {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          padding: 4rem;
          border-radius: 2.4rem;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .input-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 1.8rem;
          color: #155bff;
          z-index: 2;
        }

        .input-wrapper input,
        .input-wrapper textarea {
          width: 100%;
          padding: 1.5rem 1.8rem 1.5rem 5rem;
          font-size: 1.6rem;
          color: #0f172a;
          background: #ffffff;
          border-radius: 1.2rem;
          border: 2px solid transparent;
          transition: all 0.3s ease;
          outline: none;
        }

        .textarea-wrapper textarea {
          padding-left: 2rem;
          resize: vertical;
        }

        .input-wrapper input:focus,
        .input-wrapper textarea:focus {
          border-color: #155bff;
          box-shadow: 0 0 15px rgba(21, 91, 255, 0.3);
        }

        .submit-btn {
          margin-top: 1rem;
          width: 100%;
          padding: 1.5rem;
          font-size: 1.8rem;
        }

        .contact-info-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3rem;
          margin-top: 3.5rem;
          flex-wrap: wrap;
        }

        .info-badge {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.4rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          background: rgba(255, 255, 255, 0.1);
          padding: 0.8rem 1.8rem;
          border-radius: 2rem;
          backdrop-filter: blur(10px);
        }

        .info-icon {
          color: #38bdf8;
        }

        @media (max-width: 600px) {
          .contact-form {
            padding: 2.5rem 1.8rem;
          }
        }
      `}</style>
    </section>
  );
};
