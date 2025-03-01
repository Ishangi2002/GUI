import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import './SearchBar.css'; // Import the CSS file

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }

    const valueArr = [value];

    if (event.key === "Backspace" && valueArr.length === 1) {
      onClearSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Notes"
        className="search-input"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />

      {value && (
        <IoMdClose
          className="close-icon"
          onClick={onClearSearch}
        />
      )}

      <FaMagnifyingGlass
        className="search-icon"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
