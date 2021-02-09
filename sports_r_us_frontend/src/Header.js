import React from 'react';
import NavBar from './NavBar';

export default function Header({profile, signIn, currentUsername, teams, search, setSearch}) {
    return (
        <div>
            <h2 className="Header">Sports R Us</h2>
            <NavBar profile={profile} signIn={signIn} currentUsername={currentUsername} search={search} setSearch={setSearch}/>
        </div>
    )
}
