import React from 'react';
import NavBar from './NavBar';

export default function Header({search, setSearch}) {
    return (
        <div>
            <h2 className="Header">Sports R Us</h2>
            <NavBar search={search} setSearch={setSearch}/>
        </div>
    )
}
