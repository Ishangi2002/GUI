import React from "react";
import { MdOutlinePushPin } from "react-icons/md";
import { MdCreate, MdDelete } from "react-icons/md";
import moment from "moment";
import "./NoteCard.css"; // Import the regular CSS file

const NoteCard = ({
  title,
  date,
  content,
  tags,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className="note-card">
      <div className="note-header">
        <div>
          <h6 className="note-title">{title}</h6>
          <span className="note-date">{moment(date).format("Do MMM YYYY")}</span>
        </div>
        {/* <MdOutlinePushPin className={`icon-btn ${isPinned ? 'text-primary' : 'text-slate-300'}`} onClick={onPinNote} /> */}
      </div>
      <p className="note-content">{content?.slice(0, 60)}</p>
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
