import React from 'react';
import './WhyChoose.css';

const WhyChoose = () => {
  const features = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Experiencia comprobada',
      description: 'Más de 6 años brindando soluciones eléctricas en todo Buenos Aires, trabajando junto a empresas de referencia como Edenor S.A. y Edesur S.A.'
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Servicios integrales',
      description: 'Desde instalaciones eléctricas de baja, media y alta tensión, hasta refrigeración, transformadores, construcción y renovación de espacios. Un solo equipo para todo.'
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Calidad y seguridad garantizadas',
      description: 'Cumplimos con todas las normas eléctricas vigentes y utilizamos materiales certificados. La seguridad del cliente y del equipo es nuestra prioridad.'
    },
    {
      id: 4,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Cercanía y compromiso',
      description: 'Acompañamos a cada cliente en todo el proceso, ofreciendo asesoramiento técnico y soluciones adaptadas a cada necesidad.'
    },
    {
      id: 5,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Innovación constante',
      description: 'Invertimos en herramientas, capacitación y tecnología para ofrecer un servicio eficiente, moderno y preparado para los desafíos actuales.'
    },
    {
      id: 6,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Proyectos certificados',
      description: 'Entregamos documentación técnica completa y certificaciones oficiales en cada trabajo. Cumplimiento normativo garantizado para tu tranquilidad.'
    }
  ];

  return (
    <section className="whychoose-section" id="whychoose">
      <div className="whychoose-container">
        <div className="whychoose-header">
          <span className="whychoose-badge">¿Por qué elegirnos?</span>
          <h2 className="whychoose-title">¿Por qué elegir ElectroPower?</h2>
          <h3 className="whychoose-subtitle">Confianza, experiencia y soluciones a medida</h3>
          <div className="whychoose-divider"></div>
          <p className="whychoose-intro">
            En ElectroPower entendemos que cada proyecto —grande o pequeño— necesita más que solo instalaciones: 
            requiere precisión, compromiso y un equipo que sepa lo que hace.
            Por eso, combinamos experiencia técnica con un trato humano y cercano, ofreciendo resultados 
            confiables para hogares, comercios e industrias.
          </p>
        </div>

        <div className="whychoose-pillars">
          <div className="pillars-header">
            <div className="pillars-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
            </div>
            <h4 className="pillars-title">Pilares de nuestra diferencia</h4>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={feature.id} className="feature-card">
                <div className="feature-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">{feature.icon}</div>
                </div>
                <h5 className="feature-title">{feature.title}</h5>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-card-decoration"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="whychoose-bottom-divider"></div>
    </section>
  );
};

export default WhyChoose;
