import './App.css'
import Navbar from './componentes/navbar/Navbar'
import Hero from './componentes/hero/Hero'
import About from './componentes/about/About'
import HowWeWork from './componentes/howwework/HowWeWork'
import WhyChoose from './componentes/whychoose/WhyChoose'
import Projects from './componentes/projects/Projects'
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
    if (location.state?.sectionId) {
      const targetId = location.state.sectionId; // ej: 'about'
      const el = document.getElementById(targetId);
      if (el) {
        // esperar al render para scrollear suave
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 0);
        // limpiar el state para que F5 no repita el scroll
        navigate(location.pathname, { replace: true, state: {} });
      }
    }
  }, [location, navigate]);





  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />      
      <HowWeWork />
      <WhyChoose />
      <Projects />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
