import React from "react";
import { Link } from "react-router-dom";

function FirstPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md">

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Our Website
        </h1>

        <p className="text-gray-600 mb-6">
          To access products and explore our platform, please login to your account.
        </p>

        <Link
          to="/login"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Login to Continue
        </Link>

      </div>

    </div>
  );
}

export default FirstPage;