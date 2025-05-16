import React from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant, children, onClick }) => {
  let className = 'px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2';

  switch (variant) {
    case 'primary':
      className += ' bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500';
      break;
    case 'secondary':
      className += ' bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500';
      break;
    case 'danger':
      className += ' bg-red-500 text-white hover:bg-red-600 focus:ring-red-500';
      break;
    default:
      break;
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
