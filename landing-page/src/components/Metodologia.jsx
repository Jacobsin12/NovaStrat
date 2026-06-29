import React from 'react';
import useInView from '../hooks/useInView';
import '../styles/Metodologia.css';

export function Metodologia() {
  const [methRef, methVis] = useInView({ threshold: 0.1 });

  return (
    <section id="metodologia" className={`methodology-section fade-section ${methVis ? 'visible' : ''}`} ref={methRef}>
      <div className="section-inner">
        <div className="methodology-header">
          <div>
            <div className="eyebrow">Nuestro Proceso</div>
            <h2>Cómo<br />Trabajamos.</h2>
          </div>
          <div>
            <p>Metodología probada en cuatro pasos hacia la transformación empresarial de alto impacto.</p>
          </div>
        </div>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">01</div>
            <h3>Diagnóstico</h3>
            <p>Analizamos a fondo tu empresa para identificar fortalezas y áreas de mejora.</p>
          </div>
          <div className="step-card">
            <div className="step-number">02</div>
            <h3>Estrategia</h3>
            <p>Diseñamos un plan personalizado con objetivos claros y alcanzables.</p>
          </div>
          <div className="step-card">
            <div className="step-number">03</div>
            <h3>Implementación</h3>
            <p>Acompañamos la ejecución con asesoría continua y seguimiento.</p>
          </div>
          <div className="step-card">
            <div className="step-number">04</div>
            <h3>Resultados</h3>
            <p>Medimos el impacto y aseguramos el éxito de las estrategias.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Metodologia;
