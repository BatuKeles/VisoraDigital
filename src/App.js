import React from 'react';
import './App.css';
import '../src/styles/globals.css';
import Header from './components/Layout/Header';
import Hero from './components/Home/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/Layout/About';
import Contact from './components/Contact/Contact';

function App() {
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
