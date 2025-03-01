import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { getInitials } from "../../utils/helper";
import "./ProfileInfo.css";

const ProfileInfo = ({ userInfo, onLogout, onAvatarClick }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle avatar click
  const handleAvatarClick = () => {
    // You can add any logic here before navigating if needed
    navigate("/profile"); // Navigate to the "Profile" page (or another container)
    if (onAvatarClick) onAvatarClick(); // Optional callback for avatar click
  };

  return (
    <div className="profile-info">
      <button className="avatar" onClick={handleAvatarClick}>
        {getInitials(userInfo?.name)}
      </button>

      <div>
        <p className="username">{userInfo.name}</p>
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
