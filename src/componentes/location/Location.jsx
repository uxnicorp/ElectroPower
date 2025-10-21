import './Location.css';

const Location = () => {
  return (
    <section className="location" id="location">
      <div className="location-container">
        
        <div className="location-header">
          <h2 className="location-title">
            Dónde estamos
          </h2>
          
          <div className="location-divider"></div>

          <p className="location-subtitle">
            Estratégicamente ubicados en Escobar para brindarte un servicio rápido y eficiente en toda la zona norte de Buenos Aires y CABA.
          </p>
        </div>

        <div className="location-content">
          <div className="location-info">
            <div className="info-card">
              <h3 className="info-title">Nuestra base</h3>
              <p className="info-text">
                <strong>ElectroPower</strong> tiene su base operativa en <strong>Escobar, Buenos Aires</strong>, 
                estratégicamente ubicada para brindar servicios en toda la zona norte y CABA.
              </p>
              <div className="info-highlights">
                <div className="highlight-item">
                  <svg className="highlight-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                  <span>Escobar, Buenos Aires</span>
                </div>
                <div className="highlight-item">
                  <svg className="highlight-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
                    <circle cx="7" cy="17" r="2"/>
                    <circle cx="17" cy="17" r="2"/>
                  </svg>
                  <span>Cobertura: Zona Norte y CABA</span>
                </div>
                <div className="highlight-item">
                  <svg className="highlight-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                  <span>Proyectos industriales a nivel nacional</span>
                </div>
              </div>
            </div>
          </div>

          <div className="location-map">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52901.65429814799!2d-58.83476387832031!3d-34.35024699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb61fbe683e575%3A0x22fd66ec149e1c24!2sEscobar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1729443600000!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación ElectroPower - Escobar, Buenos Aires"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      
      <div className="location-bottom-divider"></div>
    </section>
  );
};

export default Location;
