import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title fade-in">
              Dijital Dönüşümde
              <span className="gradient-text"> Öncü Çözümler</span>
            </h1>
            <p className="hero-subtitle slide-up">
              Mobil uygulamalardan web tasarıma, dijital pazarlamadan grafik tasarıma kadar 
              her alanda profesyonel hizmetler sunuyoruz. Markanızı dijital dünyada zirveye taşıyoruz.
            </p>
            <div className="hero-buttons slide-up">
              <button className="btn-primary" onClick={scrollToContact}>Projeni Başlat</button>
              <button className="btn-secondary" onClick={scrollToPortfolio}>Portfolyomuzu İncele</button>
            </div>
            <div className="hero-stats slide-up">
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Tamamlanan Proje</div>
              </div>
              <div className="stat">
                <div className="stat-number">25+</div>
                <div className="stat-label">Mutlu Müşteri</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Başarı Oranı</div>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="floating-card glass-effect">
              <div className="card-icon">📱</div>
              <h3>Mobil Uygulama</h3>
              <p>iOS & Android</p>
            </div>
            <div className="floating-card glass-effect" style={{animationDelay: '2s'}}>
              <div className="card-icon">💻</div>
              <h3>Web Geliştirme</h3>
              <p>Modern & Responsive</p>
            </div>
            <div className="floating-card glass-effect" style={{animationDelay: '4s'}}>
              <div className="card-icon">🚀</div>
              <h3>Dijital Pazarlama</h3>
              <p>SEO & Sosyal Medya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
