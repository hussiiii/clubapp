import React, { useState } from 'react';

type ClubProfileProps = {
  clubName: string;
  clubDescription: string;
  clubImage: string;
  // Later, we can add more props like events, followers, etc.
};

const ClubProfile: React.FC<ClubProfileProps> = ({ clubName, clubDescription, clubImage }) => {
  const [isFollowing, setIsFollowing] = useState(false); // for the "Follow" button

  return (
    <div className="max-w-xl mx-auto mt-10">
      <img className="w-full h-48 object-cover mb-4" src={clubImage} alt={clubName} />
      <h2 className="text-2xl font-bold mb-4">{clubName}</h2>
      <p className="text-gray-700 mb-4">{clubDescription}</p>
      <button 
        onClick={() => setIsFollowing(!isFollowing)}
        className={`py-2 px-4 rounded ${isFollowing ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </button>
      {/* Later, we'll add a list of events here */}
    </div>
  );
};

export default ClubProfile;
