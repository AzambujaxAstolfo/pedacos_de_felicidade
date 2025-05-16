import React from 'react';
import ReservationForm from './ReservationForm';

const ReservationSection: React.FC = () => {
  return (
    <section id="reservation" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Faça sua Reserva</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Preencha o formulário abaixo para reservar seu pedaço de felicidade. Garantimos a qualidade e o sabor em cada pedido.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <ReservationForm />
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;