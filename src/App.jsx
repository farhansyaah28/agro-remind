// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import TambahTanaman from './pages/TambahTanaman';
import TanamanSaya from './pages/TanamanSaya';
import PanduanPengguna from './pages/PanduanPengguna';
import Kontak from './pages/Kontak';
import KalenderPertanian from './pages/KalenderPertanian';
import Statistik from './pages/Statistik';
import Setting from './pages/Setting';


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
        <Route path="/statistik" element={<Statistik />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/kalender" element={<KalenderPertanian />} />
      </Routes>
    </Router>
  );
}
