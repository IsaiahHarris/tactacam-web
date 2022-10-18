import React, { useEffect, useRef } from "react";
import "./Search.scss";

const Search = ({ setSearchValue, searchValue, triggerSearch }) => {
  const inputRef = useRef(null);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <div
      className="search-container"
      style={{
        top: scrollDirection === "down" ? -300 : 0,
      }}
    >
      <input
        placeholder="Type to search..."
        type="text"
        className="search-input"
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.keyCode === 13) triggerSearch(searchValue);
        }}
        value={searchValue}
        ref={inputRef}
      />
      <button
        className="search-button"
        onClick={() => triggerSearch(searchValue)}
      >
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export default Search;

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = React.useState(null);

  React.useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}
