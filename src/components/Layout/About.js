import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section section-padding" id="about">
      <div className="container">
        <div className="about-header">
          <h2 className="section-title">
            <span>Hakkımızda</span>
          </h2>
          <p className="section-subtitle">
            Dijital dünyada sizin için fark yaratan çözümler geliştiriyoruz
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-card glass-effect">
              <div className="about-text-content">
                <p className="about-description">
                  Dijital dünyada markanızın potansiyelini keşfetmek için buradayız. Web tasarım ve geliştirmeden mobil uygulamalara, dijital pazarlama stratejilerinden etkili sosyal medya yönetimine kadar tüm ihtiyaçlarınızı sıfırdan tasarlıyor, genç ve yaratıcı ekibimizle markanıza özel çözümler sunuyoruz.
                  <br /><br />
                  7/24 ulaşılabilirliğimiz, uygun fiyat politikamız ve yenilikçi yaklaşımlarımızla, dijitaldeki hedeflerinize ulaşmanız için yanınızdayız. Geleceğin dijital deneyimlerini birlikte inşa edelim!
                </p>
                
                <div className="about-features">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <span>🕐</span>
                    </div>
                    <div className="feature-content">
                      <h4>7/24 Hizmet</h4>
                      <p>Her zaman ulaşılabilir olmak ve sürekli destek sağlamak önceliğimizdir</p>
                    </div>
                  </div>
                  
                  <div className="feature-item">
                    <div className="feature-icon">
                      <span>⚡</span>
                    </div>
                    <div className="feature-content">
                      <h4>Hızlı & Etkili</h4>
                      <p>Modern teknolojilerle hızlı ve performanslı çözümler geliştiriyoruz</p>
                    </div>
                  </div>
                  
                  <div className="feature-item">
                    <div className="feature-icon">
                      <span>🚀</span>
                    </div>
                    <div className="feature-content">
                      <h4>İnovatif Yaklaşım</h4>
                      <p>Sürekli gelişen teknolojileri takip ederek yenilikçi projeler üretiyoruz</p>
                    </div>
                  </div>
                  
                  <div className="feature-item">
                    <div className="feature-icon">
                      <span>🤝</span>
                    </div>
                    <div className="feature-content">
                      <h4>Güvenilir Partner</h4>
                      <p>Uzun vadeli partnerlikler kurarak sürekli destek sağlıyoruz</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-card glass-effect">
              <div className="stat-number">50+</div>
              <div className="stat-label">Tamamlanan Proje</div>
            </div>
            
            <div className="stat-card glass-effect">
              <div className="stat-number">25+</div>
              <div className="stat-label">Mutlu Müşteri</div>
            </div>
            
            <div className="stat-card glass-effect">
              <div className="stat-number">100%</div>
              <div className="stat-label">Başarı Oranı</div>
            </div>
            
            <div className="stat-card glass-effect">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Destek Hizmeti</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
