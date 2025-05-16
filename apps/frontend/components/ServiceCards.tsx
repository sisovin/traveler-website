import React from 'react';

const services = [
  {
    icon: '🌍',
    title: 'Global Travel',
    description: 'Explore destinations around the world with our travel packages.',
  },
  {
    icon: '🏨',
    title: 'Hotel Booking',
    description: 'Book hotels at the best prices with our exclusive deals.',
  },
  {
    icon: '✈️',
    title: 'Flight Booking',
    description: 'Find and book flights to your favorite destinations.',
  },
  {
    icon: '🚗',
    title: 'Car Rentals',
    description: 'Rent cars at affordable rates for your travel needs.',
  },
];

const ServiceCards = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
