import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [startDate, setStartDate] = useState(new Date());

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Step 1: Personal Information</h2>
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <button
            onClick={nextStep}
            className="w-full p-2 bg-blue-500 text-white rounded-md"
          >
            Next
          </button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Step 2: Booking Details</h2>
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <input
            type="number"
            placeholder="Number of Guests"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <div className="flex justify-between">
            <button
              onClick={prevStep}
              className="w-full p-2 bg-gray-500 text-white rounded-md mr-2"
            >
              Previous
            </button>
            <button
              onClick={nextStep}
              className="w-full p-2 bg-blue-500 text-white rounded-md"
            >
              Next
            </button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Step 3: Payment Information</h2>
          <input
            type="text"
            placeholder="Card Number"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Card Expiry Date"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="CVV"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <div className="flex justify-between">
            <button
              onClick={prevStep}
              className="w-full p-2 bg-gray-500 text-white rounded-md mr-2"
            >
              Previous
            </button>
            <button
              onClick={() => alert('Booking Confirmed!')}
              className="w-full p-2 bg-green-500 text-white rounded-md"
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
