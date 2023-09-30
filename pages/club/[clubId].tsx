
import React from 'react';
import ClubProfile from '../../components/ClubProfile';

const ClubProfilePage: React.FC = () => {
  // For now, we'll use mock data. Later, we'll fetch real data based on clubId.
  const mockClub = {
    name: 'Photography Club',
    description: 'Capturing moments, one click at a time.',
    image: 'https://via.placeholder.com/150',
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Club Profile</h1>
      <ClubProfile 
        clubName={mockClub.name}
        clubDescription={mockClub.description}
        clubImage={mockClub.image}
      />
    </div>
  );
};

export default ClubProfilePage;