import "./App.css";
import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./paginas/home/Home";
import Services from "./paginas/services/Services";
import AboutUs from "./paginas/aboutus/AboutUs";
import Pagina404 from "./paginas/pagina404/Pagina404";
import Terms from "./paginas/terms/Terms"
import Noticias from "./paginas/noticias/Noticias.jsx";

function App() {
  
  const location = useLocation();
  const navigate = useNavigate();
  

  

  useEffect(() => {
    // Manejo de hash en la URL 
    if (location.hash) {
      const targetId = location.hash.substring(1);
      // Primero ir al top instantáneamente
      window.scrollTo(0, 0);
      // Luego esperar a que la página cargue y hacer scroll suave a la sección
      const scrollToSection = () => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };
      // Aumentar el timeout para dar tiempo a que cargue todo
      const timeoutId = setTimeout(scrollToSection, 500);
      return () => clearTimeout(timeoutId);
    }
    // Manejo de state (para navegación desde otras páginas a sección específica)
    else if (location.state?.sectionId) {
      const targetId = location.state.sectionId;
      // Redirigir con hash para que funcione correctamente
      navigate(`${location.pathname}#${targetId}`, { replace: true });
    }
    // Scroll al top cuando cambia la ruta (sin hash ni state)
    else {
      window.scrollTo(0, 0);
    }
  }, [location, navigate]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/404" element={<Pagina404 />} />
        <Route path="*" element={<Pagina404 />} />
        <Route path="/terminos" element={<Terms />} />
        <Route path="/noticias" element={<Noticias />} />
      </Routes>
    </div>
  );
}

export default App;
