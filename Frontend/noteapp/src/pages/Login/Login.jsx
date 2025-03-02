import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/input/passwordinput";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import "./Login.css";
import loginImage from "../../assets/login1.png"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }
    setError("");

    // Login API Call
    try {
      const response = await axiosInstance.post("api/auth/login", {
        email: email,
        password: password,
      });

      // Handle Successful login response
      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("id", response.data.id);
        navigate("/dashboard");
      }
    } catch (error) {
      // Handle login error
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-box">
          <form onSubmit={handleLogin}>
            <h4 className="login-title">Login</h4>
            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="btn-primary">
              Login
            </button>
            <p className="signup-prompt">
              Not Registered Yet?{" "}
              <Link to="/SignUp" className="signup-link">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="login-image">
        <img src={loginImage} alt="Login" />
      </div>
    </div>
  );
};

export default Login;