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
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
    // Manejo de state (para compatibilidad)
    else if (location.state?.sectionId) {
      const targetId = location.state.sectionId;
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 0);
        navigate(location.pathname, { replace: true, state: {} });
      }
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
        <Route path="/terms" element={<Terms />} />
        <Route path="/noticias" element={<Noticias />} />
      </Routes>
    </div>
  );
}

export default App;
