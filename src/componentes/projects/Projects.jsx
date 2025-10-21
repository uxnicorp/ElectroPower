import './Projects.css';

const Projects = () => {

  const projects = [
    {
      type: 'Instalación de media tensión',
      description: 'Tendido de 150 mts y montaje de transformador 315 kVA',
      location: 'Garín, Buenos Aires'
    },
    {
      type: 'Renovación de tableros industriales',
      description: 'Reemplazo de tableros y automatización de sistema de iluminación',
      location: 'Parque Industrial Escobar'
    },
    {
      type: 'Sistema de refrigeración',
      description: 'Instalación de 12 equipos split en oficinas corporativas',
      location: 'Tigre'
    },
    {
      type: 'Mantenimiento eléctrico preventivo',
      description: 'Edificio comercial completo',
      location: 'Palermo, CABA'
    },
    {
      type: 'Instalación de transformador',
      description: 'Transformador trifásico 500 kVA con subestación',
      location: 'Pilar'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        
        <div className="projects-header">
          <span className="projects-badge">
            <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 11l3 3L22 4"/>
              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
            </svg>
            Nuestros Proyectos
          </span>
          
          <h2 className="projects-title">
            Trabajos realizados con excelencia
          </h2>
          
          <div className="projects-divider"></div>

          <p className="projects-subtitle">
            Mostramos con orgullo algunos de nuestros proyectos más recientes en la zona norte de Buenos Aires.
          </p>
        </div>

        <div className="projects-table-wrapper">
          <table className="projects-table">
            <thead>
              <tr>
                <th>Tipo de trabajo</th>
                <th>Descripción</th>
                <th>Ubicación</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={index}>
                  <td>
                    <strong>{project.type}</strong>
                  </td>
                  <td>{project.description}</td>
                  <td>
                    <span className="location-badge">
                      <svg className="location-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      {project.location}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="projects-gallery">
          <h3 className="gallery-title">Galería de proyectos</h3>
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <div className="placeholder-icon-wrapper">
                  <div className="placeholder-icon-ring"></div>
                  <svg className="placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                  </svg>
                </div>
                <p>Tableros eléctricos industriales</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <div className="placeholder-icon-wrapper">
                  <div className="placeholder-icon-ring"></div>
                  <svg className="placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="6" y="4" width="4" height="16"/>
                    <rect x="14" y="4" width="4" height="16"/>
                  </svg>
                </div>
                <p>Cableados y conexiones</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <div className="placeholder-icon-wrapper">
                  <div className="placeholder-icon-ring"></div>
                  <svg className="placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v6m0 4v10M8 8l8 8M8 16l8-8"/>
                  </svg>
                </div>
                <p>Sistemas de refrigeración</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <div className="placeholder-icon-wrapper">
                  <div className="placeholder-icon-ring"></div>
                  <svg className="placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <p>Obras y renovaciones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="projects-bottom-divider"></div>
    </section>
  );
};

export default Projects;
