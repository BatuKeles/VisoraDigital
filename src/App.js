import React, { useEffect } from 'react';
import './App.css';
import '../src/styles/globals.css';
import Header from './components/Layout/Header';
import Hero from './components/Home/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/Layout/About';
import Contact from './components/Contact/Contact';

function App() {
  useEffect(() => {
    // Mobil kontrol
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    
    // URL'deki hash'i temizle
    if (window.location.hash) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
    
    // Sayfanın en üstüne scroll yap
    const scrollToTop = () => {
      if (isMobile) {
        // Mobil için Hero section'a yumuşak scroll
        const heroSection = document.getElementById('home');
        if (heroSection) {
          heroSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          });
        } else {
          // Hero section bulunamazsa manuel scroll
          window.scrollTo({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
          });
        }
      } else {
        // Desktop için instant scroll
        window.scrollTo(0, 0);
      }
    };
    
    // Sayfa yüklendiğinde scroll yap
    const handlePageLoad = () => {
      if (isMobile) {
        // Mobilde biraz gecikme ile scroll yap (DOM render bekle)
        setTimeout(scrollToTop, 300);
        setTimeout(scrollToTop, 600); // Ekstra güvenlik
      } else {
        scrollToTop();
      }
    };
    
    // Hemen çalıştır
    handlePageLoad();
    
    // DOM hazır olduğunda
    const handleDOMContentLoaded = () => {
      if (isMobile) {
        setTimeout(scrollToTop, 200);
      }
    };
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
    } else {
      handleDOMContentLoaded();
    }
    
    // Sayfa tamamen yüklendiğinde
    const handleLoad = () => {
      if (isMobile) {
        setTimeout(scrollToTop, 100);
      }
    };
    window.addEventListener('load', handleLoad);
    
    // Mobil orientation change
    const handleOrientationChange = () => {
      if (isMobile) {
        setTimeout(scrollToTop, 200);
      }
    };
    window.addEventListener('orientationchange', handleOrientationChange);
    
    // Cleanup
    return () => {
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
