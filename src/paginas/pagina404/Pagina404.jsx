import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Pagina404.css";

const Pagina404 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const prev = document.title;
    document.title = "404 | ElectroPower";
    return () => {
      document.title = prev;
    };
  }, []);

  const goHome = () => navigate("/");
  const goServicios = () => navigate("/servicios");
  const goWhatsApp = () =>
    window.open("https://wa.me/5491163521258", "_blank", "noopener,noreferrer");

  return (
    <section className="notfound" aria-labelledby="nf-title">
      {/* Fondo con patrón y viñeta */}
      <div className="nf-bg" aria-hidden="true" />

      {/* Marca arriba a la izquierda */}
      <div className="nf-brand">ElectroPower</div>

      {/* Icono rayito */}
      <div className="nf-bolt" aria-hidden="true">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          className="nf-bolt-svg"
          role="img"
        >
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      </div>

      {/* Número 404 con glow y chispa */}
      <h1 id="nf-title" className="nf-404" aria-label="Error 404">
        <span className="nf-4">4</span>
        <span className="nf-0" aria-hidden="true">
          0
        </span>
        <span className="nf-4">4</span>
      </h1>

      {/* Subtítulo */}
      <p className="nf-subtitle">Ups, esta línea quedó sin energía.</p>

      {/* Botonera */}
      <div className="nf-actions">
        <button className="nf-btn nf-btn--primary" onClick={goHome}>
          Volver al inicio
        </button>
        <button className="nf-btn nf-btn--ghost" onClick={goServicios}>
          Servicios
        </button>
        <button className="nf-btn nf-btn--ghost" onClick={goWhatsApp}>
          Urgencias 24h
        </button>
      </div>
    </section>
  );
};

export default Pagina404;
