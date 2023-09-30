import React from 'react';

type ClubCardProps = {
  clubName: string;
  clubDescription: string;
  clubImage: string;
};

const ClubCard: React.FC<ClubCardProps> = ({ clubName, clubDescription, clubImage }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full h-48 object-cover" src={clubImage} alt={clubName} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{clubName}</div>
        <p className="text-gray-700 text-base">
          {clubDescription}
        </p>
      </div>
    </div>
  );
};

export default ClubCard;
