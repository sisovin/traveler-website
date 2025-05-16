import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import ServiceCards from '../components/ServiceCards';
import DestinationGrid from '../components/DestinationGrid';
import PackageShowcase from '../components/PackageShowcase';
import TestimonialCarousel from '../components/TestimonialCarousel';
import NewsletterForm from '../components/NewsletterForm';

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <HeroCarousel />
      <ServiceCards />
      <DestinationGrid />
      <PackageShowcase />
      <TestimonialCarousel />
      <NewsletterForm />
    </div>
  );
}
