import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });

      gsap.from(infoRef.current, {
        x: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu consulta! Te contactaremos en menos de 24 hs.');
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-badge">
            <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            Contactanos
          </span>

          <h2 className="contact-title">
            Hablemos de tu proyecto
          </h2>

          <div className="contact-divider"></div>

          <p className="contact-subtitle">
            ¿Tenés un proyecto en mente o necesitás asistencia eléctrica? <br />
            Dejanos tus datos y te contactamos en menos de 24 hs.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-wrapper" ref={formRef}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre completo"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Empresa (opcional)</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Teléfono *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+54 9 11 XXXX-XXXX"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Consulta o tipo de servicio *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Contanos sobre tu proyecto o necesidad..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                ⚡ Solicitar cotización ahora
              </button>
            </form>
          </div>

          <div className="contact-info" ref={infoRef}>
            <div className="info-box">
              <div className="info-item">
                <div className="info-icon-wrapper">
                  <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="info-details">
                  <h4>WhatsApp / Teléfono</h4>
                  <p>+54 9 11 5555-0000</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-wrapper">
                  <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="info-details">
                  <h4>Email</h4>
                  <p>contacto@electropower.com.ar</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-wrapper">
                  <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="info-details">
                  <h4>Ubicación</h4>
                  <p>Escobar, Buenos Aires</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-wrapper">
                  <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div className="info-details">
                  <h4>Horario de atención</h4>
                  <p>Lun - Vie: 8:00 - 18:00 hs<br />Sáb: 9:00 - 13:00 hs</p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <svg className="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              <h3>Llevá tu energía al siguiente nivel</h3>
              <p>Soluciones profesionales para cada proyecto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
