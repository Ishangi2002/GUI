import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-5xl font-extrabold text-[#7321A6] mb-6">Welcome to NoteMate!</h1>
      
    <p className="text-lg text-gray-600 text-center mb-8 font-bold">
            Your personal note-taking companion. Organize your thoughts and ideas easily!
    </p>

     
    <div className="flex gap-12">
        <Link 
          to="/login" 
          className="bg-[#7321A6] text-white px-6 py-3 rounded-xl text-lg hover:bg-[#621A8E] transition duration-300  "
        >
          Login
        </Link>
        <Link 
          to="/signup" 
          className="bg-white text-gray px-6 py-3 rounded-xl text-lg hover:bg-[#D8BFD8] transition duration-300 border-2 border-[#7321A6] hover:border-[#621A8E] "
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;

