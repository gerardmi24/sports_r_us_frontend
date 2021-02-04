import React from 'react';
import Search from './Search';

export default function NavBar({search, setSearch}) {

    function login(e) {
        console.log("Login")
    }

    function profile(e) {
        console.log("Profile")
    }

    return (
        <div className="BtnDiv">
            Nav Bar
            <Search setSearch={setSearch} search={search} />
            <button className="LogBtn" onClick={login} > Login </button>
            <button className="ProfBtn" onClick={profile} > Profile </button>

        </div>
    )
}
