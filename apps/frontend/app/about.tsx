import React from 'react';

const teamMembers = [
  {
    name: 'John Doe',
    position: 'CEO',
    image: '/images/team/john.jpg',
    bio: 'John is the visionary behind our company with over 20 years of experience in the travel industry.',
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    image: '/images/team/jane.jpg',
    bio: 'Jane is the tech guru who ensures our platform runs smoothly and efficiently.',
  },
  {
    name: 'Emily Johnson',
    position: 'COO',
    image: '/images/team/emily.jpg',
    bio: 'Emily oversees our operations and ensures everything is running like a well-oiled machine.',
  },
  {
    name: 'Michael Brown',
    position: 'CFO',
    image: '/images/team/michael.jpg',
    bio: 'Michael manages our finances and ensures we are on a path to sustainable growth.',
  },
];

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <p className="mb-8">
        Welcome to our travel website! We are dedicated to providing the best travel experiences for our customers. Our team of experts is here to help you plan your next adventure.
      </p>
      <h2 className="text-3xl font-bold mb-4">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-gray-600 mb-2">{member.position}</p>
            <p className="text-gray-600">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
