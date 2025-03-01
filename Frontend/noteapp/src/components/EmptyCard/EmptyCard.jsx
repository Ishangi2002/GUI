import React from "react";
import "./EmptyCard.css"; // Import the regular CSS file

const EmptyCard = ({ imgSrc, message }) => {
  return (
    <div className="empty-card-container">
      <img src={imgSrc} alt="No-notes" className="empty-card-image" />
      <p className="empty-card-message">{message}</p>
    </div>
  );
};

export default EmptyCard;
