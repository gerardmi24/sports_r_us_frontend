import React from 'react';
import UserSportsList from './UserSportsList';
import FavSidebar from './FavSidebar'

export default function ProfilePage({profileClicked, userPage, deleteFav, allFavs, allSports, signedIn}) {

    const chooseFavs = allSports.map((sport => <FavSidebar key={sport.id} sport={sport} />))

    const renderFavs = allFavs.map((fav) => <UserSportsList userPage={userPage} key={fav.team.id} deleteFav={deleteFav} fav={fav} />)

    return (
        <div className="Profile">
            {/* {signedIn ? {chooseFavs} && {renderFavs}
            :
            null
            } */}
            {chooseFavs}
            {renderFavs}
            {/* <UserSportsList allFavs={allFavs} deleteFav={deleteFav} /> */}
        </div>
    )
}