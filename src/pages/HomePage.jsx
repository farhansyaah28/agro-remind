// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Steps from '../components/Steps';
import Footer from '../components/Footer';
import'../styles/index.css';

export default function HomePage() {

  const navigate = useNavigate();

  return (
    <div className="homepage">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Steps />
      <Footer />
    </div>
  );
}