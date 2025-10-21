import './App.css'
import Navbar from './componentes/navbar/Navbar'
import Hero from './componentes/hero/Hero'
import About from './componentes/about/About'
import Services from './componentes/services/Services'
import HowWeWork from './componentes/howwework/HowWeWork'
import WhyChoose from './componentes/whychoose/WhyChoose'
import Projects from './componentes/projects/Projects'
import Location from './componentes/location/Location'
import Contact from './componentes/contact/Contact'
import Footer from './componentes/footer/Footer'
import WhatsAppButton from './componentes/whatsappbutton/WhatsAppButton'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
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
