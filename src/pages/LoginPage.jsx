import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AuthPage.css'; // Make sure to save the CSS with this name

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { email, password, rememberMe });
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
            <h2 className="auth-title">Selamat Datang Kembali</h2>
            <p className="auth-subtitle">Masuk dengan akun untuk melanjutkan</p>
          </div>
          
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div className="input-group password">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
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
            
            <div className="remember-forgot">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                Ingat Saya
              </label>
              <a href="#" className="forgot-password">Lupa Password</a>
            </div>
            
            <button type="submit" className="btn-primary">
              Masuk
            </button>
          </form>
          
          <div className="auth-footer">
           Tidak punya akun? <Link to="/register">Daftar Sekarang!</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;