import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/AuthPage.css';

function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Password dan konfirmasi tidak sama!');
      return;
    }

    const emailNormalized = formData.email.trim().toLowerCase();
    const users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[emailNormalized]) {
      alert(`Email ${emailNormalized} sudah terdaftar. Silakan login.`);
      return;
    }

    users[emailNormalized] = {
      name: formData.name.trim(),
      email: emailNormalized,
      password: formData.password
    };

    localStorage.setItem('users', JSON.stringify(users));

    alert('Registrasi berhasil! Silakan login.');
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <div className="auth-decoration decoration-1"></div>
      <div className="auth-decoration decoration-2"></div>

      <div className="auth-card">
        <div className="auth-brand">
          <div className="brand-pattern"></div>
          <div className="brand-content">
            <div className="brand-top">
              <div className="brand-logo">
                <span>AGRO</span>
                <span className="brand-logo-circle"></span>
                <span className='remind'>REMIND</span>
              </div>
              <h1 className="brand-tagline">Easily Manage Your Farm</h1>
              <p className="brand-description">Memudahkan Manajemen Pertanian Anda</p>
            </div>
            <div className="brand-features">
              <div className="brand-feature">✓ Pengingat Otomatis untuk Pertanian</div>
              <div className="brand-feature">✓ Pantau Pertanian Anda dengan Catatan</div>
              <div className="brand-feature">✓ Tambah Wawasan Anda dengan Analisis Tanah</div>
            </div>
            <div className="brand-footer">© 2025 AgroRemind. All rights reserved.</div>
          </div>
        </div>

        <div className="auth-form-panel">
          <div className="auth-header">
            <h2 className="auth-title">Buat Akun</h2>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Nama Lengkap</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group password">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="input-group password">
              <label htmlFor="confirmPassword">Konfirmasi Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className="remember-forgot">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={() => setAgreeTerms(!agreeTerms)}
                  required
                />
                Saya menyetujui <a href="#">Syarat</a> dan <a href="#">Ketentuan</a>
              </label>
            </div>

            <button type="submit" className="btn-primary">Buat Akun</button>
          </form>

          <div className="auth-footer">
            Sudah punya akun? <Link to="/login">Masuk</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
