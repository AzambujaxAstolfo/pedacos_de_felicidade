import React from 'react';
import { Clock } from 'lucide-react';

const BusinessHours: React.FC = () => {
  return (
    <section id="hours" className="py-20 bg-rose-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 text-center">
            <Clock className="w-16 h-16 mx-auto text-rose-500 mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Horário de Funcionamento</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Segunda à Sexta</h3>
                <p className="text-lg text-gray-600">7h às 20h</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Finais de Semana</h3>
                <p className="text-lg text-gray-600">9h às 15h</p>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-sm text-gray-500 italic">
                Pedidos especiais podem ser feitos com pelo menos 24 horas de antecedência.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;