// src/components/RegistrationForm.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const RegistrationForm = () => {

  const {id} = useParams();
  console.log(id)

  // Fetch activity details based on activityId

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Registration for Activity {id}</h2>
      {/* Your registration form UI goes here */}
    </div>
  );
};

export default RegistrationForm;
