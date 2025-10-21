import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './Hero.css';
import fondoHero from '../../assets/fondohero.jpg';
import fondoHeroAlt from '../../assets/fondoheroalt.jpg';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const phraseRef = useRef(null);
  const buttonsRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 968);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8
      })
      .from(subtitleRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.7
      }, '-=0.4')
      .from([phraseRef.current, buttonsRef.current], {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1
      }, '-=0.3');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 968;
      console.log('Window width:', window.innerWidth, 'isMobile:', newIsMobile);
      setIsMobile(newIsMobile);
    };

    // Ejecutar al montar para establecer el estado inicial correcto
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  console.log('fondoHero:', fondoHero);
  console.log('fondoHeroAlt:', fondoHeroAlt);
  console.log('isMobile:', isMobile);

  return (
    <section 
      className="hero" 
      ref={heroRef} 
      style={{ 
        backgroundImage: `url(${isMobile ? fondoHeroAlt : fondoHero})`
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title" ref={titleRef}>
          Energía, potencia y confianza <br />
          <span className="hero-title-highlight">para tu proyecto</span>
        </h1>
        
        <p className="hero-subtitle" ref={subtitleRef}>
          En ElectroPower brindamos soluciones integrales en electricidad, refrigeración y construcción, 
          acompañando a particulares y empresas con tecnología, seguridad y compromiso.
        </p>

        <div className="hero-phrase" ref={phraseRef}>
          <p>Trabajamos junto a tu empresa. Impulsamos tu energía.</p>
        </div>

        <div className="hero-buttons" ref={buttonsRef}>
          <button className="btn btn-primary" onClick={scrollToContact}>
            💲 Solicitá tu cotización sin cargo
          </button>
          <button className="btn btn-secondary" onClick={scrollToServices}>
            ⚡ Ver nuestros servicios
          </button>
        </div>
      </div>


    </section>
  );
};

export default Hero;
