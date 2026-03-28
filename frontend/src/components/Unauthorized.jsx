import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md">
        <FaExclamationTriangle className="text-yellow-500 text-6xl mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Unauthorized</h2>
        <p className="text-gray-600 mb-6">
          You are not authorized to view this page.
        </p>
        <button
          onClick={() => navigate('/dashboard')}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Go to Home
        </button>
        
      </div>
    </div>
  );
}

export default Unauthorized;