import React, { useState } from 'react';

const Search = ({ value, onHighlight, onFilter }) => {
    const [search, setSearch] = useState(value);

    const onInputChange = (e) => {
        onHighlight(e.target.value);
        setSearch(e.target.value);
        console.log("search", e.target.value);
    }

    const onSearchClick = (e) => {
        onFilter(search);
        onHighlight("");
        //setSearch("");
    }

    return (
        <>
            <input className="search" placeholder="search for names" value={search} onChange={onInputChange} />
            <button onClick={onSearchClick}>Search</button>
        </>
    );
};

export default Search;