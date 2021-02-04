import React from 'react'

export default function NavBar() {

    function search(e) {
        console.log("Search")
    }

    function login(e) {
        console.log("Login")
    }

    function profile(e) {
        console.log("Profile")
    }

    return (
        <div className="BtnDiv">
            Hellooo
            <button className="SearchBtn" onClick={search} > Search </button>
            <button className="LogBtn" onClick={login} > Login </button>
            <button className="ProfBtn" onClick={profile} > Profile </button>

        </div>
    )
}
