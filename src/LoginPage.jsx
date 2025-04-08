import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
  
    // Ambil daftar user dari localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Cek kecocokan
    const user = users.find((u) => u.email === email && u.password === password);
  
    if (user) {
      alert('Login berhasil!');
      navigate('/dashboard');
    } else {
      alert('Email atau password salah!');
    }
  };
  

  return (
    <div className="auth-page">
      <div className="auth-image">
      </div>
      <div className="auth-form">
        <h2>Masuk ke <span className="brand">AGROREMIND</span></h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btn primary" type="submit">Masuk</button>
        </form>
        <p>Belum punya akun? <Link to="/register">Daftar sekarang</Link></p>
      </div>
    </div>
  );
}
console.log("LoginPage loaded");
