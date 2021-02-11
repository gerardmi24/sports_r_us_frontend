import React from 'react';
import UserSportsList from './UserSportsList';
import FavSidebar from './FavSidebar'

export default function ProfilePage({deleteFav, allFavs, allSports, signedIn}) {

    const chooseFavs = allSports.map((sport => <FavSidebar key={sport.id} sport={sport} />))

    const renderFavs = allFavs.map((fav => <UserSportsList key={fav.team.id} deleteFav={deleteFav} fav={fav} />))

    // console.log("All Favs", allFavs)

    return (
        <div className="Profile">
            {/* {signedIn === true ? {chooseFavs} && {renderFavs}
            :
            alert("You are not logged in yet!")
            
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