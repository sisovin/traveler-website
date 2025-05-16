import React from 'react';

interface DestinationCardProps {
  image: string;
  name: string;
  description: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ image, name, description }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
