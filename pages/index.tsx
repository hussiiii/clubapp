import React from 'react';
import ClubCard from '../components/ClubCard';

const mockClubs = [
  {
    id: 1,
    name: 'Photography Club',
    description: 'Capturing moments, one click at a time.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Coding Club',
    description: 'Building the future, one line of code at a time.',
    image: 'https://via.placeholder.com/150'
  }
  // ... Add more mock clubs as needed
];

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Clubs</h1>
      <div className="flex flex-wrap justify-center">
        {mockClubs.map((club) => (
          <ClubCard
            key={club.id}
            clubName={club.name}
            clubDescription={club.description}
            clubImage={club.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
