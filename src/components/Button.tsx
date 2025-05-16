import React from 'react';
import { ButtonVariant } from '../types';

interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  type = 'button',
  onClick,
  disabled = false,
  className = '',
}) => {
  const baseStyle = 'px-6 py-2 rounded-full font-medium text-sm md:text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-rose-500 text-white hover:bg-rose-600 focus:ring-rose-500',
    secondary: 'bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-500',
    outline: 'bg-transparent border-2 border-rose-500 text-rose-500 hover:bg-rose-50 focus:ring-rose-500',
  };

  const buttonStyle = `${baseStyle} ${variantStyles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  return (
    <button
      type={type}
      className={buttonStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;