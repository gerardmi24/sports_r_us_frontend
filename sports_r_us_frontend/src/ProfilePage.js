import React from 'react';
import UserSportsList from './UserSportsList';
import FavSidebar from './FavSidebar'

export default function ProfilePage({profileClicked, userPage, deleteFav, allFavs, allSports, signedIn}) {

    const chooseFavs = allSports.map((sport => <FavSidebar key={sport.id} sport={sport} />))

    const renderFavs = allFavs.map((fav) => <UserSportsList userPage={userPage} key={fav.id} deleteFav={deleteFav} fav={fav} />)
console.log("Prof page allFavs", allFavs)
    return (
        <div className="Profile">
            {chooseFavs}
            {renderFavs}
        </div>
    )
}