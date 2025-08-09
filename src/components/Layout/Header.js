import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false); // Mobile menüyü kapat
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <a href="#home" className="logo">
            <img src="/logolar-05.png" alt="Visora Digital" className="logo-img" />
          </a>
          
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home" className="nav-link">Ana Sayfa</a>
            <a href="#services" className="nav-link">Hizmetler</a>
            <a href="#about" className="nav-link">Hakkımızda</a>
            <a href="#portfolio" className="nav-link">Portfolyo</a>
            <a href="#contact" className="nav-link">İletişim</a>
          </nav>

          <div className="header-actions">
            <button className="btn-primary" onClick={scrollToContact}>Teklif Al</button>
            <button 
              className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
