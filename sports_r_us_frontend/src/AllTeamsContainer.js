import React from 'react';
import AllTeamsDisplay from './AllTeamsDisplay';

export default function AllTeamsContainer({search, addFav, allSports, allTeams}) {

    // console.log("All Teams", allTeams)
    const renderTeams = allTeams.map((team => 
    <AllTeamsDisplay key={team.id} addFav={addFav} search={search} team={team} />)
    )
    
    return (
        <div>
            {renderTeams}
        </div>
    )
}
