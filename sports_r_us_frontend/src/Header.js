import React from 'react';
import NavBar from './NavBar';

export default function Header({goToProfile, returnHome, changeSignIn, signedIn, currentUsername, teams, search, setSearch}) {
    return (
        <div>
            <h2 className="Header">Sports R Us</h2>
            {/* <NavBar goToProfile={goToProfile} returnHome={returnHome} changeSignIn={changeSignIn} signedIn={signedIn} currentUsername={currentUsername} search={search} setSearch={setSearch}/> */}
        </div>
    )
}
