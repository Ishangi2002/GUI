import React, { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";
import "./TagInput.css"; // Import the regular CSS file

const TagInput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addNewTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTag();
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="tag-input-container">
      {Array.isArray(tags) && tags.length > 0 && (
        <div className="tags-list">
          {tags.map((tag, index) => {
            return (
              <span key={index} className="tag-item">
                # {tag}
                <button onClick={() => handleRemoveTag(tag)} className="remove-tag">
                  <MdClose />
                </button>
              </span>
            );
          })}
        </div>
      )}

      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          className="tag-input"
          placeholder="Add tags"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />

        <button
          className="add-tag-btn"
          onClick={() => {
            addNewTag();
          }}
        >
          <MdAdd className="add-icon" />
        </button>
      </div>
    </div>
  );
};

export default TagInput;
