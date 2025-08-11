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
    
    // URL'deki hash'i temizle ve sayfayı en üste çek
    const forceScrollToTop = () => {
      // URL hash'i tamamen temizle
      window.history.replaceState({}, document.title, window.location.pathname);
      
      // Scroll'u zorla sıfırla - mobil için ultra agresif
      if (isMobile) {
        // Mobil Safari ve Chrome için multiple approach
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.pageYOffset = 0;
        window.scrollY = 0;
        window.scrollTo(0, 0);
        
        // Scroll element'lerini zorla sıfırla
        if (document.scrollingElement) {
          document.scrollingElement.scrollTop = 0;
        }
        
        // Root element'i de sıfırla
        const rootElement = document.getElementById('root');
        if (rootElement) {
          rootElement.scrollTop = 0;
        }
        
        // Viewport'u reset et
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      } else {
        // Desktop için basit reset
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    };
    
    // Anında çalıştır - DOM yüklenmeden önce bile
    forceScrollToTop();
    
    // Mobil için aggressive timing
    if (isMobile) {
      // Her 50ms'de bir kontrol et - ilk 1 saniyede
      const intervals = [10, 50, 100, 200, 300, 500, 800, 1000];
      intervals.forEach(delay => {
        setTimeout(forceScrollToTop, delay);
      });
    } else {
      // Desktop için daha az agresif
      setTimeout(forceScrollToTop, 50);
      setTimeout(forceScrollToTop, 200);
    }
    
    // DOM tamamen hazır olduğunda
    const handleDOMContentLoaded = () => forceScrollToTop();
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
    } else {
      forceScrollToTop();
    }
    
    // Sayfa tamamen yüklendiğinde
    const handleLoad = () => forceScrollToTop();
    window.addEventListener('load', handleLoad);
    
    // Mobil orientation change
    const handleOrientationChange = () => {
      if (isMobile) {
        setTimeout(forceScrollToTop, 100);
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
