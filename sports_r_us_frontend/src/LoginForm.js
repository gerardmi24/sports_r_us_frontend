import React, {useState} from 'react'

export default function LoginForm({currentUsername}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    console.log(currentUsername.username)

    function handleSubmit(e){
        e.preventDefault()
        if(currentUsername !== "AnnieZ" || currentUsername !== "EKim123" || currentUsername !== "GMist24"){
            return alert("This User does not exist, please try again")
        }
        else{
            setUsername("")
            setPassword("")
        }
        // console.log("Login", name, password)
    }

    function changeUsername(e) {
        setUsername(e.target.value)
    }

    function changePW(e) {
        setPassword(e.target.value)
    }
    
    return (
        <div>
            <form className="login-form" onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" value={username} onChange={changeUsername} name="username" />
                <label>Password:</label>
                <input type="password" value={password} onChange={changePW} name="password" />
                <button onSubmit={handleSubmit}>Sign In</button>
            </form>
        </div>
    )
}
