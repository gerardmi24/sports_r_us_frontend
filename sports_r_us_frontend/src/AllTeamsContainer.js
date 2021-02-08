import React from 'react';
import AllTeamsDisplay from './AllTeamsDisplay';

export default function AllTeamsContainer({search, allSports, allTeams}) {

    // console.log("All Teams", allTeams)
    const renderTeams = allTeams.map((team => 
    <AllTeamsDisplay key={team.id} search={search} team={team} />)
    )
    
    return (
        <div>
            {renderTeams}
        </div>
    )
}
