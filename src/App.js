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
    // Sayfa yüklendiğinde en üste scroll et - mobil ve desktop için güçlü versiyon
    const scrollToTop = () => {
      // Birden fazla yöntemle scroll'u sıfırla
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Modern browsers için
      if (window.pageYOffset !== 0) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
      
      // Safari ve iOS için ek kontrol
      if (document.scrollingElement) {
        document.scrollingElement.scrollTop = 0;
      }
    };
    
    // Hemen çalıştır
    scrollToTop();
    
    // Gecikme ile bir kez daha (mobil render gecikmesi için)
    setTimeout(scrollToTop, 50);
    setTimeout(scrollToTop, 200);
    
    // Sayfa tamamen yüklendiğinde bir kez daha
    const handleLoad = () => scrollToTop();
    window.addEventListener('load', handleLoad);
    
    return () => window.removeEventListener('load', handleLoad);
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
