import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import BusinessHours from './components/BusinessHours';
import ReservationSection from './components/ReservationSection';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Pedaços de Felicidade - Boleria Artesanal';
    
    // Optional: Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <MenuSection />
      <BusinessHours />
      <ReservationSection />
      <Location />
      <Footer />
    </div>
  );
}

export default App;