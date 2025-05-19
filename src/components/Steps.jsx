import React from 'react';
import '../styles/Steps.css'; // Make sure to save the CSS file to this path

function Steps() {
  return (
    <section className="steps" id="steps">
      <div className="steps-container">
        {/* Step 1 */}
        <div className="step-card" data-aos="fade-up" data-aos-delay="100">
          <div className="step-number">1</div>
          <h3 className="step-title">Daftar dan Pilih Tanaman</h3>
          <p className="step-description">
            Buat akun dan masukkan jenis tanaman yang ingin Anda tanam.
          </p>
        </div>
        
        {/* Step 2 */}
        <div className="step-card" data-aos="fade-up" data-aos-delay="200">
          <div className="step-number">2</div>
          <h3 className="step-title">Dapatkan Rekomendasi Waktu Tanam</h3>
          <p className="step-description">
            AgroRemind akan menganalisis data cuaca dan tanah untuk memberikan saran waktu tanam yang optimal.
          </p>
        </div>
        
        {/* Step 3 */}
        <div className="step-card" data-aos="fade-up" data-aos-delay="300">
          <div className="step-number">3</div>
          <h3 className="step-title">Terima Notifikasi Perawatan & Panen</h3>
          <p className="step-description">
            Dapatkan pengingat otomatis untuk penyiraman, pemupukan, dan panen agar hasil maksimal.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Steps;