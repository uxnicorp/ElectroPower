import './HowWeWork.css';
import electricistaWork from '../../assets/electricistawork.jpg';
import { useState } from 'react';

const HowWeWork = () => {
  const [openStep, setOpenStep] = useState(null);

  const toggleStep = (index) => {
    setOpenStep(openStep === index ? null : index);
  };

  const steps = [
    {
      number: '1',
      title: 'Evaluación y diagnóstico',
      description: 'Visitamos el lugar o analizamos los planos para definir el alcance del proyecto y detectar necesidades específicas.',
      badge: 'Consulta Gratuita',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 7V10L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: '2',
      title: 'Presupuesto transparente',
      description: 'Presentamos una propuesta detallada con materiales, tiempos y costos claros.',
      badge: 'Sin Cargo',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12H15M9 16H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: '3',
      title: 'Ejecución y control de calidad',
      description: 'Nuestro equipo técnico realiza la instalación o mantenimiento con los más altos estándares de seguridad.',
      badge: 'Certificado',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.7 6.3C15.6 5.4 16.9 5 18.2 5C19.5 5 20.8 5.4 21.7 6.3C22.6 7.2 23 8.5 23 9.8C23 11.1 22.6 12.4 21.7 13.3L12 23L2.3 13.3C1.4 12.4 1 11.1 1 9.8C1 8.5 1.4 7.2 2.3 6.3C3.2 5.4 4.5 5 5.8 5C7.1 5 8.4 5.4 9.3 6.3L12 9L14.7 6.3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6L14 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: '4',
      title: 'Verificación y garantía',
      description: 'Probamos cada conexión, certificamos el correcto funcionamiento y entregamos garantía sobre el trabajo realizado.',
      badge: 'Garantía Incluida',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: '5',
      title: 'Mantenimiento y soporte',
      description: 'Brindamos asistencia post-servicio, revisiones programadas y soporte ante emergencias eléctricas.',
      badge: 'Soporte 24/7',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section id="howwework" className="howwework">
      <div className="how-we-work-container">
        <div className="section-header">
          <span className="section-badge">Nuestro Proceso</span>
          <h2 className="how-we-work-title">¿Cómo trabajamos?</h2>
          <div className="how-we-work-divider"></div>
          <p className="how-we-work-subtitle">
            Nuestro enfoque combina planificación, ejecución precisa y control
            de calidad en cada etapa.
          </p>
        </div>

        <div className="content-wrapper">
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div
                key={index}
                className="step-item-wrapper"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div
                  className={`step-card ${openStep === index ? "active" : ""}`}
                >
                  <div
                    className="step-header"
                    onClick={() => toggleStep(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleStep(index);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-expanded={openStep === index}
                  >
                    <div className="step-header-content">
                      <div className="step-icon-wrapper">
                        <div className="step-icon">{step.icon}</div>
                        <span className="step-number">{step.number}</span>
                      </div>
                      <h3 className="step-title">{step.title}</h3>
                    </div>
                    <div className="step-header-right">
                      <div className="step-badge">{step.badge}</div>
                      <div className="accordion-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={openStep === index ? "rotated" : ""}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`step-content ${
                      openStep === index ? "open" : ""
                    }`}
                  >
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="step-arrow">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5L12 19M12 19L19 12M12 19L5 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="image-section">
            <div className="image-container">
              <img
                src={electricistaWork}
                alt="Electricista profesional trabajando"
                className="work-image"
              />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h3 className="overlay-title">Profesionales Certificados</h3>
                  <p className="overlay-text">
                    Más de 6 años de experiencia garantizan resultados de
                    calidad
                  </p>
                </div>
              </div>
            </div>
            <div className="quality-badges">
              <div className="quality-item">
                <div className="quality-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="quality-text">Profesionales Certificados</span>
              </div>
              <div className="quality-item">
                <div className="quality-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="quality-text">Seguridad Garantizada</span>
              </div>
              <div className="quality-item">
                <div className="quality-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="quality-text">
                  Equipos de Última Generación
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
