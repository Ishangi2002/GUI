import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import "./PasswordInput.css"; // Import the regular CSS file

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="password-input-container">
      <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="password-input"
      />
      {isShowPassword ? (
        <FaRegEye
          size={22}
          className="eye-icon-visible"
          onClick={toggleShowPassword}
        />
      ) : (
        <FaRegEyeSlash
          size={22}
          className="eye-icon-hidden"
          onClick={toggleShowPassword}
        />
      )}
    </div>
  );
};

export default PasswordInput;
