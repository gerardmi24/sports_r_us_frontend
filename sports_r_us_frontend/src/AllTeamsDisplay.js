import React from 'react';

export default function AllTeamsDisplay({team, addFav, search}) {
    // console.log("Teams", team)

    function addTeam(e) {
        console.log("Add new favorite team", e)
        e.preventDefault()
        // const data = {}
        // addFav()
    }

    return (
        <div>
            <h3>{team.city} {team.team_name}
            <button className="addToFavBtn" onClick={addTeam}>Add to favorites</button> </h3>
            <p>Head Coach: {team.coach},</p>
            <p>Roster: {team.roster}</p>
        </div>
    )
}
