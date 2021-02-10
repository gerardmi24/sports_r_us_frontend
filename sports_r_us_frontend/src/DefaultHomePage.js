import React from 'react';
import ProfilePage from './ProfilePage';
import AllTeamsContainer from './AllTeamsContainer';

export default function DefaultHomePage({goHomePage, favLink, signedIn, profileClicked, deleteFav, addFav, currentUserName, search, allSports, allTeams, allFavs}) {
    
    return (
        <div className="HomePage">
            {signedIn === true ? 
            <AllTeamsContainer currentUserName={currentUserName} search={search} favLink={favLink} addFav={addFav} allSports={allSports} allTeams={allTeams} />
            :
            // <p className="Plz" >Please sign in</p>
            null
            }
            {profileClicked === true ? <ProfilePage allFavs={allFavs} deleteFav={deleteFav} allSports={allSports} />
            :
            null
            }
            {goHomePage === true ? <AllTeamsContainer currentUserName={currentUserName} search={search} favLink={favLink} addFav={addFav} allSports={allSports} allTeams={allTeams} />
            :
            null
            }
        </div>
    )
}
