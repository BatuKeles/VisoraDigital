import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner"></div>
        <h2>Visora Digital</h2>
        <p>Yükleniyor...</p>
      </div>
    </div>
  );
};

export default Loading;
