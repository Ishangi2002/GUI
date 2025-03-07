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
        email,
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

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your account?");
    if (!confirmDelete) return;

    const id = localStorage.getItem("id");
    try {
      const response = await axiosInstance.delete(`api/user/deleteUser/${id}`);
      if (response.status === 200) {
        alert("Account deleted successfully!");
        localStorage.clear();
        navigate("/login");
      }
    } catch (error) {
      console.error("Error deleting user:", error.response?.data || error.message);
      alert("Failed to delete account!");
    }
  };

  if (!userInfo) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="profile-page-container">
      <div className="back-button" onClick={() => navigate("/dashboard")}>
        <FaArrowLeft className="back-icon" />
      </div>

      <div className="welcome-message">
        <span className="line1">Welcome back, {userInfo.name}!</span>
        <span className="line2">Your profile is ready, and you can make changes as needed.</span>
      </div>

      {!isEditing ? (
        <div className="profile-view-container">
          <h2 style={{ textAlign: "center" }}>User Profile</h2>
          <div className="profile-box">
            <p>
              <strong>Name:</strong> {userInfo.name}
            </p>
            <p>
              <strong>Email:</strong> {userInfo.email}
            </p>
            <button className="btn-primary" onClick={() => setIsEditing(true)}>
              Edit Profile
            </button>
            <button className="btn-danger" onClick={handleDelete}>
              Delete Account
            </button>
          </div>
        </div>
      ) : (
        <div className="profile-edit-container">
          <h2 style={{ textAlign: "center" }}>Edit Profile</h2>
          <div className="profile-box2">
            <label>
              <strong>Name:</strong>
            </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label>
              <strong>Email:</strong>
            </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <div className="edit-buttons">
              <button className="btn-primary1" onClick={handleUpdate}>
                Save Changes
              </button>
              <button className="btn-secondary" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;