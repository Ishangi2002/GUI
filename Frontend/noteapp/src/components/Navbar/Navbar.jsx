import React, { useState } from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";


const Navbar = ({userInfo, onSearchNotes,onClearSearch}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate =useNavigate();
 

  //console.log("Current Path:", location.pathname);
  const onLogout = () => {
    localStorage.clear()
    navigate("/login");
  };

    const handleSearch =() => {
      if(searchQuery){
        onSearchNotes(searchQuery)
      }
    };

    const handleClearSearch  = () => {
      setSearchQuery("")
      onClearSearch()
    }

  return (
    <div className ="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
        <h2 className="text-xl font-medium text-black py-2">Notes</h2>

          <SearchBar value ={searchQuery}
          onChange={({target}) => {
            setSearchQuery(target.value);
          }} 
          handleSearch={handleSearch}
          onClearSearch={handleClearSearch}
          />
          
        <ProfileInfo userInfo={userInfo} onLogout={onLogout}/>
        
    </div>
  );
};

export default Navbar;