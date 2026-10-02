import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface LegalPageProps {
  documentType: 'terms' | 'privacy' | 'consumer';
  onBackToHome: () => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ documentType, onBackToHome }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [documentType]);

  const getPageInfo = () => {
    switch (documentType) {
      case 'terms':
        return {
          title: 'Términos y Condiciones',
          subtitle: 'Condiciones de Contratación y Operativa Turística - GowTravel Argentina',
          content: (
            <>
              <section className="legal-section">
                <h2>1. Disposiciones Generales</h2>
                <p>
                  El presente documento establece los términos y condiciones generales aplicables a los servicios de intermediación turística prestados por GowTravel (EVT en regla, República Argentina). Al contratar cualquier paquete o servicio, el pasajero declara conocer y aceptar estas condiciones.
                </p>
              </section>

              <section className="legal-section">
                <h2>2. Reservas y Modalidades de Pago</h2>
                <p>
                  Las reservas quedan confirmadas únicamente mediante el pago de la seña estipulada y la emisión del comprobante oficial correspondiente. Los saldos adeudados deberán ser cancelados con un mínimo de 15 días de antelación a la fecha de inicio del viaje.
                </p>
              </section>

              <section className="legal-section">
                <h2>3. Cancelaciones y Devoluciones</h2>
                <p>
                  Las solicitudes de cancelación deben ser notificadas por escrito. Las devoluciones o penalidades se sujetan a las políticas de cada prestador (aerolíneas, cadenas hoteleras y operadores locales) más los gastos administrativos aplicables.
                </p>
              </section>

              <section className="legal-section">
                <h2>4. Documentación y Requisitos Migratorios</h2>
                <p>
                  Es responsabilidad exclusiva e indelegable del viajero contar con pasaportes vigentes, visados, autorizaciones de menores y certificaciones sanitarias requeridas por las autoridades migratorias de cada destino.
                </p>
              </section>
            </>
          )
        };

      case 'privacy':
        return {
          title: 'Política de Privacidad',
          subtitle: 'Protección de Datos Personales conforme a la Ley N° 25.326',
          content: (
            <>
              <section className="legal-section">
                <h2>1. Recopilación de Información</h2>
                <p>
                  GowTravel recopila datos personales (nombre, DNI/Pasaporte, correo electrónico, teléfono de contacto) con el único fin de procesar cotizaciones, emitir vouchers de reserva y brindar asistencia personalizada durante tu viaje.
                </p>
              </section>

              <section className="legal-section">
                <h2>2. Confidencialidad y Seguridad</h2>
                <p>
                  Tus datos son almacenados en servidores seguros con cifrado de alta gama. No vendemos, comercializamos ni transferimos información personal a terceros ajenos a la prestación directa del paquete contratado.
                </p>
              </section>

              <section className="legal-section">
                <h2>3. Derechos de Acceso y Rectificación (ARCO)</h2>
                <p>
                  El titular de los datos personales tiene la facultad de ejercer el derecho de acceso, rectificación o supresión de sus datos de forma gratuita enviando una solicitud formal a <strong>privacidad@gowtravel.com.ar</strong>.
                </p>
              </section>
            </>
          )
        };

      case 'consumer':
      default:
        return {
          title: 'Defensa del Consumidor',
          subtitle: 'Marco Normativo Ley N° 24.240 y Derechos del Usuario',
          content: (
            <>
              <section className="legal-section">
                <h2>1. Protección al Consumidor</h2>
                <p>
                  GowTravel garantiza el cumplimiento irrestricto de la Ley N° 24.240 de Defensa del Consumidor de la República Argentina y normas complementarias, asegurando información clara, veraz y oportuna en todo momento.
                </p>
              </section>

              <section className="legal-section">
                <h2>2. Botón de Arrepentimiento</h2>
                <p>
                  Conforme a la Resolución 424/2020 de la Secretaría de Comercio Interior, los clientes que contraten servicios de manera online cuentan con el derecho de revocar la compra dentro de los plazos legales vigentes.
                </p>
              </section>

              <section className="legal-section">
                <h2>3. Canales de Reclamos y Ente Regulador</h2>
                <p>
                  Para elevar consultas o reclamos prioritarios, puedes comunicarte a nuestra sede central en Av. del Libertador 4980, Buenos Aires. Ente de fiscalización: Dirección General de Defensa y Protección al Consumidor (GCBA).
                </p>
              </section>
            </>
          )
        };
    }
  };

  const { title, subtitle, content } = getPageInfo();

  return (
    <div className="legal-page-container">
      <div className="legal-page-hero">
        <button className="back-home-btn" onClick={onBackToHome}>
          <ArrowLeft size={20} />
          <span>Volver al Inicio</span>
        </button>

        <div className="legal-page-header">
          <div className="legal-icon-wrapper">
            <ShieldCheck size={40} />
          </div>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>

      <div className="legal-page-content">
        <div className="legal-card-body">
          {content}

          <div className="legal-guarantee-badge">
            <CheckCircle2 size={22} className="guarantee-icon" />
            <span>Documento Oficial GowTravel Argentina - Actualizado 2026</span>
          </div>
        </div>
      </div>

      <style>{`
        .legal-page-container {
          min-height: 100vh;
          background: #0b0f19;
          color: #ffffff;
          padding-bottom: 8rem;
        }

        .legal-page-hero {
          background: linear-gradient(180deg, #0f172a 0%, #0b0f19 100%);
          padding: 12rem 9% 6rem;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .back-home-btn {
          position: absolute;
          top: 4rem;
          left: 9%;
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.9rem 2rem;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 3rem;
          color: #ffffff;
          font-size: 1.4rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .back-home-btn:hover {
          background: #0284c7;
          border-color: #0284c7;
        }

        .legal-page-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          max-width: 750px;
        }

        .legal-icon-wrapper {
          width: 72px;
          height: 72px;
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.3);
          border-radius: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #38bdf8;
        }

        .legal-page-header h1 {
          font-family: 'Outfit', sans-serif;
          font-size: 4.5rem;
          font-weight: 800;
          color: #ffffff;
        }

        .legal-page-header p {
          font-size: 1.7rem;
          color: #94a3b8;
          line-height: 1.6;
        }

        .legal-page-content {
          max-width: 900px;
          margin: 5rem auto 0;
          padding: 0 2rem;
        }

        .legal-card-body {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 2.4rem;
          padding: 4.5rem 4rem;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .legal-section h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 2.2rem;
          font-weight: 800;
          color: #38bdf8;
          margin-bottom: 1.2rem;
        }

        .legal-section p {
          font-size: 1.6rem;
          color: rgba(248, 250, 252, 0.88);
          line-height: 1.8;
        }

        .legal-guarantee-badge {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 2rem;
          padding: 1.5rem 2rem;
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.25);
          border-radius: 1.6rem;
          font-size: 1.45rem;
          font-weight: 600;
          color: #e2e8f0;
        }

        .guarantee-icon {
          color: #38bdf8;
        }

        @media (max-width: 768px) {
          .back-home-btn {
            position: static;
            margin-bottom: 2rem;
          }
          .legal-card-body {
            padding: 3rem 2rem;
          }
          .legal-page-header h1 {
            font-size: 3.2rem;
          }
        }
      `}</style>
    </div>
  );
};
