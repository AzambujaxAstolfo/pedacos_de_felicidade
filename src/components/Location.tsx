import React from 'react';
import { MapPin, Phone, Instagram } from 'lucide-react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Location: React.FC = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '100%'
  };

  const center = {
    lat: -20.819324,
    lng: -49.379173
  };

  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nossa Localização</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Venha nos visitar e experimentar nossos deliciosos bolos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-amber-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Fale Conosco</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Endereço</h4>
                  <p className="text-gray-600">
                    Rua Doutor Presciliano Pinto, 940<br />
                    Rua Boa Vista<br />
                    São José do Rio Preto - SP<br />
                    CEP: 15025-100
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Contato</h4>
                  <p className="text-gray-600">
                    Telefone: (0) 1784-8976<br />
                    WhatsApp: (0) 1784-8976
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Instagram className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Redes Sociais</h4>
                  <p className="text-gray-600">
                    Instagram: @pedacosdefelicidade
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Location;