import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";


const LandingPage = () => {
  return (
    <div className="landing-container">
      

      <h1 className="title">Welcome to NoteMate!</h1>

      <p className="subtitle">
        Your personal note-taking companion. Organize your thoughts and ideas easily!
      </p>

      <div className="button-container">
        <Link to="/login" className="login-button">
          Login
        </Link>
        <Link to="/signup" className="signup-button">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
