// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';
import Dashboard from './Dashboard';
import AddPlant from './AddPlant';
import ViewPlants from './ViewPlants';
import Panduan from './Panduan';
import Kontak from './Kontak';


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
