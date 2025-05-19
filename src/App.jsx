// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import AddPlant from './pages/AddPlant';
import ViewPlants from './pages/ViewPlants';
import Panduan from './pages/Panduan';
import Kontak from './pages/Kontak';


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
        <Route path="/tambah" element={<AddPlant />} />
        <Route path="/lihat" element={<ViewPlants />} />
      </Routes>
    </Router>
  );
}
