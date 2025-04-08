import React, { useEffect, useState } from 'react';
import './Viewplans.css';

function ViewPlants() {
  const [plants, setPlants] = useState([]);
  const [filterJenis, setFilterJenis] = useState('');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('plants')) || [];
    setPlants(stored);
  }, []);

  const handleDelete = (id) => {
    const updated = plants.filter((plant) => plant.id !== id);
    setPlants(updated);
    localStorage.setItem('plants', JSON.stringify(updated));
  };

  const handleEdit = (id) => {
    const newNama = prompt('Nama baru:');
    const newJenis = prompt('Jenis baru:');
    const newTanggal = prompt('Tanggal tanam baru (YYYY-MM-DD):');

    const updated = plants.map((p) =>
      p.id === id ? { ...p, nama: newNama, jenis: newJenis, tanggal: newTanggal } : p
    );
    setPlants(updated);
    localStorage.setItem('plants', JSON.stringify(updated));
  };

  const handleExportCSV = () => {
    const csv = [['Nama', 'Jenis', 'Tanggal Tanam'], ...plants.map((p) => [p.nama, p.jenis, p.tanggal])];
    const blob = new Blob([csv.map((r) => r.join(',')).join('\n')], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'tanaman.csv';
    link.click();
  };

  const filteredPlants = filterJenis
    ? plants.filter((p) => p.jenis.toLowerCase().includes(filterJenis.toLowerCase()))
    : plants;

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

    <div className="view-container">
      <button className="btn-back" onClick={() => window.history.back()}>🔙 Kembali</button>
      <h2>🌱 Daftar Tanaman Anda</h2>

      <div className="toolbar">
        <input
          type="text"
          placeholder="🔍 Filter jenis tanaman..."
          value={filterJenis}
          onChange={(e) => setFilterJenis(e.target.value)}
        />
        <button onClick={handleExportCSV}>⬇️ Export CSV</button>
      </div>

      {filteredPlants.length === 0 ? (
        <p className="empty-state">Belum ada tanaman atau tidak ditemukan.</p>
      ) : (
        <div className="plant-list">
          {filteredPlants.map((plant) => (
            <div className="plant-card" key={plant.id}>
              <h3>{plant.nama}</h3>
              <p><strong>Jenis:</strong> {plant.jenis}</p>
              <p><strong>Tanggal Tanam:</strong> {plant.tanggal}</p>
              <div className="card-actions">
                <button onClick={() => handleEdit(plant.id)} className="btn-edit">✏️</button>
                <button onClick={() => handleDelete(plant.id)} className="btn-delete">🗑️</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </>
);
}

export default ViewPlants;
