import React from 'react';

export default function AllTeamsDisplay({team, search}) {
    // console.log("Teams", team)
    return (
        <div>
            <h3>{team.city} {team.team_name} </h3>
            <p>Head Coach: {team.coach},</p>
            <p>Roster: {team.roster}</p>
        </div>
    )
}
