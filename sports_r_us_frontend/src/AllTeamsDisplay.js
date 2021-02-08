import React from 'react';

export default function AllTeamsDisplay({team, addFav, search}) {
    // console.log("Teams", team)

    function addTeam(e) {
        console.log("Add new favorite team")
        // addFav()
    }

    return (
        <div>
            <h3>{team.city} {team.team_name}
            <button onClick={addTeam}>Add to favorites</button> </h3>
            <p>Head Coach: {team.coach},</p>
            <p>Roster: {team.roster}</p>
        </div>
    )
}
