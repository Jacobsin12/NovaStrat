import React from 'react';
import '../styles/Contacto.css';

export function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Nova Strat Consulting. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
