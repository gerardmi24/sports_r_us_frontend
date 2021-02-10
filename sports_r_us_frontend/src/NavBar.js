import React, {useState} from 'react';
import Search from './Search';
import LoginForm from './LoginForm';

export default function NavBar({profile, changeSignIn, signedIn, currentUsername, search, setSearch}) {
    const [clicked, setClicked] = useState("false")

    function login(e) {
        // console.log("Login Click", currentUsername)
        setClicked(!clicked)
    }

    return (
        <div className="BtnDiv">
            <Search setSearch={setSearch} search={search} />
            <button className="LogBtn" onClick={login} > {clicked ? "Log In" : "Actually, Don't"} </button>
            <button className="ProfBtn" onClick={profile} > Profile </button>
            {clicked ? null : <LoginForm changedSignIn={changeSignIn} signedIn={signedIn} currentUsername={currentUsername}/>}
            
        </div>
    )
}
