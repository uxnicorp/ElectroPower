import React from "react";
import Navbar from "../../componentes/navbar/Navbar";
import Hero from "../../componentes/hero/Hero";
import HowWeWork from "../../componentes/howwework/HowWeWork";
import WhyChoose from "../../componentes/whychoose/WhyChoose";
import Projects from "../../componentes/projects/Projects";
import Location from "../../componentes/location/Location";
import Contact from "../../componentes/contact/Contact";
import Footer from "../../componentes/footer/Footer";
import WhatsAppButton from "../../componentes/whatsappbutton/WhatsAppButton";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowWeWork />
      <WhyChoose />
      <Projects />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Home;
