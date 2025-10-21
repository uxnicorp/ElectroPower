import { useState, useEffect } from 'react';
import imagenAbout from '../../assets/imagenabout.jpg';
import logo from '../../assets/logo.png';
import edenorBg from '../../assets/edenor.jpg';
import edesurBg from '../../assets/edesur.jpg';
import logoEdenor from '../../assets/logoedenor.png';
import logoEdesur from '../../assets/logoedesur.png';
import './About.css';

const About = () => {
  const [imageActive, setImageActive] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.image-wrapper')) {
        setImageActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleImageClick = (e) => {
    e.stopPropagation();
    setImageActive(!imageActive);
  };

  return (
    <section className="about" id="about">
      <div className="about-container">
        
        {/* Floating decorative dots */}
        <div className="about-decorative-dots">
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
          <span className="dot dot-3"></span>
          <span className="dot dot-4"></span>
          <span className="dot dot-5"></span>
        </div>

        {/* Hero Section con imagen y contenido */}
        <div className="about-hero">
          <div className="about-hero-content">
            <div className="about-subtitle">
              <svg className="subtitle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              Nuestra Historia
            </div>
            
            <h2 className="about-title">
              Energía, precisión y compromiso desde 2019
            </h2>

            <div className="about-text-content">
              <p className="about-text">
                <strong>ElectroPower</strong> nació en 2019 con el objetivo de brindar soluciones integrales en 
                instalaciones eléctricas para hogares, empresas e industrias. Con un equipo de técnicos especializados 
                y una visión orientada a la calidad, crecimos junto a nuestros clientes ofreciendo trabajos seguros, 
                eficientes y duraderos.
              </p>
              <p className="about-text">
                A lo largo de estos años, ampliamos nuestros servicios incorporando refrigeración, construcción y 
                mantenimiento general, adaptándonos a cada necesidad con profesionalismo y cercanía.
              </p>
              <p className="about-text">
                Hoy, somos aliados estratégicos de compañías líderes como <strong>Edenor S.A.</strong> y <strong>Edesur S.A.</strong>, 
                aportando energía a cada proyecto que emprendemos. 
              </p>
            </div>
          </div>

          <div className="about-hero-image">
            <div 
              className={`image-wrapper ${imageActive ? 'active' : ''}`}
              onClick={handleImageClick}
            >
              <img src={imagenAbout} alt="ElectroPower Team" className="about-image" />
              <div className="image-overlay-color"></div>
              <div className="image-overlay-blur">
                <img src={logo} alt="ElectroPower Logo" className="overlay-logo" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <div className="stat-icon-ring"></div>
              <svg className="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div className="stat-number">6+</div>
            <div className="stat-label">Años de trayectoria</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <div className="stat-icon-ring"></div>
              <svg className="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 11l3 3L22 4"/>
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
              </svg>
            </div>
            <div className="stat-number">250+</div>
            <div className="stat-label">Proyectos completados</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <div className="stat-icon-ring"></div>
              <svg className="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                <path d="M16 3.13a4 4 0 010 7.75"/>
              </svg>
            </div>
            <div className="stat-number">50+</div>
            <div className="stat-label">Clientes industriales</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <div className="stat-icon-ring"></div>
              <svg className="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div className="stat-number">100%</div>
            <div className="stat-label">Compromiso con la seguridad</div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="about-partners">
          <div className="partners-header">
            <span className="partners-badge">
              <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              Alianzas Estratégicas
            </span>
            <h3 className="partners-title">Confianza de empresas líderes del sector energético</h3>
            <p className="partners-description">
              Colaboramos con las principales distribuidoras eléctricas de Argentina, 
              garantizando calidad y cumplimiento en cada proyecto.
            </p>
          </div>
          
          <div className="partners-grid">
            <div 
              className="partner-card" 
              style={{ backgroundImage: `url(${edenorBg})` }}
            >
              <div className="partner-card-overlay"></div>
              <div className="partner-card-content">
                <img src={logoEdenor} alt="Edenor S.A." className="partner-logo" />
                <p className="partner-card-description">
                  Empresa Distribuidora y Comercializadora Norte
                </p>
                <div className="partner-card-tag">Partner Oficial</div>
              </div>
            </div>
            
            <div 
              className="partner-card"
              style={{ backgroundImage: `url(${edesurBg})` }}
            >
              <div className="partner-card-overlay"></div>
              <div className="partner-card-content">
                <img src={logoEdesur} alt="Edesur S.A." className="partner-logo" />
                <p className="partner-card-description">
                  Empresa Distribuidora Sur
                </p>
                <div className="partner-card-tag">Partner Oficial</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
