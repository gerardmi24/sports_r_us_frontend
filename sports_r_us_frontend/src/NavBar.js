import React, {useState} from 'react';
import Search from './Search';
import LoginForm from './LoginForm';

export default function NavBar({profile, signIn, currentUsername, search, setSearch}) {
    const [clicked, setClicked] = useState("false")

    function login(e) {
        // console.log("Login Click", currentUsername)
        setClicked(!clicked)
    }

    return (
        <div className="BtnDiv">
            Nav Bar
            <Search setSearch={setSearch} search={search} />
            <button className="LogBtn" onClick={login} > {clicked ? "Login" : "Welcome!"} </button>
            <button className="ProfBtn" onClick={profile} > Profile </button>
            {clicked ? null : <LoginForm signIn={signIn} currentUsername={currentUsername}/>}
            
        </div>
    )
}
