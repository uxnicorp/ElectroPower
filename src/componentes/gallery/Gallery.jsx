import { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: new URL('../../assets/imagenGaleria(1).jpg', import.meta.url).href,
      title: 'Instalaciones Eléctricas Industriales',
      description: 'Trabajos especializados en plantas industriales',
      category: 'industrial'
    },
    {
      id: 2,
      src: new URL('../../assets/imagenGaleria(2).jpg', import.meta.url).href,
      title: 'Mantenimiento de Tableros',
      description: 'Revisión y mantenimiento preventivo',
      category: 'mantenimiento'
    },
    {
      id: 3,
      src: new URL('../../assets/imagenGaleria(3).jpg', import.meta.url).href,
      title: 'Cableado Estructurado',
      description: 'Instalación de redes eléctricas',
      category: 'instalación'
    },
    {
      id: 4,
      src: new URL('../../assets/imagenGaleria(4).jpg', import.meta.url).href,
      title: 'Proyectos Comerciales',
      description: 'Soluciones para locales y comercios',
      category: 'comercial'
    },
    {
      id: 5,
      src: new URL('../../assets/imagenGaleria(5).jpg', import.meta.url).href,
      title: 'Instalación de Luminarias',
      description: 'Iluminación LED y sistemas eficientes',
      category: 'iluminación'
    },
    {
      id: 6,
      src: new URL('../../assets/imagenGaleria(6).jpg', import.meta.url).href,
      title: 'Tableros Eléctricos',
      description: 'Montaje y puesta en marcha',
      category: 'instalación'
    },
    {
      id: 7,
      src: new URL('../../assets/imagenGaleria(7).jpg', import.meta.url).href,
      title: 'Trabajos en Altura',
      description: 'Instalaciones de alta complejidad',
      category: 'industrial'
    },
    {
      id: 8,
      src: new URL('../../assets/imagenGaleria(8).jpg', import.meta.url).href,
      title: 'Puesta a Tierra',
      description: 'Sistemas de protección eléctrica',
      category: 'seguridad'
    },
    {
      id: 9,
      src: new URL('../../assets/imagenGaleria(9).jpg', import.meta.url).href,
      title: 'Automatización Industrial',
      description: 'Control y monitoreo de procesos',
      category: 'industrial'
    },
    {
      id: 10,
      src: new URL('../../assets/imagenGaleria(10).jpg', import.meta.url).href,
      title: 'Instalaciones Residenciales',
      description: 'Proyectos para hogares y edificios',
      category: 'residencial'
    },
    {
      id: 11,
      src: new URL('../../assets/imagenGaleria(11).jpg', import.meta.url).href,
      title: 'Mantenimiento Preventivo',
      description: 'Inspección y control de equipos',
      category: 'mantenimiento'
    },
    {
      id: 12,
      src: new URL('../../assets/imagenGaleria(12).jpg', import.meta.url).href,
      title: 'Cableado Industrial',
      description: 'Tendido de cables de potencia',
      category: 'industrial'
    },
    {
      id: 13,
      src: new URL('../../assets/imagenGaleria(13).jpg', import.meta.url).href,
      title: 'Instalación de Transformadores',
      description: 'Equipos de media y baja tensión',
      category: 'instalación'
    },
    {
      id: 14,
      src: new URL('../../assets/imagenGaleria(14).jpg', import.meta.url).href,
      title: 'Sistemas de Emergencia',
      description: 'Grupos electrógenos y UPS',
      category: 'seguridad'
    },
    {
      id: 15,
      src: new URL('../../assets/imagenGaleria(15).jpg', import.meta.url).href,
      title: 'Conexiones Eléctricas',
      description: 'Empalmes y terminaciones',
      category: 'instalación'
    },
    {
      id: 16,
      src: new URL('../../assets/imagenGaleria(16).jpg', import.meta.url).href,
      title: 'Inspección de Instalaciones',
      description: 'Control de calidad y seguridad',
      category: 'mantenimiento'
    },
    {
      id: 17,
      src: new URL('../../assets/imagenGaleria(17).jpg', import.meta.url).href,
      title: 'Obras en Construcción',
      description: 'Instalaciones desde cero',
      category: 'comercial'
    },
    {
      id: 18,
      src: new URL('../../assets/imagenGaleria(18).jpg', import.meta.url).href,
      title: 'Gabinetes de Control',
      description: 'Armado e instalación',
      category: 'industrial'
    },
    {
      id: 19,
      src: new URL('../../assets/imagenGaleria(19).jpg', import.meta.url).href,
      title: 'Iluminación Exterior',
      description: 'Alumbrado público y privado',
      category: 'iluminación'
    },
    {
      id: 20,
      src: new URL('../../assets/imagenGaleria(20).jpg', import.meta.url).href,
      title: 'Medición y Análisis',
      description: 'Estudios de calidad de energía',
      category: 'mantenimiento'
    },
    {
      id: 21,
      src: new URL('../../assets/imagenGaleria(21).jpg', import.meta.url).href,
      title: 'Canalización Eléctrica',
      description: 'Bandejas portacables y ductos',
      category: 'instalación'
    },
    {
      id: 22,
      src: new URL('../../assets/imagenGaleria(22).jpg', import.meta.url).href,
      title: 'Puesta en Servicio',
      description: 'Pruebas y arranque de sistemas',
      category: 'instalación'
    },
    {
      id: 23,
      src: new URL('../../assets/imagenGaleria(23).jpg', import.meta.url).href,
      title: 'Obras Finalizadas',
      description: 'Proyectos completados con éxito',
      category: 'comercial'
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-container">
        
        {/* Header */}
        <div className="gallery-header">
          <div className="gallery-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            Nuestra Galería
          </div>
          <h2 className="gallery-title">Más que Electricidad, Somos Pasión</h2>
          <p className="gallery-subtitle">
            Cada imagen cuenta una historia de <strong>dedicación, trabajo en equipo y compromiso</strong> con nuestros clientes. 
            Conocé el lado humano detrás de cada instalación eléctrica.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="gallery-item"
              onClick={() => openModal(image)}
            >
              <div className="gallery-image-wrapper">
                <img 
                  src={image.src} 
                  alt={image.title}
                  loading="lazy"
                />
                <div className="gallery-expand-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 3 21 3 21 9"/>
                    <polyline points="9 21 3 21 3 15"/>
                    <line x1="21" y1="3" x2="14" y2="10"/>
                    <line x1="3" y1="21" x2="10" y2="14"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="gallery-cta">
          <p>¿Querés ser parte de nuestra próxima historia de éxito?</p>
          <button className="gallery-cta-button" onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Contactanos Ahora
          </button>
        </div>

      </div>

      {/* Modal para imagen ampliada */}
      {selectedImage && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={closeModal}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <img src={selectedImage.src} alt={selectedImage.title} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
