import React from 'react';
import ProfilePage from './ProfilePage';
import AllTeamsContainer from './AllTeamsContainer';

export default function DefaultHomePage({favLink, signedIn, profileClick, deleteFav, addFav, currentUserName, search, allSports, allTeams, allFavs}) {
    console.log("Def Home Sign In", signedIn)
    // console.log(currentUserName)
    return (
        <div>
            {signedIn === true ? 
            // <p>im true</p>
            <AllTeamsContainer currentUserName={currentUserName} search={search} favLink={favLink} addFav={addFav} allSports={allSports} allTeams={allTeams} />
            :
            <p>Please sign in</p>
            }
            {profileClick ? <ProfilePage allFavs={allFavs} deleteFav={deleteFav} allSports={allSports}/> : null}
        </div>
    )
}
