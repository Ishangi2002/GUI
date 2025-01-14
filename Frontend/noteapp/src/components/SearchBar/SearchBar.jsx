import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  // Function to handle the Enter key press
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }

    const valueArr = [value]

    if (event.key === "Backspace" && valueArr.length === 1) {
      onClearSearch();
    }
  };

  return (
    <div className="w-80 flex items-center px-4 bg-slate-100 rounded-md">
      <input
        type="text"
        placeholder="Search Notes"
        className="w-full text-sm bg-transparent py-[11px] outline-none"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown} // Attach the onKeyDown event handler
      />

      {value && (
        <IoMdClose
          className="text-xl text-slate-500 cursor-pointer hover:text-black mr-3"
          onClick={onClearSearch}
        />
      )}

      <FaMagnifyingGlass
        className="text-slate-400 cursor-pointer hover:text-black"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;