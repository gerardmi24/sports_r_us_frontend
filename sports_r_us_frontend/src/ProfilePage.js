import React from 'react';
import UserSportsList from './UserSportsList';
import FavSidebar from './FavSidebar'

export default function ProfilePage({deleteFav, allFavs, allSports}) {

    const chooseFavs = allSports.map((sport => <FavSidebar key={sport.id} sport={sport} />))

    const renderFavs = allFavs.map((fav => <UserSportsList key={fav.id} deleteFav={deleteFav} fav={fav} />))


    return (
        <div>
            {chooseFavs}
            {renderFavs}
        </div>
    )
}

// const renderTeams = allTeams.map((team => 
//     <AllTeamsDisplay key={team.id} search={search} team={team} />)
//     )