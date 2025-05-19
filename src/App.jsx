// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';
import Dashboard from './Dashboard';
import TambahTanaman from './TambahTanaman';
import TanamanSaya from './TanamanSaya';
import Panduan from './Panduan';
import Kontak from './Kontak';
import KalenderPertanian from './KalenderPertanian';
import Statistik from './Statistik';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Jadi halaman pertama */}
        <Route path="/panduan" element={<Panduan />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tambah" element={<TambahTanaman />} />
        <Route path="/lihat" element={<TanamanSaya />} />
        <Route path="/kalender" element={<KalenderPertanian />} />
        <Route path="/statistik" element={<Statistik />} />
      </Routes>
    </Router>
  );
}
