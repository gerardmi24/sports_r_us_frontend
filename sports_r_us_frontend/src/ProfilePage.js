import React from 'react';
import UserSportsList from './UserSportsList';
import FavSidebar from './FavSidebar'

export default function ProfilePage({deleteFav, allFavs, allSports}) {

    const chooseFavs = allSports.map((sport => <FavSidebar key={sport.id} sport={sport} />))

    const renderFavs = allFavs.map((fav => <UserSportsList key={fav.team.id} deleteFav={deleteFav} fav={fav} />))

    // console.log("All Favs", allFavs)

    return (
        <div className="Profile">
            {chooseFavs}
            {/* <UserSportsList allFavs={allFavs} deleteFav={deleteFav} /> */}
            {renderFavs}
        </div>
    )
}

// const renderTeams = allTeams.map((team => 
//     <AllTeamsDisplay key={team.id} search={search} team={team} />)
//     )