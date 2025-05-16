import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  const scrollToReservation = () => {
    const reservationSection = document.getElementById('reservation');
    if (reservationSection) {
      reservationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="min-h-screen bg-gradient-to-b from-amber-50 to-rose-50 pt-24 flex items-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 z-10 py-16 md:py-24">
        <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Um pedaço de <span className="text-rose-400">felicidade</span> em cada mordida
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
            Descubra a praticidade e comodidade de ter um pedaço de felicidade como sobremesa. Nossos bolos são feitos com amor e os melhores ingredientes.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-center md:justify-start">
            <Button 
              variant="primary"
              onClick={scrollToReservation}
              className="w-full md:w-auto"
            >
              Faça sua reserva
            </Button>
            <Button 
              variant="outline" 
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full md:w-auto bg-transparent border-white text-white hover:bg-white hover:bg-opacity-20"
            >
              Ver cardápio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;