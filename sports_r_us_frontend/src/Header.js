import React from 'react';
import NavBar from './NavBar';

export default function Header({currentUsername, teams, search, setSearch}) {
    return (
        <div>
            <h2 className="Header">Sports R Us</h2>
            <NavBar currentUsername={currentUsername} search={search} setSearch={setSearch}/>
        </div>
    )
}
