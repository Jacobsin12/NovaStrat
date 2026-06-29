import React from 'react';
import { ArrowRight } from 'lucide-react';
import '../styles/Hero.css';

const clients = [
  { name: 'Corporativos', style: { fontFamily: 'Georgia, serif', fontWeight: 700, letterSpacing: '-0.02em', fontSize: '15px' } },
  { name: 'PYMES', style: { fontFamily: 'Arial, sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: '13px', textTransform: 'uppercase' } },
  { name: 'Startups', style: { fontFamily: "'Trebuchet MS', sans-serif", fontWeight: 600, letterSpacing: '0.01em', fontSize: '15px', fontStyle: 'italic' } },
  { name: 'Familias', style: { fontFamily: "'Courier New', monospace", fontWeight: 700, letterSpacing: '0.12em', fontSize: '13px', textTransform: 'uppercase' } },
  { name: 'Emprendedores', style: { fontFamily: "'Palatino', 'Book Antiqua', serif", fontWeight: 400, letterSpacing: '-0.01em', fontSize: '16px' } },
  { name: 'Inversionistas', style: { fontFamily: "Impact, 'Arial Narrow', sans-serif", fontWeight: 400, letterSpacing: '0.04em', fontSize: '14px' } },
  { name: 'Empresas', style: { fontFamily: 'Verdana, sans-serif', fontWeight: 700, letterSpacing: '-0.03em', fontSize: '13px' } },
  { name: 'Gobiernos', style: { fontFamily: "'Trebuchet MS', sans-serif", fontWeight: 600, letterSpacing: '0.02em', fontSize: '14px' } },
];

export function Hero({ onStartDiagnostic }) {
  const handleScrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header id="inicio" className="hero-section">
      <div className="hero-card">
        {/* Floating orbs */}
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-orb hero-orb-4" />
        <div className="hero-orb hero-orb-5" />

        {/* Floating glass coins */}
        <div className="hero-coin hero-coin-1">$</div>
        <div className="hero-coin hero-coin-2">$</div>
        <div className="hero-coin hero-coin-3">$</div>

        <div className="hero-card-content">
          <h1 className="hero-title">
            Transformamos tu<br />Potencial en <span className="text-gold">Resultados</span>
          </h1>
          <p className="hero-subtitle">
            Consultoría empresarial integral, estrategia financiera y blindaje patrimonial diseñados para llevar a tu organización al siguiente nivel.
          </p>
          <div className="hero-actions">
            <button className="btn-pill dark" onClick={onStartDiagnostic}>
              Iniciar Diagnóstico
              <span className="arrow-circle"><ArrowRight size={18} /></span>
            </button>
            <button className="btn-outline-hero" onClick={handleScrollToContact}>
              Agendar Asesoría
            </button>
          </div>

          {/* Brand marquee — full width */}
          <div className="hero-marquee">
            <div className="marquee-track">
              {[...clients, ...clients, ...clients].map((c, i) => (
                <span key={i} className="hero-marquee-item" style={c.style}>{c.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
