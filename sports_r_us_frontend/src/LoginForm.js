import React, {useState} from 'react'

export default function LoginForm({signIn, currentUsername}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function changeUsername(e) {
        setUsername(e.target.value)
        // console.log(currentUsername)
    }
    
    function changePW(e) {
        setPassword(e.target.value)
    }
    
    function handleSubmit(e){
        e.preventDefault()
            if(username === "AnnieZ"){
                setUsername("")
                setPassword("")
                return signIn()
            }
            if (username === "EKim123"){
                setUsername("")
                setPassword("")
                return signIn()
            }
            if (username === "GMist24"){
                setUsername("")
                setPassword("")
                return signIn()
            }
            else{
                return alert("This User does not exist, please try again")
            }
    }

    return (
        <div>
            <form className="login-form" onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" value={username} onChange={changeUsername} name="username" />
                <label>Password:</label>
                <input type="password" value={password} onChange={changePW} name="password" />
                <button className="signIn_Btn" onSubmit={handleSubmit}>Sign In</button>
            </form>
        </div>
    )
}
