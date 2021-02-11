import React, {useState} from 'react';

export default function AllTeamsDisplay({favLink, currentUserName, team, addFav, search}) {
    const {id, username, password, email, age} = currentUserName[0]
    // const [allIds, setAllIds] = useState([id])
    // console.log("All Ids", allIds)
    // console.log("Current User", currentUserName)
    
    function addTeam(e) {
        e.preventDefault()
        // currentUserName.map((user) => setAllIds([...allIds, user.id]))
        const newFav = {
        user_id: id,
        team_id: team.id,
        // created_at: new Date().toUTCString()
    }
    fetch(favLink, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            accepts: "application/json"
        },
        body: JSON.stringify(newFav)
    })
    .then(r => r.json())
    .then(newFav => {
        if (newFav.message) {
            alert("This is already one of your Favorite Teams!")
        }
        else
        {addFav(newFav)}
    })
    }

    return (
        <div className="OuterCard">
        <card className="HomeCard">
            <h3>{team.city} {team.team_name}
            <button className="addToFavBtn" onClick={addTeam}>Add to favorites</button> </h3>
            {/* <p>Head Coach: {team.coach},</p>
            <p>Roster: {team.roster}</p> */}
        </card>
        </div>
    )
}
