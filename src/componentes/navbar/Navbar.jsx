import { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand" onClick={scrollToTop}>
          <img src={logo} alt="ElectroPower Logo" className="brand-logo" />
          <span className="brand-name">ElectroPower</span>
        </div>

        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><button onClick={() => scrollToSection('about')}>Nosotros</button></li>
          <li><button onClick={() => scrollToSection('services')}>Servicios</button></li>
          <li><button onClick={() => scrollToSection('howwework')}>¿Cómo Trabajamos?</button></li>
          <li><button onClick={() => scrollToSection('whychoose')}>¿Por Qué Elegirnos?</button></li>
          <li><button onClick={() => scrollToSection('projects')}>Proyectos</button></li>
          <li><button onClick={() => scrollToSection('location')}>Ubicación</button></li>
          <li><button onClick={() => scrollToSection('contact')} className="btn-contact">Contacto</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
