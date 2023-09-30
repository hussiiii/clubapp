import React, { useState } from 'react';

const ClubRegistrationForm: React.FC = () => {
  const [clubName, setClubName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Send data to backend

    console.log(clubName, description, image);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Register Your Club</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="clubName">
            Club Name
          </label>
          <input
            type="text"
            id="clubName"
            value={clubName}
            onChange={(e) => setClubName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter club name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter club description"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Profile Picture
          </label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
            className="text-gray-700 py-1 px-3"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClubRegistrationForm;
