import React from 'react';
import ProfilePage from './ProfilePage';
import AllTeamsContainer from './AllTeamsContainer';

export default function DefaultHomePage({signedIn, profileClick, deleteFav, addFav, currentUser, search, allSports, allTeams, allFavs}) {
    console.log(signedIn)
    return (
        <div>
            <p>Im the default page</p>
            {signedIn === true ? 
            // <p>im true</p>
            <AllTeamsContainer search={search} addFav={addFav} allSports={allSports} allTeams={allTeams} />
            :
            <p>please sign in</p>
        }
        {/* {profileClick ?
            <AllTeamsContainer search={search} addFav={addFav} allSports={allSports} allTeams={allTeams} />
            :
            <ProfilePage allFavs={allFavs} deleteFav={deleteFav} allSports={allSports} />
        }  */}
        </div>
    )
}
