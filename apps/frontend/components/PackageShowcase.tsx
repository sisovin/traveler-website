import React from 'react';

const packages = [
  {
    id: 1,
    name: 'Beach Paradise',
    description: 'Enjoy a relaxing vacation on the beautiful beaches of Hawaii.',
    price: '$999',
  },
  {
    id: 2,
    name: 'Mountain Adventure',
    description: 'Experience the thrill of mountain climbing in the Rockies.',
    price: '$799',
  },
  {
    id: 3,
    name: 'City Lights',
    description: 'Explore the vibrant nightlife and culture of New York City.',
    price: '$899',
  },
];

const PackageShowcase = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Tour Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {packages.map((pkg) => (
          <div key={pkg.id} className="border p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
            <p className="text-gray-700 mb-2">{pkg.description}</p>
            <p className="text-lg font-bold">{pkg.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageShowcase;
