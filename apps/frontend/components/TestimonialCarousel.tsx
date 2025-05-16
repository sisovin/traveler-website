import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const testimonials = [
  {
    quote: "This was the best trip of my life! Highly recommend.",
    name: "John Doe",
    location: "New York, USA"
  },
  {
    quote: "Amazing experience, will definitely book again!",
    name: "Jane Smith",
    location: "London, UK"
  },
  {
    quote: "A wonderful adventure from start to finish.",
    name: "Carlos Rodriguez",
    location: "Madrid, Spain"
  }
];

const TestimonialCarousel = () => {
  return (
    <div className="w-full">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={5000}
        className="h-96"
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center justify-center h-full p-4">
            <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
            <p className="font-bold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
