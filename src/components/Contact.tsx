import React, { useState, useRef } from 'react';
import { Mail, Phone, User, Send, MapPin, CheckCircle } from 'lucide-react';
import { ContactFormData } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ContactProps {
  onSubmitContact: (data: ContactFormData) => void;
}

export const Contact: React.FC<ContactProps> = ({ onSubmitContact }) => {
  useScrollReveal();

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextareaInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const target = e.currentTarget;
    target.style.height = 'auto';
    target.style.height = `${target.scrollHeight}px`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onSubmitContact(formData);
      setFormData({ fullName: '', email: '', phone: '', message: '' });
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }

      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-overlay" />

      <div className="contact-container gsap-reveal">
        <h2 className="heading">Contácta<span>nos</span></h2>
        <p className="contact-subtitle">
          ¿Tienes alguna duda o quieres cotizar un paquete personalizado? Completa tus datos y un asesor se pondrá en contacto contigo a la brevedad.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-grid">
            <div className="input-wrapper">
              <User className="input-icon" size={20} />
              <input
                type="text"
                placeholder="Nombre Completo"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>

            <div className="input-wrapper">
              <Mail className="input-icon" size={20} />
              <input
                type="email"
                placeholder="Correo Electrónico"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="input-wrapper">
              <Phone className="input-icon" size={20} />
              <input
                type="tel"
                placeholder="Teléfono de Contacto"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <div className="input-wrapper textarea-wrapper">
            <textarea
              ref={textareaRef}
              placeholder="¿Cómo podemos ayudarte? (Destino de preferencia, fechas estimadas, número de viajeros...)"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              onInput={handleTextareaInput}
            />
          </div>

          <button type="submit" className="btn submit-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              <span>Enviando mensaje...</span>
            ) : isSuccess ? (
              <>
                <CheckCircle size={20} />
                <span>¡Mensaje Enviado con Éxito!</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Enviar Consulta</span>
              </>
            )}
          </button>
        </form>

        {/* Quick Location & Phone Badges updated to Buenos Aires */}
        <div className="contact-info-strip">
          <div className="info-badge">
            <MapPin size={18} className="info-icon" />
            <span>Av. del Libertador 4980, Buenos Aires, Argentina</span>
          </div>
          <div className="info-badge">
            <Phone size={18} className="info-icon" />
            <span>+54 11 5263-8800</span>
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
          padding: 10rem 9%;
        }

        .contact-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(11, 15, 25, 0.82);
          backdrop-filter: blur(8px);
          z-index: 1;
        }

        .contact-container {
          position: relative;
          z-index: 2;
          max-width: 820px;
          width: 100%;
          text-align: center;
          color: #ffffff;
        }

        .contact-subtitle {
          font-size: 1.8rem;
          color: rgba(248, 250, 252, 0.88);
          margin-bottom: 4rem;
          line-height: 1.6;
        }

        .contact-form {
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 4.5rem 4rem;
          border-radius: 2.6rem;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          gap: 2.2rem;
        }

        .input-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.6rem;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 1.8rem;
          color: #0284c7;
          z-index: 2;
        }

        .input-wrapper input,
        .input-wrapper textarea {
          width: 100%;
          padding: 1.5rem 1.8rem 1.5rem 5rem;
          font-size: 1.5rem;
          color: #0f172a;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 1.4rem;
          border: 2px solid transparent;
          transition: border-color 0.3s ease, background-color 0.3s ease;
          outline: none;
          font-weight: 500;
        }

        .textarea-wrapper textarea {
          padding-left: 2rem;
          resize: none;
          min-height: 100px;
          overflow-y: hidden;
          line-height: 1.5;
        }

        .input-wrapper input:focus,
        .input-wrapper textarea:focus {
          background: #ffffff;
          border-color: #0284c7;
          box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
        }

        /* Submit Button sized to fit content */
        .submit-btn {
          margin-top: 0.8rem;
          width: fit-content;
          align-self: center;
          padding: 1.4rem 3.5rem;
          font-size: 1.6rem;
          border-radius: 3rem;
        }

        .contact-info-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2.5rem;
          margin-top: 3.5rem;
          flex-wrap: wrap;
        }

        .info-badge {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.4rem;
          font-weight: 600;
          color: rgba(248, 250, 252, 0.9);
          background: rgba(255, 255, 255, 0.08);
          padding: 0.9rem 2rem;
          border-radius: 3rem;
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .info-icon {
          color: #38bdf8;
        }

        @media (max-width: 600px) {
          .contact-form {
            padding: 2.8rem 2rem;
          }
          .submit-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
