// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';
import Dashboard from './Dashboard';
import TambahTanaman from './TambahTanaman';
import TanamanSaya from './TanamanSaya';
import PanduanPengguna from './PanduanPengguna';
import Kontak from './Kontak';
import KalenderPertanian from './KalenderPertanian';
import Setting from './Setting';
import Statistik from './Statistik';



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Jadi halaman pertama */}
        <Route path="/panduan" element={<PanduanPengguna />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tambah" element={<TambahTanaman />} />
        <Route path="/lihat" element={<TanamanSaya />} />
        <Route path="/kalender" element={<KalenderPertanian />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/statistik" element={<Statistik />} />
      </Routes>
    </Router>
  );
}
