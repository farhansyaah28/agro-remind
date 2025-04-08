import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    // Ambil data akun yang sudah ada
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Cek apakah email sudah terdaftar
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      alert('Email sudah terdaftar!');
      return;
    }

    // Tambahkan akun baru
    users.push({ name, email, password });

    // Simpan kembali ke localStorage
    localStorage.setItem('users', JSON.stringify(users));

    alert('Pendaftaran berhasil! Silakan login.');
    navigate('/'); // Arahkan ke halaman login
  };

  return (
    <div className="auth-page">
      <div className="auth-image"></div>
      <div className="auth-form">
        <h2>Daftar ke <span className="brand">AGROREMIND</span></h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nama Lengkap"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Kata Sandi"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btn primary" type="submit">Daftar</button>
        </form>
        <p>Sudah punya akun? <a href="/Login">Login Sekarang</a></p>
      </div>
    </div>
  );
}
