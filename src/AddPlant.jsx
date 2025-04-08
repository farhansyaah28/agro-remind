// src/AddPlant.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Viewplans.css'; // Pastikan nama file ini sesuai

export default function AddPlant() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama: '',
    jenis: '',
    tanggal: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem('plants')) || [];
    const newPlant = {
      id: Date.now(),
      ...formData,
    };
    localStorage.setItem('plants', JSON.stringify([...stored, newPlant]));
    navigate('/lihat');
  };

  return (
    <>
      <div className="navbar">
        <div className="brand">AGROREMIND</div>
        <div className="nav-icons">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1827/1827392.png"
            alt="Notifikasi"
            className="icon"
          />
          <img
            src="https://i.pravatar.cc/40?img=3"
            alt="Profil"
            className="profile-pic"
          />
        </div>
      </div>

      <div className="form-container">
        <button className="btn-back" onClick={() => navigate(-1)}>🔙 Kembali</button>
        <h2>🌿 Tambah Tanaman Baru</h2>

        <form onSubmit={handleSubmit} className="form-card">
          <label>
            Nama Tanaman:
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              required
              placeholder="Contoh: Bayam"
            />
          </label>
          <label>
            Jenis:
            <input
              type="text"
              name="jenis"
              value={formData.jenis}
              onChange={handleChange}
              required
              placeholder="Contoh: Sayuran"
            />
          </label>
          <label>
            Tanggal Tanam:
            <input
              type="date"
              name="tanggal"
              value={formData.tanggal}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="btn-submit">✅ Simpan</button>
        </form>
      </div>
    </>
  );
}
