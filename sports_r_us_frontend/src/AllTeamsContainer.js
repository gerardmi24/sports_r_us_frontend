import React from 'react';
import AllTeamsDisplay from './AllTeamsDisplay';

export default function AllTeamsContainer({allFavs, signedIn, favLink, currentUserName, addFav, allSports, allTeams}) {
    
    const renderTeams = allTeams.map((team => 
    <AllTeamsDisplay key={team.id} allFavs={allFavs} favLink={favLink} currentUserName={currentUserName} addFav={addFav} team={team} />)
    )

    return (
        <div>
            {renderTeams}
        </div>
    )
}
