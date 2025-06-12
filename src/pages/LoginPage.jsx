import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/AuthPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Gagal login');
    }

    // Simpan token & data user
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));

    // Arahkan ke dashboard
    navigate('/dashboard');
  } catch (err) {
    alert(err.message);
  }
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
            <h2 className="auth-title">Selamat Datang</h2>
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

            <button type="submit" className="btn-primary">Masuk</button>
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
