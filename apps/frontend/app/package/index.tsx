import React from 'react';
import PackageShowcase from '../../components/PackageShowcase';

const PackageListingPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Package Tours</h1>
      <PackageShowcase />
    </div>
  );
};

export default PackageListingPage;
