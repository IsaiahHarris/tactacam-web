import React from 'react';
import './Search.scss';

const Search = ({ setSearchValue, searchValue, triggerSearch }) => {
    return (
        <div className="search-container">
            <input placeholder="Type to search..." type="text" className="search-input" onChange={(e) => setSearchValue(e.target.value)} value={searchValue} />
            <button className="search-button" onClick={()=> triggerSearch(searchValue)}><i class="fa fa-search"></i></button>
        </div>
    )
}

export default Search;