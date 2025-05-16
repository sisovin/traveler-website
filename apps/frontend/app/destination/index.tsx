import React from 'react';
import DestinationGrid from '../../components/DestinationGrid';

const DestinationPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Destinations</h1>
      <DestinationGrid />
    </div>
  );
};

export default DestinationPage;
