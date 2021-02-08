import React from 'react';
import UserSportsList from './UserSportsList';
import FavSidebar from './FavSidebar'

export default function ProfilePage({allFavs, allTeams}) {

    const chooseFavs = allTeams.map((team => <FavSidebar key={team.id} team={team} />))

    const renderFavs = allFavs.map((fav => <UserSportsList key={fav.id} fav={fav} />))


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