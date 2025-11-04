import './App.css'
import Navbar from './componentes/navbar/Navbar'
import Hero from './componentes/hero/Hero'
import HowWeWork from './componentes/howwework/HowWeWork'
import WhyChoose from './componentes/whychoose/WhyChoose'
import Projects from './componentes/projects/Projects'
import Gallery from './componentes/gallery/Gallery'
import Location from './componentes/location/Location'
import Contact from './componentes/contact/Contact'
import Footer from './componentes/footer/Footer'
import WhatsAppButton from './componentes/whatsappbutton/WhatsAppButton'
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


function App() {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Manejo de hash en la URL (ej: /#contact)
    if (location.hash) {
      const targetId = location.hash.substring(1); // quitar el #
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
      <Navbar />
      <Hero />     
      <HowWeWork />
      <WhyChoose />
      <Projects />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
