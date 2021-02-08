import React from 'react';
import ProfilePage from './ProfilePage';
import AllTeamsContainer from './AllTeamsContainer';

export default function DefaultHomePage({currentUser, search, allSports, allTeams, allFavs}) {

    return (
        <div>
            <AllTeamsContainer search={search} allSports={allSports} allTeams={allTeams} />
            <ProfilePage allFavs={allFavs} allTeams={allTeams} />
        </div>
    )
}
