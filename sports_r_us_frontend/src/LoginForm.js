import React, {useState} from 'react'

export default function LoginForm({loggedIn, changeLog, signedIn, changedSignIn}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function changeUsername(e) {
        setUsername(e.target.value)
    }
    
    function changePW(e) {
        setPassword(e.target.value)
    }
    
    function handleSubmit(e){
        console.log("Logged In", loggedIn)
        e.preventDefault()
            if (password === ""){
                return alert("That is the incorrect password!")
            }
            if(username === "AnnieZ"){
                setUsername("")
                setPassword("")
                changeLog()
                return changedSignIn()
            }
            if (username === "EKim123"){
                setUsername("")
                setPassword("")
                changeLog()
                return changedSignIn()
            }
            if (username === "GMist24"){
                setUsername("")
                setPassword("")
                changeLog()
                return changedSignIn()
            }
            else{
                return alert("This User does not exist, please try again")
            }
    }

    return (
        <div>
            {loggedIn ? <button className="signOut_Btn" onClick={changeLog}>Log Out</button>
            :
            <form className="login-form" onSubmit={handleSubmit}>
                <label className="Username">Username:</label>
                <input type="text" value={username} onChange={changeUsername} name="username" />
                <label className="Pw">Password:</label>
                <input type="password" value={password} onChange={changePW} name="password" />
                <button className="signIn_Btn" onSubmit={handleSubmit}>{signedIn ? "Log Out" : "Log In"}</button>
            </form>
            }
        </div>
    )
}
