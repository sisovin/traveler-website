import React from 'react';

const destinations = [
  {
    id: 1,
    name: 'Paris',
    image: '/images/paris.jpg',
    description: 'The city of lights.',
  },
  {
    id: 2,
    name: 'New York',
    image: '/images/newyork.jpg',
    description: 'The city that never sleeps.',
  },
  {
    id: 3,
    name: 'Tokyo',
    image: '/images/tokyo.jpg',
    description: 'The heart of Japan.',
  },
  {
    id: 4,
    name: 'Sydney',
    image: '/images/sydney.jpg',
    description: 'The harbour city.',
  },
];

const DestinationGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {destinations.map((destination) => (
        <div
          key={destination.id}
          className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center">
              <h2 className="text-xl font-bold">{destination.name}</h2>
              <p className="mt-2">{destination.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DestinationGrid;
