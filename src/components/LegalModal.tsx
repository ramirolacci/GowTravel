import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  title: string | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ title, onClose }) => {
  if (!title) return null;

  const getLegalContent = () => {
    switch (title) {
      case 'Términos y Condiciones':
        return (
          <>
            <p>Bienvenido a <strong>GowTravel</strong>. Al contratar nuestros paquetes o servicios turísticos, aceptas las siguientes condiciones operativas:</p>
            <ul>
              <li><strong>Reservas & Pagos:</strong> Toda reserva se confirma mediante el pago del seña estipulado. Los saldos restantes deben abonarse antes de la fecha límite especificada en tu comprobante.</li>
              <li><strong>Modificaciones:</strong> La empresa se reserva el derecho de ajustar itinerarios por causas de fuerza mayor (condiciones climáticas, decisiones gubernamentales o seguridad de los pasajeros).</li>
              <li><strong>Documentación:</strong> Es responsabilidad exclusiva del pasajero contar con pasaportes, visados y certificados sanitarios vigentes para cada destino.</li>
            </ul>
          </>
        );
      case 'Política de Privacidad':
        return (
          <>
            <p>En <strong>GowTravel</strong> protegemos tus datos personales conforme a la Ley de Protección de Datos Personales N° 25.326:</p>
            <ul>
              <li><strong>Uso de Información:</strong> Recopilamos tu nombre, teléfono y correo electrónico únicamente para gestionar tus cotizaciones, itinerarios y reservas.</li>
              <li><strong>Confidencialidad:</strong> Nunca comercializamos ni cedemos tus datos a terceros ajenos a la prestación directa de tus servicios de viaje (aerolíneas, hoteles, aseguradoras).</li>
              <li><strong>Derechos ARCO:</strong> Puedes solicitar la actualización o supresión de tus datos en cualquier momento escribiendo a contacto@gowtravel.com.ar.</li>
            </ul>
          </>
        );
      case 'Defensa del Consumidor':
        return (
          <>
            <p>GowTravel cumple estrictamente con la Ley N° 24.240 de Defensa del Consumidor de la República Argentina:</p>
            <ul>
              <li><strong>Atención al Cliente:</strong> Para consultas, reclamos o sugerencias, disponemos de nuestra casilla de atención prioritaria y asesoría telefónica.</li>
              <li><strong>Botón de Arrepentimiento:</strong> Conforme a las normativas vigentes, el consumidor tiene derecho a revocar la aceptación del servicio dentro de los plazos legales establecidos.</li>
              <li><strong>Ente Regulador:</strong> Dirección General de Defensa y Protección al Consumidor - Gobierno de la Ciudad de Buenos Aires.</li>
            </ul>
          </>
        );
      default:
        return (
          <p>GowTravel es una Empresa de Viajes y Turismo (EVT) autorizada con Legajo Oficial en la República Argentina, comprometida con brindar la máxima calidad y seguridad a nuestros viajeros.</p>
        );
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card legal-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar modal">
          <X size={24} />
        </button>

        <div className="legal-modal-header">
          <div className="legal-modal-icon">
            <ShieldCheck size={32} />
          </div>
          <h2>{title}</h2>
          <span className="legal-subtitle">Marco Regulatorio & Transparencia GowTravel</span>
        </div>

        <div className="legal-modal-body">
          {getLegalContent()}
        </div>

        <div className="legal-modal-footer">
          <button className="btn legal-close-action-btn" onClick={onClose}>
            Entendido
          </button>
        </div>
      </div>

      <style>{`
        .legal-modal-card {
          max-width: 650px;
          padding: 3.5rem 3rem;
          border-radius: 2.4rem;
          background: #ffffff;
        }

        .legal-modal-header {
          text-align: center;
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.8rem;
        }

        .legal-modal-icon {
          width: 58px;
          height: 58px;
          background: rgba(2, 132, 199, 0.1);
          border-radius: 1.6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0284c7;
        }

        .legal-modal-header h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 2.6rem;
          font-weight: 800;
          color: #0f172a;
        }

        .legal-subtitle {
          font-size: 1.3rem;
          font-weight: 700;
          color: #0284c7;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .legal-modal-body {
          font-size: 1.45rem;
          color: #475569;
          line-height: 1.7;
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
          background: #f8fafc;
          padding: 2rem;
          border-radius: 1.6rem;
          border: 1px solid #e2e8f0;
        }

        .legal-modal-body ul {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding-left: 1.5rem;
        }

        .legal-modal-body li {
          list-style-type: disc;
        }

        .legal-modal-footer {
          margin-top: 2.5rem;
          display: flex;
          justify-content: center;
        }

        .legal-close-action-btn {
          padding: 1rem 3.5rem;
          font-size: 1.5rem;
        }
      `}</style>
    </div>
  );
};
