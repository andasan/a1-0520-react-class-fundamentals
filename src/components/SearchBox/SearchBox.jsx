import React from "react";
import "./SearchBox.css";

const SearchBox = ({onSearchChange}) => {
  return (
    <input
      className="search-box"
      type="search"
      placeholder="Search Monster"
      onChange={onSearchChange}
    />
  );
};

export default SearchBox;
