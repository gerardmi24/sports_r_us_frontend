import React, {useState} from 'react';
import Search from './Search';
import LoginForm from './LoginForm';

export default function NavBar({goToProfile, returnHome, changeSignIn, signedIn, currentUsername, search, setSearch}) {
    const [clicked, setClicked] = useState(true)
    // const [profileToggle, setProfileToggle] = useState(true)

    function login(e) {
        // console.log("Login Click", currentUsername)
        setClicked(!clicked)
    }

    // function toggleProf(e) {
    //     setProfileToggle(!profileToggle)
    // }

    return (
        <div className="BtnDiv">
            <Search setSearch={setSearch} search={search} />
            <button className="LogBtn" onClick={login} > {clicked ? "Log In" : "Actually, Don't"} </button>
            <button className="HomeBtn" onClick={returnHome} > Home </button>
            <button className="ProfBtn" onClick={goToProfile} > Profile </button>
            {clicked ? null : <LoginForm changedSignIn={changeSignIn} signedIn={signedIn} currentUsername={currentUsername}/>}
        </div>
    )
}
