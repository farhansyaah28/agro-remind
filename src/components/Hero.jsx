import React from 'react';
import '../styles/Hero.css'; // Make sure to save the CSS file to this path
import farmBgImage from '../assets/heroImg.jpg';

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${farmBgImage})` }}>
      <div className="hero-content">
        <h2 className="welcome-text">Selamat Datang di</h2>
        <h1 className="hero-title">
          <span className="hero-title-agro">AGRO</span>
          <span className="hero-title-remind">REMIND</span>
        </h1>
        <p className="hero-description">
          Agroremind membantu petani dan pecinta tanaman menjadwalkan tanam & panen dengan mudah
        </p>
        {/* Optional CTA button - uncomment if needed */}
        <button className="cta-button">Mulai Sekarang</button>
      </div>
      <div className="hero-tagline">
        <p>EASILY MANAGE YOUR</p>
        <p>FARM</p>
      </div>
    </section>
  );
}

export default Hero;