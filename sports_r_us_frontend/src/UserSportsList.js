import React from 'react';
import CommentsForm from './CommentsForm';

export default function UserSportsList({allFavs, deleteFav}) {
    console.log("Favs", allFavs[1].team)
    function removeFromFav(e){
        console.log("Delete Fav", deleteFav)
        // deleteFav()
    }

    return (
        <div>
            <div>
            <p> {allFavs[1].team.city} {allFavs[1].team.team_name}</p>
            <p> Coach: {allFavs[1].team.coach} </p>
            <p> Roster: {allFavs[1].team.roster} </p>
            <button className="DelBtn" onClick={removeFromFav}>Delete Team</button>
            </div>
            <div>
            <p> {allFavs[0].team.city} {allFavs[0].team.team_name}</p>
            <p> Coach: {allFavs[0].team.coach} </p>
            <p> Roster: {allFavs[0].team.roster} </p>
            <button className="DelBtn" onClick={removeFromFav}>Delete Team</button>
            </div>
            <CommentsForm />
        </div>
    )
}
