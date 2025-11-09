
import "./Noticias.css";
import Navbar from "../../componentes/navbar/Navbar.jsx";
import Footer from "../../componentes/footer/Footer.jsx";
import React, { useState, useEffect } from "react";

const Noticias = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  
  useEffect(() => {
    document.body.classList.add("page-noticias");
    return () => document.body.classList.remove("page-noticias");
  }, []);

  // Cerrar modal con tecla ESC
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && setSelectedImage(null);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  
  const galanImages = [
    {
      id: 1,
      src: "/grupogalan/honda-7kva.jpg",
      title: "Honda 7 kVA",
      description: "Grupo electrógeno monofásico",
    },
    {
      id: 2,
      src: "/grupogalan/honda-10kva.jpg",
      title: "Honda 10 kVA",
      description: "Grupo electrógeno monofásico",
    },
    {
      id: 3,
      src: "/grupogalan/honda-13kva.jpg",
      title: "Honda 13 kVA",
      description: "Cabinado con tablero automático",
    },
    {
      id: 4,
      src: "/grupogalan/honda-14kva.jpg",
      title: "Honda 14 kVA",
      description: "Trifásico con tablero automático",
    },
    {
      id: 5,
      src: "/grupogalan/honda-16kva.jpg",
      title: "Honda 16 kVA",
      description: "Monofásico y trifásico",
    },
  ];

  const openModal = (img) => setSelectedImage(img);
  const closeModal = () => setSelectedImage(null);

  return (
    <>
      <Navbar />

      <section className="noticias">
        <div className="noticias-container">
          {/* Header */}
          <div className="noticias-header">
            <div className="fusion-badge">FUSIÓN ESTRATÉGICA</div>

            <h1 className="title fade-in-up delay-1">
              ElectroPower + Grupo Galán
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
              <strong>Electropower</strong> y <strong>Grupo Galán</strong> unen
              su experiencia y capacidades para potenciar la comercialización,
              instalación y servicio integral de grupos electrógenos
              domiciliarios e industriales, abarcando un rango de potencias
              desde <strong>7 kVA hasta 500 kVA</strong>.
            </p>

            <p className="fade-in-up delay-5">
              Esta alianza estratégica surge con el objetivo de ofrecer un
              servicio más amplio, eficiente y profesional, integrando la
              trayectoria de Grupo Galán en el mercado domiciliario e industrial
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
                Conocé más sobre Grupo Galán →
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
                  aria-label="Grupo Galán"
                >
                  <img
                    src="/logos/galan.png"
                    alt="Logo de Grupo Galán"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Galería */}
          <div className="noticias-galeria">
            <h2 className="title fade-in-up delay-1">
              Modelos destacados de Grupo Galán
            </h2>

            <div className="news-divider fade-in-up delay-2">
              <span className="ndot ndot-left"></span>
              <span className="nline"></span>
              <span className="ndot ndot-right"></span>
            </div>

            <div className="galeria-grid">
              {galanImages.map((img, idx) => (
                <div
                  key={img.id}
                  className="galeria-item fade-in-up"
                  style={{ animationDelay: `${0.2 + idx * 0.08}s` }}
                  onClick={() => openModal(img)}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="galeria-overlay">
                    <h4>{img.title}</h4>
                    <p>{img.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal de imagen */}
          {selectedImage && (
            <div className="modal" onClick={closeModal}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="modal-close"
                  onClick={closeModal}
                  aria-label="Cerrar imagen"
                >
                  ✕
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  loading="lazy"
                  decoding="async"
                />
                <div className="modal-caption">
                  <h4>{selectedImage.title}</h4>
                  <p>{selectedImage.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Noticias;
