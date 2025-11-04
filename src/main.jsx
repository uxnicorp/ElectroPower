import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./paginas/services/Services.jsx";
import AboutUs from "./paginas/aboutus/AboutUs.jsx";
import ScrollToTop from "./componentes/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/nosotros" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
