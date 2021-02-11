import React from 'react';
import AllTeamsDisplay from './AllTeamsDisplay';

export default function AllTeamsContainer({signedIn, favLink, currentUserName, search, addFav, allSports, allTeams}) {
    // console.log(currentUserName)
    // console.log("All Teams", allTeams)
    
    const renderTeams = allTeams.map((team => 
    <AllTeamsDisplay key={team.id} favLink={favLink} currentUserName={currentUserName} addFav={addFav} search={search} team={team} />)
    )

    return (
        <div>
            {/* {signedIn === true ? {renderTeams} : null } */}
            {renderTeams}
        </div>
    )
}
