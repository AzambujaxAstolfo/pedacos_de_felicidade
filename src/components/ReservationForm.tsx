import React, { useState } from 'react';
import { cakeFlavors, cakeToppings, cakeDecorations } from '../data/menuData';
import Button from './Button';

const ReservationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    cakeFlavor: '',
    toppings: [] as string[],
    decorations: [] as string[],
    additionalNotes: '',
    reservationDate: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, category: 'toppings' | 'decorations') => {
    const { value, checked } = e.target;
    
    if (checked) {
      setFormData({
        ...formData,
        [category]: [...formData[category], value],
      });
    } else {
      setFormData({
        ...formData,
        [category]: formData[category].filter((item) => item !== value),
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        fullName: '',
        phone: '',
        cakeFlavor: '',
        toppings: [],
        decorations: [],
        additionalNotes: '',
        reservationDate: '',
      });
    }, 3000);
  };

  if (formSubmitted) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <svg
            className="w-16 h-16 text-green-500 mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Reserva Enviada!</h3>
          <p className="text-gray-600 mb-6">
            Obrigado pela sua reserva, {formData.fullName}! Entraremos em contato para confirmar os detalhes.
          </p>
          <Button
            onClick={() => setFormSubmitted(false)}
            variant="primary"
          >
            Fazer Nova Reserva
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-1">
          <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
            Nome Completo*
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
        </div>
        
        <div className="col-span-1">
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            Telefone*
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            placeholder="(00) 00000-0000"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
        </div>
        
        <div className="col-span-1">
          <label htmlFor="cakeFlavor" className="block text-gray-700 font-medium mb-2">
            Sabor do Bolo*
          </label>
          <select
            id="cakeFlavor"
            name="cakeFlavor"
            value={formData.cakeFlavor}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
          >
            <option value="">Selecione um sabor</option>
            {cakeFlavors.map((flavor) => (
              <option key={flavor.id} value={flavor.name}>
                {flavor.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="col-span-1">
          <label htmlFor="reservationDate" className="block text-gray-700 font-medium mb-2">
            Data da Reserva*
          </label>
          <input
            type="date"
            id="reservationDate"
            name="reservationDate"
            value={formData.reservationDate}
            onChange={handleInputChange}
            required
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
        </div>
        
        <div className="col-span-2">
          <p className="text-gray-700 font-medium mb-2">Coberturas</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {cakeToppings.map((topping) => (
              <div key={topping.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`topping-${topping.id}`}
                  name="toppings"
                  value={topping.name}
                  checked={formData.toppings.includes(topping.name)}
                  onChange={(e) => handleCheckboxChange(e, 'toppings')}
                  className="mr-2 h-4 w-4 text-rose-500 focus:ring-rose-500"
                />
                <label htmlFor={`topping-${topping.id}`} className="text-gray-600">
                  {topping.name}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="col-span-2">
          <p className="text-gray-700 font-medium mb-2">Decorações</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {cakeDecorations.map((decoration) => (
              <div key={decoration.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`decoration-${decoration.id}`}
                  name="decorations"
                  value={decoration.name}
                  checked={formData.decorations.includes(decoration.name)}
                  onChange={(e) => handleCheckboxChange(e, 'decorations')}
                  className="mr-2 h-4 w-4 text-rose-500 focus:ring-rose-500"
                />
                <label htmlFor={`decoration-${decoration.id}`} className="text-gray-600">
                  {decoration.name}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="col-span-2">
          <label htmlFor="additionalNotes" className="block text-gray-700 font-medium mb-2">
            Observações Adicionais
          </label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
          ></textarea>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <Button type="submit" variant="primary">
          Enviar Reserva
        </Button>
      </div>
    </form>
  );
};

export default ReservationForm;