import React from 'react';
import '../styles/Panduan.css'; // Kamu bisa pindahkan styling Panduan ke file terpisah kalau mau
import { useNavigate } from 'react-router-dom';

export default function Panduan() {
  const navigate = useNavigate();

  const panduanList = [
    {
      title: "Menambahkan Tanaman",
      icon: "🌱",
      description: "Buka menu tambah tanaman, isi nama, jenis, dan tanggal tanam. Lalu klik 'Simpan'."
    },
    {
      title: "Melihat Daftar Tanaman",
      icon: "📋",
      description: "Lihat semua tanaman yang telah ditambahkan. Gunakan filter untuk menyaring berdasarkan jenis."
    },
    {
      title: "Edit & Hapus",
      icon: "🛠️",
      description: "Klik ikon ✏️ untuk mengedit atau 🗑️ untuk menghapus tanaman yang tidak diperlukan."
    },
    {
      title: "Ekspor Data",
      icon: "📤",
      description: "Ekspor data ke format CSV untuk digunakan di Excel atau aplikasi lain."
    }
  ];

  return (
    <div className="homepage">
      {/* Navigasi Header */}
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

      {/* Konten Panduan */}
      <div className="panduan-page">
        <div className="panduan-header">
          <h1>📘 Panduan Penggunaan AGROREMIND</h1>
        </div>

        <div className="panduan-grid">
          {panduanList.map((item, index) => (
            <div className="panduan-card" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
