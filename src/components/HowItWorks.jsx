import React from 'react';
import '../styles/HowItWorks.css'; // Make sure to save the CSS file to this path
import farmVideoThumbnail from '../assets/farm-video-thumbnail.jpg';

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-it-works-container">
        <div className="how-it-works-content">
          <h2 className="how-it-works-subtitle">How it Works?</h2>
          <h3 className="how-it-works-heading">Langkah Mudah Menggunakan</h3>
          <h2 className="how-it-works-title">
            <span className="how-it-works-agro">AGRO</span>
            <span className="how-it-works-remind">REMIND</span>
          </h2>
          <p className="how-it-works-description">
            AgroRemind membantu petani dan pecinta tanaman mengelola jadwal tanam dan panen dengan mudah. Hanya dengan tiga langkah sederhana, Anda bisa mendapatkan rekomendasi waktu tanam terbaik dan pengingat otomatis untuk merawat tanaman.
          </p>
          <button className="start-now-button">
            Mulai Sekarang
          </button>
        </div>
        
        <div className="video-container">
          <img src={farmVideoThumbnail} alt="AgroRemind Demo" className="video-thumbnail" />
          <div className="video-overlay">
            <div className="play-button">
              <span>▶</span>
            </div>
            <div className="video-cta">
              Join AgroRemind Now
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;