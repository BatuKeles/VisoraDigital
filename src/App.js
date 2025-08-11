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
    
    // URL'deki hash'i temizle (özellikle mobil için)
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }
    
    // Sayfa yüklendiğinde en üste scroll et
    const scrollToTop = () => {
      // Mobil için özel kontroller
      if (isMobile) {
        // Mobil Safari ve diğer mobil tarayıcılar için
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        window.scrollTo(0, 0);
        
        // iOS Safari için özel
        if (window.scrollY !== 0) {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        }
        
        // Viewport scroll reset
        if (document.scrollingElement) {
          document.scrollingElement.scrollTop = 0;
        }
      } else {
        // Desktop için normal scroll
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    };
    
    // Hemen çalıştır
    scrollToTop();
    
    // Mobilde daha fazla gecikme ile tekrarla
    if (isMobile) {
      setTimeout(scrollToTop, 50);
      setTimeout(scrollToTop, 100);
      setTimeout(scrollToTop, 300);
      setTimeout(scrollToTop, 600); // Mobil yavaş yükleme için
    } else {
      setTimeout(scrollToTop, 50);
      setTimeout(scrollToTop, 200);
    }
    
    // Sayfa tamamen yüklendiğinde bir kez daha
    const handleLoad = () => scrollToTop();
    window.addEventListener('load', handleLoad);
    
    // Orientasyon değişikliğinde de scroll reset (mobil için)
    const handleOrientationChange = () => {
      if (isMobile) {
        setTimeout(scrollToTop, 100);
      }
    };
    window.addEventListener('orientationchange', handleOrientationChange);
    
    return () => {
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
