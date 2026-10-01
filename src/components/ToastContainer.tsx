import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { ToastMessage } from '../types';

interface ToastContainerProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map((t) => (
        <div key={t.id} className={`toast toast-${t.type}`}>
          {t.type === 'success' && <CheckCircle2 size={22} className="toast-icon success" />}
          {t.type === 'error' && <AlertCircle size={22} className="toast-icon error" />}
          {t.type === 'info' && <Info size={22} className="toast-icon info" />}

          <div className="toast-body">
            <strong>{t.title}</strong>
            <p>{t.message}</p>
          </div>

          <button className="toast-dismiss" onClick={() => onDismiss(t.id)} aria-label="Dismiss toast">
            <X size={16} />
          </button>
        </div>
      ))}

      <style>{`
        .toast-body {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .toast-body strong {
          font-size: 1.4rem;
          color: #0f172a;
        }

        .toast-body p {
          font-size: 1.2rem;
          color: #64748b;
        }

        .toast-icon.success { color: #10b981; }
        .toast-icon.error { color: #ef4444; }
        .toast-icon.info { color: #155bff; }

        .toast-dismiss {
          background: transparent;
          color: #94a3b8;
          cursor: pointer;
          margin-left: auto;
          padding: 0.4rem;
          transition: color 0.3s ease;
        }

        .toast-dismiss:hover {
          color: #0f172a;
        }
      `}</style>
    </div>
  );
};
