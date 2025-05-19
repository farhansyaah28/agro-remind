import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AuthPage.css';

function RegisterPage() {
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
    // Handle registration logic here
    console.log('Registration attempt with:', formData);
  };

  return (
    <div className="auth-container">
      {/* Decorative background elements */}
      <div className="auth-decoration decoration-1"></div>
      <div className="auth-decoration decoration-2"></div>
      
      <div className="auth-card">
        {/* Brand section */}
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
              <p className="brand-description">
                Memudahkan Manajemen Pertanian Anda
              </p>
            </div>
            
            <div className="brand-features">
              <div className="brand-feature">
                <span className="brand-feature-icon">✓</span>
                <span>Pengingat Otomatis untuk Pertanian</span>
              </div>
              <div className="brand-feature">
                <span className="brand-feature-icon">✓</span>
                <span>Pantau Pertanian Anda dengan Catatan</span>
              </div>
              <div className="brand-feature">
                <span className="brand-feature-icon">✓</span>
                <span>Tambah Wawasan Anda dengan Analisis Tanah</span>
              </div>
            </div>
            
            <div className="brand-footer">
              © 2025 AgroRemind. All rights reserved.
            </div>
          </div>
        </div>
        
        {/* Form section */}
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
                placeholder="Masukkan nama lengkap anda"
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
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div className="input-group password">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a strong password"
                required
              />
              <button 
                type="button" 
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            
            <div className="input-group password">
              <label htmlFor="confirmPassword">Konfirmasi Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
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
                Saya telah menyetujui<a href="#" className="forgot-password">Syarat</a> dan <a href="#" className="forgot-password">Ketentuan</a>
              </label>
            </div>
            
            <button type="submit" className="btn-primary">
              Buat Akun
            </button>
          </form>
          
          <div className="auth-footer">
            Sudah punya akun?<Link to="/login">Masuk</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;