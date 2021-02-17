import React from 'react';
import AllTeamsDisplay from './AllTeamsDisplay';

export default function AllTeamsContainer({search, currentSport, allFavs, signedIn, favLink, currentUserName, addFav, allSports, searchSport, allTeams}) {
    
    const renderTeams = allTeams.map((team => 
        <AllTeamsDisplay key={team.id} allFavs={allFavs} favLink={favLink} currentUserName={currentUserName} addFav={addFav} team={team} />)
    )

    const showTeamsOfSport = searchSport.map((team => 
        <AllTeamsDisplay key={team.id} allFavs={allFavs} favLink={favLink} currentUserName={currentUserName} addFav={addFav} team={team} />)
    )

    return (
        <div>
            {showTeamsOfSport}
            {renderTeams}
        </div>
    )
}
