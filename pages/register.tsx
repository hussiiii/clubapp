import React from 'react';
import ClubRegistrationForm from '../components/ClubRegistrationForm';

const RegisterClub: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Club Registration</h1>
      <ClubRegistrationForm />
    </div>
  );
};

export default RegisterClub;
