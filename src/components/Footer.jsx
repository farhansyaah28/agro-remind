import React from 'react';
import '../styles/Footer.css';
// Import Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <span className="footer-logo-agro">AGRO</span>
          <div className="footer-circle"></div>
          <span className="footer-logo-remind">REMIND</span>
        </div>
        
        <p className="footer-tagline">Memudahkan Manajemen Pertanian Anda</p>
        
        {/* <div className="footer-links">
          <a href="#" className="footer-link" onClick={() => setMobileMenuOpen(false)}>Beranda</a>
          <a href="#features" className="footer-link">Fitur</a>
          <a href="#footer" className="footer-link" oncClick={() =>setMobileMenuOpen(false)}>Kontak</a>
          <a href="#footer" className="footer-link" oncClick={() => setMobileMenuOpen(false)}>About Us</a>
        </div> */}
        
        <div className="social-links">
          <a href="#" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-line"></i>
          </a>
        </div>
        
        <div className="contact-info">
          <p className="contact-email">📧 agroremind@gmail.com</p>
          <p className="contact-phone">📞 0822-XXXX-XXXX</p>
        </div>
        
        <div className="copyright">
          ©Copyright 2025, All Rights Reserved by AgroRemind
        </div>
        
        <div className="powered-by">
          AgroREMIND.TECH
        </div>
      </div>
    </footer>
  );
}

export default Footer;