// src/paginas/noticias/Noticias.jsx
import "./Noticias.css";
import Navbar from "../../componentes/navbar/Navbar.jsx";
import Footer from "../../componentes/footer/Footer.jsx";
import React, { useEffect } from "react";
import WhatsAppButton from "../../componentes/whatsappbutton/WhatsAppButton.jsx";
import rayito from "../../assets/rayito.png"; 

const gruposElectrogenos = [
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
    title: "Honda 7 Kva",
    description: "Grupo Electrógeno",
    items: [
      "Tipo de Motor: Honda GX390 - OHV 4 Tiempos - Refrigerado por aire",
      "Cilindrada: 389 cm3",
      "Potencia Neta: 11,7 HP (8,7 Kw) a 3600 rpm",
      "Encendido: Transistorizado",
      "Arranque: Eléctricorico",
      "Frecuencia C.A.: 50 Hz.",
      "Voltaje C.A.: 220 V",
      "Potencia Máxima C.A.: 7 kVA",
      "Potencia Nominal C.A.: 6 kVA",
      "Salida de C.C.: Si",
      "Chapa: Galvanizada",
      "Paneles: Insonorizados e ignífugos",
      "Pintura: Polvo horneado",
      "Ancho, Largo, Alto, Peso: 1050 mm, 660 mm, 765 mm, 190 Kg",
      "Lógica de control y medición: DKG 207 / Opcional Deepsea 4520 o similar",
      "Cargador de batería tipo flote: 4A 12V",
      "Contactores: 26 Amper",
      "Regulación de voltaje: Compound",
      "Indicación: Voltímetro - Amperímetro - Frecuencímetro - Cuenta hs Digital",
      "Protección C.A.: Termomagnética",
      "Consumo de combustible (gas natural): 3.3 metros/hora (caudal máximo)",
      "Calorías aproximadas: 29 kCal",
      "Sistema de alimentación: Regulador de presión proporcional cero por demanda",
      "Sistema de seguridad: Solenoide de corte - Jefferson Mod. 1335 c/ bob. de continua",
      "Capacidad de aceite: 1,9 Lts.",
      "Alerta de aceite: Si",
    ],
    badge: "Monofásico",
  },
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
    title: "Honda 10 Kva",
    description: "Grupo Electrógeno",
    items: [
      "Tipo de Motor: GX630 - OHV 4 Tiempos - Refrigerado por aire",
      "Cilindrada: 614 cm3",
      "Potencia Neta: 21 HP (15,5 Kw) a 3600 rpm",
      "Encendido: Transistorizado",
      "Arranque: Eléctrico",
      "Frecuencia C.A.: 50 Hz.",
      "Voltaje C.A.: 220 V",
      "Potencia Máxima C.A.: 10 KVA",
      "Potencia Nominal C.A.: 8 KVA",
      "Salida de C.C.: No",
      "Chapa: Galvanizada",
      "Paneles: Insonorizados e ignífugos",
      "Pintura: Polvo horneado",
      "Ancho, Largo, Alto, Peso: 600 mm, 800 mm, 850 mm, 120 Kg",
      "Lógica de control y medición: DKG 207 / Opcional Deepsea 4520",
      "Cargador de batería tipo flote: 10A 12V",
      "Contactores: 26 Ampere",
      "Regulación de voltaje: Compound",
      "Indicación: Voltímetro - Amperímetro - Frecuencímetro",
      "Protección C.A.: Termomagnética",
      "Capacidad de combustible: 22 lts.",
      "Consumo Específico de Combustible: 5,5 lts. /hs.",
      "Capacidad de aceite: 1,8 lts.",
      "Eco Throttle: No",
      "Indicador Nivel de Combustible: No",
      "Alerta de aceite: Si",
      "Salida C.C.: No",
      "Regulador de voltaje: Compound",
      "Protección C.A.: Fusible de reposición manual",
    ],
    badge: "Monofásico",
  },
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
    title: "Honda 13 Kva",
    description:
      "Grupo Electrógeno - Cabinado, a gas con tablero de transferencia automático",
    items: [
      "Tipo de Motor: GX690 - OHV 4 Tiempos - Refrigerado por aire",
      "Cilindrada: 688 cm3",
      "Potencia Neta: 22,1 HP (16,5 Kw) a 3600 rpm",
      "Encendido: CDI",
      "Arranque: Eléctrico",
      "Frecuencia C.A.: 50 Hz.",
      "Voltaje C.A.: 220 V",
      "Potencia Máxima C.A.: 13 KVA",
      "Potencia Nominal C.A.: 10,4 KVA",
      "Capacidad de aceite: 1,8 lts.",
      "Chapa: Galvanizada",
      "Para intemperie: Si",
      "Pintura: Polvo horneado",
      "Ancho, Largo, Alto, Peso: 1200 mm, 660 mm, 810 mm, 215 Kg",
      "Lógica de control y medición: DKG 207 / Opcional Deepsea 4520 o similar",
      "Cargador de batería tipo flote: 4A 12V",
      "Contactores: 26 Ampere",
      "Regulación de voltaje: Compound",
      "Indicaciones: Voltaje de línea, voltaje de grupo y frecuentímetro",
      "Protección C.A.: Termomagnética",
      "Consumo de gas: 5.78 metros/hora (caudal máximo)",
      "Alerta de Aceite: Si",
      "Sistema de alimentación: Regulador de presión proporcional cero por demanda",
      "Sistema de seguridad: Solenoide de corte – Jefferson Mod. 1335 c/ bob. de continua",
      "Indicaciones: Voltaje de línea, voltaje de grupo y frecuentímetro",
      "Protección C.A.: Fusible térmico de reposición manual",
    ],
    badge: "Monofásico",
  },
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
    title: "Honda 14 Kva",
    description:
      "Grupo Electrógeno - Cabinado, a gas con tablero de transferencia automático",
    items: [
      "Tipo de Motor: GX690 - OHV 4 Tiempos - Refrigerado por aire",
      "Cilindrada: 688 cm3",
      "Potencia Neta: 22,1 HP (16,5 Kw) a 3600 rpm",
      "Encendido: CDI",
      "Arranque: Eléctrico",
      "Frecuencia C.A.: 50 Hz.",
      "Voltaje C.A.: 380/ 220 V",
      "Potencia Máxima C.A.: 14 KVA",
      "Potencia Nominal C.A.: 11.5 KVA",
      "Capacidad de aceite: Si",
      "Chapa: Galvanizada",
      "Para intemperie: Insonorizados e ignífugos",
      "Pintura: Polvo horneado",
      "Ancho, Largo, Alto, Peso: 1200 mm, 660 mm, 810 mm, 215 Kg",
      "Lógica de control y medición: DKG 207 / Opcional Deepsea 4520",
      "Cargador de batería tipo flote: 4A 12V",
      "Contactores: 26 Ampere",
      "Regulación de voltaje: Compound",
      "Indicación: Voltaje de línea, voltaje de grupo y frecuentímetro",
      "Protección C.A.: Termomagnética",
      "Consumo de combustible (gas natural): 5.78 metros/hora (caudal máximo)",
      "Alerta de Aceite: Si",
      "Salida C.C.: Regulador de presión proporcional “cero” por demanda",
      "Regulador de voltaje: Solenoide de corte - Jefferson Mod. 1335 c/bob. de cont.",
      "Capacidad de aceite: 1,8 lts",
      "Protección C.A.: Si",
    ],
    badge: "Trifásico",
  },
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
    title: "Honda 16 Kva",
    description:
      "Grupo Electrógeno - Cabinado, a gas con tablero de transferencia automático",
    items: [
      "Tipo de Motor: GX800 - OHV 4 Tiempos - Refrigerado por aire",
      "Cilindrada: 788 cm3",
      "Potencia Neta: 26 HP ",
      "Encendido: CDI",
      "Frecuencia C.A.: 50 Hz.",
      "Voltaje C.A.: 380/ 220 V",
      "Potencia Máxima C.A.: 16 KVA",
      "Potencia Nominal C.A.: 13.5 KVA",
      "Chapa: Galvanizada",
      "Para intemperie: Insonorizados e ignífugos",
      "Pintura: Polvo horneado",
      "Ancho, Largo, Alto, Peso: 1200 mm, 660 mm, 810 mm, 215 Kg",
      "Lógica de control y medición: DKG 207 ",
      "Cargador de batería tipo flote: 4A 12V",
      "Contactores: 26 Ampere",
      "Regulación de voltaje: Compound",
      "Indicación: Voltaje de línea, voltaje de grupo y frecuentímetro",
      "Protección C.A.: Termomagnética",
      "Consumo de combustible (gas natural): 5.78 metros/hora (caudal máximo)",
      "Alerta de Aceite: Si",
      "Seguridad Gas: Regulador de presión proporcional “cero” por demanda",
      "Incluye: Solenoide de corte – Jefferson Mod. 1335 c/ bob. de continua",
      "Capacidad de aceite: 1,8 lts",
      "Aviso de sevicio y cuentas horas: Si",
    ],
    badge: "Trifásico",
  },
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
    title: "Honda 16 Kva",
    description:
      "Grupo Electrógeno - Cabinado, a gas con tablero de transferencia automático",
    items: [
      "Tipo de Motor: GX800 - OHV 4 Tiempos - Refrigerado por aire",
      "Cilindrada: 788 cm3",
      "Potencia Neta: 26 HP ",
      "Encendido: CDI",
      "Frecuencia C.A.: 50 Hz.",
      "Voltaje C.A.: 380/ 220 V",
      "Potencia Máxima C.A.: 16 KVA",
      "Potencia Nominal C.A.: 13.5 KVA",
      "Chapa: Galvanizada",
      "Para intemperie: Insonorizados e ignífugos",
      "Pintura: Polvo horneado",
      "Ancho, Largo, Alto, Peso: 1200 mm, 660 mm, 810 mm, 215 Kg",
      "Lógica de control y medición: DKG 207 ",
      "Cargador de batería tipo flote: 4A 12V",
      "Contactores: 26 Ampere",
      "Regulación de voltaje: Compound",
      "Indicación: Voltaje de línea, voltaje de grupo y frecuentímetro",
      "Protección C.A.: Termomagnética",
      "Consumo de combustible (gas natural): 5.78 metros/hora (caudal máximo)",
      "Alerta de Aceite: Si",
      "Seguridad Gas: Regulador de presión proporcional “cero” por demanda",
      "Incluye: Solenoide de corte – Jefferson Mod. 1335 c/ bob. de continua",
      "Capacidad de aceite: 1,8 lts",
      "Aviso de sevicio y cuentas horas: Si",
    ],
    badge: "Monofásico",
  },
];

const Noticias = () => {

  useEffect(() => {
    document.body.classList.add("page-noticias");
    return () => document.body.classList.remove("page-noticias");
  }, []);

  return (
    <>
      <Navbar />

      <section className="noticias">
        <div className="noticias-container">
          {/* Header */}
          <div className="noticias-header">
            <div className="fusion-badge">FUSIÓN ESTRATÉGICA</div>

            <h1 className="title fade-in-up delay-1">
              ElectroPower + Grupo Galan
            </h1>

            <div className="news-divider fade-in-up delay-2">
              <span className="ndot ndot-left"></span>
              <span className="nline"></span>
              <span className="ndot ndot-right"></span>
            </div>

            <p className="subtitle fade-in-up delay-3">
              Experiencia combinada en{" "}
              <strong>energía, precisión y respaldo técnico</strong> para
              ofrecer soluciones eléctricas confiables y completas en toda la
              Argentina.
            </p>
          </div>

          <div className="noticias-content">
            <p className="fade-in-up delay-4">
              <strong>Electropower</strong> y <strong>Grupo Galan</strong> unen
              su experiencia y capacidades para potenciar la comercialización,
              instalación y servicio integral de grupos electrógenos
              domiciliarios e industriales, abarcando un rango de potencias
              desde <strong>7 kVA hasta 500 kVA</strong>.
            </p>

            <p className="fade-in-up delay-5">
              Esta alianza estratégica surge con el objetivo de ofrecer un
              servicio más amplio, eficiente y profesional, integrando la
              trayectoria de Grupo Galan en el mercado domiciliario e industrial
              con la sólida estructura técnica y operativa de Electropower.
            </p>

            <div className="lista-bloque fade-in-up delay-6">
              <h3>Juntos brindamos soluciones integrales en:</h3>
              <ul>
                <li>Venta y alquiler de grupos electrógenos</li>
                <li>Instalación y puesta en marcha</li>
                <li>
                  Servicio postventa y mantenimiento preventivo/correctivo
                </li>
                <li>Reparación integral de equipos</li>
                <li>Asesoramiento técnico personalizado</li>
              </ul>
            </div>

            <p className="fade-in-up delay-7">
              La unión de ambas empresas representa un paso firme hacia la
              consolidación de un
              <strong> servicio energético confiable</strong>, con cobertura
              integral y atención adaptada a cada necesidad, garantizando{" "}
              <strong>calidad, compromiso y respaldo técnico</strong> en cada
              proyecto.
            </p>

            {/* Enlace a Grupo Galán */}
            <div className="noticias-link fade-in-up delay-8">
              <a
                href="http://grupogalan.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-galan"
              >
                Conocé más sobre Grupo Galan →
              </a>
            </div>

            <div className="noticias-link fade-in-up delay-8">
              {/* Logos de marcas */}
              <div className="partners-logos">
                <a
                  href="/"
                  className="logo-card"
                  aria-label="ElectroPower"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <img
                    src="/logos/electropower.png"
                    alt="Logo de ElectroPower"
                    loading="lazy"
                    decoding="async"
                  />
                </a>

                <a
                  href="http://grupogalan.com.ar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logo-card"
                  aria-label="Grupo Galan"
                >
                  <img
                    src="/logos/galan.png"
                    alt="Logo de Grupo Galan"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Título */}
          <div className="noticias-galeria">
            <h2 className="title fade-in-up delay-1">
              Modelos destacados de Grupo Galan
            </h2>

            <div className="news-divider fade-in-up delay-2">
              <span className="ndot ndot-left"></span>
              <span className="nline"></span>
              <span className="ndot ndot-right"></span>
            </div>
          </div>

          {/* Cards */}

          <div className="noticias-grid">
            {gruposElectrogenos.map((gruposElectrogenos, index) => (
              <div
                key={index}
                className="noticias-card"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="noticias-badge">{gruposElectrogenos.badge}</div>
                <div className="noticias-icon">{gruposElectrogenos.icon}</div>
                <h3 className="noticias-title">{gruposElectrogenos.title}</h3>
                <p className="noticias-description">
                  {gruposElectrogenos.description}
                </p>
                <ul className="noticias-list">
                  {gruposElectrogenos.items.map((item, idx) => (
                    <li key={idx}>
                      <img src={rayito} alt="Check" className="item-rayito" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Imagenes Grupo Galan */}
          <div className="noticias-banners">
            <div className="noticias-banner">
              <img
                src="/grupogalan/electrogeno1.jpg"
                alt="Grupo Electrógeno"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="noticias-banner">
              <img
                src="/grupogalan/electrogeno2.png"
                alt="Grupo Electrógeno"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />

      <Footer />
    </>
  );
};

export default Noticias;
