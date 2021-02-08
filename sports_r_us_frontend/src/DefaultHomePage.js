import React from 'react';
import ProfilePage from './ProfilePage';
import AllTeamsContainer from './AllTeamsContainer';

export default function DefaultHomePage({deleteFav, addFav, currentUser, search, allSports, allTeams, allFavs}) {

    return (
        <div>
            <AllTeamsContainer search={search} addFav={addFav} allSports={allSports} allTeams={allTeams} />
            <ProfilePage allFavs={allFavs} deleteFav={deleteFav} allSports={allSports} />
        </div>
    )
}
