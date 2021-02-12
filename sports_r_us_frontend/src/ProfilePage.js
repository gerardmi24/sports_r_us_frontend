import React from 'react';
import UserSportsList from './UserSportsList';
import FavSidebar from './FavSidebar'

export default function ProfilePage({profileClicked, editRoster, userPage, deleteFav, allFavs, allSports, signedIn}) {

    const chooseFavs = allSports.map((sport => <FavSidebar key={sport.id} sport={sport} />))

    const renderFavs = allFavs.map((fav) => <UserSportsList id={fav.team.id} userPage={userPage} editRoster={editRoster} team={fav.team} roster={fav.team.roster} key={fav.id} deleteFav={deleteFav} fav={fav} />)

    return (
        <div className="Profile">
            {chooseFavs}
            {renderFavs}
        </div>
    )
}