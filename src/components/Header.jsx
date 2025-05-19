import React, { useState, useEffect } from 'react';
import '../styles/Header.css'; // Make sure to save the CSS file to this path
import { useNavigate } from 'react-router-dom';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <span className="logo-agro">AGRO</span>
        <span className="logo-remind">REMIND</span>
      </div>
      
      <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? '✕' : '☰'}
      </button>
      
      <nav className={`navigation ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Beranda</a>
          <a href="#features" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Fitur</a>
          <a href="#how-it-works" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Panduan</a>
          <a href="#footer" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Kontak</a>
        </nav>

      
      <div className="auth-buttons">
        <button className="login-btn" onClick={() => navigate('/login')}>Login</button>
        <button className="signup-btn" onClick={() => navigate('/register')} >Sign Up</button>
      </div>
    </header>
  );
}

export default Header;