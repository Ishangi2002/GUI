//import React from 'react';
import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PasswordInput from "../../components/input/passwordinput";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";

const SignUp = () => {

        const[name, setName] = useState("");
        const [email, setEmail] = useState("");
        const[password, setPassword] = useState("");
        const[error, setError] = useState(null);

        const navigate = useNavigate()

        const handleSignUp =  async (e) =>{
            e.preventDefault();

            if (!name){
                setError("Please Enter your name");
                return;
            }
            if (!validateEmail(email)) {
                setError("Please enter a valid email address.");
                return;
            }
            
            if(!password){
                setError("Please enter the password")
                return;
            }
                setError("")

                //SignUp API Call
                try {
                    const response = await axiosInstance.post("api/auth/signup",{
                        name : name,
                        email: email,
                        password: password,
                    });
        
                //Handle Successful registration response
                if(response.data && response.data.token){
                    setError(response.data.message)
                    return 
                }
                if(response.data && response.data.token){
                    localStorage.setItem("token",response.data.token)
                    navigate('/dashboard')
                }
                } catch (error) {
                    //Handle login error
                    if(error.response && error.response.data && error.response.data.message) {
                        setError(error.response.data.message);
                    } else {
                        setError("An unexpected error occured.Please try again.");
                    }
                }
        };

    
    return (
    <>
       {/*<Navbar />*/}
        <div className="flex items-center justify-center mt-28">
            <div  className="w-96 border rounded big-white px-7 py-10">
                <form onSubmit={handleSignUp}>
                    <h4 className="text-2xl mb-7">SignUp</h4>

                    <input 
                    type ="text" 
                    placeholder="Name" 
                    className="input-box" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />

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

                    {error && <p className="text-red-500  text-xs pb-1">{error} </p>}

                    <button type="submit" className="btn-primary bg-[#7321A6] text-white text-lg hover:bg-[#621A8E] transition-colors duration-300">Create Account</button>
                    <p className="text-sm text-center mt-4">
                        Already have an account?{" "}
                        <Link to="/Login" className="font-medium text-primary underline">Login</Link>
                    </p>

                </form>
            </div>
        </div>
    </>
    );
};

export default SignUp;