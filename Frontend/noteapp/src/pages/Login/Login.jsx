//import React from "react";
import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/input/passwordinput";



const Login = () => {

    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState(null);


    return ( <>
        <Navbar />
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div  className="w-96 border rounded big-white px-7 py-10">
                <form onSubmit={handleLogin}>
                    <h4 className="text-2xl mb-7">Login</h4>
                    <input 
                    type ="text" 
                    placeholder="Email" 
                    className="input-box" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                 
                    />

                    <PasswordInput
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    />


                    <button type="submit" className="btn-primary">Login</button>
                    <p className="text-sm text-center mt-4">
                        Not Registered Yet?{" "}
                        <Link to="/SignUp" className="font-medium text-primary underline">Create an Account</Link>
                    </p>
                </form>
            </div>
        </div>
        </>
    );
};

export default Login;