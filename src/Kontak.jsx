import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

export default function Kontak() {
  const navigate = useNavigate(); // ← ini wajib ada

  return (
    <div className="homepage">
      <header className="header">
        <h1 className="logo" onClick={(e) => { e.preventDefault(); navigate('/'); }}>AGROREMIND</h1>
        <nav className="nav">
          <a href="/panduan" onClick={(e) => { e.preventDefault(); navigate('/panduan'); }}>Panduan</a>
          <a href="/kontak" onClick={(e) => { e.preventDefault(); navigate('/kontak'); }}>Kontak</a>
          <div className="auth-buttons">
            <button className="btn" onClick={() => navigate('/login')}>Login</button>
            <button className="btn primary" onClick={() => navigate('/register')}>Sign Up</button>
          </div>
        </nav>
      </header>
      <div className="contact-container">
      <div className="contact-left">
        <h2>01 / GET IN TOUCH</h2>
        <p>
          Punya pertanyaan atau ingin bekerjasama? Jangan ragu untuk menghubungi kami melalui kontak di bawah ini.
        </p>
        <ul className="contact-info">
          <li>📞 0821-1234-5678</li>
          <li>📧 agroremind@email.com</li>
          <li>🐦 @agroremind</li>
          <li>📘 facebook.com/agroremind</li>
        </ul>
      </div>

      <div className="contact-right">
        <h2>02 / SEND US A MESSAGE</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Telephone Number" />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </div>
    </div>
    
  );
}
