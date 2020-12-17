import React, { useState } from 'react';

const Search = ({ value = "", onSearchChange, onSearch }) => {
    const [search, setSearch] = useState(value);

    const onInputChange = (e) => {
        onSearchChange(e.target.value);
        setSearch(e.target.value);
        console.log("search", e.target.value);
    }

    const onSearchClick = (e) => {
        onSearch(search);
    }

    return (
        <>
            <input className="search" placeholder="search for names" value={search} onChange={onInputChange} />
            <button onClick={onSearchClick}>Search</button>
        </>
    );
};

export default Search;