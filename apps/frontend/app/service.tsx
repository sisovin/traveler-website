import React from 'react';
import ServiceCards from '../components/ServiceCards';

const ServicesPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <ServiceCards />
    </div>
  );
};

export default ServicesPage;
