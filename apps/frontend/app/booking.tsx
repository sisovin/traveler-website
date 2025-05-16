import React from 'react';
import BookingForm from '../components/BookingForm';

const BookingPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Booking Process</h1>
      <BookingForm />
    </div>
  );
};

export default BookingPage;
