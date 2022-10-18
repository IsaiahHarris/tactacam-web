import React from "react";
import "./Search.scss";

const Search = ({ setSearchValue, searchValue, triggerSearch }) => {
  return (
    <div className="search-container">
      <input
        placeholder="Type to search..."
        type="text"
        className="search-input"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      <button
        className="search-button"
        onKeyDown={(e) => {
          if (e.target.keyCode === 13) {
            triggerSearch(searchValue);
          }
        }}
        onClick={() => triggerSearch(searchValue)}
      >
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export default Search;
