import React from 'react';
import UserSportsList from './UserSportsList';
import FavSidebar from './FavSidebar'

export default function ProfilePage({profileClicked, userPage, deleteFav, allFavs, allSports, signedIn}) {

    const chooseFavs = allSports.map((sport => <FavSidebar key={sport.id} sport={sport} />))

    // function chooseFavs() {
    //     return allSports.map((sport) => <FavSidebar key={sport.id} sport={sport} />)
    // }

    const renderFavs = allFavs.map((fav) => <UserSportsList key={fav.team.id} deleteFav={deleteFav} fav={fav} />)

    // function renderFavs() {
    //     return allFavs.map((fav) => <UserSportsList key={fav.team.id} deleteFav={deleteFav} fav={fav} />)
    // }
    // console.log("All Favs", allFavs)

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

// const renderTeams = allTeams.map((team => 
//     <AllTeamsDisplay key={team.id} search={search} team={team} />)
//     )