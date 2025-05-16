import React from 'react';

interface MenuItemProps {
  name: string;
  description: string;
  image: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 text-gray-800">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default MenuItem;