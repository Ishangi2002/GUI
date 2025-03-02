import React from "react";
import { useNavigate } from "react-router-dom"; 
import { getInitials } from "../../utils/helper";
import "./ProfileInfo.css";

const ProfileInfo = ({ userInfo, onLogout, onAvatarClick }) => {
  const navigate = useNavigate(); 

  const handleAvatarClick = () => {
    navigate("/profile"); 
    if (onAvatarClick) onAvatarClick(); 
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
