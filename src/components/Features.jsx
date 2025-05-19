import React from 'react';
import '../styles/Features.css'; // Make sure to save the CSS file to this path
// Uncomment these imports if you decide to use actual images
import wateringImage from '../assets/watering.jpg';
import plantManagementImage from '../assets/plant-management.jpg';
import soilAnalysisImage from '../assets/soil-analysis.jpg';

function Features() {
  return (
    <section className="features" id="features">
      <h3 className="features-subtitle">WHY USING AGROREMIND?</h3>
      <h2 className="features-title">EASILY MANAGE YOUR FARM</h2>
      
      <div className="features-container">
        {/* Feature 1 */}
        <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
          {/* If you want to use actual images instead of CSS icons, uncomment the following line */}
          <img src={wateringImage} alt="Automatic Watering" className="feature-image" />
          <h3 className="feature-title">Pengingat Otomatis</h3>
          <p className="feature-description">
            Dapatkan notifikasi otomatis untuk jadwal penyiraman, pemupukan, dan panen agar tanaman selalu terawat dengan baik.
          </p>
        </div>
        
        {/* Feature 2 */}
        <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
          <img src={plantManagementImage} alt="Plant Management" className="feature-image" />
          <h3 className="feature-title">Manajemen Tanaman</h3>
          <p className="feature-description">
            Pantau pertumbuhan tanaman dengan catatan harian yang mencakup kondisi lahan, cuaca dan perawatan yang tepat.
          </p>
        </div>
        
        {/* Feature 3 */}
        <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
          <img src={soilAnalysisImage} alt="Soil Analysis" className="feature-image" />
          <h3 className="feature-title">Analisis Lahan</h3>
          <p className="feature-description">
            Dapatkan wawasan tentang kualitas tanah dan prediksi hasil panen melalui analisis data.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;