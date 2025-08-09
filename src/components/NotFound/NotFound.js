import React from 'react';
import './NotFound.css';

const NotFound = () => {
  const goHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="error-code">404</div>
        <h1>Sayfa Bulunamadı</h1>
        <p>Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
        <button className="home-btn" onClick={goHome}>
          Ana Sayfaya Dön
        </button>
      </div>
    </div>
  );
};

export default NotFound;
