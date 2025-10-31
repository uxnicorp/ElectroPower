import "./Services.css";
import rayito from "../../assets/rayito.png";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../componentes/navbar/Navbar";
import Footer from "../../componentes/footer/Footer";
import WhatsAppButton from "../../componentes/whatsappbutton/WhatsAppButton";


const Services = () => {
  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Instalaciones Eléctricas",
      description:
        "Soluciones integrales en electricidad para proyectos residenciales, comerciales e industriales.",
      items: [
        "Instalaciones de alta, media y baja tensión aereas y subterráneas",
        "Diseño y montaje de tableros eléctricos",
        "Armado de pilar para medidores trifásicos/monofásicos",
        "Medición de puesta a tierra (jabalina)",
        "Diseño y colocación de luminaria",
        "Tendidos eléctricos",
        "Cambio de Factibilidad",
        "Reparaciones eléctricas",
      ],
      badge: "Especialidad",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "Climatización y Refrigeración",
      description:
        "Instalación, mantenimiento y reparaciones de sistemas de climatización para máximo confort.",
      items: [
        "Aires acondicionados split, multisplit y de ventana",
        "Sistemas de refrigeración industrial",
        "Cálculo de carga térmica personalizado",
        "Mantenimiento preventivo programado",
        "Reparación de equipos de todas las marcas",
        "Montaje especializado en altura",
      ],
      badge: "Confort",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M9 12H15M12 9V15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Venta de Materiales Eléctricos",
      description:
        "Comercialización de materiales eléctricos de primeras marcas con asesoramiento técnico.",
      items: [
        "Cables y conductores certificados",
        "Térmicas, disyuntores y protecciones",
        "Contactores, relés y automatización",
        "Cajas, conectores y accesorios",
        "Asesoramiento técnico personalizado",
        "Entrega rápida y stock permanente",
      ],
      badge: "Materiales",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 21H21M6 21V9L12 3L18 9V21M10 21V15H14V21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Construcción y Refacciones",
      description: "Servicios de construcción y remodelación",
      items: [
        "Remodelación completa de espacios",
        "Ampliaciones y construcción nueva",
        "Obras civiles con instalaciones integradas",
        "Diseño de iluminación arquitectónica",
        "Armado de pilar para medidores trifásicos/monofásicos",
      ],
      badge: "Integral",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect
            x="4"
            y="6"
            width="16"
            height="12"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M8 10H16M8 14H12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="16" cy="14" r="1" fill="currentColor" />
        </svg>
      ),
      title: "Transformadores",
      description:
        "Instalación, mantenimiento y asesoría en sistemas de transformación eléctrica.",
      items: [
        "Instalación de transformadores monofásicos y trifásicos",
        "Mantenimiento preventivo especializado",
        "Pruebas de rigidez dieléctrica",
        "Asesoramiento en distribución de potencia",
        "Proyectos industriales de media tensión",
        "Certificación de alta eficiencia energética",
        "Transformadores de rebaje de 33.000 a 13.200 V y de 13.200 a 380 V",
      ],
      badge: "Industrial",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.7 6.3C15.1 5.9 15.6 5.7 16.1 5.7C16.6 5.7 17.1 5.9 17.5 6.3C17.9 6.7 18.1 7.2 18.1 7.7C18.1 8.2 17.9 8.7 17.5 9.1L8.5 18.1C8.1 18.5 7.6 18.7 7.1 18.7C6.6 18.7 6.1 18.5 5.7 18.1C5.3 17.7 5.1 17.2 5.1 16.7C5.1 16.2 5.3 15.7 5.7 15.3L14.7 6.3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 11L13 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Media Tensión",
      description:
        "Servicios especializados en instalaciones de media tensión con personal certificado.",
      items: [
        "Tendido de líneas de media tensión aérea en 13,2 kV y 33 kV.",
        "Montaje de subestaciones transformadoras",
        "Pruebas y mediciones eléctricas",
        "Mantenimiento integral programado",
        "Inspecciones termográficas",
        "Cumplimiento de normativas vigentes",
      ],
      badge: "Expertos",
    },
  ];

  const location = useLocation();
  const navigate = useNavigate();

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
      "Hola! Me gustaría solicitar información sobre los servicios de ElectroPower."
    );
    const url = `https://wa.me/${phone}?text=${msg}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <span className="services-badge">Servicios Profesionales</span>
          <h2 className="services-title">Nuestros Servicios Especializados</h2>
          <div className="services-divider"></div>
          <p className="services-subtitle">
            En <strong>ElectroPower</strong> ofrecemos soluciones eléctricas
            completas para proyectos <strong>residenciales, comerciales e industriales.</strong>
            Con más de 6 años de experiencia, nuestro equipo de profesionales
            certificados garantiza calidad, seguridad y eficiencia en cada
            trabajo.
          </p>
          <p className="services-subtitle-secondary">
            Desde pequeñas reparaciones hasta grandes proyectos industriales,
            nos adaptamos a las necesidades específicas de cada cliente con
            tecnología de punta y cumplimiento normativo garantizado.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="service-badge">{service.badge}</div>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-list">
                {service.items.map((item, idx) => (
                  <li key={idx}>
                    <img src={rayito} alt="Check" className="item-rayito" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="services-footer">
          <div className="services-cta">
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

const ServicesPage = () => {
  return (
    <div className="app">
      <Navbar />
      <Services />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;
