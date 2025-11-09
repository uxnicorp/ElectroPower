import "./Terms.css";
import Navbar from "../../componentes/navbar/Navbar";
import Footer from "../../componentes/footer/Footer";
import WhatsAppButton from "../../componentes/whatsappbutton/WhatsAppButton";

const Terms = () => {
  return (
    <section className="terms" id="terms">
      <div className="terms-container">
  

        <div className="terms-header">
          <span className="terms-badge">Información Legal</span>
          <h1 className="terms-title">Términos de Servicio y Política de Privacidad</h1>
          <div className="terms-divider"></div>
          <p className="terms-subtitle">
            Última actualización: Noviembre 2025
          </p>
        </div>


        <div className="terms-section">
          <div className="section-header">
            <div className="section-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              Términos de Servicio
            </div>
            <h2 className="section-title">Condiciones de uso de nuestros servicios</h2>
          </div>

          <div className="content-card">
            <h3>1. Aceptación de los Términos</h3>
            <p>
              Al contratar los servicios de ElectroPower, usted acepta estos términos y condiciones. 
              Si no está de acuerdo con alguno de estos términos, por favor no utilice nuestros servicios.
            </p>
          </div>

          <div className="content-card">
            <h3>2. Descripción de los Servicios</h3>
            <p>
              ElectroPower ofrece servicios profesionales en:
            </p>
            <ul>
              <li>Instalaciones eléctricas de baja y media tensión</li>
              <li>Mantenimiento y reparación de sistemas eléctricos</li>
              <li>Sistemas de climatización e HVAC</li>
              <li>Construcción y obras civiles</li>
              <li>Certificaciones y verificaciones técnicas</li>
              <li>Emergencias eléctricas 24/7</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>3. Responsabilidades del Cliente</h3>
            <p>El cliente se compromete a:</p>
            <ul>
              <li>Proporcionar información precisa y completa sobre el proyecto</li>
              <li>Facilitar el acceso a las instalaciones según lo acordado</li>
              <li>Cumplir con los plazos de pago establecidos</li>
              <li>Notificar cualquier cambio o modificación con antelación</li>
              <li>Mantener las instalaciones en condiciones adecuadas para el trabajo</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>4. Garantías y Responsabilidades</h3>
            <p>
              Todos nuestros trabajos incluyen garantía según el tipo de servicio contratado. 
              La garantía cubre defectos de mano de obra y materiales por el período especificado 
              en el contrato o presupuesto aceptado.
            </p>
            <p>
              ElectroPower se compromete a realizar todos los trabajos siguiendo las normativas 
              vigentes y los más altos estándares de calidad y seguridad.
            </p>
          </div>

          <div className="content-card">
            <h3>5. Limitaciones de Responsabilidad</h3>
            <p>
              ElectroPower no será responsable por:
            </p>
            <ul>
              <li>Daños causados por fuerza mayor o eventos fuera de nuestro control</li>
              <li>Problemas derivados de instalaciones preexistentes defectuosas</li>
              <li>Modificaciones realizadas por terceros sin nuestra autorización</li>
              <li>Uso inadecuado de las instalaciones por parte del cliente</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>6. Cancelaciones y Modificaciones</h3>
            <p>
              Las cancelaciones deben notificarse con al menos 48 horas de anticipación. 
              Las modificaciones al proyecto original pueden generar ajustes en el presupuesto 
              y cronograma de trabajo.
            </p>
          </div>

          <div className="content-card">
            <h3>7. Facturación y Pagos</h3>
            <p>
              Los términos de pago se especifican en cada presupuesto. Generalmente incluyen:
            </p>
            <ul>
              <li>Anticipo del 50% para materiales e inicio de obra</li>
              <li>Saldo restante al finalizar el trabajo</li>
              <li>Formas de pago: Transferencia bancaria, efectivo o tarjetas</li>
            </ul>
          </div>
        </div>


        <div className="terms-section">
          <div className="section-header">
            <div className="section-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
              Política de Privacidad
            </div>
            <h2 className="section-title">Protección de sus datos personales</h2>
          </div>

          <div className="content-card">
            <h3>1. Información que Recopilamos</h3>
            <p>
              En ElectroPower recopilamos únicamente la información necesaria para prestar 
              nuestros servicios:
            </p>
            <ul>
              <li>Nombre completo y documento de identidad</li>
              <li>Información de contacto (teléfono, email, dirección)</li>
              <li>Datos del proyecto o servicio requerido</li>
              <li>Información técnica de las instalaciones</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>2. Uso de la Información</h3>
            <p>Utilizamos sus datos personales para:</p>
            <ul>
              <li>Prestar los servicios contratados</li>
              <li>Comunicarnos sobre el proyecto</li>
              <li>Emitir presupuestos y facturas</li>
              <li>Cumplir con obligaciones legales y fiscales</li>
              <li>Mejorar la calidad de nuestros servicios</li>
              <li>Enviar información sobre nuevos servicios (solo con su consentimiento)</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>3. Protección de Datos</h3>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger 
              sus datos personales contra acceso no autorizado, pérdida o alteración. 
              Todos nuestros colaboradores están obligados a mantener la confidencialidad 
              de la información.
            </p>
          </div>

          <div className="content-card">
            <h3>4. Compartir Información</h3>
            <p>
              No vendemos ni compartimos sus datos personales con terceros, excepto:
            </p>
            <ul>
              <li>Cuando sea necesario para prestar el servicio (proveedores, subcontratistas)</li>
              <li>Cuando lo requiera la ley o autoridades competentes</li>
              <li>Con su consentimiento explícito</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>5. Derechos del Usuario</h3>
            <p>Usted tiene derecho a:</p>
            <ul>
              <li>Acceder a sus datos personales</li>
              <li>Rectificar información inexacta</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Oponerse al procesamiento de sus datos</li>
              <li>Solicitar la portabilidad de sus datos</li>
              <li>Revocar el consentimiento en cualquier momento</li>
            </ul>
            <p>
              Para ejercer estos derechos, puede contactarnos a través de 
              electropowerconstrucciones@gmail.com
            </p>
          </div>

          <div className="content-card">
            <h3>6. Cookies y Tecnologías de Seguimiento</h3>
            <p>
              Nuestro sitio web puede utilizar cookies para mejorar la experiencia del usuario. 
              Las cookies son pequeños archivos que se almacenan en su dispositivo y nos ayudan a:
            </p>
            <ul>
              <li>Recordar sus preferencias</li>
              <li>Analizar el tráfico del sitio</li>
              <li>Mejorar la funcionalidad del sitio</li>
            </ul>
            <p>
              Puede configurar su navegador para rechazar cookies, aunque esto puede afectar 
              algunas funcionalidades del sitio.
            </p>
          </div>

          <div className="content-card">
            <h3>7. Retención de Datos</h3>
            <p>
              Conservamos sus datos personales durante el tiempo necesario para cumplir con 
              las finalidades descritas, incluyendo obligaciones legales, contables y fiscales. 
              Generalmente, mantenemos los datos durante 10 años después de finalizado el servicio.
            </p>
          </div>

          <div className="content-card">
            <h3>8. Menores de Edad</h3>
            <p>
              Nuestros servicios están dirigidos a personas mayores de 18 años. No recopilamos 
              intencionalmente información de menores de edad.
            </p>
          </div>

          <div className="content-card">
            <h3>9. Cambios en esta Política</h3>
            <p>
              Nos reservamos el derecho de actualizar esta Política de Privacidad. 
              Los cambios importantes serán notificados a través de nuestro sitio web o 
              por correo electrónico.
            </p>
          </div>

          <div className="content-card">
            <h3>10. Contacto</h3>
            <p>
              Para cualquier consulta sobre estos términos o nuestra política de privacidad, 
              puede contactarnos:
            </p>
            <ul>
              <li>Email: electropowerconstrucciones@gmail.com</li>
              <li>Teléfono: +54 9 11 6352-1258</li>
              <li>WhatsApp: +54 9 11 6352-1258</li>
            </ul>
          </div>
        </div>

        <div className="terms-footer">
          <div className="terms-cta">
            <h3 className="cta-title">¿Tiene alguna pregunta?</h3>
            <p className="cta-description">
              Si tiene dudas sobre nuestros términos de servicio o política de privacidad, 
              no dude en contactarnos. Estamos aquí para ayudarlo.
            </p>
            <div className="cta-buttons">
              <a 
                href="mailto:electropowerconstrucciones@gmail.com?subject=Consulta%20sobre%20T%C3%A9rminos%20de%20Servicio%20y%20Pol%C3%ADtica%20de%20Privacidad&body=Estimados%2C%0A%0AMe%20pongo%20en%20contacto%20para%20realizar%20una%20consulta%20sobre%20los%20T%C3%A9rminos%20de%20Servicio%20y%20Pol%C3%ADtica%20de%20Privacidad%20de%20ElectroPower.%0A%0AMi%20consulta%20es%20la%20siguiente%3A%0A%0A%5BEscriba%20aqu%C3%AD%20su%20consulta%5D%0A%0AQuedo%20a%20la%20espera%20de%20su%20respuesta.%0A%0ASaludos%20cordiales."
                className="btn-cta-primary"
              >
                ✉️ Enviar Email
              </a>
              <a 
                href="https://wa.me/5491163521258?text=Estimados%2C%20me%20gustar%C3%ADa%20realizar%20una%20consulta%20sobre%20los%20T%C3%A9rminos%20de%20Servicio%20y%20Pol%C3%ADtica%20de%20Privacidad%20de%20ElectroPower." 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-cta-secondary"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TermsPage = () => {
  return (
    <div className="app">
      <Navbar />
      <Terms />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TermsPage;
