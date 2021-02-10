import React from 'react';

export default function Search({search, setSearch}) {
    return (
        <div className="SearchBar">
        <input
            type="text"
            placeholder={"Find your favorite sport"}
            value={search}
            onChange={(e) => {
            setSearch(e.target.value)
        }
    }
        />
        </div>
    )
}
