import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance"; 
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./ProfilePage.css"; 

const ProfilePage = () => {
  const [userInfo, setUserInfo] = useState(null); 
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // Get user info from backend
  const getUserInfo = async () => {
    try {
      const id = localStorage.getItem("id");
      const response = await axiosInstance.get(`api/user/getUserProfile/${id}`);
      setUserInfo(response.data);
      setName(response.data.name);
      setEmail(response.data.email);
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.clear();
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    getUserInfo(); 
  }, []); 

  const handleUpdate = async () => {
    const id = localStorage.getItem("id"); 
  
    try {
      const response = await axiosInstance.put(`api/user/updateUser/${id}`, { 
        id,
        name,
        email
      });

      if (response.status === 200) {
        alert("Profile updated successfully!"); 
        setUserInfo({ ...userInfo, name, email }); 
        setIsEditing(false); 
      }
    } catch (error) {
      console.error("Error updating user:", error.response?.data || error.message);
      alert("Failed to update profile!");
    }
  };

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page-container">
      <div className="back-button" onClick={() => navigate("/dashboard")}>
        <FaArrowLeft className="back-icon" /> 
      </div>

      <div className="welcome-message">
        <span className="line1">Welcome back, {userInfo.name}!<br/>
          <span className="line2">Your profile is ready, and you can make changes as needed.</span>
        </span>
      </div>

      {/* Profile View Section */}
      {!isEditing && (
        <div className="profile-view-container">
          <h2>UserProfile</h2>
          <div className="profile-box">
            <p><strong>Name:</strong> {userInfo.name}</p>
            <p><strong>Email:</strong> {userInfo.email}</p>
            <button className="btn-primary" onClick={() => setIsEditing(true)}>Edit Profile</button>
          </div>
        </div>
      )}

      {/* Profile Edit Section */}
      {isEditing && (
        <div className="profile-edit-container">
          <h2>Edit Profile</h2>
          <div className="profile-box2">
            <label><strong>Name:</strong></label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
              
            <label><strong>Email:</strong></label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />

            <button className="btn-primary1" onClick={handleUpdate}>Save Changes</button>
            <button className="btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
