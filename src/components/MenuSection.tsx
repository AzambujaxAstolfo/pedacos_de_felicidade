import React, { useState } from 'react';
import { cakeFlavors, cakeToppings, cakeDecorations } from '../data/menuData';
import MenuItem from './MenuItem';

type MenuCategory = 'flavors' | 'toppings' | 'decorations';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('flavors');

  const categories: { id: MenuCategory; label: string }[] = [
    { id: 'flavors', label: 'Sabores' },
    { id: 'toppings', label: 'Coberturas' },
    { id: 'decorations', label: 'Decorações' },
  ];

  const getCategoryItems = () => {
    switch (activeCategory) {
      case 'flavors':
        return cakeFlavors;
      case 'toppings':
        return cakeToppings;
      case 'decorations':
        return cakeDecorations;
      default:
        return cakeFlavors;
    }
  };

  return (
    <section id="menu" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nosso Cardápio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra nossa variedade de sabores, coberturas e decorações para criar o bolo dos seus sonhos.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-rose-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-rose-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getCategoryItems().map((item) => (
            <MenuItem 
              key={item.id}
              name={item.name}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;