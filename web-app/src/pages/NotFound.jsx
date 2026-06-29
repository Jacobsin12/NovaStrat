import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import '../styles/NotFound.css';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      {/* Background Orbs */}
      <div className="not-found-orb orb-1"></div>
      <div className="not-found-orb orb-2"></div>

      <div className="not-found-card glass-panel">
        <div className="not-found-icon-wrapper">
          <AlertTriangle size={48} className="not-found-icon" />
        </div>
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">Página no encontrada</h2>
        <p className="not-found-text">
          Lo sentimos, la página que estás buscando no existe, ha sido eliminada o su dirección ha cambiado.
        </p>
        <button className="btn-not-found-back" onClick={() => navigate('/')}>
          <ArrowLeft size={18} />
          Volver al Inicio
        </button>
      </div>
    </div>
  );
}
