import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/input/passwordinput";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import "./SignUp.css"; 

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (!name) {
            setError("Please Enter your name");
            return;
        }
        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (!password) {
            setError("Please enter the password");
            return;
        }
        setError("");

        // SignUp API Call
        try {
            const response = await axiosInstance.post("api/auth/signup", {
                name: name,
                email: email,
                password: password,
            });

            if (response.status === 200) {
                navigate('/login');
            }

        } catch (error) {
            // Handle error
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError("An unexpected error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <form onSubmit={handleSignUp}>
                    <h4 className="signup-title">Sign Up</h4>

                    <input
                        type="text"
                        placeholder="Name"
                        className="input-box"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

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

                    <button type="submit" className="btn-primary">Create Account</button>
                    <p className="login-prompt">
                        Already have an account?{" "}
                        <Link to="/login" className="login-link">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
