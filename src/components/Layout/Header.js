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

  const handleNavClick = (sectionId) => {
    console.log('Nav button clicked:', sectionId);
    setIsMobileMenuOpen(false);
    
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <button onClick={() => handleNavClick('home')} className="logo">
            <img src="/logolar-05.png" alt="Visora Digital" className="logo-img" />
          </button>
          
          {isMobileMenuOpen && <div className="nav-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>}
          
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <button className="nav-link" onClick={() => handleNavClick('home')}>Ana Sayfa</button>
            <button className="nav-link" onClick={() => handleNavClick('services')}>Hizmetler</button>
            <button className="nav-link" onClick={() => handleNavClick('about')}>Hakkımızda</button>
            <button className="nav-link" onClick={() => handleNavClick('portfolio')}>Portfolyo</button>
            <button className="nav-link" onClick={() => handleNavClick('contact')}>İletişim</button>
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
