import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate(); // ← ini wajib ada

  return (
    <div className="homepage">
      <header className="header">
        <h1 className="logo">AGROREMIND</h1>
        <nav className="nav">
          <a href="#">Beranda</a>
          <a href="#">Fitur</a>
          <a href="#">Panduan</a>
          <a href="#">Kontak</a>

          {/* ✅ Tombol Login & Sign Up yang berfungsi */}
          <button className="btn" onClick={() => navigate('/login')}>Login</button>
          <button className="btn primary" onClick={() => navigate('/register')}>Sign Up</button>
        </nav>
      </header>

      <section className="hero">
        <h2>Selamat Datang di <span className="brand">AGROREMIND</span></h2>
        <p>Agroremind membantu petani dan pecinta tanaman menjadwalkan tanam & panen dengan mudah</p>
        <button className="btn primary">Mulai Sekarang</button>
      </section>

      <section className="features">
        <h3>KENAPA MEMILIH AGROREMIND?</h3>
        <div className="feature-grid">
          <div className="feature">
            <h4>Peringatan Otomatis</h4>
            <p>Dapatkan notifikasi jadwal tanam, pupuk, panen, dan perawatan secara otomatis.</p>
          </div>

          <div className="feature" onClick={() => navigate('/tanaman')}>
            <h4>Manajemen Tanaman</h4>
            <p>Kelola semua tanaman Anda dalam satu tempat, lebih efisien dan rapi.</p>
          </div>

          <div className="feature">
            <h4>Analisis & Statistik</h4>
            <p>Pantau performa pertanian Anda dengan data yang mudah dibaca dan visual menarik.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
