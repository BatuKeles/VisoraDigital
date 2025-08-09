import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "CORAFIT - Web Tasarım",
      category: "Sosyal Medya",
      description: "Spor merkezi için sosyal medya ve web tasarımı",
      image: "/portfolyo/sosyalmedia1.png",
      tags: ["Web Design", "Sosyal Medya", "Branding"]
    },
    {
      id: 2,
      title: "Macera Oyunu - Basit Çaplı Oyun",
      category: "Mobil Geliştirme",
      description: "Eğlenceli grafiklere sahip basit çaplı macera oyunu uygulaması",
      image: "/portfolyo/mobilgeliştirme.png",
      tags: ["Oyun Geliştirme", "Macera", "Mobil Oyun"]
    },
    {
      id: 3,
      title: "Randevu Sistemli Güzellik Salonu",
      category: "Web Tasarım",
      description: "Online randevu sistemi ile modern güzellik salonu web sitesi",
      image: "/portfolyo/webtasarım.png",
      tags: ["Web Design", "Randevu Sistemi", "Responsive"]
    },
    {
      id: 4,
      title: "FUGU SUSHI - Instagram",
      category: "Sosyal Medya",
      description: "Japon restoranı için Instagram post tasarımları",
      image: "/portfolyo/sosyalmedia2.png",
      tags: ["Instagram", "Post Design", "Branding"]
    },
    {
      id: 5,
      title: "Kreatif Grafik Tasarım",
      category: "Grafik Tasarım",
      description: "Logo, broşür ve kurumsal kimlik tasarımları",
      image: "/portfolyo/grafiktasarım.png",
      tags: ["Logo Design", "Kurumsal Kimlik", "Print Design"]
    },
    {
      id: 6,
      title: "Dijital Pazarlama Kampanyası",
      category: "Dijital Pazarlama",
      description: "Google Ads ve Facebook reklamları ile marka bilinirliği artırma",
      image: "/portfolyo/dijitalpazarlama.png",
      tags: ["Google Ads", "Facebook Ads", "SEO"]
    }
  ];

  const categories = ["Tümü", "Web Tasarım", "Mobil Geliştirme", "Dijital Pazarlama", "Grafik Tasarım", "Sosyal Medya"];
  
  const [activeCategory, setActiveCategory] = React.useState("Tümü");

  const filteredItems = activeCategory === "Tümü" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="portfolio-section section-padding" id="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <h2 className="section-title">
            <span>Portfolyomuz</span>
          </h2>
          <p className="section-subtitle">
            Gerçekleştirdiğimiz projelerle başarı hikayelerimizi keşfedin
          </p>
        </div>

        <div className="portfolio-filters">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.length === 0 ? (
            <div className="empty-category">
              <div className="empty-category-content">
                <h3>Yakında</h3>
                <p>Bu kategoride yeni projeler çok yakında eklenecek.</p>
              </div>
            </div>
          ) : (
            filteredItems.map((item) => (
              <div key={item.id} className={`portfolio-item ${item.comingSoon ? 'coming-soon' : ''}`}>
                <div className="portfolio-image" data-empty={!item.image ? "true" : "false"}>
                  {item.image && <img src={item.image} alt={item.title} />}
                  {item.comingSoon && (
                    <div className="coming-soon-badge">
                      <span>Çok Yakında</span>
                    </div>
                  )}
                  <div className="portfolio-overlay">
                    <div className="portfolio-overlay-content">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <div className="portfolio-tags">
                        {item.tags.map((tag, index) => (
                          <span key={index} className="tag">{tag}</span>
                        ))}
                      </div>
                      <button className="portfolio-btn" disabled={item.comingSoon}>
                        <span>{item.comingSoon ? 'Çok Yakında' : 'Detayları Gör'}</span>
                        <span className="btn-icon">→</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="portfolio-info">
                  <span className="portfolio-category">{item.category}</span>
                  <h3 className="portfolio-title">{item.title}</h3>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Portfolio CTA - Geçici olarak gizlendi
        <div className="portfolio-cta">
          <p>Daha fazla proje görmek ister misiniz?</p>
          <button className="btn-primary" onClick={scrollToContact}>
            Tüm Projelerimizi İnceleyin
          </button>
        </div>
        */}
      </div>
    </section>
  );
};

export default Portfolio;
