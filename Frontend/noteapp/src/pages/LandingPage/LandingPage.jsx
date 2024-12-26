import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-5xl font-extrabold text-blue-600 mb-6">Welcome to NoteMate!</h1>
      
    <p className="text-lg text-gray-600 text-center mb-8">
            Your personal note-taking companion. Organize your thoughts and ideas easily!
    </p>

     
    <div className="flex gap-6">
        <Link 
          to="/login" 
          className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg hover:bg-blue-700 transition duration-300"
        >
          Login
        </Link>
        <Link 
          to="/signup" 
          className="bg-green-600 text-white px-8 py-4 rounded-xl text-lg hover:bg-green-700 transition duration-300"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;

