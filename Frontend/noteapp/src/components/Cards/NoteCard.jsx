import React, { useState } from "react";
import { MdOutlinePushPin } from "react-icons/md";
import { MdCreate, MdDelete } from "react-icons/md";
import moment from "moment";
import "./NoteCard.css"; 

const NoteCard = ({
  title,
  date,
  content,
  tags,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  const [isExpanded, setIsExpanded] = useState(false); //for expand

  // Function to toggle the expanded state
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="note-card">
      <div className="note-header">
        <div>
          <h6 className="note-title">{title}</h6>
          <span className="note-date">{moment(date).format("Do MMM YYYY")}</span>
        </div>
      </div>
      <p className="note-content">
      <p className="note-content">
      {isExpanded ? content : content?.slice(0, 100) + "..."}
      </p>

        {content?.length > 60 && ( 
          <button className="see-more-btn" onClick={toggleExpand}>
            {isExpanded ? "See Less" : "See More"}
          </button>
        )}
      </p>
      <div className="note-footer">
        <div className="note-tags">
          {tags
            ? tags.split(",").map((item, index) => (
                <span key={index} className="note-tag">
                  #{item}
                </span>
              ))
            : null}
        </div>
        <div className="note-actions">
          <MdCreate className="action-btn edit-btn" onClick={onEdit} />
          <MdDelete className="action-btn delete-btn" onClick={onDelete} />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;