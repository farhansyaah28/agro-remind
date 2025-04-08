import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      {/* Navbar kecil */}
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

      <div className="dashboard-container">
      <h2 className="welcome-text">Selamat Datang, Al-Mahfuzh!</h2>
      <p className="subtitle">Pantau tanamanmu hari ini</p>

      <div className="card-container">
        <div className="card" onClick={() => navigate('/lihat')}>
          <img src="https://undraw.co/api/illustrations/planting1" alt="Lihat Tanaman" />
          <h3>Lihat Tanaman Anda</h3>
          <button className="btn-action">Lihat</button>
        </div>

        <div className="card" onClick={() => navigate('/tambah')}>
          <img src="https://undraw.co/api/illustrations/planting2" alt="Tambah Tanaman" />
          <h3>Tambah Tanaman Baru</h3>
          <button className="btn-action">Tambah</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
