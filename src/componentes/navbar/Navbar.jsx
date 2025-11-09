import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const goHome = () => {
    if (location.pathname !== "/") navigate("/");
    else window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
  };

  const goToAbout = () => {
    if (location.pathname === "/nosotros") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/nosotros");
    }
    closeMenu();
  };

  const goToServices = () => {
    if (location.pathname === "/servicios") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/servicios");
    }
    closeMenu();
  };

  const goToHowWeWork = () => {
    if (location.pathname !== "/") {
      navigate("/#howwework");
    } else {
      document
        .getElementById("howwework")
        ?.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  const goToWhyChoose = () => {
    if (location.pathname !== "/") {
      navigate("/#whychoose");
    } else {
      document
        .getElementById("whychoose")
        ?.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  const goToGallery = () => {
    if (location.pathname !== "/") {
      navigate("/#gallery");
    } else {
      document
        .getElementById("gallery")
        ?.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

 
  const goToNews = () => {
    if (location.pathname === "/noticias") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/noticias");
    }
    closeMenu();
  };

  const goToLocation = () => {
    if (location.pathname !== "/") {
      navigate("/#location");
    } else {
      document
        .getElementById("location")
        ?.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  const goToContact = () => {
    if (location.pathname !== "/") {
      navigate("/#contact");
    } else {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-brand" onClick={goHome}>
          <img src={logo} alt="ElectroPower Logo" className="brand-logo" />
          <span className="brand-name">ElectroPower</span>
        </div>

        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <div className="mobile-menu-header">
            <img
              src={logo}
              alt="ElectroPower Logo"
              className="mobile-menu-logo"
            />
            <span className="mobile-menu-brand">ElectroPower</span>
          </div>

          <li>
            <button onClick={goToAbout}>Nosotros</button>
          </li>
          <li>
            <button onClick={goToServices}>Servicios</button>
          </li>
          <li>
            <button onClick={goToHowWeWork}>¿Cómo Trabajamos?</button>
          </li>
          <li>
            <button onClick={goToWhyChoose}>¿Por Qué Elegirnos?</button>
          </li>
          <li>
            <button onClick={goToGallery}>Galería</button>
          </li>
          
          <li>
            <button onClick={goToNews}>Noticias</button>
          </li>

          <li>
            <button onClick={goToLocation}>Ubicación</button>
          </li>
          <li>
            <button onClick={goToContact} className="btn-contact">
              Contacto
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
