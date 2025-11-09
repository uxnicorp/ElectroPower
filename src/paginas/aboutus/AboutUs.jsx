import { useState, useEffect } from 'react';
import "./AboutUs.css";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../componentes/navbar/Navbar";
import Footer from "../../componentes/footer/Footer";
import WhatsAppButton from "../../componentes/whatsappbutton/WhatsAppButton";
import imagenAbout from '../../assets/imagenabout.jpg';
import logo from '../../assets/logo.png';
import edenorBg from '../../assets/edenor.jpg';
import edesurBg from '../../assets/edesur.jpg';
import logoEdenor from '../../assets/logoedenor.png';
import logoEdesur from '../../assets/logoedesur.png';
import logoGalan from '../../assets/grupogalan.png';
import logoQuest from '../../assets/logoquest.png';
import logoYPF from '../../assets/logoypg.png';
import logoNovaPaking from '../../assets/logonovapaking.png';
import logoAkapol from '../../assets/logoakapol.png';
import logoElena from '../../assets/logoelena.jpg';
import logoPraga from '../../assets/logopraga.png';
import logoSmata from '../../assets/logosmata.png';
import logoTerranova from '../../assets/logoterranova.png';

const AboutUs = () => {
  const [imageActive, setImageActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const goToContact = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { sectionId: "contact" } });
    } else {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    const phone = "5491163521258";
    const msg = encodeURIComponent(
      "Hola! Me gustaría solicitar información sobre ElectroPower."
    );
    const url = `https://wa.me/${phone}?text=${msg}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const consultarWhatsApp = (serviceTitle) => {
    const phone = "5491163521258";
    const msg = encodeURIComponent(
      `Hola! Quisiera saber más información sobre ${serviceTitle}.`
    );
    const url = `https://wa.me/${phone}?text=${msg}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const consultarEmail = (serviceTitle) => {
    const email = "electropowerconstrucciones@gmail.com";
    const subject = encodeURIComponent(`Consulta sobre ${serviceTitle}`);
    const body = encodeURIComponent(
      `Hola! Quisiera saber más información sobre ${serviceTitle}.\n\nQuedo atento a su respuesta.\n\nSaludos.`
    );
    const url = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = url;
  };

  return (
    <section className="aboutus" id="aboutus">
      <div className="aboutus-container">
        {/* Floating decorative dots */}
        <div className="aboutus-decorative-dots">
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
          <span className="dot dot-3"></span>
          <span className="dot dot-4"></span>
          <span className="dot dot-5"></span>
        </div>

        <div className="aboutus-header">
          <span className="aboutus-badge">Nuestra Historia</span>
        </div>

        {/* Hero Section con imagen y contenido */}
        <div className="aboutus-hero">
          <div className="aboutus-hero-content">
            <h2 className="aboutus-title">
              Energía, precisión y compromiso desde 2019
            </h2>
            <div className="aboutus-divider"></div>

            <div className="aboutus-subtitle">
              <svg
                className="subtitle-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              Nuestra Historia
            </div>

            <div className="aboutus-text-content">
              <p className="aboutus-text">
                <strong>Electropower</strong> fue fundada por{" "}
                <strong>Ángel Saldaño</strong>, profesional con amplia
                experiencia en empresas de primer nivel como Farmaco Argentina,
                Laboratorios Roche, Roemmers y Procter & Gamble. Durante más de
                trece años formó parte de <strong>Edenor</strong>,
                desempeñándose en áreas clave como calidad de producto,
                reclamos, media tensión y reparaciones.
              </p>
              <p className="aboutus-text">
                En <strong>2019</strong>, Electropower inicia su camino
                independiente, ampliando su alcance y consolidándose como una
                empresa que combina trayectoria técnica, compromiso y servicio
                integral. Desde entonces, se ha especializado en brindar
                soluciones eléctricas, de climatización y construcción con un
                enfoque en la innovación en sistemas eléctricos de baja y media
                tensión.
              </p>
            </div>
          </div>

          <div className="aboutus-hero-image">
            <div
              className={`image-wrapper ${imageActive ? "active" : ""}`}
              onClick={handleImageClick}
            >
              <img
                src={imagenAbout}
                alt="ElectroPower Team"
                className="aboutus-image"
              />
              <div className="image-overlay-color"></div>
              <div className="image-overlay-blur">
                <img
                  src={logo}
                  alt="ElectroPower Logo"
                  className="overlay-logo"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Qué Hacemos Section */}
        <div className="aboutus-services-section">
          <div className="services-section-header">
            <div className="services-section-badge">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="badge-icon-svg"
              >
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
              Qué Hacemos
            </div>
            <h3 className="services-section-title">
              Soluciones integrales con calidad garantizada
            </h3>
            <p className="services-section-description">
              Brindamos soluciones integrales en los rubros eléctrico, edilicio
              y de climatización, garantizando calidad, seguridad y cumplimiento
              normativo.
            </p>
          </div>

          <div className="services-highlights-grid">
            <div className="service-highlight-card">
              <div className="service-highlight-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
                </svg>
              </div>
              <h4>Media Tensión</h4>
              <ul>
                <li>Líneas aéreas 13,2 kV y 33 kV</li>
                <li>Transformadores de rebaje</li>
                <li>Líneas subterráneas</li>
              </ul>
              <div className="service-card-actions">
                <button
                  className="btn-service-whatsapp"
                  onClick={() => consultarWhatsApp("Media Tensión")}
                >
                  💬 Consultar por WhatsApp
                </button>
                <button
                  className="btn-service-email"
                  onClick={() => consultarEmail("Media Tensión")}
                >
                  ✉️ Consultar por Mail
                </button>
              </div>
            </div>

            <div className="service-highlight-card">
              <div className="service-highlight-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h4>Iluminación & Instalaciones</h4>
              <ul>
                <li>Luminarias en barrios cerrados</li>
                <li>Pilares para medidores</li>
                <li>Tableros eléctricos</li>
              </ul>
              <div className="service-card-actions">
                <button
                  className="btn-service-whatsapp"
                  onClick={() =>
                    consultarWhatsApp("Iluminación & Instalaciones")
                  }
                >
                  💬 Consultar por WhatsApp
                </button>
                <button
                  className="btn-service-email"
                  onClick={() => consultarEmail("Iluminación & Instalaciones")}
                >
                  ✉️ Consultar por Mail
                </button>
              </div>
            </div>

            <div className="service-highlight-card">
              <div className="service-highlight-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h4>Certificaciones & Seguridad</h4>
              <ul>
                <li>Medición puesta a tierra</li>
                <li>Certificaciones DCI</li>
                <li>Urgencias 24 hs</li>
              </ul>
              <div className="service-card-actions">
                <button
                  className="btn-service-whatsapp"
                  onClick={() =>
                    consultarWhatsApp("Certificaciones & Seguridad")
                  }
                >
                  💬 Consultar por WhatsApp
                </button>
                <button
                  className="btn-service-email"
                  onClick={() => consultarEmail("Certificaciones & Seguridad")}
                >
                  ✉️ Consultar por Mail
                </button>
              </div>
            </div>

            <div className="service-highlight-card">
              <div className="service-highlight-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 21H21M6 21V9L12 3L18 9V21M10 21V15H14V21" />
                </svg>
              </div>
              <h4>Climatización & Construcción</h4>
              <ul>
                <li>Aires acondicionados</li>
                <li>Obras civiles y comerciales</li>
                <li>Plomería, gas y albañilería</li>
              </ul>
              <div className="service-card-actions">
                <button
                  className="btn-service-whatsapp"
                  onClick={() =>
                    consultarWhatsApp("Climatización & Construcción")
                  }
                >
                  💬 Consultar por WhatsApp
                </button>
                <button
                  className="btn-service-email"
                  onClick={() => consultarEmail("Climatización & Construcción")}
                >
                  ✉️ Consultar por Mail
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cobertura Section */}
        <div className="coverage-section">
          <div className="coverage-content">
            <div className="coverage-badge">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Cobertura Nacional
            </div>
            <h3 className="coverage-title">Presencia en todo el país</h3>
            <p className="coverage-description">
              Electropower ofrece sus servicios en todo el territorio argentino,
              garantizando la misma calidad y compromiso sin importar la
              ubicación del cliente.
            </p>
            <div className="clients-logos-grid">
              <div className="client-logo-card">
                <img
                  src={logoQuest}
                  alt="Colegio Quest"
                  className="client-logo"
                />
              </div>
              <div className="client-logo-card">
                <img
                  src={logoYPF}
                  alt="YPF"
                  className="client-logo client-logo-ypf"
                />
              </div>
              <div className="client-logo-card">
                <img
                  src={logoNovaPaking}
                  alt="Nova Parking"
                  className="client-logo"
                />
              </div>
              <div className="client-logo-card">
                <img src={logoAkapol} alt="Akapol" className="client-logo" />
              </div>
              <div className="client-logo-card">
                <img
                  src={logoElena}
                  alt="Elena Pardas Administraciones"
                  className="client-logo client-logo-elena"
                />
              </div>
              <div className="client-logo-card">
                <img src={logoPraga} alt="Praga" className="client-logo" />
              </div>
              <div className="client-logo-card">
                <img src={logoSmata} alt="SMATA" className="client-logo" />
              </div>
              <div className="client-logo-card">
                <img
                  src={logoTerranova}
                  alt="Terranova"
                  className="client-logo"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="aboutus-stats">
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <div className="stat-icon-ring"></div>
              <svg
                className="stat-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div className="stat-number">6+</div>
            <div className="stat-label">Años de trayectoria</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <div className="stat-icon-ring"></div>
              <svg
                className="stat-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
            </div>
            <div className="stat-number">250+</div>
            <div className="stat-label">Proyectos completados</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <div className="stat-icon-ring"></div>
              <svg
                className="stat-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>
            <div className="stat-number">50+</div>
            <div className="stat-label">Clientes industriales</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <div className="stat-icon-ring"></div>
              <svg
                className="stat-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className="stat-number">100%</div>
            <div className="stat-label">Compromiso con la seguridad</div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="aboutus-partners">
          <div className="partners-header">
            <span className="partners-badge">
              <svg
                className="badge-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Alianzas Estratégicas
            </span>
            <h3 className="partners-title">
              Confianza de empresas líderes del sector energético
            </h3>
            <p className="partners-description">
              Colaboramos con las principales distribuidoras eléctricas de
              Argentina y empresas del sector, garantizando calidad y
              cumplimiento en cada proyecto.
            </p>
            <p className="partners-description">
              Habilitación para adquirir medidor de luz con las Compañías
              Eléctricas <strong>Edenor y Edesur</strong>
            </p>
            <div className="galan-alliance-highlight">
              <div className="alliance-year">En 2025</div>
              <p className="alliance-text">
                <strong>Electropower y Grupo Galán</strong> establecieron una
                alianza estratégica para potenciar la comercialización,
                instalación y servicio integral de grupos electrógenos (7 kVA -
                500 kVA), combinando trayectoria comercial con solidez técnica y
                operativa.
              </p>
            </div>
          </div>

          <div className="partners-grid">
            <div
              className="partner-card"
              style={{ backgroundImage: `url(${edenorBg})` }}
            >
              <div className="partner-card-overlay"></div>
              <div className="partner-card-content">
                <img
                  src={logoEdenor}
                  alt="Edenor S.A."
                  className="partner-logo"
                />
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
                <img
                  src={logoEdesur}
                  alt="Edesur S.A."
                  className="partner-logo"
                />
                <p className="partner-card-description">
                  Empresa Distribuidora Sur
                </p>
                <div className="partner-card-tag">Partner Oficial</div>
              </div>
            </div>

            <div
              className="partner-card partner-card-galan"
              style={{
                background: "linear-gradient(180deg, #000000 0%, #3a3a3a 100%)",
              }}
            >
              <div className="partner-card-overlay-yellow"></div>
              <div className="new-badge">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="new-badge-icon"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Nueva Alianza
              </div>
              <div className="partner-card-content">
                <img
                  src={logoGalan}
                  alt="Grupo Galán"
                  className="partner-logo partner-logo-galan"
                />

                <p className="partner-card-description partner-card-description-galan">
                  Fabricación de Grupos Electrógenos y Servicios Industriales
                </p>
                <div className="partner-card-tag partner-card-tag-yellow">
                  Partner Oficial
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="aboutus-footer">
          <div className="aboutus-cta">
            <h3 className="cta-title">
              ¿Listo para comenzar tu proyecto con nosotros?
            </h3>
            <p className="cta-description">
              Contactanos hoy y obtené asesoramiento profesional sin cargo. Te
              ayudamos a encontrar la mejor solución para tus necesidades.
            </p>
            <div className="cta-buttons">
              <button className="btn-cta-primary" onClick={goToContact}>
                📞 Solicitar Cotización
              </button>
              <button className="btn-cta-secondary" onClick={openWhatsApp}>
                💬 Consultar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutUsPage = () => {
  return (
    <div className="app">
      <Navbar />
      <AboutUs />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutUsPage;
