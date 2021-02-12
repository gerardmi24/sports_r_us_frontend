import React from 'react';

export default function Search({search, setSearch}) {
    return (
        <div className="SearchBar">
        <input
            type="text"
            placeholder={"Search by City!"}
            value={search}
            onChange={(e) => {
            setSearch(e.target.value)
        }
    }
        />
        </div>
    )
}
