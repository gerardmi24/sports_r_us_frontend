import React from 'react';
import ProfilePage from './ProfilePage';
import AllTeamsContainer from './AllTeamsContainer';

export default function DefaultHomePage({favLink, signedIn, profileClick, deleteFav, addFav, currentUserName, search, allSports, allTeams, allFavs}) {
    // console.log(signedIn)
    // console.log(currentUserName)
    return (
        <div>
            <p>Im the default page</p>
            {signedIn === true ? 
            // <p>im true</p>
            <AllTeamsContainer currentUserName={currentUserName} search={search} favLink={favLink} addFav={addFav} allSports={allSports} allTeams={allTeams} />
            :
            <p>Please sign in</p>
        }
        {/* {profileClick ?
            <AllTeamsContainer search={search} addFav={addFav} allSports={allSports} allTeams={allTeams} />
            :
            <ProfilePage allFavs={allFavs} deleteFav={deleteFav} allSports={allSports} />
        }  */}
        </div>
    )
}
