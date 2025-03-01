import React, { useEffect } from "react";
import { LuCheck } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import './Toast.css'; // Import the regular CSS file

const Toast = ({ isShown, message, type, onClose }) => {

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isShown, onClose]);

  return (
    <div className={`toast-container ${isShown ? "toast-show" : "toast-hide"}`}>
      <div className={`toast-box ${type === "delete" ? "toast-delete" : "toast-success"}`}>
        <div className="toast-content">
          <div className={`toast-icon ${type === "delete" ? "toast-icon-delete" : "toast-icon-success"}`}>
            {type === "delete" ? (
              <MdDeleteOutline className="icon" />
            ) : (
              <LuCheck className="icon" />
            )}
          </div>

          <p className="toast-message">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Toast;
