import React, { useState } from 'react';
import './Services.css';
import ServiceModal from './Modal/ServiceModal';

const servicesData = [
  {
    category: 'Uygulama Geliştirme',
    icon: '🦉',
    image: '/baykus4.png',
    services: ['iOS Uygulamaları', 'Android Uygulamaları', 'Windows Uygulamaları', 'Ufak Çaplı Oyunlar'],
    gradient: 'var(--primary-gradient)'
  },
  {
    category: 'Web Tasarım ve Geliştirme',
    icon: '🦉',
    image: '/baykus5.png',
    services: ['Sıfırdan Web Sitesi Yapma', 'Web Siteleri için SEO Çalışmaları', 'Responsive Tasarım'],
    gradient: 'var(--accent-gradient)'
  },
  {
    category: 'Dijital Pazarlama',
    icon: '🦉',
    image: '/baykus3.png',
    services: ['Dijital Pazarlama Stratejisi', 'Franchise Dijital Pazarlama', 'Kurumsal Dijital Pazarlama'],
    gradient: 'var(--secondary-gradient)'
  },
  {
    category: 'Sosyal Medya',
    icon: '🦉',
    image: '/baykus.png',
    services: ['Sosyal Medya Yönetimi', 'Sosyal Medya Reklamcılığı', 'Instagram', 'Facebook', 'LinkedIn', 'Twitter'],
    gradient: 'var(--warm-gradient)'
  },
  {
    category: 'Grafik Tasarım',
    icon: '🦉',
    image: '/baykus.png',
    services: ['Logo Tasarımı', 'Kurumsal Kimlik', 'Broşür ve Katalog Tasarımı', 'Sosyal Medya Görselleri', 'Afiş ve Banner Tasarımı', 'Ambalaj Tasarımı'],
    gradient: 'var(--primary-gradient)'
  },
  {
    category: 'Baskı ve Tabela',
    icon: '🦉',
    image: '/baykus2.png',
    services: ['Baskı Ürünleri', 'Promosyon Ürünleri', 'Kurumsal Kimlik Tasarımı'],
    gradient: 'var(--accent-gradient)'
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedService(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="services-section section-padding" id="services">
        <div className="container">
          <div className="services-header">
            <h2 className="section-title">
              Hizmetlerimiz
            </h2>
            <p className="section-subtitle">
              Dijital dünyanın her alanında profesyonel çözümler sunuyoruz
            </p>
          </div>
          
          <div className="services-grid">
            {servicesData.map((category, idx) => (
              <div key={idx} className="service-card glass-effect slide-up" style={{animationDelay: `${idx * 0.1}s`}}>
                <div className="service-icon-wrapper" style={{background: category.gradient}}>
                  <img src={category.image} alt="Visora Digital" className="service-icon-img" />
                </div>
                <h3 className="service-title">{category.category}</h3>
                <ul className="service-list">
                  {category.services.map((service, serviceIdx) => (
                    <li key={serviceIdx} className="service-item">{service}</li>
                  ))}
                </ul>
                <button 
                  className="service-btn" 
                  style={{borderColor: category.gradient}}
                  onClick={() => openModal(category)}
                >
                  Detayları Gör
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default Services;
